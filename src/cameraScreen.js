import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';
import { Camera } from 'expo-camera';
import * as Permissions from 'expo-permissions';
import * as ImageManipulator from 'expo-image-manipulator';

export default class cameraScreen extends Component {
  constructor() {
    super();
    w = Dimensions.get("window").width;
    h = Dimensions.get("window").height;
  }
  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
    img: null
  };

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  capture = async function() {
    if (this.camera) {
        let photo = await this.camera.takePictureAsync();
        this.setState({ img: photo});
        let resizedPhoto = await ImageManipulator.manipulateAsync(
            photo.uri,
            [{ crop : {
              originX: 0.1 * photo.width,
              originY: 0.5 * photo.height - 0.25 * photo.width, 
              width: 0.8 * photo.width, 
              height: 0.5 * photo.width
            } }]
        );
        this.setState({ img: resizedPhoto});
        this.props.navigation.navigate("preview", 
        {
          data: this.state.img, 
          name: this.props.navigation.getParam('name'),
          birth: this.props.navigation.getParam('birth')
        });
    }
  };
  
  render(){
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>설정에서 카메라 접근 권한을 부여해주세요.</Text>;
    } else {
      return (
        <View style={{ flex: 1 }}>
          <Camera 
          style={{ flex:1 }} 
          type={this.state.type}
          ref={ref => {
            this.camera = ref;}}
          >
            <View
              style={{
                flex: 1,
                backgroundColor: 'transparent',
                flexDirection: 'column',
              }}>
                <View style={{flex:2}}>
                  <View style={{flex:1, justifyContent:'flex-end', alignItems:'center'}}>
                    <Text style={{color:'red',fontSize:15}}>주민등록증을 아래 테두리에 맞춰주세요.</Text>
                  </View>
                </View>
                <View style={{flex:5, justifyContent:'center', alignItems:'center'}}>
                  <View style={{width: w*0.8, height: 0.505*w, borderColor: 'red', borderWidth: 3}}/>
                </View>
                <View style={{flex:2, alignItems:'center', justifyContent:'flex-end'}}>
                  <TouchableOpacity onPress={this.capture.bind(this)}>
                    <Image style={{
                      marginBottom: '10%',
                      width: 100,
                      height: 100,
                    }} source={require('../img/capture.png')}/>
                  </TouchableOpacity>
                </View>
            </View>
          </Camera>
        </View>
        );
      }
    }
  }
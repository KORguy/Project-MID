import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';
import { Camera } from 'expo-camera';
import * as Permissions from 'expo-permissions';
import * as ImageManipulator from 'expo-image-manipulator';

export default class cameraScreen extends Component {

    state = {
      hasCameraPermission: null,
      type: Camera.Constants.Type.back,
      w: Dimensions.get("window").width,
      h: Dimensions.get("window").height,
      img: null
    };

    async componentDidMount() {
      const { status } = await Permissions.askAsync(Permissions.CAMERA);
      this.setState({ hasCameraPermission: status === 'granted' });
    }

    // capture = async () => {
    //   if(this.camera){
    //     this.camera.takePictureAsync().then( (data) => this.setState({img:data}) )
    //     .then( ( ) => 
    //       {this.props.navigation.navigate("preview", {data: this.state.img})}
    //     )
    //   };
    // }


    capture = async function() {
      if (this.camera) {
          let photo = await this.camera.takePictureAsync();
          console.log(photo);
          let resizedPhoto = await ImageManipulator.manipulateAsync(
              photo.uri,
              [{ crop : {
                originX: 0, 
                originY: 0, 
                width: 0.8 * this.state.w, 
                height: 0.5 * this.state.w
              } }]
          );
          this.setState({ img: resizedPhoto});
          console.log(resizedPhoto);
          this.props.navigation.navigate("preview", {data: this.state.img});
      }
  };
  
    render(){
      const { hasCameraPermission } = this.state;
      var windowheight = Dimensions.get('window').height;
      var windowwidth = Dimensions.get('window').width;
      if (hasCameraPermission === null) {
        return <View />;
      } else if (hasCameraPermission === false) {
        return <Text>설정에서 카메라 접근 권한을 부여해주세요.</Text>;
      } else {
        return (
          <View style={{ flex: 1 }}>
            <Camera 
            style={{ flex: 1 }} 
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
                    <View style={{width: windowwidth*0.8, height: 0.505*windowwidth, borderColor: 'red', borderWidth: 3}}/>
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
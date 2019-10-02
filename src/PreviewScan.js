import {View, ImageBackground, Image, Dimensions, Platform } from 'react-native';
import { Button } from 'react-native-elements';
import React, {Component} from 'react';


export default class PreviewScan extends Component {

    state = {
        data: this.props.navigation.getParam('data'),
        windowheight: Dimensions.get('window').height,
        windowwidth: Dimensions.get('window').width,
        name: this.props.navigation.getParam('name'),
        birth: this.props.navigation.getParam('birth')
    };

    render(){
        return (
            <View style={{flex:1, backgroundColor: 'ivory'}}>
                <View style={{ flex:9, justifyContent:'center', alignContent:'center', alignSelf:'center' }}>
                    <Image style={{borderColor:'red', borderWidth: 3, width:0.8*this.state.windowwidth, height:this.state.windowwidth*0.5}} source={{ uri: this.state.data.uri }}/>
                </View>
                <View style={{ flex:1, flexDirection:'row' }}>
                    <View style={{flex:1}}><Button type='outline' title="뒤로" onPress={ ()=> {this.props.navigation.navigate("cam")}}/></View>
                    <View style={{flex:1}}><Button type='outline' title="사용" /></View>
                </View>
            </View>
        );
    }

  }
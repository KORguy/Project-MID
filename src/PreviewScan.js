import {View, ImageBackground, Image, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';
import React, {Component} from 'react';


export default class PreviewScan extends Component {  
    state = {
        data: this.props.navigation.getParam('data'),
        windowheight: Dimensions.get('window').height,
        windowwidth: Dimensions.get('window').width,
    };
    
    render(){
        return (
            // <ImageBackground source={{ uri: this.state.data.uri }} style = {{ width:this.state.windowwidth, height: this.state.windowheight }}>
            //     <View style={{ flex: 1 }}>
            //         <View style={{ flex:9 }}/>
            //         <View style={{ flex:1, flexDirection:'row' }}>
            //             <View style={{flex:1}}><Button type='outline' title="뒤로" onPress={ ()=>{this.props.navigation.navigate("cam")} }/></View>
            //             <View style={{flex:1}}><Button type='outline' title="사용" onPress={ this._cut()}/></View>
            //         </View>
            //     </View>
            // </ImageBackground>
            <View style={{flex:1, backgroundColor: 'ivory'}}>
                <View style={{ flex:9, justifyContent:'center', alignContent:'center', alignSelf:'center' }}>
                    <Image style={{borderColor:'red', borderWidth: 3}} source={{ uri: this.state.data.uri, width: 0.8*this.state.windowwidth, height: 0.5*this.state.windowwidth }}/>
                </View>
                <View style={{ flex:1, flexDirection:'row' }}>
                    <View style={{flex:1}}><Button type='outline' title="뒤로" onPress={ ()=>{this.props.navigation.navigate("cam")} }/></View>
                    <View style={{flex:1}}><Button type='outline' title="사용" /></View>
                </View>
            </View>
        );
    }

  }
import { Text, View, ActivityIndicator} from 'react-native';
import { Button } from 'react-native-elements';
import styles from './stylesheet';
import React, { Component } from 'react';
import * as Font from 'expo-font';

export default class HomeScreen extends Component {

  state = {
    dataExist: false,
    loading: false,
    fontloaded: false,
  };

  async componentDidMount() {
    await Font.loadAsync({
      'Sitka-Banner': require('../assets/fonts/Sitka-Banner.ttf'),
    });
    this.setState({fontloaded:true});
  };

  // async componentDidMount() {
  //   try {
  //     // Code for getting data from local stroage
  //   }
  // };

  render() {
    while (this.state.loading){
      return (
        <View style= {styles.loadingscreen}>
          {
            this.state.fontloaded ? (
              <View style={{flex:1, alignContent:'center', justifyContent:'center'}}>
                <View style = {styles.circle}>
                  <ActivityIndicator size="small" color="gray" style={{posiiton:'absolute', top: 180}}/>
                  <Text style={{position:'absolute', bottom:30, fontStyle:'italic'}}>KHJP</Text>
                </View>
                <Text style={{fontFamily:"Sitka-Banner", fontSize: 50, letterSpacing: 10}}>MOBILE I.D.</Text>
                <Text style={{letterSpacing: 10, fontSize:15}}>모바일 신분증</Text>
              </View>
            ) : null
          }
        </View>
      )
    }
    if (this.state.dataExist == false){
      return (
      <View style={styles.mainContainer}>
        <View style={{ flex: 1.5, backgroundColor: "steelblue" }}>
          <View style={{ flex: 1, justifyContent: 'flex-end' }}>
            <Text style={styles.title}>내 모바일 민증</Text>
          </View>
        </View>
        <View style={{ flex: 6, backgroundColor: 'ivory' }}>
          <View style={{ flex: 1, justifyContent: 'center' }}>
            <Text style={styles.body}>현재 등록된 민증이 없습니다.</Text>
            <Text style={styles.body}>아래 버튼을 통해 새로운 민증을 추가해 주세요.</Text>
          </View>
        </View>
        <View style={{ flex: 2.5, backgroundColor: 'ivory' }}>
          <View style={{ flex: 1, alignItems: 'center' }}>
            <Button large title="등 록" type='outline' containerStyle={{ width: '40%', height: 50 }} onPress={() => this.props.navigation.navigate('datainput')} />
          </View>
        </View>
      </View>
      );
    } else {
      return(
        <View style= {styles.mainContainer}>
          <Text>Loaded Data page</Text>
        </View>
      ) 
    }
  }
}

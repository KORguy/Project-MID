import {Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import styles from './stylesheet';
import React, {Component} from 'react';

export default class urHomeScreen extends Component {
    render(){
      return (
        <View style={styles.mainContainer}>
          <View style={{flex:1.5, backgroundColor:"steelblue"}}>
            <View style={{flex:1, justifyContent:'flex-end'}}>
              <Text style={styles.title}>내 모바일 민증</Text>
            </View>
          </View>
          <View style={{flex:6, backgroundColor:'ivory'}}>
            <View style={{flex:1, justifyContent:'center'}}>
              <Text style={styles.body}>현재 등록된 민증이 없습니다.</Text>
              <Text style={styles.body}>아래 버튼을 통해 새로운 민증을 추가해 주세요.</Text>
            </View>
          </View>
          <View style={{flex:2.5, backgroundColor:'ivory'}}>
            <View style={{flex:1, alignItems:'center'}}>
              <Button
              large 
              title="등 록"
              type='outline'
              containerStyle={{width:'40%', height:50}}
              onPress={()=>this.props.navigation.navigate('alert')}
              />
            </View>
          </View>
        </View>
      );
    }
  }
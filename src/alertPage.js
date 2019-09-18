import { Text, View, Image, ScrollView } from 'react-native';
import { Button } from 'react-native-elements';
import React, {Component} from 'react';
import styles from './stylesheet';

export default class alertPage extends Component {
    render(){
        return (
            <View style={{flex:1, backgroundColor:'ivory'}}>
                <View style={{flex:9, marginLeft:'15%', marginRight:'15%', marginTop:'20%'}}>
                    <View style={{flex:1}}>
                        <Text>{'\u2022'} 각종 법류 조항????????</Text>
                        <Text>{'\u2022'} 주의 사항 등등등</Text>
                        <Text/>
                        <Text style={{fontWeight:'bold', fontSize:25, color:'red'}}> 사진 유의 사항 </Text>
                        <ScrollView style={{flex:1}}>
                            <Image style={styles.alertImg} source={require('../img/x_example.jpg')} resizeMode="contain"/>
                            <Image style={styles.alertImg} source={require('../img/x_example.jpg')} resizeMode="contain"/>
                            <Image style={styles.alertImg} source={require('../img/o_example.jpg')} resizeMode="contain"/>
                        </ScrollView>
                    </View>
                </View>
                <View style={{flex:1, backgroundColor:'ivory'}}>
                    <Button type='outline' title="다 음" onPress={()=>{this.props.navigation.navigate('cam', {name: this.props.navigation.getParam('name'), birth:this.props.navigation.getParam('birth')})}}/>
                </View>
            </View>
        );
    }
}

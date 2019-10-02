import React, {Component} from 'react';
import {View, Text, TextInput} from 'react-native';
import {Button} from 'react-native-elements';
import styles from './stylesheet';


export default class InputPage extends Component {
    state = {
        name : null,
        birth : null,
        correct: false,
        incorrect_name: false,
        incorrect_birth: false,
    }

    nameInput = (text) => {
        this.setState({
            name: text
        });
        if (text.length < 2 ){
            this.setState({incorrect_name: true});
            this.setState({correct:false});

        } else if (text.length > 1){
            this.setState({incorrect_name:false});
            if (!this.state.incorrect_birth){
                this.setState({correct:true});
            }
        };
    }

    birthInput = (text) => {
        this.setState({
            birth : text
        });
        if (text.length==6){
            if ((Number(text.slice(2,4)) < 13) && (Number(text.slice(-2,-1)) < 32)){
                this.setState({incorrect_birth: false});
                if (!this.state.incorrect_name){
                    this.setState({correct:true});
                };
            }
        } else {
            this.setState({incorrect_birth: true});
            this.setState({correct:false});
        };
    }

    render(){
        return(
            <View style={styles.mainContainer}>
                <View style={{ flex: 1.5, backgroundColor: "steelblue" }}>
                    <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                        <Text style={styles.title}>내 모바일 민증</Text>
                    </View>
                </View>
                <View style={{ flex: 6, backgroundColor: 'ivory' }}>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems:'center' }}>
                        <TextInput style={this.state.incorrect_name ? styles.xinputbox: styles.inputbox} placeholder="이 름" autoCorrect={false} maxLength={6} 
                        value={this.state.name} onChangeText={(text)=>this.nameInput(text)}/>
                        <TextInput style={this.state.incorrect_birth ? styles.xinputbox: styles.inputbox} placeholder="생년월일 (xxxxxx)" autoCorrect={false} keyboardType='numeric' maxLength={6} 
                        value={this.state.birth} onChangeText={(text)=>this.birthInput(text)}/>
                    </View>
                </View>
                <View style={{ flex: 2.5, backgroundColor: 'ivory' }}>
                    <View style={{ flex: 1, alignItems: 'center' }}>
                        <Button large title="다 음" type='outline' containerStyle={{ width: '40%', height: 50 }} onPress={() => this.props.navigation.navigate('alert', {name: this.state.name, birth: this.state.birth})} disabled={!this.state.correct}/>
                    </View>
                </View>
            </View>
        );
    }
}
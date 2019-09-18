import { StyleSheet, Dimensions } from 'react-native';

let screenheight = Dimensions.get("screen").height;
let screenwidth = Dimensions.get("screen").width;

export default StyleSheet.create({
    mainContainer:{
      flex: 1
    },
    title: {
      fontWeight: 'bold',
      fontSize: 30,
      textAlign: 'center',
      letterSpacing: 3,
      marginBottom: 10
    },
    body: {
      fontSize: 20,
      textAlign: 'center',
      paddingLeft: '15%',
      paddingRight: '15%',
      letterSpacing: 2,
      lineHeight: 30
    },
    alertImg: {
      alignSelf:'center',
      width: 0.8 * screenwidth,
      height: 0.5 * screenwidth
    },
    inputbox: {
      width: "60%",
      height: "12%",
      borderColor: 'steelblue',
      borderWidth: 10,
      borderRadius: 10,
      marginVertical: 10,
      textAlign: 'center'
    },
    xinputbox: {
      width: "60%",
      height: "12%",
      borderColor: 'red',
      borderWidth: 10,
      borderRadius: 10,
      marginVertical: 10,
      textAlign: 'center'
    },
  });
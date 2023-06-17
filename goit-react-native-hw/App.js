import { StatusBar  } from 'expo-status-bar';
import { StyleSheet, ImageBackground, View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import React, { useState } from "react";
import RegistrationScreen from './Screens/RegistrationScreen/RegistrationScreen';
import LoginScreen from './Screens/LoginScreen/LoginScreen';

const backImage = require('./Source/PhotoBG.png');

export default function App() {

   const [activeScreen, setActiveScreen] = useState(0);
   const changeScreenFunc = (value) => { setActiveScreen (value) }

  return (
  <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={styles.mainContainer}>
      <ImageBackground source={backImage} style={styles.backImg} >
        { activeScreen=== 0 ? <LoginScreen changeScreen={ changeScreenFunc }/> :
         <RegistrationScreen changeScreen={ changeScreenFunc }/>}
        </ImageBackground>
        <StatusBar style="auto" />  
    </View>
  </TouchableWithoutFeedback>);
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
  }, 
  backImg: {
    flex: 1,
    justifyContent: 'flex-end',
    width: '100%'
  },
});
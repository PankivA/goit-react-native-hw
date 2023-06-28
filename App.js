import 'react-native-gesture-handler';
import {StyleSheet, View } from 'react-native';
import RegistrationScreen from './src/Screens/RegistrationScreen';
// import LoginScreen from './src/Screens/LoginScreen';
import { useFonts } from "expo-font";

export default function App() {
  const [fontsLoaded] = useFonts({
    'Roboto-Regular': require('./src/fonts/Roboto-Regular.ttf'),
    'Roboto-Bold': require('./src/fonts/Roboto-Bold.ttf'),
    'Roboto-Medium': require('./src/fonts/Roboto-Medium.ttf'),
  });
  if (!fontsLoaded) {
    return null;
  }

  return (
      <View style={styles.page}>
        {/* <LoginScreen /> */}
        <RegistrationScreen />
      </View>
  );
}


  const styles = StyleSheet.create({
    page: {
      flex: 1,
      position: 'relative'
    },
  });
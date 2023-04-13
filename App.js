import React from 'react';
import {Text, View, StyleSheet, SafeAreaView} from 'react-native';
import SignIn from './SignIn'
import Signup from './Signup';
import Profile from './Profile';
import Tabs from './navigation/tabs';
import {NavigationContainer} from '@react-navigation/native';
import NativeStackView from '@react-navigation/native-stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator  >
      
        <Stack.Screen name="profile" component={Profile}  style={styles.profil}  options={ {headerShown: false}} />
        <Stack.Screen name="Tabs" component={Tabs} options={ {headerShown: false}}  />
                   
         </Stack.Navigator>
 </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  root:{
    flex: 1, 
    backgroundColor: 'black',
  },
  profil:{
    backgroundColor: 'white'

  }
});

export default App;
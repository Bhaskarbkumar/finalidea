import React from 'react';
import {Text, View, StyleSheet, SafeAreaView} from 'react-native';
import SignIn from './SignIn'
import Signup from './Signup';
import Profile from './Profile';
import Tabs from './navigation/tabs';
import {NavigationContainer} from '@react-navigation/native';
import NativeStackView from '@react-navigation/native-stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchPage from './navigation/SearchPage';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName='SignIn'  >
       
        <Stack.Screen name="SignIn" component={SignIn}  style={styles.profil}  options={ {headerShown: false}} />
        <Stack.Screen name="Signup" component={Signup} options={ {headerShown: false}}  />
        <Stack.Screen name="Profile" component={Profile}  style={styles.profil}  options={ {headerShown: false}} />
        <Stack.Screen name="Tabs" component={Tabs} options={ {headerShown: false}}  />
         <Stack.Screen name="SearchPage" component={SearchPage} />
                   
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
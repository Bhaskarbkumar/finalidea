import React from 'react';
import {Text, View, StyleSheet, SafeAreaView} from 'react-native';
import SignIn from './SignIn'
import Signup from './Signup';
import Profile from './Profile';
import Tabs from './navigation/tabs';
//import SearchBar from './Searchindex';
import SearchBar from './Searchbar';
import {NavigationContainer} from '@react-navigation/native';
import NativeStackView from '@react-navigation/native-stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
       <Stack.Navigator>
            <Stack.Screen name="SignIn"  component={SignIn} style={styles.profil} />
            <Stack.Screen name="Signup"  component={Signup} />
            <Stack.Screen name="Profile" component={Profile} />            
            </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  root:{
    flex: 1, 
    backgroundColor: 'white',
  },
  profil:{
    backgroundColor: 'white'

  }
});

export default App;
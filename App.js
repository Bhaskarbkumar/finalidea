import React from 'react';
import {Text, View, StyleSheet, SafeAreaView} from 'react-native';
import Signin from './SignIn'
import Signup from './Signup';
import Navigation from './navigation/index';

const YourApp = () => {
  return (
    <SafeAreaView style={StyleSheet.root}>
      <Navigation />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root:{
    flex: 1, 
    backgroundColor: '#e0ffff',
  },
});

export default YourApp;
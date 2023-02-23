import React from 'react';
import {Text, View, StyleSheet, SafeAreaView} from 'react-native';
import SignIn from './SignIn'
import Signup from './Signup';
import Navi from './navigation';
import Profile from './Profile';


const YourApp = () => {
  return (
    <SafeAreaView style={styles.root}>
      <SignIn style={styles.profil} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root:{
    flex: 1, 
    backgroundColor: 'grey',
  },
  profil:{
    backgroundColor: 'black'

  }
});

export default YourApp;
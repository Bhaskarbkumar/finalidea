import React from 'react';
import {Text, View, StyleSheet, SafeAreaView} from 'react-native';
import SignIn from './SignIn'
import Signup from './Signup';
import Navi from './navigation/ind';
import Profile from './Profile';
import Tabs from './navigation/tabs';
//import SearchBar from './Searchindex';
import SearchBar from './Searchbar';


const App = () => {
  return (
    <SafeAreaView style={styles.root}>
     <Tabs style={styles.profil} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root:{
    flex: 1, 
    backgroundColor: 'black',
  },
  profil:{
    backgroundColor: 'black'

  }
});

export default App;
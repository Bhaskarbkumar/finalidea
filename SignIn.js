
import * as React from 'react';
import {View,Text,Image, StyleSheet, TextInput ,Button,props} from 'react-native'
import Signup from './Signup';
import { useNavigation   } from '@react-navigation/native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from './Profile';
import { auth } from './Firebase/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';


const SignIn = () => {

      const navigation = useNavigation();

       const [Email , onChangeText ]= React.useState('');
       const [password , onChangeText2]=  React.useState('');

       const signIn = (e) => {
              e.preventDefault();
              signInWithEmailAndPassword(auth , Email , password)
               .then(userCredential => {
                 //console.log(userCredential);
                 navigation.navigate('Profile');
               })
               .catch((error) => {
                console.log(error);
               })
       }

       return(
        <View style = {styles.root}>
       <Image source={require('./wise.png')} style ={(styles.logo)}/>
       <Text style = {(styles.username)}> Email:</Text>
       <TextInput
        style = {(styles.input)}
        onChangeText={onChangeText}
        value={Email}
      />
       <Text style = {(styles.username)}> Password:</Text>
       <TextInput
       style = {(styles.input)}
        onChangeText={onChangeText2}
        secureTextEntry = {true}
        value={password}
      />
      <View style={{marginVertical: 10}}>
             <Button  title="LOGIN" onPress= { navigation.navigate(signIn) }  />
         </View>
        <View style={{marginVertical: 10}}>
             <Button  title="REGISTER NOW" onPress={ navigation.navigate(Signup)} />
          </View>
        </View>
       )
}

const styles = StyleSheet.create({
       root: {
              alignItems:'center',
              padding: 60,
       },
       logo: {
              resizeMode:'contain',
              width: '160%',
              maxWidth: 400,
              height: 150,
       },
       username: {
              marginRight: 120,
              width: '70%',
              marginVertical: 20,
              fontStyle:'italic',
              fontWeight:'bold'
       },
       input: {
              height: 40,
              width: 300,
              margin: 12,
              borderWidth: 1,
              marginVertical: 10
       }
});

export default SignIn;

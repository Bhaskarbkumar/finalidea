
import * as React from 'react';
import {View,Text,Image, StyleSheet, TextInput ,Button} from 'react-native'
import Signup from './Signup';
import { useNavigation , useNavigationContainerRef } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Navi from './navigation';


const SignIn = () => {

      const navigation = useNavigation();
       //const navigationRef = useNavigationContainerRef();

       const [username , onChangeText ]= React.useState('');
       const [password , onChangeText2]=  React.useState('');

    

       return(
        <View style = {styles.root}>
       <Image source={require('./wise.png')} style ={(styles.logo)}/>
       <Text style = {(styles.username)}> Username:</Text>
       <TextInput
        style = {(styles.input)}
        onChangeText={onChangeText}
        value={username}
      />
       <Text style = {(styles.username)}> Password:</Text>
       <TextInput
       style = {(styles.input)}
        onChangeText={onChangeText2}
        secureTextEntry = {true}
        value={password}
      />
       <Button
          style = {styles.icons}
          title ="Log in "
          />       
       <Button 
          style = {styles.icons}
          title ="Register Now "
          onPress={() => navigation.navigate('Signup')}
          />
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
       },
       icons: {
              height: 100,
              padding: 50,
              width: '100%',
              marginVertical: 10
       }
});

export default SignIn;
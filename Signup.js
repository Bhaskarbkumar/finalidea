import React from 'react'
import {View,Text,Image, StyleSheet, TextInput ,Button} from 'react-native'
import { useNavigation , useNavigationContainerRef  } from '@react-navigation/native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { auth } from './Firebase/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import SignIn from './SignIn';

    //const navigation = useNavigation();
const Signup = () => {

    const [Fullname , onChangeText ]= React.useState('');
    const [username , onChangeText2 ]= React.useState('');
    const [Password , onChangeText3 ]= React.useState('');
    const [Emailid , onChangeText4 ]= React.useState('');

    const navigation = useNavigation();

    const signUp = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth , Emailid , Password)
         .then(userCredential => {
           console.log(userCredential);
         })
         .catch((error) => {
          console.log(error);
         })
 }


    return(
     <View style={styles.root}>
     <Image source={require('./nerd.png')} style={styles.logo} />
     <Text style={styles.title}>Join the Nerd Community !!!!</Text>
     <Text style={styles.creds}>Full Name:</Text>
     <TextInput
        style = {(styles.input)}
        onChangeText={onChangeText}
        value={Fullname}
      />
     <Text style={styles.creds}>Username:</Text>
     <TextInput
        style = {(styles.input)}
        onChangeText={onChangeText2}
        value={username}
      />
          <Text style={styles.creds}>Email ID:</Text>
     <TextInput
        style = {(styles.input)}
        onChangeText={onChangeText4}
        value={Emailid}
      />
          <Text style={styles.creds}>Password:</Text>
     <TextInput
        style = {(styles.input)}
        onChangeText={onChangeText3}
        value={Password}
      />
      <View style={{marginVertical: 10}}>
             <Button  title="REGISTER" onPress={signUp} />
         </View>
        <View style={{marginVertical: 10}}>
             <Button  title="<GO BACK TO LOGIN" onPress={navigation.navigate(SignIn)}/>
          </View>

     </View>
    )
}

const styles = StyleSheet.create({
    root: {
           alignItems:'center',
           padding: 10,
    },
    logo: {
           resizeMode:'contain',
           width: '60%',
           maxWidth: 400,
           height: 150,
           marginVertical: 10
    },
    title: {
        fontSize: 28,
        marginVertical:15
    },
    creds:{
        marginRight: 76,
        width: '70%',
        marginVertical: 1,
        fontWeight:'bold'
    },
    input:{
        height: 40,
        width: 300,
        borderWidth: 1,
        marginVertical: 6

    }

})

export  default Signup;
import React from 'react'
import {View,Text,Image, StyleSheet, TextInput ,Button} from 'react-native'

const Signup = () => {

    const [Fullname , onChangeText ]= React.useState('');
    const [username , onChangeText2 ]= React.useState('');
    const [Password , onChangeText3 ]= React.useState('');
    const [Emailid , onChangeText4 ]= React.useState('');


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
          <Text style={styles.creds}>Password:</Text>
     <TextInput
        style = {(styles.input)}
        onChangeText={onChangeText3}
        value={Password}
      />
          <Text style={styles.creds}>Email ID:</Text>
     <TextInput
        style = {(styles.input)}
        onChangeText={onChangeText4}
        value={Emailid}
      />
      <Button style={styles.clicks} title='Register' />
      <Button style={styles.clicks} title='<Go Back to Login' />
     </View>
    )
}

const styles = StyleSheet.create({
    root: {
           alignItems:'center',
           padding: 30,
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
        marginVertical: 8

    },
    clicks:{
        paddingBottom:30
    }

})

export  default Signup;
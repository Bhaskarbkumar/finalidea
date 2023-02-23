import React from "react";
import {Text,View,Image,  Button, StyleSheet} from 'react-native';

const Profile = () => {

    return(
        <View >
            <Text style={styles.head}>Who's Reading ?</Text>
            <Image source={require('./pro.png')} style={styles.logo} />
            <Text style={styles.text}>Bharath</Text> 
            <Image source={require('./addprofile.png')} style={styles.addprofile} /> 
            <Text style={styles.text}>Add profile</Text>        
        </View>
    )

}

const styles = StyleSheet.create({
    
    head: {
        fontSize : 48,
        fontStyle: 'normal',
        alignItems:'center',
        color:'white',
        marginVertical: 70,
        marginLeft: 20
        //backgroundColor: 'orange'
    },
    logo: {
        marginLeft: 120,
        marginVertical: 10
    },
    text:{
        color: 'white',
        marginLeft: 150,
        marginVertical: 4
    },
    addprofile: {
        //marginVertical:80,
        marginLeft: 120,
        //marginBottom:50
    },
    text2:{
       marginBottom: 120,
       marginLeft: 10
    }


    
})

export default Profile;
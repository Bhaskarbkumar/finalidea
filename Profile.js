import React from "react";
import {Text,View,Image,  Button, StyleSheet, TouchableOpacity} from 'react-native';
import NextProfile from './NextProfile';

const Profile = () => {

    const [profilename , setText ]= React.useState('');

    return(
        <View >
            <Text style={styles.head}>Who's Reading ?</Text>
        <TouchableOpacity>
            <Image 
                 source={require('./pro.png')}
                 style={styles.logo}
                  />
            </TouchableOpacity>
            <Text style={styles.text}>Bharath</Text> 
         <TouchableOpacity>
            <Image 
                source={require('./addprofile.png')}
                style={styles.addprofile} />  
                
         </TouchableOpacity>
            <Text style={styles.text}>Add profile</Text>    
        </View>
    )

}

 function nextIcon() {
        console.log('profilename');
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
        marginVertical: 10,
        resizeMode: 'contain'
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
    },
    nextIcon:{
        marginLeft: 160
    }


    
})

export default Profile;
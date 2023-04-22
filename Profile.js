import React from "react";
import {Text,View,Image,  Button, StyleSheet, TouchableOpacity,TextInput} from 'react-native';
import { useNavigation   } from '@react-navigation/native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tabs from "./navigation/tabs";
import SearchPage from "./navigation/SearchPage";
//import { Tabs } from "antd";



const Profile = () => {
    const navigation = useNavigation();

    const [profilename , setText ]= React.useState('');
    const [secondprofilename , setText1 ]= React.useState('');
    const[imageClicked , setImageClicked] = React.useState(false);
    const[secondImageClicked , setSecondImageClicked] = React.useState(false);
    const [count , setCount] = React.useState(0);
    const onPressAddProfile = () => {
          setImageClicked(true)
          setText('Ben Affleck')
          setCount(count+1);
          if (count==1) {
            setSecondImageClicked(true) 
            setText1('Matt Damon');  
          } else {
            
          }
    }

    const imageClick = () => {
        console.log('david');
        navigation.navigate( Tabs);
    }

    const secondImageClick = () => {
        console.log('russs');
        navigation.navigate( SearchBar);
    }


    return(
        <View >
            <Text style={styles.head}>Who's Reading ?</Text>
 
         <TouchableOpacity  onPress = { onPressAddProfile  }>
            <Image 
                source={require('./addprofile.png')}
                style={styles.addprofile} />
         </TouchableOpacity>
            <Text style={styles.text}>Add profile</Text>
             {imageClicked== true && (
                 <><TouchableOpacity   onPress = { imageClick }><Image
                    source={require('./pro.png')}
                    style={styles.logo}
                   />
                    </TouchableOpacity>
                    <TextInput
                        style={(styles.input)}
                        onChangeText={setText}
                        //secureTextEntry={true}
                        value={profilename} /></>
               )}
      {secondImageClicked==true  &&(
                    <><TouchableOpacity onPress={ secondImageClick }><Image
                    source={require('./secondp.png')}
                    style={styles.logo1} />
                    </ TouchableOpacity>
                    <TextInput
                        style={(styles.input1)}
                        onChangeText={setText1}
                        //secureTextEntry={true}
                        value={secondprofilename} /></>
          )}
          </View> 
    )

}



const styles = StyleSheet.create({
    
    head: {
        fontSize : 48,
        fontStyle: 'normal',
        alignItems:'center',
        color:'black',
        marginVertical: 20,
        marginLeft: 20
        //backgroundColor: 'orange'
    },
    logo: {
        marginLeft: 120,
        marginVertical: 5,
        resizeMode: 'contain'
    },
    input: {
        marginLeft: 130,
        //marginVertical: 2,
        //resizeMode: 'contain'
    },
    text:{
        color: 'black',
        marginLeft: 150,
        marginVertical: 10
    },
    addprofile: {
        //marginVertical:10,
        marginLeft: 120,
        //marginBottom:50
    },
     logo1: {
        marginLeft: 120,
        resizeMode: 'contain',
        marginVertical: 10
    },
    input1: {
        marginLeft: 120,
        //resizeMode: 'contain',
       // marginVertical: 10
    }


    
})



export default Profile;
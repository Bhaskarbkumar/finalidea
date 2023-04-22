import * as React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useEffect, useState } from 'react';
import { TextInput, StyleSheet,Button ,SafeAreaView} from 'react-native';
import { Image , ScrollView } from 'react-native';
import Novels from './Novels';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import HomeIcon from '@mui/icons-material/Home';
import SearchPage from './SearchPage';
import { useNavigation } from '@react-navigation/native';

export default function  BookPage( item){
    return(
        <Image
        style={{ width: 160, height: 160, marginVertical: 10  }}
        src={ item}
       //onPress = {title} 
         />
    )
}
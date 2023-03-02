import { NavigationContainer } from '@react-navigation/native';
import NativeStackView from '@react-navigation/native-stack';
import React from 'react';
import { View, Text} from 'react-native';
import SignIn from '../SignIn';
import Signup from '../Signup';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation , useNavigationContainerRef } from '@react-navigation/native';
import Profile from '../Profile';

const Stack = createNativeStackNavigator();

const Navi = () => {

    return(
        <NavigationContainer>
            <Stack.Navigator>
            <Stack.Screen name="Signup"  component={Signup} />
            <Stack.Screen name="SignIn"  component={SignIn} />
            <Stack.Screen name="Profile" component={Profile} />
            
            </Stack.Navigator>


        </NavigationContainer>
    )

}

export default Navi;
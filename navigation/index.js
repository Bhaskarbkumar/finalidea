import { NavigationContainer } from '@react-navigation/native';
import { NativeStackView } from '@react-navigation/native-stack';
import React from 'react';
import { View, Text} from 'react-native'
import { NativeStackNavigationConfig } from '@react-navigation/native-stack/lib/typescript/src/types';
import Signin from '../SignIn';
import Signup from '../Signup';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const Navigation = () =>{
    return(
        <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name="Signin"  component={Signin} />
              <Stack.Screen name="Signup"  component={Signup} />
            </Stack.Navigator>

        </NavigationContainer>
    )

}

export default Navigation;
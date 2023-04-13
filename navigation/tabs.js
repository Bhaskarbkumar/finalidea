import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import SettingsScreen from './SettingsScreen';
import AntDesign from "react-native-vector-icons/AntDesign";
import { HomeOutlined } from '@ant-design/icons';
import {DownloadOutlined} from '@ant-design/icons';

const Tab = createBottomTabNavigator();

const Tabs = () => {

  return (
     
      <Tab.Navigator>
        <Tab.Screen name="HomeScreen" component={HomeScreen}  options = {{ tabBarIcon: ({color}) =><AntDesign name="home" size={24}  />} } />
        <Tab.Screen name="Downloads" component={SettingsScreen} options = {{ tabBarIcon: ({color}) => <AntDesign name="download" size={24}  />} }/>
      </Tab.Navigator>
  );
}

export default Tabs;
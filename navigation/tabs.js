import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import SettingsScreen from './SettingsScreen';
//import AntDesign from "react-native-vector-icons/AntDesign";
//import { HomeOutlined } from '@ant-design/icons';
//import {DownloadOutlined} from '@ant-design/icons';
import DownloadIcon from '@mui/icons-material/Download'; 
import HomeIcon from '@mui/icons-material/Home';
import SearchPage from './SearchPage';
import Stack from '../App';

const Tab = createBottomTabNavigator();

const Tabs = () => {

  return (
     
      <Tab.Navigator>
        <Tab.Screen name="home" component={HomeScreen} />
        <Tab.Screen name="Downloads" component={SettingsScreen} />
   
      </Tab.Navigator>
  );
}

export default Tabs;
import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import { AntDesign } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import { TextInput, StyleSheet,Button ,SafeAreaView} from 'react-native';
import { Image , ScrollView } from 'react-native';

const Novels = () => {
    const url2= "https://www.googleapis.com/books/v1/volumes?q=jackreacher&download=epub&key=AIzaSyDaSAQ1ggRLaL3YHuTGIvPlFnnH-vDByTo&maxResults=20";
    const [thirdNovels , setThirdNovels] = useState([]);
    const thirdRows =[ thirdNovels[0].volumeInfo.imageLinks.thumbnail,
    thirdNovels[1].volumeInfo.imageLinks.thumbnail,thirdNovels[2].volumeInfo.imageLinks.thumbnail,
    thirdNovels[3].volumeInfo.imageLinks.thumbnail,,thirdNovels[4].volumeInfo.imageLinks.thumbnail,
    thirdNovels[5].volumeInfo.imageLinks.thumbnail,, thirdNovels[6].volumeInfo.imageLinks.thumbnail,];

 const fetchdata2 = useEffect(()=>{
    fetch(url2)
    .then(response =>response.json())
    .then((json) => {
            setRowling(json.items);
            console.log( thirdNovels[0].volumeInfo.imageLinks.thumbnail);
           })               
    .catch((error)=>console.error(error))
    .finally(()=>setLoading(false))
  },[])
  

  const url3= "https://www.googleapis.com/books/v1/volumes?q=biography&download=epub&key=AIzaSyDaSAQ1ggRLaL3YHuTGIvPlFnnH-vDByTo&maxResults=20"
  const [fourNovels , setFourNovels] = useState([]);
  const fourRows =[ fourNovels[0].volumeInfo.imageLinks.thumbnail,
  fourNovels[1].volumeInfo.imageLinks.thumbnail,fourNovels[2].volumeInfo.imageLinks.thumbnail,
  fourNovels[3].volumeInfo.imageLinks.thumbnail,fourNovels[4].volumeInfo.imageLinks.thumbnail,
  fourNovels[5].volumeInfo.imageLinks.thumbnail, fourNovels[6].volumeInfo.imageLinks.thumbnail];

const fetchdata3 = useEffect(()=>{
  fetch(url3)
  .then(response =>response.json())
  .then((json) => {
          setRowling(json.items);
          console.log( fourNovels[0].volumeInfo.imageLinks.thumbnail);
         })               
  .catch((error)=>console.error(error))
  .finally(()=>setLoading(false))
},[])



}

export default Novels;
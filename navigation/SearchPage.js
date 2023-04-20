import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useEffect, useState } from 'react';
import { TextInput, StyleSheet,Button ,SafeAreaView} from 'react-native';
import { Image , ScrollView } from 'react-native';
import Novels from './Novels';
import axios from 'axios';

const SearchPage = ( ) => {

     const url7  = "https://www.googleapis.com/books/v1/volumes?q="+novel+"&download=epub&key=AIzaSyDaSAQ1ggRLaL3YHuTGIvPlFnnH-vDByTo&maxResults=5";
  const [novel, setNovels] = useState('');
  const [outputs, setOutputs] = useState([]);
  const [loading, setLoading] = useState(true)
  const [images,setImages] = useState([]);
  const [pics,setPics] = useState([]);


   const handleSearch = (text) => {
     setNovels(text);  
  };


  function handleSubmit(){
    axios.get("https://www.googleapis.com/books/v1/volumes?q="+novel+"&download=epub&key=AIzaSyDaSAQ1ggRLaL3YHuTGIvPlFnnH-vDByTo&maxResults=5")
    .then(data1 => {
        setOutputs(data1.data.items)
        setPics(outputs.map( Output => (Output.volumeInfo.imageLinks.thumbnail))) 
        console.log(outputs.map( Output => (Output.volumeInfo.imageLinks.thumbnail)))    
           }) 
  }

    return(
        <><TextInput
            style={(styles.input)}
            onChangeText={handleSearch} /><Button title="Submit" onPress={ handleSubmit }/>
            
            { <ScrollView >
              
              {
                   pics.map(pic => (
                 
                    <Image key={pic}
                    style={{ width: 100, height: 100}}
                     src= {pic } alt ={novel.title}/>
                     ))
                    
                   }
                    
                </ScrollView>}
            </>
      
    )
}

const styles = StyleSheet.create({
 
    input: {
           height: 40,
           width: 300,
           margin: 12,
           borderWidth: 1,
           marginVertical: 10
    }
});

export default SearchPage;

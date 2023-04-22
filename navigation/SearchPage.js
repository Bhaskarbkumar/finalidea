import * as React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useEffect, useState } from 'react';
import { TextInput, StyleSheet,Button ,SafeAreaView} from 'react-native';
import { Image , ScrollView ,Linking} from 'react-native';
import Novels from './Novels';
import axios from 'axios';
import BookPage from './BookPage';

const SearchPage = ( ) => {

  const navigation = useNavigation();

     const url7  = "https://www.googleapis.com/books/v1/volumes?q="+novel+"&download=epub&key=AIzaSyDaSAQ1ggRLaL3YHuTGIvPlFnnH-vDByTo&maxResults=5";
  const [novel, setNovels] = useState('');
  const [outputs, setOutputs] = useState([]);
  const [loading, setLoading] = useState(true)
  const [titles,setTitles] = useState([]);
  const [pics,setPics] = useState([]);



   const handleSearch = (text) => {
     setNovels(text);  
  };


  function handleSubmit(){
    axios.get("https://www.googleapis.com/books/v1/volumes?q="+novel+"&download=epub&key=AIzaSyDaSAQ1ggRLaL3YHuTGIvPlFnnH-vDByTo&maxResults=20")  .then(data1 => {
        setOutputs(data1.data.items)
        setPics(outputs.map( Output => (Output.volumeInfo.imageLinks.thumbnail))) 
        setTitles(outputs.map( Output => (Output.volumeInfo.title)));  
           }) 
  }

    return(
        <><TextInput
            style={(styles.input)}
            onChangeText={handleSearch} /><Button title="Submit" onPress={ handleSubmit }/>
             
            { 
            <ScrollView >
              
                {outputs.map(Output => (
                 
                 <TouchableOpacity  >
                  
                  <Text style = {{marginLeft: 180,fontStyle:'italic',fontWeight:'bold'}}>
                        {Output.volumeInfo.title}
                        </Text>
                        <Image key={Output}
                    style={{ width: 160, height: 160, marginVertical: 10  }}
                    src={Output.volumeInfo.imageLinks.thumbnail}
                   // onPress = {title} 
                     />
                   
                   </TouchableOpacity>
                  )) }
    
                    
                </ScrollView>
                }

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


// {pics.map(pic => (
                 
//   <Image key={pic}
//   style={{ width: 160, height: 160 , marginVertical: 10}}
//    src= {pic } alt ={novel.title}/>
//    )) }
  
//    {titles.map(title =>(
//      <Text>{title}</Text>
//    ))} 
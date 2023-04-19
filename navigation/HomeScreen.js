import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import { AntDesign } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import { TextInput, StyleSheet,Button ,SafeAreaView} from 'react-native';
import { Image , ScrollView } from 'react-native';
import Novels from './Novels';
//import { SearchBar } from '@ant-design/react-native';
//import { Icon } from '@ant-design/react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import HomeIcon from '@mui/icons-material/Home';


export default function HomeScreen() {

  const url = "https://www.googleapis.com/books/v1/volumes?q=stephen%20king&download=epub&key=AIzaSyDaSAQ1ggRLaL3YHuTGIvPlFnnH-vDByTo&maxResults=5";
  const url1= "https://www.googleapis.com/books/v1/volumes?q=harrypotter&download=epub&key=AIzaSyDaSAQ1ggRLaL3YHuTGIvPlFnnH-vDByTo&maxResults=5";
  const url2= "https://www.googleapis.com/books/v1/volumes?q=jackreacher&download=epub&key=AIzaSyDaSAQ1ggRLaL3YHuTGIvPlFnnH-vDByTo&maxResults=20";
  
 // const url4  = "https://www.googleapis.com/books/v1/volumes?q=+"book"+&download=epub&key=AIzaSyDaSAQ1ggRLaL3YHuTGIvPlFnnH-vDByTo&maxResults=5";


  const [query, setQuery] = useState('');
  const [book, setBook] = useState("Stephen king");
  const [books, setBooks] = useState([])
  const [loading, setLoading] = useState(true)
  const [secondNovels , setSecondNovels] = useState([]);
  const [thirdNovels , setThirdNovels] = useState([]);

  const thirdRows =[ "http://books.google.com/books/content?id=rFn1T6E0UJEC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
          "http://books.google.com/books/content?id=eD93XZnuaI8C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
          "http://books.google.com/books/content?id=jg8oZxVITPkC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
         "http://books.google.com/books/content?id=3zKODQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api", 
          "http://books.google.com/books/content?id=IaOL_j36Z14C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
          "http://books.google.com/books/content?id=4PbOBd-XxkgC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
           " http://books.google.com/books/content?id=6haNEAAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"];



   const secondRows =[ "http://books.google.com/books/content?id=f280CwAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
                   "http://books.google.com/books/content?id=wrOQLV6xB-wC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
                     "http://books.google.com/books/content?id=L18VBQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
                     "http://books.google.com/books/content?id=Aaug_RnI-xQC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
                     "http://books.google.com/books/content?id=2dQuDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"];


  const images  = ['http://books.google.com/books/content?id=-GFaEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api','http://books.google.com/books/content?id=r8q2DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
  'http://books.google.com/books/content?id=cc5NCwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api','http://books.google.com/books/content?id=-rUACwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
 'http://books.google.com/books/content?id=UbfnTcmkaKkC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'];

 
 
const fetchdata2 = useEffect(()=>{
 fetch(url2)
 .then(response =>response.json())
 .then((json) => {
        setThirdNovels(json.items);
         console.log();
        })               
 .catch((error)=>console.error(error))
 .finally(()=>setLoading(false))
},[])



 const fetchdata = useEffect(()=>{
    fetch(url)
    .then(response =>response.json())
    .then((json) => {
            setBooks(json.items);
            //console.log( books[1].volumeInfo.imageLinks.thumbnail);
           })               
    .catch((error)=>console.error(error))
    .finally(()=>setLoading(false))
},[])


 const fetchdata1 = useEffect(()=>{
    fetch(url1)
    .then(response =>response.json())
    .then((json) => {
            setSecondNovels(json.items);
          // console.log(secondNovels[4].volumeInfo.imageLinks.thumbnail);
           })               
    .catch((error)=>console.error(error))
    .finally(()=>setLoading(false))
  },[])

  const handleSearch = (text) => {
    //setQuery(text);
    //setBook(text);
 
    // Do search functionality here
  };
    
  return (
    <ScrollView>
    <View style={styles.searchContainer}>
        <MaterialIcons name="search" size = {24} />
     
          <Text style={{marginVertical: 20, fontStyle: 'italic' , fontSize: 15 }}>Stephen king</Text>
         { <ScrollView horizontal={true}>
              
           {
            
                images.map(image => (
              
                 <Image key={image}
                 style={{ width: 100, height: 100}}
                  src= {image } alt ={book.title}/>
                  ))
                }
             </ScrollView>}


             <Text style={{marginVertical: 20 , fontStyle: 'italic' , fontSize: 15}}>J K Rowling</Text>
             { <ScrollView horizontal={true}>
           {
                secondRows.map(secondRow => (
              
                 <Image key={secondRow}
                 style={{ width: 80, height: 120 }}
                  src= {secondRow } alt ={book.title}/>
                  ))
                }
             </ScrollView>} 
               
             <Text style={{marginVertical: 20, fontStyle: 'italic' , fontSize: 15}}>Lee Child</Text>
             { <ScrollView horizontal={true} >
           {
                thirdRows.map(thirdRow => (
              
                 <Image key={thirdRow}
                 style={{ width: 80, height: 120 }}
                  src= {thirdRow } alt ={book.title}/>
                  ))
                }
            </ScrollView>}


    
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    marginVertical: 10,
    marginHorizontal: 20,
  },
  searchInput: {
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 10,
  },
  icons: {
    height: 40,
    padding: 50,
    width: '100%',
    marginVertical: 10
  }
});


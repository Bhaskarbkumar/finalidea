import React, { useEffect, useState } from 'react';
import { TextInput, View, StyleSheet,Button,Text } from 'react-native';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  
  const [book, setBook] = useState("Stephen king");
  const [books, setBooks] = useState([])
  const [loading, setLoading] = useState(true)


  const url = "https://www.googleapis.com/books/v1/volumes?q=stephen%20king&download=epub&key=AIzaSyDaSAQ1ggRLaL3YHuTGIvPlFnnH-vDByTo&maxResults=5";

 
  useEffect(()=>{
       fetch(url)
       .then(response =>response.json())
       .then((json) => {
               setBooks(json.items);

               console.log(books[0].volumeInfo.imageLinks.thumbnail);
              // setBook(books[0].volumeInfo.imageLinks.thumbnail)
              })               
       .catch((error)=>console.error(error))
       .finally(()=>setLoading(false))
  },[])



  const handleSearch = (text) => {
    setQuery(text);
    setBook(text);
 
    // Do search functionality here
  };

  return (
    <View style={styles.searchContainer}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search..."
        value={query}
        onChangeText={handleSearch}
      />
      <Button
          style = {styles.icons}
          title ="Log in "
          onPress={useEffect}
          /> 
       {loading? (<Text>Loading ..</Text>) : (
             
             <img src= "http://books.google.com/books/content?id=r8q2DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api" alt ={book.title}/>
            
      )}
            
          
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    marginVertical: 10,
    marginHorizontal: 20,
  },
  searchInput: {
    backgroundColor: '#eee',
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

export default SearchBar;
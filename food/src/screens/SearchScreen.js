import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../API/yelp';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');



  const searchAPI = async () => {
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term,
          location: 'san jose'
        }
      });
      setResults(response.data.businesses)
    } catch (err) {
      setErrorMessage('Something went wrong')
    }
  }

  //call search API when first rendered
  // aka BAD CODE!
  //---> searchAPI('pasta');

  return (
    <View>
      <SearchBar term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchAPI(term)}

      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>we have found {results.length}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;

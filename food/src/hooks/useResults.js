import {useEffect, useState} from 'react';
import yelp from '../API/yelp';

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
  
  
  
    const searchAPI = async searchTerm => {
        
      try {
        const response = await yelp.get('/search', {
          params: {
            limit: 50,
            term: searchTerm,
            location: 'san jose'
          }
        });
       // console.log(response.data.businesses);
        setResults(response.data.businesses)
      } catch (err) {
        setErrorMessage('Something went wrong')
      }
    }
  
    //call search API when first rendered
    // aka BAD CODE!
    //--->  searchAPI('pasta');
  
    useEffect(() => {
      searchAPI('pasta');
    }, []);
    return [searchAPI, results, errorMessage];
  
};
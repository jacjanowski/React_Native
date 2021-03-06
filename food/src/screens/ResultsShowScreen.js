import React, {useEffect, useState}from 'react';
import {View , Text, StyleSheet, Flatlist, Image} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import yelp from '../API/yelp';

const ResultsShowScreen = ({navigation}) => {
    const [result, setResult] = useState();
    const id = navigation.getParam('id'); //gets the parameter with attribute 'id'

    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    };

    useEffect( () => {
        getResult(id);
    }, []);
    
    if(!result) {
        return null;
    }

    return(
        <View>
            <Text>{result.name}</Text>
            <FlatList
            data={result.photos}
            keyExtractor={(photo)=> photo} 
            renderItem={({item}) =>{
                return <Image style={styles.image} source={{uri: item}} />
            }} />
        </View>
    );
};


const styles = StyleSheet.create({
    image: {
        height: 200,
        width: 300
    }
});

export default ResultsShowScreen;
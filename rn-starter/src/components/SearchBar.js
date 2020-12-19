import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const SearchBar = () => {
    return (
        <View style={styles.backgroundStyle}>
            <AntDesign name="search1" style={styles.iconStyle} />
            <TextInput style={styles.inputStyle} placeholder="Search" />
        </View>
    );
};


const styles = StyleSheet.create({
    backgroundStyle: {
        marginTop: 15,
        backgroundColor: 'lightblue',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 55, 
        flexDirection: 'row'

    },
    inputStyle: {
        flex: 1,
        fontSize: 18
    },
    iconStyle: {
        alignSelf: 'center',
        fontSize: 25,
        marginHorizontal: 5
    }
});

export default SearchBar;
import React, {useState,} from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native'
import { CommonActions } from '@react-navigation/native'
import Button from '../components/Button'
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";


const Settings = ({navigation, route}) => {
    
    
    return (
        <View style={styles.container}>
            <Button 
                text='Log out'
                onPress={()=>{
                    firebase.auth().signOut()
                }} />
        </View>
    )
}

export default Settings

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    }
});

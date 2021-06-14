import React, {useState} from 'react'
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native'
import Colors from '../constants/Colors'
import {Ionicons} from '@expo/vector-icons'

const CheckBox = ({isChecked, onChecked, ...props}) => {
    
    
    
    return (
        <TouchableOpacity style={styles.checkbox} onPress={onChecked}>
            <Text>{isChecked ? '✓' : ''}</Text>
        </TouchableOpacity>
    )
}

export default CheckBox

const styles = StyleSheet.create({
    checkbox: {
        width: 20,
        height: 20,
        margin: 5,
        backgroundColor: "#f2f0f0",
        color: Colors.lightGray,
        borderWidth: 1,
        borderRadius: 3,
        borderColor: Colors.lightGray,
        alignItems: "center",
        justifyContent: "center",
    },
    });
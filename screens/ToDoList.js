import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native'
import Colors from '../constants/Colors'
import {Ionicons} from '@expo/vector-icons'


const ToDoList = () => {
    return (
        <View style={styles.container}>
            <Text> HEEE</Text>
        </View>
    )
}

export default ToDoList

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
    icon: {
        padding: 5,
        fontSize: 32,
        color: "white",
    },
})

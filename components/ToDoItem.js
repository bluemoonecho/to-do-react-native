import React, {useState} from 'react'
import { Text, View, StyleSheet, TouchableOpacity, TextInput} from 'react-native'
import Colors from '../constants/Colors'
import {Ionicons} from '@expo/vector-icons'
import CheckBox from './CheckBox'


const ToDoItem = ({text, isChecked, onChecked}) => {
    
    return (
        <View style={styles.container}> 
            <View style={{flexDirection:'row', flex: 1}}>
                <CheckBox isChecked={isChecked} onChecked={onChecked}/>
                <TouchableOpacity onPress={()=>{}}>
                    <Text>{text}</Text>
                </TouchableOpacity>
                
            </View>
            {/* Remove */}
            <Text>{text}</Text> 
        </View>
    )
}


export default ToDoItem


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
    },
    icon: {
        padding: 5,
        fontSize: 16,
    },
    input: {
        color: Colors.black,
        borderBottomColor: Colors.lightGray,
        borderBottomWidth: 0.5,
        marginHorizontal: 5,
        padding: 3,
        height: 25,
        fontSize: 16,
    },
    text: {
        padding: 3,
        fontSize: 16,
    },
});
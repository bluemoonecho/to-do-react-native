import React, {useState, useLayoutEffect} from 'react'
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native'
import Colors from '../constants/Colors'
import {Ionicons} from '@expo/vector-icons'
import ToDoItem from '../components/ToDoItem'



const renderAddListIcon = (addItem) => {
    return (
        <TouchableOpacity onPress={()=> addItem({text: 'hello2', isChecked : false})}> 
            <Text style={styles.icon}>+</Text>
        </TouchableOpacity>
    )
}

const ToDoList = ({navigation}) => {


    const [toDoItems, setToDoItems] = useState([{text: 'hello', isChecked: false}])


    const addItemToLists = (item) => {
        toDoItems.push(item);
        setToDoItems([...toDoItems])
    }
    const removeItemFromLists = (index) => {
        toDoItems.splice(index,1);
        setToDoItems([...toDoItems])
    }

    const updateItem = (index, item) => {
        toDoItems[index] = item;
        setToDoItems([...toDoItems])
    }

    useLayoutEffect(()=>{
        navigation.setOptions({ 
            headerRight: () => renderAddListIcon(addItemToLists)
        })
    })

    return (
        <View style={styles.container}>
            <FlatList 
                data={toDoItems}
                renderItem={({item: {text, isChecked}, index}) => {
                    return <ToDoItem 
                            text={text} 
                            isChecked={isChecked} 
                            onChecked={()=> {
                                const toDoItem = toDoItems[index]
                                toDoItem.isChecked = !isChecked
                                updateItem(index, toDoItem)
                            }}/>;
                }}

            />
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

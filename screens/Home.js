import React, {useLayoutEffect, useState} from 'react'
import { Text, View, StyleSheet, TouchableOpacity, FlatList} from 'react-native'
import Colors from '../constants/Colors'
import {Ionicons} from '@expo/vector-icons'


const ListButton = ({title, color, onPress, onDelete, onOptions}) => {

    return (
        <View style={styles.container}>
            <TouchableOpacity
            onPress={onPress}
            style={[styles.itemContainer, {backgroundColor: color}]}> 
                <View> 
                    <Text style={styles.itemTitle}>{title}</Text>
                </View>
                <View style={{flexDirection:'row'}}> 
                    <TouchableOpacity onPress={onOptions}>
                        <Ionicons 
                            name='options-outline' 
                            size={24} 
                            color='white' />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={onDelete}>
                        <Ionicons 
                            name='trash-outline' 
                            size={24} 
                            color='white' />
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const renderAddListIcon = (navigation, addItemToLists) => {
    return (
        <View>
        <View style={styles.btn}>

        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Edit', {saveChanges:  addItemToLists})}> 
            <Text style={styles.icon}>+</Text>
        </TouchableOpacity>
        </View>
    )
}


const Home = ({navigation}) => {

    const [lists, setLists] = useState(
        [
            {title:'School', color: Colors.red}, 
            {title:'Work', color: Colors.blue}, 
            {title:'Fun', color: Colors.green}]
    )

    const addItemToLists = (item) => {
        lists.push(item)
        setLists([...lists])
    }

    const removeItemFromLists = (index) => {
        lists.splice(index,1);
        setLists([...lists])
    }

    const updateItemFromLists = (index, item) => {
        lists[index] = item;
        setLists([...lists])
    }

    useLayoutEffect(()=>{
        navigation.setOptions({ 
            headerRight: () => renderAddListIcon(navigation, addItemToLists)
        })
    })


    return (
        <View style={styles.container}>
                <FlatList
                    data={lists}
                    renderItem={({item: {title, color}, index}) => {
                        return( 
                            <ListButton 
                                title={title} 
                                color={color} 
                                onPress={()=>{navigation.navigate('To Do List', {title, color})}}
                                navigation={navigation}
                                onDelete={()=> removeItemFromLists(index)}
                                onOptions={()=>{
                                    navigation.navigate
                                    ('Edit', 
                                    {title, color, 
                                    saveChanges: (item) => updateItemFromLists(index, item)})}}
                                />
                        )
                    }}
                    />
        </View>
    )
    
}

export default Home;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    itemTitle: { fontSize: 24, padding: 5, color: "white" },
    itemContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: 100,
        flex: 1,
        borderRadius: 20,
        marginHorizontal: 20, 
        marginVertical: 10,
        padding: 15,
    },
    icon: {
        padding: 5,
        fontSize: 24,
    },
    centeredView: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 50,
    },
    modalView: {
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
});



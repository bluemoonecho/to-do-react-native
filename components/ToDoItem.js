import React, {useState} from 'react'
import { Text, View, StyleSheet, TouchableOpacity, TextInput} from 'react-native'
import Colors from '../constants/Colors'
import CheckBox from './CheckBox'


const EditableText = ({isChecked, onChangeText, text, ...props}) => {
    
    const[isEditMode, setEditMode] = useState(props.newToDo);

    return (
        <TouchableOpacity 
        style={{flex: 1}} 
        onPress={()=>{!isChecked && setEditMode(true)}}>
        {isEditMode ? 
        <TextInput
            underlineColorAndroid={'transparent'}
            selectionColor={'transparent'}
            autoFocus={true}
            value={text}
            onChangeText={onChangeText}
            placeholder={'Add new item'}
            onSubmitEditing={()=>{}}
            maxLength={30}
            style={[styles.input, {outline: 'none'}]}
            onBlur={()=> {
                props.onBlur && props.onBlur();
                setEditMode(false)}
            }
        />
        : 
        <Text 
        style={[styles.text, 
        { color : isChecked ? Colors.lightGray : Colors.black,
            textDecoration: isChecked ? 'line-through' : 'none'}]}>
        {text}</Text>
        }
    </TouchableOpacity>
    )
    
}



const ToDoItem = ({text, isChecked, onChecked, onChangeText, onDelete, ...props}) => {

    return (
        <View style={styles.container}> 
            <View style={{flexDirection:'row', flex: 1}}>
                <CheckBox isChecked={isChecked} onChecked={onChecked}/>
                <EditableText 
                    isChecked={isChecked} 
                    onChangeText={onChangeText}
                    text={text}
                    {...props}
                    />               
            </View>
            <TouchableOpacity onPress={onDelete}>
                <Text style={styles.icon, {color: Colors.red}}>X</Text>
            </TouchableOpacity>
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
        color: Colors.black
    },
});
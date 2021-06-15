import React, {useState,} from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native'
import Colors from '../constants/Colors'

const ColorButton = ({onPress, isSelected, color}) => {
    return (
        <TouchableOpacity 
        onPress={onPress}
        style={[styles.colorButton, 
        {boderWidth: isSelected ? 3 : 0, backgroundColor: color}]}
        />
    )
}

const ColorSelector = ({selectedColor, colorOptions, onSelect}) => {
    
    return (
        <View style={styles.container}>
            {colorOptions.map((colorName)=>{
                return(
                <ColorButton 
                onPress={() => onSelect(Colors[colorName])}
                color={Colors[colorName]}
                isSelected={Colors[colorName] == selectedColor}
                />
                )
            })}
        </View>
    )
}

export default ColorSelector


const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        flex: 1,
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
    },
    colorButton: {
        height: 32,
        width: 32,
        borderColor:Colors.lightGray,
        borderRadius: 24,
        margin: 10,
    }
});
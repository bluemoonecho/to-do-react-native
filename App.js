import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from './screens/Home'
import ToDoList from './screens/ToDoList'
import EditList from './screens/EditList'
import  Colors from './constants/Colors';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <StatusBar style="auto" />
      <Stack.Navigator>  
        <Stack.Screen name='To-Do' component={Home}/>
        <Stack.Screen 
        name='To Do List' 
        component={ToDoList}
        options={({route})=>{
          return({
            title: route.params.title,
            headerStyle:{
              backgroundColor: route.params.color
            },
            headerTintColor: 'white'
          })
        }}
        />
        <Stack.Screen 
        name='Edit' 
        component={EditList}
        options={({route})=>{
          return({
            title: route.params.title ? `Edit ${route.params.title} list` : 'Create New List' ,
            headerStyle:{
              backgroundColor: route.params.color || Colors.blue
            }, 
            headerTintColor: 'white'
          })
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

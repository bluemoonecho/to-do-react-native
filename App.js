import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from './screens/Home'
import ToDoList from './screens/ToDoList'
import EditList from './screens/EditList'
import Colors from './constants/Colors';
import Login from './screens/Login'
import Settings from './screens/Settings'
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const Stack = createStackNavigator();
const AuthStack = createStackNavigator();

const AuthScreens = () => {
  return (
    <AuthStack.Navigator> 
      <AuthStack.Screen name='Login' component={Login}/>
    </AuthStack.Navigator>
  )
}

const Screens = () =>{
  return(
    <Stack.Navigator>  
    <Stack.Screen name='To-Do' component={Home}/>
    <Stack.Screen name='Settings' component={Settings}/>

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
  )
}

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() =>{
    if(firebase.auth().currentUser){
      setIsAuthenticated(true);
    }
    firebase.auth().onAuthStateChanged(user => {
      console.log('check auth state...')
      if (user ){
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    });
  },[])



  // test@test.com
  //tesT123%

  return (
    <NavigationContainer>
    <StatusBar style="auto" />
    {isAuthenticated ? <Screens/> : <AuthScreens/>}
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

const firebaseConfig = {
  apiKey: "AIzaSyAGpZlTg2pNW0mAIsqsBlyus5YfeEM9zks",
  authDomain: "to-do-dd33c.firebaseapp.com",
  projectId: "to-do-dd33c",
  storageBucket: "to-do-dd33c.appspot.com",
  messagingSenderId: "818564700127",
  appId: "1:818564700127:web:b7192c8fdfd5948a52566a"
};

firebase.initializeApp(firebaseConfig);


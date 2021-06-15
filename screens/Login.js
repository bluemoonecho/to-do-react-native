import React, {useState} from 'react'
import { Text, View, StyleSheet, TouchableOpacity, TextInput} from 'react-native'
import Colors from '../constants/Colors'
import Button from '../components/Button'
import LabelInput from '../components/LabelInput'
import {Ionicons} from '@expo/vector-icons'
import validator from 'validator'

const validateFields = (email, passwords) => {
    const isValid = {
        email: validador.isEmail(email),
        password: validador.isStrongPassword(password, {
            minLength: 4,
            // minLowerCase: 1,
            // minUppercase: 1,
            // minNumbers: 1,
            // minSymbols: 1
        })
    }
}


const Login = () => {
    const [isCreateMode, setCreateMode] = useState(false)
    const [emailField, setEmailField] = useState({
        text: '',
        errorMessage:''
    })
    const [passwordField, setPasswordField] = useState({
        text: '',
        errorMessage:''
    })
    const [passwordReentryField, setPasswordReentryField] = useState({
        text: '',
        errorMessage:''
    })

    return (
        <View style={styles.container}>
            <Text style={styles.header}>To-Dos</Text>
            <View style={{flex: 1}}> 
                <LabelInput 
                    label='Email' 
                    text={emailField.text}
                    errorMessage={emailField.errorMessage}
                    onChangeText={(text)=>{
                        setEmailField({text})
                    }}
                    labelStyle={styles.label}
                    autoCompleteType={'email'}
                    />
                <LabelInput 
                    label='Password' 
                    text={passwordField.text}
                    errorMessage={passwordField.errorMessage}
                    onChangeText={(text)=>{
                        setPasswordField({text})
                    }}
                    labelStyle={styles.label}
                    autoCompleteType={'password'}
                    secureTextEntry={true}
                    />
                {isCreateMode && (
                <LabelInput 
                    label='Re-enter Password' 
                    text={passwordReentryField.text}
                    errorMessage={passwordReentryField.errorMessage}
                    onChangeText={(text)=>{
                        setPasswordReentryField({text})
                    }}
                    labelStyle={styles.label}
                    secureTextEntry={true}
                    // autoCompleteType={'password'}
                    />
                )}
                <TouchableOpacity
                    onPress={() => {
                        setCreateMode(!isCreateMode);
                    }}
                >
                    <Text
                        style={{
                            alignSelf: "center",
                            color: Colors.blue,
                            fontSize: 16,
                            margin: 4,
                        }}
                    >
                        {isCreateMode
                            ? "Already have an account?"
                            : "Create new account"}
                    </Text>
                </TouchableOpacity>

            </View>
            <Button 
                text={isCreateMode ? 'Create Account' : 'Login'}
                onPress={()=>{
                    const isValid = validateFields(
                        emailField.text, passwordField.text);
                    let isAllValid = true;
                    if(!isValid.email){
                        emailField.errorMessage = 'Please enter a valid email'
                        setEmailField({...emailField})
                        isAllValid = false
                    }
                    if(!isValid.password) {
                        passwordField.errorMessage = 'Please must be at leas 4 characters long'
                        setPasswordField({...passwordField})
                        isAllValid = false
                    }
                    if(isCreateMode && passwordReentryField.text != passwordField.text){
                        passwordField.errorMessage = 'Passwords do not match'
                        setPasswordField({...passwordField})
                        isAllValid = false
                    }
                    if(isAllValid){
                        isCreateMode ? createAccount () : login()
                    }
                }}
                buttonStyle={{backgroundColor: Colors.blue}}
            />
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "space-between",
        alignItems: "stretch",
    },
    label: { fontSize: 16, fontWeight: "bold", color: Colors.black },
    header: { fontSize: 50, color: Colors.blue, alignSelf: "center" },
});
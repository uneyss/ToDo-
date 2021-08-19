import React,{useState} from 'react';
import {StyleSheet,TextInput,Button, View} from 'react-native';

export default function AddTodo({submitHandler}){
    const[text,setText]=useState('');
    const changeHandler=(val)=>{
        setText(val)
    }
    return(
        <View style = {styles.contanier}>
            <TextInput style={styles.input}
            placeholder='Yapılacak...'
            placeholderTextColor = 'white'
            style = {styles.textInput}
            onChangeText={changeHandler}
            />
            <View style = {styles.buttonContanier}>
            <Button onPress={()=>submitHandler(text)} title='Kaydet' text='add todo' color='white'/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    contanier:{
        backgroundColor: '#2f4f4f',
        borderRadius: 10,
        margin: 10,
        marginBottom: 60
    },
    
    input:{
        marginBottom:10,
        paddingHorizontal:8,
        paddingVertical:6,
        borderBottomWidth:1,
        borderBottomColor:'#ddd'
    },

    buttonContanier: {
        backgroundColor: 'grey',
        margin: 10,
        borderRadius: 10

    },
    
    textInput:{
        padding:10,
        color: 'white',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        margin:5
    },
})
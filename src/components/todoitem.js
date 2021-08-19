import React from 'react';
import {StyleSheet,TouchableOpacity,Text, View} from 'react-native';

export default function TodoItem({item,pressHandler}){

    return(
        <View style= {styles.headerContanier}>

        
        <TouchableOpacity onPress={()=>pressHandler(item.key)}>
            <Text style={styles.textStyle}>{item.text}</Text>
        </TouchableOpacity>

        </View>
    )

}

const styles=StyleSheet.create({
    textStyle:{
        color: 'white'
    },
    headerContanier: {
        backgroundColor: 'seagreen',
        padding:16,
        marginTop:20,
        margin: 10,
        borderRadius:10
    }
})
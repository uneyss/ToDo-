
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

export default function Header(){
    return(
        <View style={styles.header}>
            <Text style={styles.headerText}>Yapılacaklar </Text>
        </View>
    )
}

const styles=StyleSheet.create({
header:{
    height:80,
    paddingTop:38,
    paddingLeft: 20,
},
headerText:{
    color: 'orange',
    fontWeight: 'bold',
    fontSize: 30,
  },
});
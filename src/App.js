import React, {useState} from 'react'
import { View, FlatList, StyleSheet,} from 'react-native'
import Header from './components/header';
import TodoItem from './components/todoitem';
import AddTodo from './components/addTodo';

function App(){

  const[todos,setTodos]=useState([
    {text:'Kitap Okuyacağım',key:'1'},
    {text:'Ders Çalışacağım',key:'2'},
    {text:'Alışveriş Yapacağım',key:'3'},

  ]);

  const pressHandler=(key) =>{
    setTodos((prevTodos)=>{
      return prevTodos.filter(todo=>todo.key != key);
    });
  }

  const submitHandler=(text)=>{
    setTodos((prevTodos)=>{
      return[
        {text:text,key:Math.random().toString()},
        ...prevTodos
      ]
    })
  }

  return(
    
    <View style={styles.contanier}>
      <Header/>
          <FlatList 
            data={todos}
            renderItem={({item})=>(
            <TodoItem item={item} pressHandler={pressHandler}/>
            )}
              />
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler}  />
            <View style={styles.list}>
          </View>
        </View>
  </View>  
  )
}

const styles = StyleSheet.create ({
  contanier: {
    flex:1,
    backgroundColor: 'black'
  },

})

export default App
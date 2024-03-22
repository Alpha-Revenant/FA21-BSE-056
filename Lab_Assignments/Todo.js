import React, { useState } from 'react';
import { StyleSheet, View, SafeAreaView, TextInput, Button, Text } from 'react-native';

export default function Todo() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Wake Up at 4:20 AM' },
    { id: 2, text: 'Do gardening at 7:30 AM' },
    { id: 3, text: 'Play Piano at 9:00 AM' }
  ]);
  const [newTodo, setNewTodo] = useState('');

  const deleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      const newId = todos.length > 0 ? todos[todos.length - 1].id + 1 : 1;
      setTodos([...todos, { id: newId, text: newTodo }]);
      setNewTodo('');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          value={newTodo}
          onChangeText={text => setNewTodo(text)}
          placeholder="Add new todo..."
        />
        <Button title="Add" onPress={addTodo} />
      </View>
      <Text style={styles.sectionTitle}>Todo List</Text>
      <View style={styles.todoContainer}>
        {todos.map(todo => (
          <View key={todo.id} style={styles.todoItem}>
            <Text>{todo.text}</Text>
            <Button title="Delete" onPress={() => deleteTodo(todo.id)} />
          </View>
        ))}
      </View>
      {/* User Creative Screen */}
      <View style={styles.userCreativeScreen}>
        {/* Add your creative screen components here */}
        <Text>User Creative Screen</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 20,
      paddingTop: 20,
    },
    searchContainer: {
      flexDirection: 'row',
      marginBottom: 20,
    },
    input: {
      flex: 1,
      marginRight: 10,
      borderWidth: 1,
      borderColor: 'gray',
      paddingHorizontal: 10,
      borderRadius: 5,
    },
    sectionTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    todoContainer: {
      marginBottom: 20,
    },
    todoItem: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 10,
      borderWidth: 1,
      borderColor: 'lightgray',
      padding: 10,
      borderRadius: 5,
    },
    userCreativeScreen: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#f0f0f0',
      marginBottom: 20,
    },
  });
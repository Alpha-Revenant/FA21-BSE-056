import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

const AddNoteScreen = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const [note, setNote] = useState('');

  const handleAddNote = () => {
   
    navigation.goBack(); 
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <TextInput
          style={styles.titleInput}
          placeholder="Title"
          value={title}
          onChangeText={setTitle}
        />
      </View>
      <View style={styles.noteContainer}>
        <TextInput
          style={styles.noteInput}
          multiline
          placeholder="Take a note..."
          value={note}
          onChangeText={setNote}
        />
      </View>
      <TouchableOpacity style={styles.addButton} onPress={handleAddNote}>
        <Text style={styles.addButtonText}>Add Note</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6E0D8',
    padding: 20,
  },
  titleContainer: {
    backgroundColor: '#B08E79',
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
  },
  titleInput: {
    fontSize: 18,
    color: '#fff',
  },
  noteContainer: {
    flex: 1,
    backgroundColor: '#B08E79',
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
  },
  noteInput: {
    flex: 1,
    fontSize: 16,
    color: '#fff',
  },
  addButton: {
    backgroundColor: '#7A6D5A',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  addButtonText: {
    fontSize: 18,
    color: '#fff',
  },
});

export default AddNoteScreen;
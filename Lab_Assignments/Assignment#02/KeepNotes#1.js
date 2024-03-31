import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const KeepNotesScreen = () => {
  const [notes, setNotes] = useState([
    { id: 1, title: "Don't forget", date: '2024-03-24', themeColor: '#B08E79', isCompleted: true },
    { id: 2, title: 'Business plan', date: '2024-03-25', themeColor: '#918A78', isCompleted: false },
    { id: 3, title: 'Reminder', date: '2024-03-26', themeColor: '#7A6D5A', isCompleted: true },
    { id: 4, title: 'Contacts', date: '2024-03-27', themeColor: '#8B735B', isCompleted: false },
    { id: 5, title: 'Shopping list', date: '2024-03-28', themeColor: '#A7865B', isCompleted: true },
    { id: 6, title: 'Books', date: '2024-03-29', themeColor: '#A57B5D', isCompleted: false },
  ]);

  const renderItem = ({ item }) => (
    <View style={[styles.note, { backgroundColor: item.themeColor }]}>
      <View style={styles.leftIcon}>
        {item.isCompleted ? (
          <Text style={styles.icon}>✓</Text>
        ) : (
          <Text style={styles.icon}>✗</Text>
        )}
      </View>
      <View style={styles.noteContent}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.date}>{item.date}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={notes}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        style={styles.notesContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6E0D8',
  },
  notesContainer: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  note: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    padding: 15,
    borderRadius: 10,
  },
  leftIcon: {
    marginRight: 10,
  },
  noteContent: {
    flex: 1,
  },
  icon: {
    fontSize: 24,
    color: '#fff',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  date: {
    fontSize: 14,
    color: '#fff',
  },
});

export default KeepNotesScreen;
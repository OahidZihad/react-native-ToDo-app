import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

const Task = props => {
  const {text, setTaskItems, taskItems, id} = props;

  const completeTask = id => {
    console.log('this id is ', id);
    let itemsCopy = [...taskItems];
    itemsCopy.splice(id, 1);
    setTaskItems(itemsCopy);
  };

  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <View style={styles.square}></View>
        <Text style={styles.itemText}>{text}</Text>
      </View>
      <TouchableOpacity key={id} onPress={() => completeTask(id)}>
        <View style={styles.circular}></View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: '#55BCF6',
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },
  itemText: {
    maxWidth: '80%',
    color: 'black',
    fontSize: 18,
  },
  circular: {
    width: 12,
    height: 12,
    borderColor: '#55BCF6',
    borderWidth: 2,
    borderRadius: 5,
  },
});

export default Task;

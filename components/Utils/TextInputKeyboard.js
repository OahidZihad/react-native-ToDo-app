import {StyleSheet, Text, View, TextInput} from 'react-native';
import React, {useState} from 'react';

const TextInputKeyboard = () => {
  const [name, setName] = useState('');

  return (
    <View style={styles.body}>
      <Text style={styles.text}>Please Write Your Name: </Text>
      <TextInput
        style={styles.input}
        placeholder="e.g. John"
        onChangeText={value => setName(value)}
        multiline
        keyboardType="numeric"
        maxLength={5}
        secureTextEntry
      />
      <Text style={styles.text}>Your name is: {name}</Text>
    </View>
  );
};

export default TextInputKeyboard;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    width: 200,
    borderColor: 'gray',
    borderRadius: 10,
    textAlign: 'center',
    fontSize: 18,
  },
  text: {
    color: '#000',
    fontSize: 22,
    fontStyle: 'italic',
    margin: 10,
  },
});

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
import React, {useState} from 'react';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

const BtnTouchablePressable = () => {
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const onPressHandler = () => {
    setSubmitted(!submitted);
  };

  return (
    <View style={styles.body}>
      <Text style={styles.text}>Please Write Your Name: </Text>
      <TextInput
        style={styles.input}
        placeholder="e.g. John"
        onChangeText={value => setName(value)}
        multiline
        // keyboardType="numeric"
        maxLength={5}
        // secureTextEntry
      />

      {/* <Button title={submitted ? 'Clear' : 'Submit'} onPress={onPressHandler} /> */}

      {/* <TouchableOpacity
        style={styles.button}
        onPress={onPressHandler}
        activeOpacity={0.4}>
        <Text style={[styles.text, {color: 'white', fontWeight: 'bold'}]}>
          {submitted ? 'Clear' : 'Submit'}
        </Text>
      </TouchableOpacity> */}

      {/* <TouchableHighlight
        style={styles.button}
        onPress={onPressHandler}
        activeOpacity={0.4}
        underlayColor="red"> */}
      {/* /* underlayColor is used in only TouchableHighlight */}
      {/* <Text style={[styles.text, {color: 'white', fontWeight: 'bold'}]}>
          {submitted ? 'Clear' : 'Submit'}
        </Text>
      </TouchableHighlight> */}

      <Pressable
        style={styles.button}
        onPress={onPressHandler}
        // onLongPress={onPressHandler}
        // delayLongPress={2000}
        hitSlop={{top: 10, bottom: 10}}
        android_ripple={{color: 'white'}}>
        <Text style={[styles.text, {color: 'white', fontWeight: 'bold'}]}>
          {submitted ? 'Clear' : 'Submit'}
        </Text>
      </Pressable>

      {submitted ? (
        <Text style={styles.text}>You are registered as {name}</Text>
      ) : null}
    </View>
  );
};

export default BtnTouchablePressable;

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
    marginBottom: 20,
  },
  text: {
    color: '#000',
    fontSize: 22,
    fontStyle: 'italic',
    margin: 10,
  },
  button: {
    width: 150,
    height: 50,
    backgroundColor: 'blue',
    color: 'white',
    alignItems: 'center',
    borderRadius: 15,
  },
});

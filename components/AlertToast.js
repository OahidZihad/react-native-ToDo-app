import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  Alert,
  ToastAndroid,
} from 'react-native';
import React, {useState} from 'react';

const AlertToast = () => {
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const onPressHandler = () => {
    if (name.length > 3) {
      setSubmitted(!submitted);
    } else {
      //   Alert.alert(
      //     'Warning',
      //     'Number must be longer than 3 character',
      //     [
      //       {
      //         text: 'Do not show again',
      //         onPress: () => console.warn('Do not show again pressed'),
      //       },
      //       {
      //         text: 'Cancel',
      //         onPress: () => console.warn('Cancel pressed'),
      //       },
      //       {
      //         text: 'OK',
      //         onPress: () => console.warn('OK pressed'),
      //       },
      //     ],
      //     {cancelable: true, onDismiss: () => console.warn('Alert Dismissed')},
      //   );

      //   ToastAndroid.show('You are okay', ToastAndroid.SHORT);
      //   ToastAndroid.showWithGravity(
      //     'You are okay',
      //     ToastAndroid.SHORT,
      //     ToastAndroid.CENTER,
      //   );
      ToastAndroid.showWithGravityAndOffset(
        'You are okay',
        ToastAndroid.SHORT,
        ToastAndroid.TOP,
        0,
        200,
      );
    }
  };

  return (
    <View style={styles.body}>
      <Text style={styles.text}>Please Write Your Name: </Text>
      <TextInput
        style={styles.input}
        placeholder="e.g. John"
        onChangeText={value => setName(value)}
        multiline
        maxLength={5}
      />

      <Pressable
        style={styles.button}
        onPress={onPressHandler}
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

export default AlertToast;

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

import {StyleSheet, Text, View, Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState, useEffect} from 'react';
import {TextInput} from 'react-native-gesture-handler';
import CustomButton from './CustomButton';

const Home = ({navigation}) => {
  const [name, setName] = useState('');

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    try {
      AsyncStorage.getItem('UserName').then(value => {
        if (value !== null) {
          setName(value);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const updateData = async () => {
    if (name.length === 0) {
      Alert.alert('Warning', 'Write your name please....');
    } else {
      try {
        await AsyncStorage.setItem('UserName', name);
        Alert.alert('Success!', 'Your data has been updated.');
      } catch (error) {
        console.log(error);
      }
    }
  };

  const removeData = async () => {
    try {
      await AsyncStorage.removeItem('UserName');
      await AsyncStorage.clear();
      navigation.navigate('Login');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.body}>
      <Text style={styles.text}>Welcome {name} !</Text>
      <TextInput
        style={styles.input}
        placeholder="New Name"
        value={name}
        onChangeText={value => setName(value)}
      />
      <CustomButton title="Update" onPressFunction={updateData}></CustomButton>
      <CustomButton title="Remove" onPressFunction={removeData}></CustomButton>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
    color: 'black',
  },
  input: {
    width: 300,
    borderWidth: 1,
    borderColor: '#555',
    borderRadius: 10,
    backgroundColor: '#fff',
    textAlign: 'center',
    fontSize: 20,
    marginTop: 130,
    marginBottom: 10,
  },
});

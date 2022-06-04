import {
  StyleSheet,
  Text,
  View,
  Image,
  Platform,
  Alert,
  ScrollView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {TextInput} from 'react-native-gesture-handler';
import KeyboardAvoidingView from 'react-native/Libraries/Components/Keyboard/KeyboardAvoidingView';
import CustomButton from '../Utils/CustomButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {NavigationContainer} from '@react-navigation/native';

const Login = ({navigation}) => {
  const [name, setName] = useState('');

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    try {
      AsyncStorage.getItem('UserName').then(value => {
        if (value !== null) {
          navigation.navigate('Home');
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const setData = async () => {
    if (name.length === 0) {
      Alert.alert('Warning', 'Write your name please....');
    } else {
      try {
        await AsyncStorage.setItem('UserName', name);
        navigation.navigate('Home');
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <View style={styles.body}>
      <Image style={styles.logo} source={require('../../assets/done.png')} />
      <Text style={styles.text}>Async Storage</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        <KeyboardAvoidingView>
          <TextInput
            style={styles.input}
            placeholder="Enter Your Name"
            onChangeText={value => setName(value)}
          />
          <CustomButton title="Login" onPressFunction={setData}></CustomButton>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#0080ff',
  },
  logo: {
    width: 100,
    height: 100,
    margin: 20,
  },
  text: {
    fontSize: 30,
    color: '#ffffff',
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

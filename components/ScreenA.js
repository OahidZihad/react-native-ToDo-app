import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

const ScreenA = ({navigation}) => {
  const onPressHandler = () => {
    navigation.navigate('ScreenB');
    // navigation.replace('ScreenB');
  };

  return (
    <View style={styles.body}>
      <Text style={styles.text}>Screen A</Text>
      <Pressable onPress={onPressHandler}>
        <Text>Go to Screen B</Text>
      </Pressable>
    </View>
  );
};

export default ScreenA;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
    margin: 10,
  },
});

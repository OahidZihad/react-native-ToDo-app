import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

const ScreenB = ({navigation}) => {
  const onPressHandler = () => {
    // navigation.navigate('ScreenA');
    navigation.goBack();
  };
  return (
    <View style={styles.body}>
      <Text style={styles.text}>Screen B</Text>
      <Pressable onPress={onPressHandler}>
        <Text>Go to Screen A</Text>
      </Pressable>
    </View>
  );
};

export default ScreenB;

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

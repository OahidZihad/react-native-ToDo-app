import {StyleSheet, Text, Pressable, View} from 'react-native';
import React from 'react';

const CustomButton = props => {
  console.log('props', props);
  const {onPressFunction, title} = props;
  return (
    <Pressable
      style={styles.button}
      onPress={onPressFunction}
      hitSlop={{top: 10, bottom: 10}}
      android_ripple={{color: 'white'}}>
      <Text style={[styles.text, {color: 'white', fontWeight: 'bold'}]}>
        {title}
      </Text>
    </Pressable>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  text: {
    color: '#000',
    fontSize: 22,
    fontStyle: 'italic',
    margin: 10,
  },
  button: {
    width: 150,
    height: 50,
    backgroundColor: 'green',
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },
});

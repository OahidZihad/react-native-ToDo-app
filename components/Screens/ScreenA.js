import {StyleSheet, Text, View, Pressable} from 'react-native';
import React from 'react';
import GlobalStyle from '../Utils/GlobalStyle';

const ScreenA = ({navigation, route}) => {
  console.log(route);
  let message;
  if (route.params.message) {
    message = route.params.message;
  } else {
    message = 'First go to B';
  }
  const onPressHandler = () => {
    navigation.navigate('ScreenB');
    // navigation.replace('ScreenB');
    // navigation.openDrawer();
    // navigation.closeDrawer();
  };

  return (
    <View style={styles.body}>
      <Text style={[GlobalStyle.CustomFont, styles.text]}>Screen A</Text>
      <Pressable onPress={onPressHandler}>
        <Text>Go to Screen B</Text>
      </Pressable>
      <Text style={styles.text}>{message}</Text>
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
    margin: 10,
    fontFamily: 'DancingScript-bold',
  },
});

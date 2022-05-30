import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Responsive = () => {
  return (
    <View style={styles.body}>
      <View style={styles.mainView1}>
        <View style={styles.view1}>
          <Text style={styles.textBlack}>1</Text>
        </View>

        <View style={styles.view2}>
          <Text style={styles.text}>2</Text>
        </View>

        <View style={styles.view3}>
          <Text style={styles.textBlack}>3</Text>
        </View>
      </View>

      <View style={styles.view4}>
        <Text style={styles.text}>4</Text>
      </View>

      <View style={styles.view5}>
        <Text style={styles.text}>5</Text>
      </View>

      <View style={styles.mainView2}>
        <View style={styles.view6}>
          <Text style={styles.textBlack}>6</Text>
        </View>

        <View style={styles.view7}>
          <Text style={styles.text}>7</Text>
        </View>
      </View>
    </View>
  );
};

export default Responsive;

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  mainView1: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  view1: {
    flex: 1,
    backgroundColor: 'cyan',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view2: {
    flex: 2,
    backgroundColor: 'purple',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view3: {
    flex: 3,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },

  view4: {
    flex: 1,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  view5: {
    flex: 1,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainView2: {
    flex: 4,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  view6: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view7: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
    color: 'white',
  },
  textBlack: {
    fontSize: 30,
    color: 'black',
  },
});

import 'react-native-gesture-handler';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  FlatList,
  KeyboardAvoidingView,
} from 'react-native';
import React, {useState} from 'react';
import Task from './components/Task';
import dismissKeyboard from 'react-native/Libraries/Utilities/dismissKeyboard';
import Responsive from './components/Responsive';
import ListScrollRefresh from './components/ListScrollRefresh';
import FlatListSectionLIst from './components/FlatListSectionLIst';
import TextInputKeyboard from './components/TextInputKeyboard';
import BtnTouchablePressable from './components/BtnTouchablePressable';
import AlertToast from './components/AlertToast';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

const Stack = createStackNavigator();

const ScreenA = ({navigation}) => {
  console.log(navigation);

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

const App = () => {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    dismissKeyboard();
    if (task) {
      setTaskItems([...taskItems, task]);
    }
    setTask(null);
  };

  return (
    // <View style={styles.container}>
    //   <View style={styles.tasksWrapper}>
    //     <Text style={styles.sectionTitle}>Today's Tasks</Text>
    //     <FlatList
    //       style={styles.items}
    //       data={taskItems}
    //       renderItem={item => {
    //         console.log(item.index);
    //         return (
    //           <Task
    //             key={item.index}
    //             text={item.item}
    //             id={item.index}
    //             taskItems={taskItems}
    //             setTaskItems={setTaskItems}></Task>
    //         );
    //       }}
    //     />
    //   </View>

    //   <KeyboardAvoidingView
    //     style={styles.writeTaskWrapper}
    //     behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
    //     <TextInput
    //       style={styles.input}
    //       placeholder={'Write a task'}
    //       onChangeText={e => setTask(e)}
    //     />
    //     <TouchableOpacity onPress={() => handleAddTask()}>
    //       <View style={styles.addWrapper}>
    //         <Text style={styles.addText}>+</Text>
    //       </View>
    //     </TouchableOpacity>
    //   </KeyboardAvoidingView>
    // </View>

    // <Responsive></Responsive>
    // <ListScrollRefresh></ListScrollRefresh>
    // <FlatListSectionLIst></FlatListSectionLIst>
    // <TextInputKeyboard></TextInputKeyboard>
    // <BtnTouchablePressable></BtnTouchablePressable>
    // <AlertToast></AlertToast>

    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          header: () => null,
        }}>
        <Stack.Screen
          name="ScreenA"
          component={ScreenA}
          // options={{
          //   header: () => null,
          // }}
        />
        <Stack.Screen name="ScreenB" component={ScreenB} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    color: 'black',
    backgroundColor: '#fff',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,
    fontSize: 20,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  addText: {
    fontSize: 26,
    color: 'black',
  },

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

export default App;

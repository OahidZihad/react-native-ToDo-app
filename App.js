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
import ScreenA from './components/ScreenA';
import ScreenB from './components/ScreenB';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Stack = createStackNavigator();
// const Tab = createBottomTabNavigator();
// const Tab = createMaterialBottomTabNavigator();
const Tab = createMaterialTopTabNavigator();
const Drawer = createDrawerNavigator();

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

    // <NavigationContainer>
    //   <Stack.Navigator
    //     screenOptions={{
    //       header: () => null,
    //     }}>
    //     <Stack.Screen
    //       name="ScreenA"
    //       component={ScreenA}
    //       // options={{
    //       //   header: () => null,
    //       // }}
    //     />
    //     <Stack.Screen name="ScreenB" component={ScreenB} />
    //   </Stack.Navigator>
    // </NavigationContainer>

    // <NavigationContainer>
    //   <Tab.Navigator
    //     screenOptions={({route}) => ({
    //       tabBarIcon: ({focused, size, color}) => {
    //         let iconName;
    //         if (route.name === 'ScreenA') {
    //           iconName = 'autoprefixer';
    //           size = focused ? 25 : 20;
    //           color = focused ? 'black' : '';
    //         } else if (route.name === 'ScreenB') {
    //           iconName = 'btc';
    //           size = focused ? 25 : 20;
    //           color = focused ? 'black' : '';
    //         }
    //         return <FontAwesome5 name={iconName} size={size} color={color} />;
    //       },
    //     })}
    //     tabBarOptions={{
    //       activeTintColor: 'green',
    //       inactiveTintColor: 'black',
    //       activeBackgroundColor: 'white',
    //       inactiveBackgroundColor: 'gray',
    //       showLabel: false,
    //       labelStyle: {fontSize: 14},
    //     }}>
    //     <Tab.Screen
    //       name="ScreenA"
    //       component={ScreenA}
    //       options={{tabBarBadge: 2}}
    //     />
    //     <Tab.Screen name="ScreenB" component={ScreenB} />
    //   </Tab.Navigator>
    // </NavigationContainer>

    // <NavigationContainer>
    //   <Tab.Navigator
    //     screenOptions={({route}) => ({
    //       tabBarIcon: ({focused, size, color}) => {
    //         let iconName;
    //         if (route.name === 'ScreenA') {
    //           iconName = 'autoprefixer';
    //           size = focused ? 25 : 20;
    //           color = focused ? 'white' : '';
    //         } else if (route.name === 'ScreenB') {
    //           iconName = 'btc';
    //           size = focused ? 25 : 20;
    //           color = focused ? 'white' : '';
    //         }
    //         return <FontAwesome5 name={iconName} size={size} color={color} />;
    //       },
    //     })}
    //     labeled={false}
    //     barStyle={{
    //       backgroundColor: '#694fad',
    //     }}
    //     activeColor="white"
    //     inactiveColor="black">
    //     <Tab.Screen
    //       name="ScreenA"
    //       component={ScreenA}
    //       options={{tabBarBadge: 2}}
    //     />
    //     <Tab.Screen name="ScreenB" component={ScreenB} />
    //   </Tab.Navigator>
    // </NavigationContainer>

    // <NavigationContainer>
    //   <Tab.Navigator
    //     screenOptions={({route}) => ({
    //       tabBarIcon: ({focused, size, color}) => {
    //         let iconName;
    //         if (route.name === 'ScreenA') {
    //           iconName = 'autoprefixer';
    //           size = focused ? 25 : 20;
    //           color = focused ? 'black' : '';
    //         } else if (route.name === 'ScreenB') {
    //           iconName = 'btc';
    //           size = focused ? 25 : 20;
    //           color = focused ? 'black' : '';
    //         }
    //         return <FontAwesome5 name={iconName} size={size} color={color} />;
    //       },
    //     })}
    //     tabBarOptions={{
    //       activeTintColor: 'green',
    //       inactiveTintColor: 'black',
    //       activeBackgroundColor: 'white',
    //       inactiveBackgroundColor: 'gray',
    //       showLabel: true,
    //       labelStyle: {fontSize: 14},
    //     }}>
    //     <Tab.Screen
    //       name="ScreenA"
    //       component={ScreenA}
    //       // options={{tabBarBadge: 2}}
    //     />
    //     <Tab.Screen name="ScreenB" component={ScreenB} />
    //   </Tab.Navigator>
    // </NavigationContainer>

    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="ScreenA"
        screenOptions={{
          drawerPosition: 'right',
          drawerType: 'back',
          swipeEdgeWidth: 100,
          drawerHideStatusBarOnOpen: true,
          overlayColor: '#000000300',
          drawerStyle: {
            backgroundColor: '#e6e6e6',
            width: 250,
          },
          headerShown: true,
          swipeEnabled: true,
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#00000090',
          },
          headerTitleStyle: {
            fontSize: 25,
            fontWeight: 'bold',
          },
          headerTintColor: '#fff',
        }}>
        <Drawer.Screen
          name="ScreenA"
          component={ScreenA}
          options={{
            title: 'Screen A title',
            drawerIcon: ({focused, size, color}) => (
              <FontAwesome5
                name="autoprefixer"
                size={focused ? 25 : 20}
                color={focused ? '#0080ff' : '#999999'}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="ScreenB"
          component={ScreenB}
          options={{
            title: 'Screen B title',
            drawerIcon: ({focused, size, color}) => (
              <FontAwesome5
                name="btc"
                size={focused ? 25 : 20}
                color={focused ? '#0080ff' : '#999999'}
              />
            ),
          }}
          initialParams={{
            ItemName: 'Item from Drawer',
            ItemId: 12,
          }}
        />
      </Drawer.Navigator>
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
});

export default App;

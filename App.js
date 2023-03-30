/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  Text
} from 'react-native';

import HomeScreen from './screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import ListScreen from './screens/List';
import BridgingScreen from './screens/Bridging';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import List from "react-native-vector-icons/Entypo";
import HomeApp from './screens/HomeApp';
import { Provider } from 'react-redux';
import store from './redux/store';


store.subscribe(() => console.log(store));

function App() {

  return (
    <Provider store={store} >
      <HomeApp />
    </Provider>
  );
}



export default App;

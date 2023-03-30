
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import List from "react-native-vector-icons/Entypo";
import HomeScreen from './Home';
import ListScreen from './List';
import BridgingScreen from './Bridging';


const Tab = createBottomTabNavigator();

function HomeApp() {

    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{ headerTitleAlign: "center" }}
            >
                <Tab.Screen name="Home" component={HomeScreen}
                    options={{
                        tabBarLabel: 'Home',
                        tabBarIcon: ({ color, size }) => {
                            return (
                                <Icon name="home" color={"black"} size={20} />
                            )
                        },

                    }}
                />
                <Tab.Screen name="List" component={ListScreen}
                    options={{
                        tabBarLabel: 'List',
                        tabBarIcon: ({ color, size }) => {
                            return (
                                <List name="list" color={"black"} size={20} />
                            )
                        }
                    }}
                />
                <Tab.Screen name="Bridging" component={BridgingScreen}
                    options={{
                        tabBarLabel: 'Bridge',
                        tabBarIcon: ({ color, size }) => {
                            return (
                                <Icon name="flag" color={"black"} size={20} />
                            )
                        }
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}



export default HomeApp;

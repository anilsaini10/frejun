
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
            >
                <Tab.Screen name="HomeScreen" component={HomeScreen} options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => {
                        return (
                            <Icon name="home" color={"black"} size={20} />
                        )
                    }
                }}
                />
                <Tab.Screen name="ListScreen" component={ListScreen}
                    options={{
                        tabBarLabel: 'Home',
                        tabBarIcon: ({ color, size }) => {
                            return (
                                <List name="list" color={"black"} size={20} />
                            )
                        }
                    }}
                />
                <Tab.Screen name="BridgingScreen" component={BridgingScreen}
                    options={{
                        tabBarLabel: 'Home',
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

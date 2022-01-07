import 'react-native-gesture-handler';
import React from 'react';
import {Image} from 'react-native';
import Home from './Home';
import Cart from './Cart';
import OrderHistory from './Orderhistory';
import Contact from './Contact';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
const Bottombar = () => {
  return (
    <>
      {/* <NavigationContainer> */}
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: 'red',
          tabBarInactiveTintColor: 'black',
          tabBarStyle: {
            position: 'absolute',
            height: 60,
          },
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({focused}) => {
              return (
                <Image
                  style={{tintColor: focused ? 'red' : 'grey'}}
                  source={require('../../assests/dollar.png')}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Cart"
          component={Cart}
          options={{
            tabBarIcon: ({focused}) => {
              return (
                <Image
                  style={{tintColor: focused ? 'red' : 'grey'}}
                  source={require('../../assests/dollar.png')}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="OrderHistory"
          component={OrderHistory}
          options={{
            tabBarIcon: ({focused}) => {
              return (
                <Image
                  style={{tintColor: focused ? 'red' : 'grey'}}
                  source={require('../../assests/dollar.png')}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Contact"
          component={Contact}
          options={{
            tabBarIcon: ({focused}) => {
              return (
                <Image
                  style={{tintColor: focused ? 'red' : 'grey'}}
                  source={require('../../assests/dollar.png')}
                />
              );
            },
          }}
        />
      </Tab.Navigator>
      {/* </NavigationContainer> */}
    </>
  );
};
export default Bottombar;

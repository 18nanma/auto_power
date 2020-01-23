/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {createAppContainer} from 'react-navigation';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';

import HomeScreen from './screens/HomeScreen';
import DeviceScreen from './screens/DeviceScreen';
import MetricsScreen from './screens/MetricsScreen';
import InfoScreen from './screens/InfoScreen';



const TabNavigator = createMaterialBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <View>
            <FontAwesome style={[{color: tintColor}]} type="Ionicons" size={25} name={'home'} />
          </View>
        ),
      }
    },
    Device: {
      screen: DeviceScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <View>
            <FontAwesome style={[{color: tintColor}]} size={25} name={'home'} />
          </View>
        ),
        activeColor: '#ffffff',
        inactiveColor: '#a3c2fa',
        barStyle: { backgroundColor: 'rgba(0, 97, 177, 1)' },
      }
    },
    Metrics: {
      screen: MetricsScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <View>
            <FontAwesome style={[{color: tintColor}]} size={25} name={'bars'} />
          </View>
        ),
        activeColor: '#ffffff',
        inactiveColor: '#92c5c2',
        barStyle: { backgroundColor: '#2c6d6a' },
      }
    },
    Info: {
      screen: InfoScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <View>
            <FontAwesome style={[{color: tintColor}]} size={25} name={'info'} />
          </View>
        ),
        activeColor: '#ffffff',
        inactiveColor: '#ebaabd',
        barStyle: { backgroundColor: 'rgba(37, 116, 169, 1)' },
      }
    },
  },
  {
    initialRouteName: 'Home',
    activeColor: '#ffffff',
    inactiveColor: '#bda1f7',
    barStyle: { backgroundColor: 'rgba(0, 114, 206, 1)' },
    showIcon: true,
  }
);

export default createAppContainer(TabNavigator);



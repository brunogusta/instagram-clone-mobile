import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import { Image, View, StyleSheet } from 'react-native';

import Feed from './pages/Feed';
import New from './pages/New';

import logo from './assets/logo.png';
import send from './assets/send.png';

export default createAppContainer(
  createStackNavigator(
    {
      Feed,
      New
    },
    {
      defaultNavigationOptions: {
        headerBackTitle: null,
        headerTintColor: '#000',
        headerTitle: <Image source={logo} style={{ marginTop: 9 }} />,
        headerRight: <Image source={send} style={{ marginRight: 20 }} />
      },
      mode: 'modal'
    }
  )
);

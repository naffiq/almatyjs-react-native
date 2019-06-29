// import React, {Component} from 'react';
import {createMaterialTopTabNavigator, createAppContainer} from 'react-navigation';

import Schedule from './src/screens/Schedule';
import InfoScreen from './src/screens/InfoScreen';
import RegisterScreen from './src/screens/RegisterScreen';

const rootNavigator = createMaterialTopTabNavigator({
  Home: {
    screen: Schedule,
    navigationOptions: {
      title: "Расписание"
    }
  },
  Info: {
    screen: InfoScreen,
    navigationOptions: {
      title: "Информация"
    }
  },
  Register: {
    screen: RegisterScreen
  }
}, {
  tabBarOptions: {
    activeTintColor: "#000000",
    inactiveTintColor: "#666666"
  }
})

export default createAppContainer(rootNavigator);


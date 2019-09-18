import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './screens/Home';
import Level1 from './screens/Level1';
import Level2 from './screens/Level2';
import Level3 from './screens/Level3';

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const RootStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Level1: {
    screen: Level1,
  },
  Level2: {
    screen: Level2,
  },
  Level3: {
    screen: Level3,
  },
});

const AppContainer = createAppContainer(RootStack);
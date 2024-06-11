import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TAB} from '../utils/routes';
import TabNavigation from './tabNavigation';
<<<<<<< HEAD
import { Text } from 'react-native';
=======
>>>>>>> 4651d54 (Initial commit)

const Stack = createNativeStackNavigator();

function RootNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={TAB} component={TabNavigation} />
    </Stack.Navigator>
  );
}

export default RootNavigation;

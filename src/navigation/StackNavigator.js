import React from 'react';
import {SCREENS} from './RoutesContants';
import IntroScreen from '../screens/IntroScreen';
import HomeScreen from '../screens/HomeScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DrawerNavigator from './DrawerNavigator';
import AttendanceScreen from '../screens/AttendanceScreen';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={SCREENS.GET_STARTED_SCREEN} component={IntroScreen} />
      <Stack.Screen name={SCREENS.HOMEPAGE_SCREEN} component={HomeScreen} />
      <Stack.Screen name={SCREENS.MAIN_SCREEN} component={DrawerNavigator} />
      <Stack.Screen
        name={SCREENS.ATTENDANCE_SCREEN}
        component={AttendanceScreen}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;

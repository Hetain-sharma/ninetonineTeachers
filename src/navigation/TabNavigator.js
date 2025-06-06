import React from 'react';
import {Platform} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import COLORS from '../constants/color';
import HomeScreen from '../screens/HomeScreen';
import StudentsScreen from '../screens/StudentScreen';
import BranchScreen from '../screens/BranchScreen';
import EarningsScreen from '../screens/EarningsScreen';
import ProfileScreen from '../screens/ProfileScreen';

// Screens

const Tab = createBottomTabNavigator();

const TABS = [
  {
    name: 'Homepage',
    component: HomeScreen,
    icon: 'home-outline',
    iconFocused: 'home',
  },
  {
    name: 'Students',
    component: StudentsScreen,
    icon: 'happy-outline',
    iconFocused: 'happy',
  },
  {
    name: 'Calender',
    component: EarningsScreen,
    icon: 'book-outline',
    iconFocused: 'book',
  },
  {
    name: 'Branch',
    component: BranchScreen,
    icon: 'phone-portrait-outline',
    iconFocused: 'phone-portrait',
  },
  {
    name: 'Profile',
    component: ProfileScreen,
    icon: 'person-add-outline',
    iconFocused: 'person-add',
  },
];

const TabNavigator = () => {
  const insets = useSafeAreaInsets();

  return (
    <Tab.Navigator
      screenOptions={({route}) => {
        const tab = TABS.find(t => t.name === route.name) || {
          icon: 'help-outline',
          iconFocused: 'help',
        };

        return {
          headerShown: false,
          tabBarIcon: ({focused, color}) => (
            <Ionicons
              name={focused ? tab.iconFocused : tab.icon}
              size={20}
              color={color}
            />
          ),
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: '600',
          },
          tabBarActiveTintColor: COLORS.primary,
          tabBarInactiveTintColor: COLORS.black,
          tabBarStyle: {
            height: Platform.OS === 'android' ? 65 : 85,
            paddingBottom:
              Platform.OS === 'android' ? insets.bottom : insets.bottom + 10,
            borderTopWidth: 1,
            borderColor: COLORS.border,
            backgroundColor: COLORS.white,
            elevation: 5,
            shadowColor: '#000',
            shadowOffset: {width: 0, height: 2},
            shadowOpacity: 0.2,
            shadowRadius: 2,
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
          },
        };
      }}>
      {TABS.map(tab => (
        <Tab.Screen key={tab.name} name={tab.name} component={tab.component} />
      ))}
    </Tab.Navigator>
  );
};

export default TabNavigator;

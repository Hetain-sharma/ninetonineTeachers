// src/screens/HomeScreen.jsx
// import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../components/RegisteredComponents/HomepageComponents/Header';
import Banner from '../components/RegisteredComponents/HomepageComponents/Banner';
import COLORS from '../constants/color';
import Heading from '../components/RegisteredComponents/HomepageComponents/Heading';
import TeachingSkills from '../components/RegisteredComponents/HomepageComponents/TeachingSkills';
import QuickAction from '../components/RegisteredComponents/HomepageComponents/QuickAction';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Classes from '../components/RegisteredComponents/HomepageComponents/Classes';
import RecentUpdates from '../components/RegisteredComponents/HomepageComponents/RecentUpdates';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <Banner />
        <TeachingSkills />
        <QuickAction />
        <Classes />
        <RecentUpdates />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 0,
  },
  content: {
    flex: 1,
    padding: 10,
    // marginBottom: 40,
  },
});
export default HomeScreen;

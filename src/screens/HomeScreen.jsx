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
  // const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <Header />

      <ScrollView style={styles.content}>
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
    marginBottom: 40,
  },

  classCard: {
    backgroundColor: '#F9FAFB',
    borderRadius: 8,
    padding: 16,
    borderLeftWidth: 4,
    borderLeftColor: '#6B46C1',
  },
  className: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#374151',
    marginBottom: 4,
  },
  classTime: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 4,
  },
  classStudents: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 12,
  },
  viewDetailsButton: {
    backgroundColor: '#6B46C1',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 6,
    alignSelf: 'flex-start',
  },
  viewDetailsText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '500',
  },
  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.03,
    shadowOffset: {width: 0, height: 1},
    shadowRadius: 3,
    elevation: 1,
    backgroundColor: COLORS.white,
    borderWidth: 0.5,
    borderColor: COLORS.border,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontWeight: '600',
    fontSize: 16,
    color: '#111827',
  },
  button: {
    backgroundColor: '#6D28D9',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '500',
    fontSize: 14,
  },
  infoRow: {
    flexDirection: 'row',
    marginTop: 12,
    gap: 16,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  infoText: {
    fontSize: 14,
    color: '#4B5563',
  },
});
export default HomeScreen;

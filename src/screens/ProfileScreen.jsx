import React from 'react';
import {View, StyleSheet, ScrollView, StatusBar} from 'react-native';
import ProfileHeader from '../components/RegisteredComponents/ProfileScreen.jsx/ProfileHeader';
import BankDetails from '../components/RegisteredComponents/ProfileScreen.jsx/BankDetails';
import Documents from '../components/RegisteredComponents/ProfileScreen.jsx/Documents';
import Settings from '../components/RegisteredComponents/ProfileScreen.jsx/Settings';
import Header from '../components/RegisteredComponents/HomepageComponents/Header';
import {SafeAreaView} from 'react-native-safe-area-context';

const ProfileScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}>
        <ProfileHeader />
        <View style={styles.content}>
          <BankDetails />
          <Documents />
          {/* <Settings /> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollView: {
    flex: 1,
    marginBottom: 40,
  },
  content: {
    padding: 10,
    gap: 10,
  },
});

export default ProfileScreen;

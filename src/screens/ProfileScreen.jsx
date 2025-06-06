import React from 'react';
import {View, StyleSheet, ScrollView, StatusBar} from 'react-native';
import ProfileHeader from '../components/RegisteredComponents/ProfileScreen.jsx/ProfileHeader';
import BankDetails from '../components/RegisteredComponents/ProfileScreen.jsx/BankDetails';
import Documents from '../components/RegisteredComponents/ProfileScreen.jsx/Documents';
import Settings from '../components/RegisteredComponents/ProfileScreen.jsx/Settings';
import Header from '../components/RegisteredComponents/HomepageComponents/Header';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';
import Branch from '../components/RegisteredComponents/ProfileScreen.jsx/Branch';

const ProfileScreen = () => {
  const insets = useSafeAreaInsets();
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ScrollView
        style={styles.content}
        contentContainerStyle={{paddingBottom: insets.bottom + 20}} // padding to avoid overlap
        showsVerticalScrollIndicator={false}>
        <ProfileHeader />
        <View style={styles.content}>
          <Branch />
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

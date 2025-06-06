import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import COLORS from '../../../constants/color';

const Settings = () => {
  const settingsItems = [
    {
      id: 1,
      title: 'Notification Settings',
      icon: '🔔',
    },
    {
      id: 2,
      title: 'Change Password',
      icon: '🔒',
    },
    {
      id: 3,
      title: 'App Preferences',
      icon: '⚙️',
    },
  ];

  const renderSettingItem = item => (
    <TouchableOpacity key={item.id} style={styles.settingItem}>
      <View style={styles.settingInfo}>
        <Text style={styles.settingIcon}>{item.icon}</Text>
        <Text style={styles.settingTitle}>{item.title}</Text>
      </View>
      <Text style={styles.arrow}>›</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.icon}>⚙️</Text>
        <Text style={styles.title}>Settings</Text>
      </View>

      <View style={styles.settingsList}>
        {settingsItems.map(renderSettingItem)}
      </View>

      <TouchableOpacity style={styles.logoutButton}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 20,
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
    alignItems: 'center',
    marginBottom: 20,
  },
  icon: {
    fontSize: 20,
    marginRight: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  settingsList: {
    gap: 4,
    marginBottom: 24,
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 4,
  },
  settingInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  settingIcon: {
    fontSize: 18,
    marginRight: 12,
  },
  settingTitle: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
  arrow: {
    fontSize: 20,
    color: '#9CA3AF',
    fontWeight: 'bold',
  },
  logoutButton: {
    backgroundColor: '#DC2626',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  logoutText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default Settings;

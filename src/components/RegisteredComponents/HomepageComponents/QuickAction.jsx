import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Heading from './Heading';
import COLORS from '../../../constants/color';
import {useNavigation} from '@react-navigation/native';

const QuickAction = () => {
  const navigation = useNavigation();

  const quickActions = [
    {
      name: 'Attendance',
      icon: 'event-available',
      color: '#EFF1FE',
      screen: 'Attendance',
    },
    {name: 'Class Notes', icon: 'note', color: '#EFF1FE', screen: 'ClassNotes'},
    {
      name: 'Gallery',
      icon: 'photo-library',
      color: '#EFF1FE',
      screen: 'Gallery',
    },
    {
      name: 'Calendar',
      icon: 'calendar-today',
      color: '#EFF1FE',
      screen: 'Calendar',
    },
    {
      name: 'Income',
      icon: 'account-balance-wallet',
      color: '#EFF1FE',
      screen: 'Income',
    },
    {
      name: 'Meetings',
      icon: 'video-call',
      color: '#EFF1FE',
      screen: 'Meetings',
    },
  ];

  return (
    <View style={styles.quickActionsSection}>
      <Heading message={'Quick Actions'} />
      <View style={styles.actionsGrid}>
        {quickActions.map((action, index) => (
          <TouchableOpacity
            key={index}
            style={styles.actionItem}
            onPress={() => navigation.navigate(action.screen)}>
            <View style={[styles.actionIcon, {backgroundColor: action.color}]}>
              <Icon name={action.icon} size={24} color={COLORS.primary} />
            </View>
            <Text style={styles.actionText}>{action.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default QuickAction;

const styles = StyleSheet.create({
  quickActionsSection: {
    marginBottom: 24,
  },
  actionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  actionItem: {
    width: '30%',
    alignItems: 'center',
    marginBottom: 20,
  },
  actionIcon: {
    width: 50,
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  actionText: {
    fontSize: 12,
    color: '#374151',
    textAlign: 'center',
  },
});

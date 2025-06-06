import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../../constants/color';
import Heading from './Heading';

const Classes = () => {
  return (
    <View style={styles.classesSection}>
      <Heading message={`Today's Classes`} />
      <View style={styles.timeSlot}>
        <Text style={styles.timeSlotTitle}>Morning</Text>
      </View>
      <View style={styles.card}>
        <View style={styles.header}>
          <Text style={styles.title}>Little Explorers</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>View Details</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.infoRow}>
          <View style={styles.infoItem}>
            <Icon name="time-outline" size={16} color="#4B5563" />
            <Text style={styles.infoText}>9:00 AM - 10:30 AM</Text>
          </View>
          <View style={styles.infoItem}>
            <Icon name="person-outline" size={16} color="#4B5563" />
            <Text style={styles.infoText}>12 students</Text>
          </View>
        </View>
      </View>
      <View style={styles.timeSlot}>
        <Text style={styles.timeSlotTitle}>Afternoon</Text>
      </View>
      <View style={styles.card}>
        <View style={styles.header}>
          <Text style={styles.title}>Little Explorers</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>View Details</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.infoRow}>
          <View style={styles.infoItem}>
            <Icon name="time-outline" size={16} color="#4B5563" />
            <Text style={styles.infoText}>9:00 AM - 10:30 AM</Text>
          </View>
          <View style={styles.infoItem}>
            <Icon name="person-outline" size={16} color="#4B5563" />
            <Text style={styles.infoText}>12 students</Text>
          </View>
        </View>
      </View>
      <View style={styles.timeSlot}>
        <Text style={styles.timeSlotTitle}>Evening</Text>
      </View>
      <View style={styles.card}>
        <View style={styles.header}>
          <Text style={styles.title}>Little Explorers</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>View Details</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.infoRow}>
          <View style={styles.infoItem}>
            <Icon name="time-outline" size={16} color="#4B5563" />
            <Text style={styles.infoText}>9:00 AM - 10:30 AM</Text>
          </View>
          <View style={styles.infoItem}>
            <Icon name="person-outline" size={16} color="#4B5563" />
            <Text style={styles.infoText}>12 students</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Classes;

const styles = StyleSheet.create({
  classesSection: {
    marginBottom: 24,
  },
  timeSlot: {
    backgroundColor: COLORS.black,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
    alignSelf: 'flex-start',
    marginBottom: 12,
  },
  timeSlotTitle: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: '500',
  },
  card: {
    backgroundColor: '#fff',
    marginBottom: 10,
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

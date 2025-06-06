import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import COLORS from '../../../constants/color';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Branch = () => {
  return (
    <View style={styles.currentBranchCard}>
      <View style={styles.currentBranchHeader}>
        <Icon name="business" size={24} color="#000" />
        <Text style={styles.currentBranchTitle}>Current Branch</Text>
      </View>
      <Text style={styles.branchName}>Sunshine Learning Center</Text>
      <Text style={styles.branchAddress}>
        123 Main Street, Downtown District
      </Text>

      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.switchButton}>
          <Text style={styles.switchButtonText}>Switch Branch</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.viewDetailsButton}>
          <Text style={styles.viewDetailsButtonText}>View Details</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Branch;

const styles = StyleSheet.create({
  currentBranchCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOpacity: 0.03,
    shadowOffset: {width: 0, height: 1},
    shadowRadius: 3,
    elevation: 1,
    backgroundColor: COLORS.white,
    borderWidth: 0.5,
    borderColor: COLORS.border,
  },
  currentBranchHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  currentBranchTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 8,
    color: '#000',
  },
  branchName: {
    fontSize: 18,
    fontWeight: '700',
    color: '#000',
    marginBottom: 4,
  },
  branchAddress: {
    fontSize: 14,
    color: COLORS.text_gray,
    marginBottom: 16,
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 12,
  },
  switchButton: {
    flex: 1,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 8,
    paddingVertical: 10,
    alignItems: 'center',
  },
  switchButtonText: {
    fontSize: 14,
    color: '#000',
    fontWeight: '500',
  },
  viewDetailsButton: {
    flex: 1,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 8,
    paddingVertical: 10,
    alignItems: 'center',
  },
  viewDetailsButtonText: {
    fontSize: 14,
    color: '#000',
    fontWeight: '500',
  },
});

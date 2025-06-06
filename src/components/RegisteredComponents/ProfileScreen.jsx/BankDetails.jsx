import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import COLORS from '../../../constants/color';

const BankDetails = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.icon}>🏦</Text>
        <Text style={styles.title}>Bank Details</Text>
      </View>

      <View style={styles.form}>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Account Name</Text>
          <TextInput
            style={styles.input}
            value="Ms. Radhika"
            editable={false}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Account Number</Text>
          <TextInput style={styles.input} value="****1234" editable={false} />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>IFSC Code</Text>
          <TextInput
            style={styles.input}
            value="BANK0001234"
            editable={false}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>UPI ID</Text>
          <TextInput
            style={styles.input}
            value="Radhika@paytm"
            editable={false}
          />
        </View>

        <TouchableOpacity style={styles.updateButton}>
          <Text style={styles.updateIcon}>✏️</Text>
          <Text style={styles.updateText}>Update Bank Details</Text>
        </TouchableOpacity>
      </View>
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
    marginBottom: 10,
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
  form: {
    gap: 16,
  },
  inputGroup: {
    gap: 8,
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 12,
    fontSize: 14,
    color: '#666',
    backgroundColor: '#F9FAFB',
  },
  updateButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F3F4F6',
    paddingVertical: 12,
    borderRadius: 8,
    marginTop: 8,
    gap: 8,
  },
  updateIcon: {
    fontSize: 16,
  },
  updateText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#374151',
  },
});

export default BankDetails;

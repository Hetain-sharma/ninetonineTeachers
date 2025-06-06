import React from 'react';
import {
  View,
  Text,
  Modal,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import COLORS from '../../../constants/color';

const {width} = Dimensions.get('window');

const ProfileEditModal = ({visible, onClose, userData}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.modalHeader}>
            <View style={styles.titleContainer}>
              <Icon name="user" size={20} color={COLORS.primary} />
              <Text style={styles.modalTitle}>Personal Information</Text>
            </View>
            <TouchableOpacity onPress={onClose}>
              <Icon name="x" size={24} color={COLORS.primary} />
            </TouchableOpacity>
          </View>

          <ScrollView
            style={styles.detailsContainer}
            showsVerticalScrollIndicator={false}>
            <View style={styles.detailItem}>
              <Text style={styles.label}>Teacher ID</Text>
              <View style={styles.valueContainer}>
                <Text style={styles.value}>{userData.teacherId}</Text>
              </View>
            </View>

            <View style={styles.detailItem}>
              <Text style={styles.label}>Full Name</Text>
              <View style={styles.valueContainer}>
                <Text style={styles.value}>{userData.fullName}</Text>
              </View>
            </View>

            <View style={styles.detailItem}>
              <Text style={styles.label}>Email</Text>
              <View style={styles.valueContainer}>
                <Text style={styles.value}>{userData.email}</Text>
              </View>
            </View>

            <View style={styles.detailItem}>
              <Text style={styles.label}>Phone</Text>
              <View style={styles.valueContainer}>
                <Text style={styles.value}>{userData.phone}</Text>
              </View>
            </View>

            <View style={styles.detailItem}>
              <Text style={styles.label}>Qualification</Text>
              <View style={styles.valueContainer}>
                <Text style={styles.value}>{userData.qualification}</Text>
              </View>
            </View>

            <View style={styles.detailItem}>
              <Text style={styles.label}>Experience</Text>
              <View style={styles.valueContainer}>
                <Text style={styles.value}>{userData.experience}</Text>
              </View>
            </View>

            <View style={styles.detailItem}>
              <Text style={styles.label}>Certification Status</Text>
              <View style={styles.valueContainer}>
                <View style={styles.certificationBadge}>
                  <Icon name="check-circle" size={16} color="#4CAF50" />
                  <Text style={styles.certificationText}>
                    {userData.certification}
                  </Text>
                </View>
              </View>
            </View>

            <View style={styles.detailItem}>
              <Text style={styles.label}>Address</Text>
              <View style={styles.valueContainer}>
                <Text style={styles.value}>{userData.address}</Text>
              </View>
            </View>

            <View style={styles.detailItem}>
              <Text style={styles.label}>Department</Text>
              <View style={styles.valueContainer}>
                <Text style={styles.value}>{userData.department}</Text>
              </View>
            </View>

            <View style={styles.detailItem}>
              <Text style={styles.label}>Joining Date</Text>
              <View style={styles.valueContainer}>
                <Text style={styles.value}>{userData.joiningDate}</Text>
              </View>
            </View>
          </ScrollView>

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.closeButton} onPress={onClose}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    width: width * 0.9,
    maxHeight: '85%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 8,
    color: COLORS.primary,
  },
  detailsContainer: {
    maxHeight: '75%',
  },
  detailItem: {
    marginBottom: 18,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 8,
    color: '#666',
  },
  valueContainer: {
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
    padding: 12,
    borderWidth: 1,
    borderColor: '#e9ecef',
  },
  value: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
  certificationBadge: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  certificationText: {
    fontSize: 16,
    color: '#4CAF50',
    fontWeight: '600',
    marginLeft: 6,
  },
  buttonContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  closeButton: {
    backgroundColor: COLORS.primary,
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 40,
    elevation: 2,
  },
  closeButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default ProfileEditModal;

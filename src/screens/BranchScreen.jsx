import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  StatusBar,
  Dimensions,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Header from '../components/RegisteredComponents/HomepageComponents/Header';
import Heading from '../components/RegisteredComponents/HomepageComponents/Heading';
import COLORS from '../constants/color';

const {width} = Dimensions.get('window');

const BranchScreen = () => {
  const [searchText, setSearchText] = useState('');

  const availableOpenings = [
    {
      id: 1,
      name: 'Sunshine Learning Center',
      address: '123 Main Street, Downtown District',
      students: 45,
      timing: 'Morning & Afternoon',
      price: '₹2,800',
      openings: 3,
    },
    {
      id: 2,
      name: 'Sunshine Learning Center',
      address: '123 Main Street, Downtown District',
      students: 45,
      timing: 'Morning & Afternoon',
      price: '₹2,800',
      openings: 3,
    },
    {
      id: 3,
      name: 'Sunshine Learning Center',
      address: '123 Main Street, Downtown District',
      students: 45,
      timing: 'Morning & Afternoon',
      price: '₹2,800',
      openings: 3,
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <Header />

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Current Branch Section */}
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

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <Icon
            name="search"
            size={20}
            color="#999"
            style={styles.searchIcon}
          />
          <TextInput
            style={styles.searchInput}
            placeholder="search branches by name or location..."
            value={searchText}
            onChangeText={setSearchText}
            placeholderTextColor="#999"
          />
        </View>

        {/* Available Openings */}
        <Heading message={'Available Openings'} />

        {availableOpenings.map(opening => (
          <View key={opening.id} style={styles.openingCard}>
            <Text style={styles.openingName}>{opening.name}</Text>
            <Text style={styles.openingAddress}>{opening.address}</Text>

            <View style={styles.openingDetails}>
              <View style={styles.detailRow}>
                <Icon name="person" size={16} color="#666" />
                <Text style={styles.detailText}>
                  {opening.students} students
                </Text>
              </View>
              <View style={styles.detailRow}>
                <Icon name="access-time" size={16} color="#666" />
                <Text style={styles.detailText}>{opening.timing}</Text>
              </View>
            </View>

            <View style={styles.priceRow}>
              <View>
                <Text style={styles.priceText}>
                  {opening.price}/per classes
                </Text>
                <Text style={styles.openingsText}>
                  {opening.openings} openings available
                </Text>
              </View>
              <TouchableOpacity style={styles.applyButton}>
                <Text style={styles.applyButtonText}>Apply Now</Text>
              </TouchableOpacity>
            </View>

            {/* <View style={styles.actionButtons}>
              <TouchableOpacity style={styles.callButton}>
                <Icon name="phone" size={20} color="#4CAF50" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.infoButton}>
                <Icon name="info" size={20} color="#2196F3" />
              </TouchableOpacity>
            </View> */}
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#fff',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 12,
    color: '#000',
  },
  notificationIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#6B46C1',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    paddingHorizontal: 10,
    marginBottom: 40,
  },
  currentBranchCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginTop: 16,
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
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginVertical: 16,
    shadowColor: '#000',
    shadowOpacity: 0.03,
    shadowOffset: {width: 0, height: 1},
    shadowRadius: 3,
    elevation: 1,
    backgroundColor: COLORS.white,
    borderWidth: 0.5,
    borderColor: COLORS.border,
  },
  searchIcon: {
    marginRight: 12,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: COLORS.text_gray,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#000',
    marginTop: 24,
    marginBottom: 16,
  },
  openingCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.03,
    shadowOffset: {width: 0, height: 1},
    shadowRadius: 3,
    elevation: 1,
    backgroundColor: COLORS.white,
    borderWidth: 0.5,
    borderColor: COLORS.border,
  },
  openingName: {
    fontSize: 16,
    fontWeight: '700',
    color: '#000',
    marginBottom: 4,
  },
  openingAddress: {
    fontSize: 14,
    color: COLORS.text_gray,
    marginBottom: 12,
  },
  openingDetails: {
    flexDirection: 'row',
    gap: 20,
    marginBottom: 12,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  detailText: {
    fontSize: 14,
    color: COLORS.text_gray,
    marginLeft: 4,
  },
  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  priceText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000',
  },
  openingsText: {
    fontSize: 12,
    color: COLORS.text_gray,
  },
  applyButton: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 6,
  },
  applyButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  actionButtons: {
    flexDirection: 'row',
    gap: 12,
  },
  callButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#E8F5E8',
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#E3F2FD',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default BranchScreen;

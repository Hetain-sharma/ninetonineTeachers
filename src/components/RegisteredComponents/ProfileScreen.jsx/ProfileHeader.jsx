import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import AssetsStock from '../../../constants/ImagesContants';
import COLORS from '../../../constants/color';
import Icon from 'react-native-vector-icons/Feather';

const {width} = Dimensions.get('window');

const ProfileHeader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.profileInfo}>
          <Image source={AssetsStock.profile} style={styles.profileImage} />
          <View style={styles.textContainer}>
            <Text style={styles.name}>Ms. Radhika</Text>
            <Text style={styles.subtitle}>Childhood Educator</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.editButton}>
          <Icon name="edit" size={24} color={COLORS.white} />
        </TouchableOpacity>
      </View>

      <View style={styles.badgeContainer}>
        <View style={styles.idBadge}>
          <Text style={styles.idText}>ID: TCH001</Text>
        </View>
      </View>

      <View style={styles.tagsContainer}>
        <View style={styles.tag}>
          <Text style={styles.tagText}>5 Years Experience</Text>
        </View>
        <View style={styles.tag}>
          <Text style={styles.tagText}>Certified</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: 20,
    padding: 20,
    marginHorizontal: 10,
    borderRadius: 12,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  profileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
    backgroundColor: '#ffffff',
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.8)',
  },
  editButton: {
    padding: 8,
  },
  editIcon: {
    fontSize: 18,
    color: 'white',
  },
  badgeContainer: {
    marginBottom: 16,
  },
  idBadge: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    alignSelf: 'flex-start',
  },
  idText: {
    color: 'white',
    fontSize: 12,
    fontWeight: '500',
  },
  tagsContainer: {
    flexDirection: 'row',
    gap: 12,
  },
  tag: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  tagText: {
    color: 'white',
    fontSize: 12,
    fontWeight: '500',
  },
});

export default ProfileHeader;

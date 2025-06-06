// import React from 'react';
// import {
//   View,
//   Text,
//   Image,
//   StyleSheet,
//   TouchableOpacity,
//   Dimensions,
// } from 'react-native';
// import AssetsStock from '../../../constants/ImagesContants';
// import COLORS from '../../../constants/color';
// import Icon from 'react-native-vector-icons/Feather';

// const {width} = Dimensions.get('window');

// const ProfileHeader = () => {
//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <View style={styles.profileInfo}>
//           <Image source={AssetsStock.profile} style={styles.profileImage} />
//           <View style={styles.textContainer}>
//             <Text style={styles.name}>Ms. Radhika</Text>
//             <Text style={styles.subtitle}>Childhood Educator</Text>
//           </View>
//         </View>
//         <TouchableOpacity style={styles.editButton}>
//           <Icon name="edit" size={24} color={COLORS.white} />
//         </TouchableOpacity>
//       </View>

//       <View style={styles.badgeContainer}>
//         <View style={styles.idBadge}>
//           <Text style={styles.idText}>ID: TCH001</Text>
//         </View>
//       </View>

//       <View style={styles.tagsContainer}>
//         <View style={styles.tag}>
//           <Text style={styles.tagText}>5 Years Experience</Text>
//         </View>
//         <View style={styles.tag}>
//           <Text style={styles.tagText}>Certified</Text>
//         </View>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: COLORS.primary,
//     paddingHorizontal: 20,
//     padding: 20,
//     marginHorizontal: 10,
//     borderRadius: 12,
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'flex-start',
//     marginBottom: 16,
//   },
//   profileInfo: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     flex: 1,
//   },
//   profileImage: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//     marginRight: 12,
//     backgroundColor: '#ffffff',
//   },
//   textContainer: {
//     flex: 1,
//   },
//   name: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: 'white',
//     marginBottom: 4,
//   },
//   subtitle: {
//     fontSize: 14,
//     color: 'rgba(255, 255, 255, 0.8)',
//   },
//   editButton: {
//     padding: 8,
//   },
//   editIcon: {
//     fontSize: 18,
//     color: 'white',
//   },
//   badgeContainer: {
//     marginBottom: 16,
//   },
//   idBadge: {
//     backgroundColor: 'rgba(255, 255, 255, 0.2)',
//     paddingHorizontal: 12,
//     paddingVertical: 6,
//     borderRadius: 16,
//     alignSelf: 'flex-start',
//   },
//   idText: {
//     color: 'white',
//     fontSize: 12,
//     fontWeight: '500',
//   },
//   tagsContainer: {
//     flexDirection: 'row',
//     gap: 12,
//   },
//   tag: {
//     backgroundColor: 'rgba(255, 255, 255, 0.2)',
//     paddingHorizontal: 16,
//     paddingVertical: 8,
//     borderRadius: 20,
//   },
//   tagText: {
//     color: 'white',
//     fontSize: 12,
//     fontWeight: '500',
//   },
// });

// export default ProfileHeader;
import React, {useState} from 'react';
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
import Icon from 'react-native-vector-icons/FontAwesome5';
import ProfileEditModal from './ProfileEditModal';

const {width} = Dimensions.get('window');

const ProfileHeader = () => {
  const [modalVisible, setModalVisible] = useState(false);

  // Predefined teacher data for viewing only
  const teacherData = {
    teacherId: 'TCH001',
    fullName: 'Ms. Radhika Sharma',
    email: 'radhika.sharma@school.edu',
    phone: '+91 9876543210',
    qualification: 'B.Ed in Early Childhood Education',
    experience: '5 Years Experience',
    certification: 'Certified',
    address: '123 Teachers Colony, Education City, Mumbai - 400001',
    department: 'Early Childhood Education',
    joiningDate: 'January 15, 2019',
    role: 'Childhood Educator',
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.profileInfo}>
          <Image source={AssetsStock.profile} style={styles.profileImage} />
          <View style={styles.textContainer}>
            <Text style={styles.name}>{teacherData.fullName}</Text>
            <Text style={styles.subtitle}>{teacherData.role}</Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.editButton}
          onPress={() => setModalVisible(true)}>
          <Icon name="user-circle" size={24} color={COLORS.white} />
        </TouchableOpacity>
      </View>

      <View style={styles.badgeContainer}>
        <View style={styles.idBadge}>
          <Text style={styles.idText}>ID: {teacherData.teacherId}</Text>
        </View>
      </View>

      <View style={styles.tagsContainer}>
        <View style={styles.tag}>
          <Text style={styles.tagText}>{teacherData.experience}</Text>
        </View>
        <View style={styles.tag}>
          <Text style={styles.tagText}>{teacherData.certification}</Text>
        </View>
      </View>

      <ProfileEditModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        userData={teacherData}
      />
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

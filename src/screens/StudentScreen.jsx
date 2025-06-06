// import {useState} from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   ScrollView,
//   TouchableOpacity,
//   Image,
//   Dimensions,
//   Modal,
//   TextInput,
//   Alert,
//   ActivityIndicator,
// } from 'react-native';
// import {SafeAreaView} from 'react-native-safe-area-context';
// import Icon from 'react-native-vector-icons/MaterialIcons';
// import {Picker} from '@react-native-picker/picker';
// import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
// import Header from '../components/RegisteredComponents/HomepageComponents/Header';
// import COLORS from '../constants/color';
// import AssetsStock from '../constants/ImagesContants';
// import {useSafeAreaInsets} from 'react-native-safe-area-context';

// const {width} = Dimensions.get('window');

// const StudentsScreen = () => {
//   const [selectedStudentCount, setSelectedStudentCount] =
//     useState('12 students');
//   const [modalVisible, setModalVisible] = useState(false);
//   const [imagePickerModalVisible, setImagePickerModalVisible] = useState(false);
//   const [selectedStudent, setSelectedStudent] = useState(null);
//   const [isUploading, setIsUploading] = useState(false);
//   const [remarkData, setRemarkData] = useState({
//     motorSkills: 1,
//     language: 1,
//     cognitive: 1,
//     emotional: 1,
//     social: 1,
//     notes: '',
//     imageUrl: '',
//     imageSource: null,
//   });
//   const insets = useSafeAreaInsets();
//   const students = [
//     {
//       id: 1,
//       name: 'Aarav Mehta',
//       age: 'Age : 2-5 year',
//       avatar: 'https://via.placeholder.com/40',
//     },
//     {
//       id: 2,
//       name: 'Myra Sharma',
//       age: 'Age : 2-5 year',
//       avatar: 'https://via.placeholder.com/40',
//     },
//     {
//       id: 3,
//       name: 'Vihaan Patel',
//       age: 'Age : 2-5 year',
//       avatar: 'https://via.placeholder.com/40',
//     },
//     {
//       id: 4,
//       name: 'Anaya Gupta',
//       age: 'Age : 2-5 year',
//       avatar: 'https://via.placeholder.com/40',
//     },
//     {
//       id: 5,
//       name: 'Ishaan Singh',
//       age: 'Age : 2-5 year',
//       avatar: 'https://via.placeholder.com/40',
//     },
//     {
//       id: 6,
//       name: 'Kiara Jain',
//       age: 'Age : 2-5 year',
//       avatar: 'https://via.placeholder.com/40',
//     },
//   ];

//   const learningGoals = [
//     {key: 'motorSkills', label: 'Motor Skills'},
//     {key: 'language', label: 'Language'},
//     {key: 'cognitive', label: 'Cognitive'},
//     {key: 'emotional', label: 'Emotional'},
//     {key: 'social', label: 'Social'},
//   ];

//   const openRemarkModal = student => {
//     setSelectedStudent(student);
//     setModalVisible(true);
//     // Reset form data
//     setRemarkData({
//       motorSkills: 1,
//       language: 1,
//       cognitive: 1,
//       emotional: 1,
//       social: 1,
//       notes: '',
//       imageUrl: '',
//       imageSource: null,
//     });
//   };

//   // Function to open image picker modal
//   const openImagePickerModal = () => {
//     setImagePickerModalVisible(true);
//   };

//   // Function to take a photo with camera
//   const takePhoto = async () => {
//     setImagePickerModalVisible(false);
//     setIsUploading(true);

//     const options = {
//       mediaType: 'photo',
//       quality: 0.8,
//       saveToPhotos: true,
//     };

//     try {
//       const result = await launchCamera(options);

//       if (result.didCancel) {
//         console.log('User cancelled camera picker');
//         setIsUploading(false);
//         return;
//       }

//       if (result.errorCode) {
//         console.log('Camera Error: ', result.errorMessage);
//         Alert.alert('Error', 'Failed to take photo. Please try again.');
//         setIsUploading(false);
//         return;
//       }

//       // Process the captured image
//       const imageUri = result.assets[0].uri;
//       const fileName = imageUri.split('/').pop();

//       // Simulate upload to server
//       setTimeout(() => {
//         setRemarkData(prev => ({
//           ...prev,
//           imageUrl: imageUri,
//           imageSource: {uri: imageUri},
//         }));
//         setIsUploading(false);
//       }, 1000);
//     } catch (error) {
//       console.log('Error taking photo:', error);
//       Alert.alert('Error', 'Failed to take photo. Please try again.');
//       setIsUploading(false);
//     }
//   };

//   // Function to select from gallery
//   const selectFromGallery = async () => {
//     setImagePickerModalVisible(false);
//     setIsUploading(true);

//     const options = {
//       mediaType: 'photo',
//       quality: 0.8,
//       selectionLimit: 1,
//     };

//     try {
//       const result = await launchImageLibrary(options);

//       if (result.didCancel) {
//         console.log('User cancelled gallery picker');
//         setIsUploading(false);
//         return;
//       }

//       if (result.errorCode) {
//         console.log('Gallery Error: ', result.errorMessage);
//         Alert.alert('Error', 'Failed to select image. Please try again.');
//         setIsUploading(false);
//         return;
//       }

//       // Process the selected image
//       const imageUri = result.assets[0].uri;
//       const fileName = imageUri.split('/').pop();

//       // Simulate upload to server
//       setTimeout(() => {
//         setRemarkData(prev => ({
//           ...prev,
//           imageUrl: imageUri,
//           imageSource: {uri: imageUri},
//         }));
//         setIsUploading(false);
//       }, 1000);
//     } catch (error) {
//       console.log('Error selecting image:', error);
//       Alert.alert('Error', 'Failed to select image. Please try again.');
//       setIsUploading(false);
//     }
//   };

//   const handleSubmit = () => {
//     const response = {
//       studentId: selectedStudent.id,
//       studentName: selectedStudent.name,
//       learningGoals: {
//         motorSkills: remarkData.motorSkills,
//         language: remarkData.language,
//         cognitive: remarkData.cognitive,
//         emotional: remarkData.emotional,
//         social: remarkData.social,
//       },
//       completionPercentages: {
//         motorSkills: `${remarkData.motorSkills * 10}%`,
//         language: `${remarkData.language * 10}%`,
//         cognitive: `${remarkData.cognitive * 10}%`,
//         emotional: `${remarkData.emotional * 10}%`,
//         social: `${remarkData.social * 10}%`,
//       },
//       notes: remarkData.notes,
//       imageUrl: remarkData.imageUrl,
//       timestamp: new Date().toISOString(),
//     };

//     console.log('Remark Response:', response);

//     // Close modal
//     setModalVisible(false);
//     setSelectedStudent(null);

//     Alert.alert('Success', 'Remark submitted successfully!');
//   };

//   const renderDropdown = (goalKey, label) => (
//     <View style={styles.goalContainer} key={goalKey}>
//       <Text style={styles.goalLabel}>{label}</Text>
//       <View style={styles.pickerContainer}>
//         <Picker
//           selectedValue={remarkData[goalKey]}
//           onValueChange={value =>
//             setRemarkData(prev => ({...prev, [goalKey]: value}))
//           }
//           style={styles.picker}>
//           {[...Array(10)].map((_, index) => (
//             <Picker.Item
//               key={index + 1}
//               label={`${index + 1}`}
//               value={index + 1}
//             />
//           ))}
//         </Picker>
//       </View>
//       <Text style={styles.percentageText}>
//         {remarkData[goalKey] * 10}% Complete
//       </Text>
//     </View>
//   );

//   return (
//     <SafeAreaView style={styles.container}>
//       <Header />

//       <ScrollView
//         style={styles.content}
//         contentContainerStyle={{paddingBottom: insets.bottom + 20}} // padding to avoid overlap
//         showsVerticalScrollIndicator={false}>
//         {/* My Classes Section */}
//         <View style={styles.myClassesHeader}>
//           <View>
//             <Text style={styles.myClassesTitle}>My Classes</Text>
//             <Text style={styles.myClassesSubtitle}>
//               Manage your daily classes
//             </Text>
//           </View>
//           <TouchableOpacity style={styles.addClassButton}>
//             <Icon name="add" size={16} color="#fff" />
//             <Text style={styles.addClassButtonText}>Add Class</Text>
//           </TouchableOpacity>
//         </View>

//         {/* Class Card */}
//         <View style={styles.classCard}>
//           <View style={styles.classHeader}>
//             <View style={styles.classInfo}>
//               <Text style={styles.className}>Little Explorers</Text>
//               <View style={styles.classTime}>
//                 <Icon name="access-time" size={16} color="#666" />
//                 <Text style={styles.classTimeText}>9:00 AM - 10:30 AM</Text>
//               </View>
//             </View>
//             <TouchableOpacity style={styles.studentCountButton}>
//               <Text style={styles.studentCountText}>
//                 {selectedStudentCount}
//               </Text>
//               <Icon name="keyboard-arrow-down" size={20} color="#666" />
//             </TouchableOpacity>
//           </View>

//           {/* Students Section */}
//           <Text style={styles.studentsTitle}>Students</Text>

//           {students.map(student => (
//             <View key={student.id} style={styles.studentRow}>
//               <View style={styles.studentInfo}>
//                 <View style={styles.avatarContainer}>
//                   <Image source={AssetsStock.profile} style={styles.avatar} />
//                 </View>
//                 <View style={styles.studentDetails}>
//                   <Text style={styles.studentName}>{student.name}</Text>
//                   <Text style={styles.studentAge}>{student.age}</Text>
//                 </View>
//               </View>
//               <TouchableOpacity
//                 style={styles.addRemarkButton}
//                 onPress={() => openRemarkModal(student)}>
//                 <Icon name="chat-bubble-outline" size={16} color="#666" />
//                 <Text style={styles.addRemarkText}>Add Remark</Text>
//               </TouchableOpacity>
//             </View>
//           ))}
//         </View>
//       </ScrollView>

//       {/* Remark Modal */}
//       <Modal
//         animationType="slide"
//         transparent={true}
//         visible={modalVisible}
//         onRequestClose={() => setModalVisible(false)}>
//         <View style={styles.modalOverlay}>
//           <View style={styles.modalContainer}>
//             <View style={styles.modalHeader}>
//               <Text style={styles.modalTitle}>
//                 Add Remark for {selectedStudent?.name}
//               </Text>
//               <TouchableOpacity
//                 style={styles.uploadButton}
//                 onPress={openImagePickerModal}
//                 disabled={isUploading}>
//                 <Icon name="photo-camera" size={16} color={COLORS.primary} />
//                 <Text style={styles.uploadButtonText}>
//                   {isUploading ? 'Uploading...' : 'Add Photo'}
//                 </Text>
//               </TouchableOpacity>
//             </View>

//             <ScrollView
//               style={styles.modalContent}
//               showsVerticalScrollIndicator={false}
//               contentContainerStyle={{paddingBottom: 20}}>
//               <Text style={styles.sectionTitle}>Learning Goals Assessment</Text>

//               {learningGoals.map(goal => renderDropdown(goal.key, goal.label))}

//               <Text style={styles.sectionTitle}>Teacher Notes</Text>
//               <TextInput
//                 style={styles.notesInput}
//                 placeholder="Write detailed notes about the student's progress, behavior, and any observations..."
//                 multiline={true}
//                 numberOfLines={5}
//                 value={remarkData.notes}
//                 onChangeText={text =>
//                   setRemarkData(prev => ({...prev, notes: text}))
//                 }
//                 textAlignVertical="top"
//               />

//               {isUploading ? (
//                 <View style={styles.uploadingContainer}>
//                   <ActivityIndicator size="small" color={COLORS.primary} />
//                   <Text style={styles.uploadingText}>Uploading image...</Text>
//                 </View>
//               ) : remarkData.imageSource ? (
//                 <View style={styles.imageContainer}>
//                   <Image
//                     source={remarkData.imageSource}
//                     style={styles.previewImage}
//                     resizeMode="cover"
//                   />
//                   <TouchableOpacity
//                     style={styles.removeImageButton}
//                     onPress={() =>
//                       setRemarkData(prev => ({
//                         ...prev,
//                         imageUrl: '',
//                         imageSource: null,
//                       }))
//                     }>
//                     <Icon name="close" size={16} color="#fff" />
//                   </TouchableOpacity>
//                 </View>
//               ) : null}
//             </ScrollView>

//             <View style={styles.modalFooter}>
//               <TouchableOpacity
//                 style={styles.cancelButton}
//                 onPress={() => setModalVisible(false)}>
//                 <Text style={styles.cancelButtonText}>Cancel</Text>
//               </TouchableOpacity>
//               <TouchableOpacity
//                 style={[styles.submitButton, isUploading && {opacity: 0.7}]}
//                 onPress={handleSubmit}
//                 disabled={isUploading}>
//                 <Text style={styles.submitButtonText}>Submit Remark</Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         </View>
//       </Modal>

//       {/* Image Picker Modal */}
//       <Modal
//         animationType="slide"
//         transparent={true}
//         visible={imagePickerModalVisible}
//         onRequestClose={() => setImagePickerModalVisible(false)}>
//         <TouchableOpacity
//           style={styles.imagePickerOverlay}
//           activeOpacity={1}
//           onPress={() => setImagePickerModalVisible(false)}>
//           <View style={styles.imagePickerContainer}>
//             <Text style={styles.imagePickerTitle}>Select Photo</Text>

//             <TouchableOpacity
//               style={styles.imagePickerOption}
//               onPress={takePhoto}>
//               <Icon name="camera-alt" size={24} color={COLORS.primary} />
//               <Text style={styles.imagePickerOptionText}>Take Photo</Text>
//             </TouchableOpacity>

//             <TouchableOpacity
//               style={styles.imagePickerOption}
//               onPress={selectFromGallery}>
//               <Icon name="photo-library" size={24} color={COLORS.primary} />
//               <Text style={styles.imagePickerOptionText}>
//                 Choose from Gallery
//               </Text>
//             </TouchableOpacity>

//             <TouchableOpacity
//               style={styles.imagePickerCancelButton}
//               onPress={() => setImagePickerModalVisible(false)}>
//               <Text style={styles.imagePickerCancelText}>Cancel</Text>
//             </TouchableOpacity>
//           </View>
//         </TouchableOpacity>
//       </Modal>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#FFFFFF',
//   },
//   content: {
//     flex: 1,
//     paddingHorizontal: 10,
//   },
//   myClassesHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginTop: 10,
//     marginBottom: 16,
//     paddingHorizontal: 14,
//   },
//   myClassesTitle: {
//     fontSize: 16,
//     fontWeight: '700',
//     color: '#000',
//   },
//   myClassesSubtitle: {
//     fontSize: 12,
//     color: '#666',
//     marginTop: 2,
//   },
//   addClassButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: COLORS.primary,
//     paddingHorizontal: 12,
//     paddingVertical: 8,
//     borderRadius: 6,
//     gap: 4,
//   },
//   addClassButtonText: {
//     color: '#fff',
//     fontSize: 12,
//     fontWeight: '600',
//   },
//   classCard: {
//     backgroundColor: '#fff',
//     borderRadius: 12,
//     padding: 16,
//     elevation: 2,
//     shadowColor: '#000',
//     shadowOffset: {width: 0, height: 2},
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//   },
//   classHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'flex-start',
//     marginBottom: 20,
//   },
//   classInfo: {
//     flex: 1,
//   },
//   className: {
//     fontSize: 16,
//     fontWeight: '700',
//     color: '#000',
//     marginBottom: 8,
//   },
//   classTime: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   classTimeText: {
//     fontSize: 14,
//     color: COLORS.text_gray,
//     marginLeft: 4,
//   },
//   studentCountButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     borderWidth: 1,
//     borderColor: '#ddd',
//     borderRadius: 6,
//     paddingHorizontal: 12,
//     paddingVertical: 6,
//   },
//   studentCountText: {
//     fontSize: 12,
//     color: COLORS.text_gray,
//     marginRight: 4,
//     fontWeight: '600',
//   },
//   studentsTitle: {
//     fontSize: 14,
//     fontWeight: '600',
//     color: '#000',
//     marginBottom: 16,
//   },
//   studentRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingVertical: 12,
//     borderBottomWidth: 1,
//     borderBottomColor: '#f0f0f0',
//   },
//   studentInfo: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     flex: 1,
//   },
//   avatarContainer: {
//     width: 40,
//     height: 40,
//     borderRadius: 20,
//     overflow: 'hidden',
//     marginRight: 12,
//   },
//   avatar: {
//     width: '100%',
//     height: '100%',
//     backgroundColor: '#ddd',
//   },
//   studentDetails: {
//     flex: 1,
//   },
//   studentName: {
//     fontSize: 14,
//     fontWeight: '600',
//     color: '#000',
//   },
//   studentAge: {
//     fontSize: 14,
//     color: COLORS.text_gray,
//     marginTop: 2,
//   },
//   addRemarkButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     borderWidth: 1,
//     borderColor: '#ddd',
//     borderRadius: 6,
//     paddingHorizontal: 12,
//     paddingVertical: 6,
//     gap: 4,
//   },
//   addRemarkText: {
//     fontSize: 12,
//     color: COLORS.text_gray,
//   },
//   // Modal Styles
//   modalOverlay: {
//     flex: 1,
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingHorizontal: 20,
//     paddingVertical: 40,
//   },
//   modalContainer: {
//     backgroundColor: '#fff',
//     borderRadius: 12,
//     width: '100%',
//     height: '90%',
//     elevation: 5,
//     shadowColor: '#000',
//     shadowOffset: {width: 0, height: 2},
//     shadowOpacity: 0.25,
//     shadowRadius: 4,
//   },
//   modalHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     padding: 16,
//     borderBottomWidth: 1,
//     borderBottomColor: '#f0f0f0',
//     backgroundColor: '#fff',
//     borderTopLeftRadius: 12,
//     borderTopRightRadius: 12,
//   },
//   modalTitle: {
//     fontSize: 16,
//     fontWeight: '700',
//     color: '#000',
//     flex: 1,
//     marginRight: 10,
//   },
//   uploadButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#f8f9fa',
//     paddingHorizontal: 10,
//     paddingVertical: 6,
//     borderRadius: 6,
//     gap: 4,
//     borderWidth: 1,
//     borderColor: '#e9ecef',
//   },
//   uploadButtonText: {
//     fontSize: 11,
//     color: COLORS.primary,
//     fontWeight: '600',
//   },
//   modalContent: {
//     flex: 1,
//     padding: 16,
//   },
//   sectionTitle: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#000',
//     marginBottom: 12,
//     marginTop: 8,
//   },
//   goalContainer: {
//     marginBottom: 16,
//     backgroundColor: '#f8f9fa',
//     padding: 12,
//     borderRadius: 8,
//     borderWidth: 1,
//     borderColor: '#e9ecef',
//   },
//   goalLabel: {
//     fontSize: 14,
//     fontWeight: '600',
//     color: '#000',
//     marginBottom: 8,
//   },
//   pickerContainer: {
//     borderWidth: 1,
//     borderColor: '#ddd',
//     borderRadius: 6,
//     marginBottom: 4,
//     backgroundColor: '#fff',
//   },
//   picker: {
//     height: 50,
//   },
//   percentageText: {
//     fontSize: 12,
//     color: COLORS.primary,
//     fontWeight: '600',
//     textAlign: 'right',
//   },
//   notesInput: {
//     borderWidth: 1,
//     borderColor: '#ddd',
//     borderRadius: 8,
//     padding: 12,
//     textAlignVertical: 'top',
//     fontSize: 14,
//     minHeight: 100,
//     maxHeight: 120,
//     backgroundColor: '#fff',
//     marginBottom: 12,
//   },
//   uploadingContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#f8f9fa',
//     padding: 12,
//     borderRadius: 6,
//     marginTop: 8,
//     justifyContent: 'center',
//   },
//   uploadingText: {
//     fontSize: 12,
//     color: '#666',
//     marginLeft: 8,
//   },
//   imageContainer: {
//     marginTop: 16,
//     borderRadius: 8,
//     overflow: 'hidden',
//     position: 'relative',
//   },
//   previewImage: {
//     width: '100%',
//     height: 200,
//     borderRadius: 8,
//   },
//   removeImageButton: {
//     position: 'absolute',
//     top: 8,
//     right: 8,
//     backgroundColor: 'rgba(0, 0, 0, 0.6)',
//     width: 24,
//     height: 24,
//     borderRadius: 12,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   modalFooter: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     padding: 16,
//     borderTopWidth: 1,
//     borderTopColor: '#f0f0f0',
//     gap: 12,
//     backgroundColor: '#fff',
//     borderBottomLeftRadius: 12,
//     borderBottomRightRadius: 12,
//   },
//   cancelButton: {
//     flex: 1,
//     paddingVertical: 12,
//     borderRadius: 8,
//     borderWidth: 1,
//     borderColor: '#ddd',
//     alignItems: 'center',
//     backgroundColor: '#f8f9fa',
//   },
//   cancelButtonText: {
//     fontSize: 14,
//     color: '#666',
//     fontWeight: '600',
//   },
//   submitButton: {
//     flex: 1,
//     paddingVertical: 12,
//     borderRadius: 8,
//     backgroundColor: COLORS.primary,
//     alignItems: 'center',
//     elevation: 2,
//     shadowColor: '#000',
//     shadowOffset: {width: 0, height: 1},
//     shadowOpacity: 0.2,
//     shadowRadius: 2,
//   },
//   submitButtonText: {
//     fontSize: 14,
//     color: '#fff',
//     fontWeight: '600',
//   },
//   // Image Picker Modal Styles
//   imagePickerOverlay: {
//     flex: 1,
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//     justifyContent: 'flex-end',
//     paddingBottom: 0, // Remove any bottom padding
//   },
//   imagePickerContainer: {
//     backgroundColor: '#fff',
//     borderTopLeftRadius: 20,
//     borderTopRightRadius: 20,
//     paddingTop: 20,
//     paddingHorizontal: 20,
//     paddingBottom: 40, // Add extra bottom padding for safe area
//     minHeight: 250, // Ensure minimum height
//     maxHeight: 400, // Prevent it from being too tall
//   },
//   imagePickerTitle: {
//     fontSize: 18,
//     fontWeight: '600',
//     color: '#000',
//     marginBottom: 24,
//     textAlign: 'center',
//   },
//   imagePickerOption: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingVertical: 18,
//     paddingHorizontal: 4,
//     borderBottomWidth: 1,
//     borderBottomColor: '#f0f0f0',
//   },
//   imagePickerOptionText: {
//     fontSize: 16,
//     color: '#000',
//     marginLeft: 16,
//     fontWeight: '500',
//   },
//   imagePickerCancelButton: {
//     marginTop: 20,
//     paddingVertical: 16,
//     alignItems: 'center',
//     backgroundColor: '#f8f9fa',
//     borderRadius: 10,
//     borderWidth: 1,
//     borderColor: '#e9ecef',
//   },
//   imagePickerCancelText: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: COLORS.primary,
//   },
//   imagePickerHandle: {
//     alignItems: 'center',
//     paddingVertical: 8,
//   },
//   handleBar: {
//     width: 40,
//     height: 4,
//     backgroundColor: '#ddd',
//     borderRadius: 2,
//   },
// });

// export default StudentsScreen;
import {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
  Modal,
  TextInput,
  Alert,
  ActivityIndicator,
  Platform,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Picker} from '@react-native-picker/picker';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import Header from '../components/RegisteredComponents/HomepageComponents/Header';
import COLORS from '../constants/color';
import AssetsStock from '../constants/ImagesContants';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const {width} = Dimensions.get('window');

const StudentsScreen = () => {
  const [selectedStudentCount, setSelectedStudentCount] =
    useState('12 students');
  const [modalVisible, setModalVisible] = useState(false);
  const [imagePickerModalVisible, setImagePickerModalVisible] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [remarkData, setRemarkData] = useState({
    motorSkills: 1,
    language: 1,
    cognitive: 1,
    emotional: 1,
    social: 1,
    notes: '',
    imageUrl: '',
    imageSource: null,
  });
  const insets = useSafeAreaInsets();

  const students = [
    {
      id: 1,
      name: 'Aarav Mehta',
      age: 'Age : 2-5 year',
      avatar: 'https://via.placeholder.com/40',
    },
    {
      id: 2,
      name: 'Myra Sharma',
      age: 'Age : 2-5 year',
      avatar: 'https://via.placeholder.com/40',
    },
    {
      id: 3,
      name: 'Vihaan Patel',
      age: 'Age : 2-5 year',
      avatar: 'https://via.placeholder.com/40',
    },
    {
      id: 4,
      name: 'Anaya Gupta',
      age: 'Age : 2-5 year',
      avatar: 'https://via.placeholder.com/40',
    },
    {
      id: 5,
      name: 'Ishaan Singh',
      age: 'Age : 2-5 year',
      avatar: 'https://via.placeholder.com/40',
    },
    {
      id: 6,
      name: 'Kiara Jain',
      age: 'Age : 2-5 year',
      avatar: 'https://via.placeholder.com/40',
    },
  ];

  const learningGoals = [
    {key: 'motorSkills', label: 'Motor Skills'},
    {key: 'language', label: 'Language'},
    {key: 'cognitive', label: 'Cognitive'},
    {key: 'emotional', label: 'Emotional'},
    {key: 'social', label: 'Social'},
  ];

  const openRemarkModal = student => {
    setSelectedStudent(student);
    setModalVisible(true);
    // Reset form data
    setRemarkData({
      motorSkills: 1,
      language: 1,
      cognitive: 1,
      emotional: 1,
      social: 1,
      notes: '',
      imageUrl: '',
      imageSource: null,
    });
  };

  // Function to open image picker modal
  const openImagePickerModal = () => {
    setImagePickerModalVisible(true);
  };

  // Function to take a photo with camera
  const takePhoto = async () => {
    setImagePickerModalVisible(false);
    setIsUploading(true);

    const options = {
      mediaType: 'photo',
      quality: 0.8,
      saveToPhotos: true,
    };

    try {
      const result = await launchCamera(options);

      if (result.didCancel) {
        console.log('User cancelled camera picker');
        setIsUploading(false);
        return;
      }

      if (result.errorCode) {
        console.log('Camera Error: ', result.errorMessage);
        Alert.alert('Error', 'Failed to take photo. Please try again.');
        setIsUploading(false);
        return;
      }

      // Process the captured image
      const imageUri = result.assets[0].uri;
      const fileName = imageUri.split('/').pop();

      // Simulate upload to server
      setTimeout(() => {
        setRemarkData(prev => ({
          ...prev,
          imageUrl: imageUri,
          imageSource: {uri: imageUri},
        }));
        setIsUploading(false);
      }, 1000);
    } catch (error) {
      console.log('Error taking photo:', error);
      Alert.alert('Error', 'Failed to take photo. Please try again.');
      setIsUploading(false);
    }
  };

  // Function to select from gallery
  const selectFromGallery = async () => {
    setImagePickerModalVisible(false);
    setIsUploading(true);

    const options = {
      mediaType: 'photo',
      quality: 0.8,
      selectionLimit: 1,
    };

    try {
      const result = await launchImageLibrary(options);

      if (result.didCancel) {
        console.log('User cancelled gallery picker');
        setIsUploading(false);
        return;
      }

      if (result.errorCode) {
        console.log('Gallery Error: ', result.errorMessage);
        Alert.alert('Error', 'Failed to select image. Please try again.');
        setIsUploading(false);
        return;
      }

      // Process the selected image
      const imageUri = result.assets[0].uri;
      const fileName = imageUri.split('/').pop();

      // Simulate upload to server
      setTimeout(() => {
        setRemarkData(prev => ({
          ...prev,
          imageUrl: imageUri,
          imageSource: {uri: imageUri},
        }));
        setIsUploading(false);
      }, 1000);
    } catch (error) {
      console.log('Error selecting image:', error);
      Alert.alert('Error', 'Failed to select image. Please try again.');
      setIsUploading(false);
    }
  };

  const handleSubmit = () => {
    const response = {
      studentId: selectedStudent.id,
      studentName: selectedStudent.name,
      learningGoals: {
        motorSkills: remarkData.motorSkills,
        language: remarkData.language,
        cognitive: remarkData.cognitive,
        emotional: remarkData.emotional,
        social: remarkData.social,
      },
      completionPercentages: {
        motorSkills: `${remarkData.motorSkills * 10}%`,
        language: `${remarkData.language * 10}%`,
        cognitive: `${remarkData.cognitive * 10}%`,
        emotional: `${remarkData.emotional * 10}%`,
        social: `${remarkData.social * 10}%`,
      },
      notes: remarkData.notes,
      imageUrl: remarkData.imageUrl,
      timestamp: new Date().toISOString(),
    };

    console.log('Remark Response:', response);

    // Close modal
    setModalVisible(false);
    setSelectedStudent(null);

    Alert.alert('Success', 'Remark submitted successfully!');
  };

  const renderDropdown = (goalKey, label) => (
    <View style={styles.goalContainer} key={goalKey}>
      <Text style={styles.goalLabel}>{label}</Text>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={remarkData[goalKey]}
          onValueChange={value =>
            setRemarkData(prev => ({...prev, [goalKey]: value}))
          }
          style={styles.picker}
          itemStyle={styles.pickerItem}>
          {[...Array(10)].map((_, index) => (
            <Picker.Item
              key={index + 1}
              label={`${index + 1}`}
              value={index + 1}
              color={Platform.OS === 'ios' ? '#000' : '#333'}
            />
          ))}
        </Picker>
      </View>
      <Text style={styles.percentageText}>
        {remarkData[goalKey] * 10}% Complete
      </Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Header />

      <ScrollView
        style={styles.content}
        contentContainerStyle={{paddingBottom: insets.bottom + 20}}
        showsVerticalScrollIndicator={false}>
        {/* My Classes Section */}
        <View style={styles.myClassesHeader}>
          <View>
            <Text style={styles.myClassesTitle}>My Classes</Text>
            <Text style={styles.myClassesSubtitle}>
              Manage your daily classes
            </Text>
          </View>
          <TouchableOpacity style={styles.addClassButton}>
            <Icon name="add" size={16} color="#fff" />
            <Text style={styles.addClassButtonText}>Add Class</Text>
          </TouchableOpacity>
        </View>

        {/* Class Card */}
        <View style={styles.classCard}>
          <View style={styles.classHeader}>
            <View style={styles.classInfo}>
              <Text style={styles.className}>Little Explorers</Text>
              <View style={styles.classTime}>
                <Icon name="access-time" size={16} color="#666" />
                <Text style={styles.classTimeText}>9:00 AM - 10:30 AM</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.studentCountButton}>
              <Text style={styles.studentCountText}>
                {selectedStudentCount}
              </Text>
              <Icon name="keyboard-arrow-down" size={20} color="#666" />
            </TouchableOpacity>
          </View>

          {/* Students Section */}
          <Text style={styles.studentsTitle}>Students</Text>

          {students.map(student => (
            <View key={student.id} style={styles.studentRow}>
              <View style={styles.studentInfo}>
                <View style={styles.avatarContainer}>
                  <Image source={AssetsStock.profile} style={styles.avatar} />
                </View>
                <View style={styles.studentDetails}>
                  <Text style={styles.studentName}>{student.name}</Text>
                  <Text style={styles.studentAge}>{student.age}</Text>
                </View>
              </View>
              <TouchableOpacity
                style={styles.addRemarkButton}
                onPress={() => openRemarkModal(student)}>
                <Icon name="chat-bubble-outline" size={16} color="#666" />
                <Text style={styles.addRemarkText}>Add Remark</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>

      {/* Remark Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>
                Add Remark for {selectedStudent?.name}
              </Text>
              <TouchableOpacity
                style={styles.uploadButton}
                onPress={openImagePickerModal}
                disabled={isUploading}>
                <Icon name="photo-camera" size={16} color={COLORS.primary} />
                <Text style={styles.uploadButtonText}>
                  {isUploading ? 'Uploading...' : 'Add Photo'}
                </Text>
              </TouchableOpacity>
            </View>

            <ScrollView
              style={styles.modalContent}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{paddingBottom: 20}}>
              <Text style={styles.sectionTitle}>Learning Goals Assessment</Text>

              {learningGoals.map(goal => renderDropdown(goal.key, goal.label))}

              <Text style={styles.sectionTitle}>Teacher Notes</Text>
              <TextInput
                style={styles.notesInput}
                placeholder="Write detailed notes about the student's progress, behavior, and any observations..."
                placeholderTextColor="#999"
                multiline={true}
                numberOfLines={5}
                value={remarkData.notes}
                onChangeText={text =>
                  setRemarkData(prev => ({...prev, notes: text}))
                }
                textAlignVertical="top"
              />

              {isUploading ? (
                <View style={styles.uploadingContainer}>
                  <ActivityIndicator size="small" color={COLORS.primary} />
                  <Text style={styles.uploadingText}>Uploading image...</Text>
                </View>
              ) : remarkData.imageSource ? (
                <View style={styles.imageContainer}>
                  <Image
                    source={remarkData.imageSource}
                    style={styles.previewImage}
                    resizeMode="cover"
                  />
                  <TouchableOpacity
                    style={styles.removeImageButton}
                    onPress={() =>
                      setRemarkData(prev => ({
                        ...prev,
                        imageUrl: '',
                        imageSource: null,
                      }))
                    }>
                    <Icon name="close" size={16} color="#fff" />
                  </TouchableOpacity>
                </View>
              ) : null}
            </ScrollView>

            <View style={styles.modalFooter}>
              <TouchableOpacity
                style={styles.cancelButton}
                onPress={() => setModalVisible(false)}>
                <Text style={styles.cancelButtonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.submitButton, isUploading && {opacity: 0.7}]}
                onPress={handleSubmit}
                disabled={isUploading}>
                <Text style={styles.submitButtonText}>Submit Remark</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      {/* Image Picker Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={imagePickerModalVisible}
        onRequestClose={() => setImagePickerModalVisible(false)}>
        <TouchableOpacity
          style={styles.imagePickerOverlay}
          activeOpacity={1}
          onPress={() => setImagePickerModalVisible(false)}>
          <View style={styles.imagePickerContainer}>
            <View style={styles.imagePickerHandle}>
              <View style={styles.handleBar} />
            </View>

            <Text style={styles.imagePickerTitle}>Select Photo</Text>

            <TouchableOpacity
              style={styles.imagePickerOption}
              onPress={takePhoto}>
              <Icon name="camera-alt" size={24} color={COLORS.primary} />
              <Text style={styles.imagePickerOptionText}>Take Photo</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.imagePickerOption}
              onPress={selectFromGallery}>
              <Icon name="photo-library" size={24} color={COLORS.primary} />
              <Text style={styles.imagePickerOptionText}>
                Choose from Gallery
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.imagePickerCancelButton}
              onPress={() => setImagePickerModalVisible(false)}>
              <Text style={styles.imagePickerCancelText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  content: {
    flex: 1,
    paddingHorizontal: 10,
    marginBottom: 40,
  },
  myClassesHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 16,
    paddingHorizontal: 14,
  },
  myClassesTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#000',
  },
  myClassesSubtitle: {
    fontSize: 12,
    color: '#666',
    marginTop: 2,
  },
  addClassButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.primary,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 6,
    gap: 4,
  },
  addClassButtonText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },
  classCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  classHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  classInfo: {
    flex: 1,
  },
  className: {
    fontSize: 16,
    fontWeight: '700',
    color: '#000',
    marginBottom: 8,
  },
  classTime: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  classTimeText: {
    fontSize: 14,
    color: COLORS.text_gray,
    marginLeft: 4,
  },
  studentCountButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  studentCountText: {
    fontSize: 12,
    color: COLORS.text_gray,
    marginRight: 4,
    fontWeight: '600',
  },
  studentsTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000',
    marginBottom: 16,
  },
  studentRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  studentInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  avatarContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    overflow: 'hidden',
    marginRight: 12,
  },
  avatar: {
    width: '100%',
    height: '100%',
    backgroundColor: '#ddd',
  },
  studentDetails: {
    flex: 1,
  },
  studentName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000',
  },
  studentAge: {
    fontSize: 14,
    color: COLORS.text_gray,
    marginTop: 2,
  },
  addRemarkButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 6,
    gap: 4,
  },
  addRemarkText: {
    fontSize: 12,
    color: COLORS.text_gray,
  },
  // Modal Styles
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  modalContainer: {
    backgroundColor: '#fff',
    borderRadius: 12,
    width: '100%',
    height: '90%',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
    backgroundColor: '#fff',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  modalTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#000',
    flex: 1,
    marginRight: 10,
  },
  uploadButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 6,
    gap: 4,
    borderWidth: 1,
    borderColor: '#e9ecef',
  },
  uploadButtonText: {
    fontSize: 11,
    color: COLORS.primary,
    fontWeight: '600',
  },
  modalContent: {
    flex: 1,
    padding: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    marginBottom: 12,
    marginTop: 8,
  },
  goalContainer: {
    marginBottom: 16,
    backgroundColor: '#f8f9fa',
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e9ecef',
  },
  goalLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000',
    marginBottom: 8,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 6,
    marginBottom: 4,
    backgroundColor: '#fff',
    ...Platform.select({
      ios: {
        height: 50,
      },
      android: {
        height: 50,
      },
    }),
  },
  picker: {
    height: 50,
    color: '#000',
    backgroundColor: '#fff',
    ...Platform.select({
      android: {
        color: '#333',
        backgroundColor: 'transparent',
      },
    }),
  },
  pickerItem: {
    fontSize: 16,
    color: '#000',
    height: 50,
  },
  percentageText: {
    fontSize: 12,
    color: COLORS.primary,
    fontWeight: '600',
    textAlign: 'right',
  },
  notesInput: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    textAlignVertical: 'top',
    fontSize: 14,
    color: '#000',
    minHeight: 100,
    maxHeight: 120,
    backgroundColor: '#fff',
    marginBottom: 12,
    ...Platform.select({
      ios: {
        paddingTop: 12,
      },
      android: {
        textAlignVertical: 'top',
      },
    }),
  },
  uploadingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    padding: 12,
    borderRadius: 6,
    marginTop: 8,
    justifyContent: 'center',
  },
  uploadingText: {
    fontSize: 12,
    color: '#666',
    marginLeft: 8,
  },
  imageContainer: {
    marginTop: 16,
    borderRadius: 8,
    overflow: 'hidden',
    position: 'relative',
  },
  previewImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
  },
  removeImageButton: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    width: 24,
    height: 24,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
    gap: 12,
    backgroundColor: '#fff',
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  cancelButton: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
  },
  cancelButtonText: {
    fontSize: 14,
    color: '#666',
    fontWeight: '600',
  },
  submitButton: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 8,
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  submitButtonText: {
    fontSize: 14,
    color: '#fff',
    fontWeight: '600',
  },
  // Image Picker Modal Styles
  imagePickerOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  imagePickerContainer: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 20,
    paddingBottom: Platform.OS === 'ios' ? 40 : 20,
    minHeight: 280,
  },
  imagePickerHandle: {
    alignItems: 'center',
    paddingVertical: 12,
  },
  handleBar: {
    width: 40,
    height: 4,
    backgroundColor: '#ddd',
    borderRadius: 2,
  },
  imagePickerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
    marginBottom: 24,
    textAlign: 'center',
  },
  imagePickerOption: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 18,
    paddingHorizontal: 4,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  imagePickerOptionText: {
    fontSize: 16,
    color: '#000',
    marginLeft: 16,
    fontWeight: '500',
  },
  imagePickerCancelButton: {
    marginTop: 20,
    paddingVertical: 16,
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#e9ecef',
  },
  imagePickerCancelText: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.primary,
  },
});

export default StudentsScreen;

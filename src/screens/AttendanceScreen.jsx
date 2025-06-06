import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import COLORS from '../constants/color';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';

const {width} = Dimensions.get('window');

const AttendanceScreen = () => {
  // Sample student data with avatar URLs
  const [students] = useState([
    {
      id: 1,
      name: 'Aarav Sharma',
      rollNo: '001',
      avatar: 'https://i.pravatar.cc/150?img=1',
    },
    {
      id: 2,
      name: 'Ananya Patel',
      rollNo: '002',
      avatar: 'https://i.pravatar.cc/150?img=2',
    },
    {
      id: 3,
      name: 'Arjun Kumar',
      rollNo: '003',
      avatar: 'https://i.pravatar.cc/150?img=3',
    },
    {
      id: 4,
      name: 'Diya Singh',
      rollNo: '004',
      avatar: 'https://i.pravatar.cc/150?img=4',
    },
    {
      id: 5,
      name: 'Ishaan Gupta',
      rollNo: '005',
      avatar: 'https://i.pravatar.cc/150?img=5',
    },
    {
      id: 6,
      name: 'Kavya Reddy',
      rollNo: '006',
      avatar: 'https://i.pravatar.cc/150?img=6',
    },
    {
      id: 7,
      name: 'Kiran Joshi',
      rollNo: '007',
      avatar: 'https://i.pravatar.cc/150?img=7',
    },
    {
      id: 8,
      name: 'Meera Agarwal',
      rollNo: '008',
      avatar: 'https://i.pravatar.cc/150?img=8',
    },
    {
      id: 9,
      name: 'Nikhil Verma',
      rollNo: '009',
      avatar: 'https://i.pravatar.cc/150?img=9',
    },
    {
      id: 10,
      name: 'Priya Mehta',
      rollNo: '010',
      avatar: 'https://i.pravatar.cc/150?img=10',
    },
    {
      id: 11,
      name: 'Rahul Tiwari',
      rollNo: '011',
      avatar: 'https://i.pravatar.cc/150?img=11',
    },
    {
      id: 12,
      name: 'Riya Kapoor',
      rollNo: '012',
      avatar: 'https://i.pravatar.cc/150?img=12',
    },
    {
      id: 13,
      name: 'Rohan Das',
      rollNo: '013',
      avatar: 'https://i.pravatar.cc/150?img=13',
    },
    {
      id: 14,
      name: 'Sanya Malhotra',
      rollNo: '014',
      avatar: 'https://i.pravatar.cc/150?img=14',
    },
    {
      id: 15,
      name: 'Tanvi Saxena',
      rollNo: '015',
      avatar: 'https://i.pravatar.cc/150?img=15',
    },
    {
      id: 16,
      name: 'Varun Nair',
      rollNo: '016',
      avatar: 'https://i.pravatar.cc/150?img=16',
    },
    {
      id: 17,
      name: 'Yash Pandey',
      rollNo: '017',
      avatar: 'https://i.pravatar.cc/150?img=17',
    },
    {
      id: 18,
      name: 'Zara Khan',
      rollNo: '018',
      avatar: 'https://i.pravatar.cc/150?img=18',
    },
    {
      id: 19,
      name: 'Aditya Roy',
      rollNo: '019',
      avatar: 'https://i.pravatar.cc/150?img=19',
    },
    {
      id: 20,
      name: 'Bhavya Jain',
      rollNo: '020',
      avatar: 'https://i.pravatar.cc/150?img=20',
    },
  ]);

  const [attendance, setAttendance] = useState({});
  const [currentDate] = useState(
    new Date().toLocaleDateString('en-IN', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }),
  );
  const navigation = useNavigation();

  // Initialize attendance state
  useEffect(() => {
    const initialAttendance = {};
    students.forEach(student => {
      initialAttendance[student.id] = 'present'; // Default to present
    });
    setAttendance(initialAttendance);
  }, [students]);

  const updateAttendance = (studentId, status) => {
    setAttendance(prev => ({
      ...prev,
      [studentId]: status,
    }));
  };

  const markAllPresent = () => {
    const allPresent = {};
    students.forEach(student => {
      allPresent[student.id] = 'present';
    });
    setAttendance(allPresent);
  };

  const markAllAbsent = () => {
    const allAbsent = {};
    students.forEach(student => {
      allAbsent[student.id] = 'absent';
    });
    setAttendance(allAbsent);
  };

  const getAttendanceStats = () => {
    const present = Object.values(attendance).filter(
      status => status === 'present',
    ).length;
    const absent = Object.values(attendance).filter(
      status => status === 'absent',
    ).length;
    const total = students.length;
    const percentage = total > 0 ? Math.round((present / total) * 100) : 0;

    return {present, absent, total, percentage};
  };

  const saveAttendance = () => {
    const stats = getAttendanceStats();
    const attendanceData = {
      date: currentDate,
      totalStudents: stats.total,
      presentStudents: stats.present,
      absentStudents: stats.absent,
      attendancePercentage: stats.percentage,
      studentDetails: students.map(student => ({
        id: student.id,
        name: student.name,
        rollNo: student.rollNo,
        status: attendance[student.id] || 'present',
      })),
    };

    console.log('=== ATTENDANCE DATA ===');
    console.log('Date:', attendanceData.date);
    console.log('Total Students:', attendanceData.totalStudents);
    console.log('Present:', attendanceData.presentStudents);
    console.log('Absent:', attendanceData.absentStudents);
    console.log(
      'Attendance Percentage:',
      attendanceData.attendancePercentage + '%',
    );
    console.log('Student Details:', attendanceData.studentDetails);
    console.log('========================');
  };

  const stats = getAttendanceStats();

  const StudentCard = ({student}) => {
    const currentStatus = attendance[student.id] || 'present';

    return (
      <View style={styles.studentCard}>
        <View style={styles.studentInfo}>
          <Image
            source={{uri: student.avatar}}
            style={styles.profileImage}
            defaultSource={{uri: 'https://i.pravatar.cc/150?img=68'}}
          />
          <View style={styles.studentDetails}>
            <Text style={styles.studentName}>{student.name}</Text>
            <Text style={styles.rollNumber}>Roll No: {student.rollNo}</Text>
          </View>
        </View>

        <View style={styles.attendanceButtons}>
          <TouchableOpacity
            style={[
              styles.statusButton,
              styles.presentButton,
              currentStatus === 'present' && styles.activePresentButton,
            ]}
            onPress={() => updateAttendance(student.id, 'present')}>
            <Icon
              name="check"
              size={16}
              color={
                currentStatus === 'present' ? COLORS.white : COLORS.primary
              }
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.statusButton,
              styles.absentButton,
              currentStatus === 'absent' && styles.activeAbsentButton,
            ]}
            onPress={() => updateAttendance(student.id, 'absent')}>
            <Icon
              name="x"
              size={16}
              color={
                currentStatus === 'absent' ? COLORS.primary : COLORS.primary
              }
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={24} color="#333" />
        </TouchableOpacity>
        <View style={styles.headerContent}>
          <Text style={styles.headerTitle}>Mark Attendance</Text>
          <Text style={styles.headerDate}>{currentDate}</Text>
        </View>
      </View>

      {/* Quick Actions */}
      <View style={styles.quickActions}>
        <TouchableOpacity
          style={styles.quickActionButton}
          onPress={markAllPresent}>
          <Icon name="check-circle" size={20} color={COLORS.primary} />
          <Text style={styles.quickActionText}>All Present</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.quickActionButton}
          onPress={markAllAbsent}>
          <Icon name="x-circle" size={20} color={COLORS.primary} />
          <Text style={styles.quickActionText}>All Absent</Text>
        </TouchableOpacity>
      </View>

      {/* Student List */}
      <ScrollView
        style={styles.studentList}
        showsVerticalScrollIndicator={false}>
        {students.map(student => (
          <StudentCard key={student.id} student={student} />
        ))}
      </ScrollView>

      {/* Attendance Summary */}
      <View style={styles.summaryContainer}>
        <View style={styles.summaryHeader}>
          <Text style={styles.summaryTitle}>Attendance Summary</Text>
          <Text style={styles.percentageText}>{stats.percentage}% Present</Text>
        </View>

        <View style={styles.progressBarContainer}>
          <View style={styles.progressBarBackground}>
            <View
              style={[styles.progressBarFill, {width: `${stats.percentage}%`}]}
            />
          </View>
        </View>

        <View style={styles.statsContainer}>
          <View style={[styles.statCard, styles.presentCard]}>
            <Text style={styles.statNumber}>{stats.present}</Text>
            <Text style={styles.statLabel}>Present</Text>
          </View>

          <View style={[styles.statCard, styles.absentCard]}>
            <Text style={styles.statNumber}>{stats.absent}</Text>
            <Text style={styles.statLabel}>Absent</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.saveButton} onPress={saveAttendance}>
          <Icon name="save" size={20} color="#fff" />
          <Text style={styles.saveButtonText}>Save Attendance</Text>
        </TouchableOpacity>
      </View>
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
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  backButton: {
    marginRight: 15,
  },
  headerContent: {
    flex: 1,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  headerDate: {
    fontSize: 14,
    color: COLORS.text_gray,
    marginTop: 2,
  },
  quickActions: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginHorizontal: 15,
    marginTop: 15,
    borderRadius: 12,
    padding: 15,
    shadowOpacity: 0.03,
    shadowOffset: {width: 0, height: 1},
    shadowRadius: 3,
    elevation: 1,
    backgroundColor: COLORS.white,
    borderWidth: 0.5,
    borderColor: COLORS.border,
  },
  quickActionButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    marginHorizontal: 5,
    borderRadius: 10,
    backgroundColor: '#f8f9fa',
    elevation: 1,
  },
  quickActionText: {
    marginLeft: 8,
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.black,
  },
  studentList: {
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: 15,
  },
  studentCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginBottom: 12,
    padding: 15,
    borderRadius: 12,
    shadowOpacity: 0.03,
    shadowOffset: {width: 0, height: 1},
    shadowRadius: 3,
    elevation: 1,
    backgroundColor: COLORS.white,
    borderWidth: 0.5,
    borderColor: COLORS.border,
  },
  studentInfo: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
    backgroundColor: '#f0f0f0',
    borderWidth: 2,
    borderColor: COLORS.border,
  },
  studentDetails: {
    flex: 1,
  },
  studentName: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.black,
  },
  rollNumber: {
    fontSize: 12,
    color: COLORS.text_gray,
    marginTop: 2,
  },
  attendanceButtons: {
    flexDirection: 'row',
    gap: 10,
  },
  statusButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    shadowOpacity: 0.03,
    shadowOffset: {width: 0, height: 1},
    shadowRadius: 3,
    elevation: 1,
    backgroundColor: COLORS.white,
    borderWidth: 0.5,
    borderColor: COLORS.border,
  },
  presentButton: {
    borderColor: COLORS.primary,
    backgroundColor: '#f1f8e9',
  },
  absentButton: {
    borderColor: COLORS.primary,
    backgroundColor: '#ffebee',
  },
  activePresentButton: {
    backgroundColor: COLORS.primary,
    borderWidth: 3,
    shadowOpacity: 0.03,
    shadowOffset: {width: 0, height: 1},
    shadowRadius: 3,
    elevation: 1,
    borderWidth: 0.5,
    borderColor: COLORS.border,
  },
  activeAbsentButton: {
    backgroundColor: COLORS.primary,
    borderWidth: 3,
    elevation: 6,
    shadowColor: '#f44336',
    shadowOpacity: 0.4,
    shadowRadius: 4,
    shadowOffset: {width: 0, height: 2},
    transform: [{scale: 1.05}],
  },
  summaryContainer: {
    backgroundColor: '#fff',
    margin: 15,
    borderRadius: 12,
    padding: 20,
    shadowOpacity: 0.03,
    shadowOffset: {width: 0, height: 1},
    shadowRadius: 3,
    elevation: 1,
    backgroundColor: COLORS.white,
    borderWidth: 0.5,
    borderColor: COLORS.border,
  },
  summaryHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  summaryTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.black,
  },
  percentageText: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.text_gray,
  },
  progressBarContainer: {
    marginBottom: 20,
  },
  progressBarBackground: {
    height: 8,
    backgroundColor: COLORS.border,
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: COLORS.primary,
    borderRadius: 4,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    gap: 15,
  },
  statCard: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
    borderRadius: 12,
    shadowOpacity: 0.03,
    shadowOffset: {width: 0, height: 1},
    shadowRadius: 3,
    elevation: 1,
    backgroundColor: COLORS.white,
    borderWidth: 0.5,
    borderColor: COLORS.border,
  },
  presentCard: {
    backgroundColor: '#e8f5e8',
    borderColor: COLORS.border,
    borderWidth: 1,
  },
  absentCard: {
    backgroundColor: '#ffebee',
    borderColor: COLORS.border,
    borderWidth: 1,
  },
  statNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  statLabel: {
    fontSize: 14,
    color: COLORS.text_gray,
    marginTop: 4,
    fontWeight: '600',
  },
  saveButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.primary,
    paddingVertical: 12,
    borderRadius: 12,
    elevation: 3,
    shadowColor: COLORS.primary,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 8,
  },
});

export default AttendanceScreen;

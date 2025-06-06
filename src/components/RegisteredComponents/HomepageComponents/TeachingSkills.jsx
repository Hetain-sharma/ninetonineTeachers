import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import COLORS from '../../../constants/color';
import Heading from './Heading';

const TeachingSkills = () => {
  return (
    <View style={styles.skillsSection}>
      <Heading message={'Your Teaching Skills'} />
      <View style={styles.skillsContainer}>
        <View
          style={[styles.skillTag, {backgroundColor: COLORS.light_primary}]}>
          <Text style={[styles.skillText, {color: COLORS.primary}]}>
            Creativity
          </Text>
        </View>
        <View style={[styles.skillTag, {backgroundColor: '#DBEAFE'}]}>
          <Text style={[styles.skillText, {color: COLORS.primary}]}>
            Activity Design
          </Text>
        </View>
        <View
          style={[styles.skillTag, {backgroundColor: COLORS.light_primary}]}>
          <Text style={[styles.skillText, {color: COLORS.primary}]}>
            Observation Skills
          </Text>
        </View>
        <View style={[styles.skillTag, {backgroundColor: '#E0E7FF'}]}>
          <Text style={[styles.skillText, {color: COLORS.primary}]}>
            Planning Skills
          </Text>
        </View>
      </View>
    </View>
  );
};

export default TeachingSkills;

const styles = StyleSheet.create({
  skillsSection: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.black,
    marginBottom: 12,
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  skillTag: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    marginRight: 8,
    marginBottom: 8,
  },
  skillText: {
    fontSize: 12,
    fontWeight: '500',
  },
});

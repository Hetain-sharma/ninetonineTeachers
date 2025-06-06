import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const Heading = ({message}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
      }}>
      <Text style={{fontSize: 16, fontWeight: 600}}>{message}</Text>
    </View>
  );
};

export default Heading;

const styles = StyleSheet.create({});

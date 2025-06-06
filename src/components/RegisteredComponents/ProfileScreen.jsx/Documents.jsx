import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import COLORS from '../../../constants/color';

const Documents = () => {
  const documents = [
    {
      id: 1,
      name: 'Teaching Certificate',
      uploadDate: '15/11/2024',
      verified: true,
      icon: '📜',
    },
    {
      id: 2,
      name: 'Identity Proof',
      uploadDate: '15/11/2024',
      verified: true,
      icon: '🆔',
    },
    {
      id: 3,
      name: 'Address Proof',
      uploadDate: '15/11/2024',
      verified: true,
      icon: '🏠',
    },
    {
      id: 4,
      name: 'Educational Certificates',
      uploadDate: '15/11/2024',
      verified: true,
      icon: '🎓',
    },
  ];

  const renderDocument = ({item}) => (
    <View style={styles.documentItem}>
      <View style={styles.documentInfo}>
        <Text style={styles.documentIcon}>{item.icon}</Text>
        <View style={styles.documentDetails}>
          <Text style={styles.documentName}>{item.name}</Text>
          <Text style={styles.uploadDate}>Uploaded: {item.uploadDate}</Text>
        </View>
      </View>
      <View style={styles.documentActions}>
        <View style={styles.verifiedBadge}>
          <Text style={styles.verifiedText}>Verified</Text>
        </View>
        <TouchableOpacity style={styles.downloadButton}>
          <Text style={styles.downloadIcon}>⬇️</Text>
          <Text style={styles.downloadText}>Download</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.icon}>📄</Text>
        <Text style={styles.title}>Documents</Text>
      </View>

      <FlatList
        data={documents}
        renderItem={renderDocument}
        keyExtractor={item => item.id.toString()}
        scrollEnabled={false}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />

      <TouchableOpacity style={styles.updateButton}>
        <Text style={styles.updateIcon}>✏️</Text>
        <Text style={styles.updateText}>Update New Document</Text>
      </TouchableOpacity>
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
    marginBottom: 60,
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
  documentItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
  },
  documentInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  documentIcon: {
    fontSize: 24,
    marginRight: 12,
  },
  documentDetails: {
    flex: 1,
  },
  documentName: {
    fontSize: 14,
    fontWeight: '500',
    color: '#333',
    marginBottom: 4,
  },
  uploadDate: {
    fontSize: 12,
    color: '#666',
  },
  documentActions: {
    alignItems: 'flex-end',
    gap: 8,
  },
  verifiedBadge: {
    backgroundColor: '#D1FAE5',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  verifiedText: {
    fontSize: 10,
    color: '#059669',
    fontWeight: '500',
  },
  downloadButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  downloadIcon: {
    fontSize: 12,
  },
  downloadText: {
    fontSize: 12,
    color: '#374151',
    fontWeight: '500',
  },
  separator: {
    height: 1,
    backgroundColor: '#F3F4F6',
    marginVertical: 8,
  },
  updateButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F3F4F6',
    paddingVertical: 12,
    borderRadius: 8,
    marginTop: 16,
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

export default Documents;

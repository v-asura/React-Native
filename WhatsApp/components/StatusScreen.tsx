import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

const statusData = [
  { id: '1', text: 'Hey there! I am using WhatsApp.' },
  { id: '2', text: 'Busy with work, will reply later.' },
];

export const StatusScreen = ({ onBack }: { onBack: () => void }) => {
  const [newStatus, setNewStatus] = useState('');
  const [statuses, setStatuses] = useState(statusData);

  const addStatus = () => {
    if (newStatus.trim()) {
      setStatuses([...statuses, { id: Date.now().toString(), text: newStatus }]);
      setNewStatus('');
    }
  };

  const renderStatusItem = ({ item }: { item: typeof statusData[0] }) => (
    <View style={styles.statusItem}>
      <Text style={styles.statusText}>{item.text}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onBack}>
          <Text style={styles.backButton}>&lt; Back</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Status</Text>
      </View>

      {/* View Statuses */}
      <FlatList
        data={statuses}
        renderItem={renderStatusItem}
        keyExtractor={(item) => item.id}
        style={styles.statusList}
      />

      {/* Add Status */}
      <TextInput
        style={styles.input}
        placeholder="Add a status"
        value={newStatus}
        onChangeText={setNewStatus}
      />
      <Button title="Post Status" onPress={addStatus} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#075E54',
  },
  backButton: {
    color: '#fff',
    fontWeight: 'bold',
  },
  headerTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  statusList: {
    padding: 10,
  },
  statusItem: {
    backgroundColor: '#DCF8C6',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  statusText: {
    fontSize: 16,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    margin: 10,
  },
});

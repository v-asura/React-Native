import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';

const chatData = [
  { id: '1', name: 'John Doe', message: 'Hey there!', time: '12:30 PM' },
  { id: '2', name: 'Jane Smith', message: 'See you soon!', time: '11:15 AM' },
  { id: '3', name: 'Michael Brown', message: 'Meeting at 3?', time: '10:05 AM' },
];

export const ChatListScreen = ({ onChatSelect, onViewStatus }: { onChatSelect: (name: string) => void; onViewStatus: () => void }) => {
  const renderChatItem = ({ item }: { item: typeof chatData[0] }) => (
    <TouchableOpacity style={styles.chatItem} onPress={() => onChatSelect(item.name)}>
      <Image
        source={{
          uri: 'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        }}
        style={styles.profileImage}
      />
      <View style={styles.chatDetails}>
        <Text style={styles.chatName}>{item.name}</Text>
        <Text style={styles.chatMessage}>{item.message}</Text>
      </View>
      <Text style={styles.chatTime}>{item.time}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Navigation Bar */}
      <View style={styles.navBar}>
        <Image
          source={{
            uri: 'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          }}
          style={styles.navBarProfileImage}
        />
        <Text style={styles.navBarTitle}>WhatsApp</Text>
        <View style={styles.navBarRight}>
          {/* Add other icons or buttons here if needed */}
        </View>
      </View>

      {/* Chats */}
      <FlatList
        data={chatData}
        renderItem={renderChatItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.chatList}
      />

      {/* View Status Button (positioned at bottom right) */}
      <TouchableOpacity style={styles.statusButton} onPress={onViewStatus}>
        <Text style={styles.statusButtonText}>View Status</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
  },
  navBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#075E54',
    padding: 10,
    height: 60,
  },
  navBarProfileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  navBarTitle: {
    flex: 1,
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  navBarRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  chatList: {
    padding: 10,
  },
  chatItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  chatDetails: {
    flex: 1,
  },
  chatName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  chatMessage: {
    fontSize: 14,
    color: '#777',
  },
  chatTime: {
    fontSize: 12,
    color: '#aaa',
  },
  statusButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#25D366',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 50,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  statusButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

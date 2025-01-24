import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { ChatListScreen } from './components/ChatListScreen';
import { ChatScreen } from './components/ChatScreen';
import { StatusScreen } from './components/StatusScreen';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('ChatList');
  const [selectedChat, setSelectedChat] = useState<string | null>(null);

  const navigate = (screen: string, chatName?: string) => {
    setCurrentScreen(screen);
    if (chatName) setSelectedChat(chatName);
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'ChatList':
        return <ChatListScreen onChatSelect={(name) => navigate('Chat', name)} onViewStatus={() => navigate('Status')} />;
      case 'Chat':
        return <ChatScreen name={selectedChat!} onBack={() => navigate('ChatList')} />;
      case 'Status':
        return <StatusScreen onBack={() => navigate('ChatList')} />;
      default:
        return null;
    }
  };

  return <View style={styles.container}>{renderScreen()}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

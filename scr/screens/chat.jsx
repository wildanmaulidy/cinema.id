import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Chat = () => {
  return (
    <View style={styles.container}>
      <Text>Ini Halaman Chat</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Chat;

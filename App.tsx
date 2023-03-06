import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import CustomTextInput from './components/CustomTextInput';

export default function App() {
  const [username, setUsername] = useState('');
  const [text, setText] = useState('');

  useEffect(() => {
    console.log('Component mounted');
  }, []);

  useEffect(() => {
    console.log('Username updated:', username);
  }, [username]);

  useEffect(() => {
    // Component mounted
    return () => {
      console.log('Component unmounted');
    };
  }, []);


  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <CustomTextInput
        containerStyle={{ marginBottom: 20 }}
        textColor={'black'}
        style={{ borderWidth: 1, borderColor: 'gray' }}
        editable={true}
        onChangeText={(newText) => {console.log('New text is: ' + newText)}}
        placeHolder={'Enter text here'}
        autoFocus={true}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

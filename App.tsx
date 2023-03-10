import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, SafeAreaView } from 'react-native';
import React, {useEffect} from 'react';
import RootNavigator from './navigation/RootNavigation';

const App = () => {

  useEffect(() => {
    console.log("App mounted");
  });

  useEffect(() => {
    return () => {
      console.log("App unmounted");
    }
  });

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <RootNavigator/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  textInput: {
    height: 40, 
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10
  },
});

export default App;
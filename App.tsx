import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import React, {useState} from 'react';

export default function App() {
  return (
    <View style={styles.container}>
      <ParentComponent/>
      <StatusBar style="auto" />
    </View>
  );
}

const ParentComponent = () => {
  const [name, setName] = useState('KhoiLe');

  const handleNameChanged = (newName) => {
    setName(newName);
  };

  return(
    <View>
      <ChildComponent name={name} onNameChanged={handleNameChanged}/>
      <Text>My name is {name}</Text>     
    </View>
  );
}

const ChildComponent = (props) => {
  return (
    <View>
      <Text>Enter your name: </Text>
      <TextInput style = {styles.textInput} value={props.name} onChangeText={props.onNameChanged} />
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
  textInput: {
    height: 40, 
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10
  },
});
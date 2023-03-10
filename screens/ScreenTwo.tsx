import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput } from "react-native";
import React, { useEffect, useState } from "react";
import defaultStyles from '../styles/styles';

const ScreenTwo = ({route}) => {
  useEffect(() => {
    console.log("Screen Two mounted");
  })

  useEffect(() => {
    return () => {
      console.log("Screen Two unmounted");
    }
  })

  const [userName, setUserName] = useState(route.params.userName);

  const handleNameChanged = (newName: string) => {
    setUserName(newName);
    route.params.handler(newName);
  };



  return (
    <View>
      <Text>The inputted user name is {userName}</Text>
      <TextInput
        style={defaultStyles.textInput}
        value={userName}
        onChangeText={handleNameChanged}
      />
    </View>
  );
};

export default ScreenTwo;
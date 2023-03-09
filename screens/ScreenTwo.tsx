import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput } from "react-native";
import React, { useEffect, useState } from "react";

const ScreenTwo = () => {
  useEffect(() => {
    console.log("Screen Two mounted");
  })

  useEffect(() => {
    console.log("Screen Two unmounted");
  })

  return (
    <View>
      <Text>This is Screen Two</Text>
    </View>
  );
};

export default ScreenTwo;
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Hello name="LeKhoi"/>
      <StatusBar style="auto" />
    </View>
  );
}

const Hello = (props) => {
  return (
    <SafeAreaView>
      <Text>Good morning {props.name}</Text>
      <Text>How is {props.name} doing today</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

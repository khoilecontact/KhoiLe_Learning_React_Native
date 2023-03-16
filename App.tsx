import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.text}>Item 1</Text>
        <Text style={styles.text}>Item 2</Text>
        <Text style={styles.text}>Item 3</Text>
        <Text style={styles.text}>Item 4</Text>
        <Text style={styles.text}>Item 5</Text>
        <Text style={styles.text}>Item 6</Text>
        <Text style={styles.text}>Item 7</Text>
        <Text style={styles.text}>Item 8</Text>
        <Text style={styles.text}>Item 9</Text>
        <Text style={styles.text}>Item 10</Text>
      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    padding: 10,
    color: 'white',
    margin: 10,
    borderRadius: 20,
    borderWidth: 1,
    backgroundColor: 'blue',
    overflow: 'hidden'
  },
});

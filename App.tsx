import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: 'blue', height: 50 }}>
        <Text style={styles.text}>This is blue</Text>
      </View>
      <View style={{ backgroundColor: 'green', height: 50 }}>
        <Text style={styles.text}>This is green</Text>
      </View>
      <View style={{ backgroundColor: 'red', height: 50 }}>
        <Text style={styles.text}>This is red</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
});

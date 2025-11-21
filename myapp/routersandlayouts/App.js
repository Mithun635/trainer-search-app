import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      
      <Text style={styles.name}>Mithun Kumar</Text>

      <Text style={styles.heading}>Skills:</Text>
      <Text style={styles.item}>• React Native</Text>
      <Text style={styles.item}>• JavaScript</Text>
      <Text style={styles.item}>• Firebase</Text>
      <Text style={styles.item}>• UI/UX Basics</Text>

      <Text style={styles.heading}>Email:</Text>
      <Text style={styles.item}>mithunkumar@gmail.com</Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eef2f5',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },

  name: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 25,
  },

  heading: {
    fontSize: 20,
    fontWeight: '600',
    marginTop: 15,
  },

  item: {
    fontSize: 16,
    marginTop: 5,
  },
});

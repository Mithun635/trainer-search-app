import { Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function Contact() {
  const phoneNumbers = [
    { label: 'Personal', number: '+1 123 456 7890' },
    { label: 'Office', number: '+1 987 654 3210' },
    { label: 'Support', number: '+1 555 555 5555' },
  ];

  const callNumber = (number) => {
    Linking.openURL(`tel:${number}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact Me</Text>

      {phoneNumbers.map((item, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => callNumber(item.number)}
          style={styles.phoneContainer}
        >
          <FontAwesome name="phone" size={24} color="#00796B" style={{ marginRight: 10 }} />
          <View>
            <Text style={styles.label}>{item.label}</Text>
            <Text style={styles.number}>{item.number}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#E0F2F1', // soft teal background
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
    color: '#004D40',
  },
  phoneContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    padding: 15,
    borderWidth: 1,
    borderColor: '#B2DFDB',
    borderRadius: 10,
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  label: {
    fontSize: 18,
    fontWeight: '600',
    color: '#00796B',
  },
  number: {
    fontSize: 18,
    color: 'blue',
  },
});

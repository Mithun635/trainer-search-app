import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';

export default function Home() {
  const [activeInfo, setActiveInfo] = useState(null); // "skill" or "college"

  return (
    <View style={styles.container}>
      {/* Generic User Profile Icon */}
      <View style={styles.photoShadow}>
        <Image
          source={{ uri: 'https://cdn-icons-png.flaticon.com/512/149/149071.png' }} // Generic user icon
          style={styles.photo}
        />
      </View>

      {/* Name */}
      <Text style={styles.name}>Mithun</Text>

      {/* Two circular buttons */}
      <View style={styles.circlesContainer}>
        {/* Skill Button */}
        <TouchableOpacity
          style={styles.circle}
          onPress={() =>
            setActiveInfo(activeInfo === 'skill' ? null : 'skill')
          }
        >
          <Text style={styles.plus}>+</Text>
        </TouchableOpacity>

        {/* College Button */}
        <TouchableOpacity
          style={styles.circle}
          onPress={() =>
            setActiveInfo(activeInfo === 'college' ? null : 'college')
          }
        >
          <Text style={styles.plus}>+</Text>
        </TouchableOpacity>
      </View>

      {/* Show only the active info */}
      <View style={styles.infoContainer}>
        {activeInfo === 'skill' && (
          <Text style={styles.infoText}>
            React Native, JavaScript, UI/UX Design, API Integration
          </Text>
        )}
        {activeInfo === 'college' && <Text style={styles.infoText}>NIE</Text>}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0F7FA',
    alignItems: 'center',
    justifyContent: 'center',
  },
  photoShadow: {
    width: 160,
    height: 160,
    borderRadius: 80,
    backgroundColor: '#B2DFDB',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  photo: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#00796B',
    marginBottom: 30,
  },
  circlesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '50%',
  },
  circle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#004D40',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  plus: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',
  },
  infoContainer: {
    marginTop: 20,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  infoText: {
    fontSize: 18,
    color: '#004D40',
    textAlign: 'center',
    marginVertical: 5,
  },
});

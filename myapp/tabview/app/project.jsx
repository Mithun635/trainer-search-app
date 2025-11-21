import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function Project() {
  const projects = [
    { name: 'Bridge Design Optimization', description: 'Structural analysis for a modern suspension bridge.' },
    { name: 'Smart Traffic Management System', description: 'IoT-based system to reduce congestion in cities.' },
    { name: 'Renewable Energy Microgrid', description: 'Design of a solar and wind microgrid for rural areas.' },
    { name: 'Autonomous Drone Navigation', description: 'Drone path planning using AI and sensors.' },
    { name: 'Water Purification Plant', description: 'Design and simulation of efficient water filtration system.' },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Engineering Projects</Text>
      {projects.map((project, index) => (
        <View key={index} style={styles.projectCard}>
          <Text style={styles.projectName}>{project.name}</Text>
          <Text style={styles.projectDesc}>{project.description}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#E0F2F1', // soft teal background to match Contact/Home
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#004D40', // dark teal for consistency
  },
  projectCard: {
    padding: 15,
    marginBottom: 15,
    borderRadius: 10,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#B2DFDB',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  projectName: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 5,
    color: '#00796B',
  },
  projectDesc: {
    fontSize: 16,
    color: '#004D40',
  },
});

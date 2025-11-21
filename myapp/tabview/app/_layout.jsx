import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'blue',
        headerShown: false,
      }}
    >
      {/* Home */}
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => (
            <FontAwesome name="home" size={24} color={color} />
          ),
        }}
      />

      {/* Projects */}
      <Tabs.Screen
        name="projects"
        options={{
          title: 'Projects',
          tabBarIcon: ({ color }) => (
            <FontAwesome name="th-large" size={24} color={color} />
          ),
        }}
      />

      {/* Contact */}
      <Tabs.Screen
        name="contact"
        options={{
          title: 'Contact',
          tabBarIcon: ({ color }) => (
            <FontAwesome name="phone" size={24} color={color} />
          ),
        }}
      />

      {/* Videos */}
      <Tabs.Screen
        name="videos"
        options={{
          title: 'Videos',
          tabBarIcon: ({ color }) => (
            <FontAwesome name="video-camera" size={24} color={color} />
          ),
        }}
      />

      {/* Profile (NEW) */}
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => (
            <FontAwesome name="user" size={24} color={color} />
          ),
        }}
      />

      {/* Settings (NEW) */}
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color }) => (
            <FontAwesome name="cog" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
  name="skills"
  options={{
    title: 'Skills',
    tabBarIcon: ({ color }) => (
      <FontAwesome name="star" size={24} color={color} />
    ),
  }}
/>

    </Tabs>
  );
}

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';

export default function App() {
 return (
  <View style={styles.container}>
    <View style={styles.city}>
      <Text style={styles.cityName}>Seoul</Text>
    </View>
    <View style={styles.weather}>
      <View style={styles.day}>
        <Text style={styles.temp}>27</Text>
        <Text style={styles.decription}>Sunny</Text>
      </View>
    </View>
  </View>
 );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "tomato",
  },
  city: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  weather: {
    flex: 3,
  },
  cityName: {
    fontSize: 68,
    fontWeight: "500",
  },
  day: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "teal",
  },
  temp: {
    marginTop: 50,
    fontSize: 178,
  },
  description: {
    fontSize: 60,
  },
})
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Dimensions,  View, ScrollView } from 'react-native';
import * as React from 'react';

const { width: SCREEN_WIDTH } = Dimensions.get("window");

export default function App() {
 return (
  <View style={styles.container}>
    <View style={styles.city}>
      <Text style={styles.cityName}>Seoul</Text>
    </View>
    <ScrollView horizontal contentContainerStyle={styles.weather}>
      <View style={styles.day}>
        <Text style={styles.temp}>27</Text>
        <Text style={styles.description}>Sunny</Text>
      </View>
    </ScrollView>
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
  
  },
  cityName: {
    fontSize: 68,
    fontWeight: "500",
  },
  day: {
    width: SCREEN_WIDTH,
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
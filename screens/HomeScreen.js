import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { colors } from "../styles/colors";

const HomeScreen = () => {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <View style={styles.device}>
        <View style={styles.screen}>
          <Text style={styles.title}>ruhimatik</Text>
          <Text style={styles.count}>{count}</Text>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => setCount((prev) => prev + 1)}
        >
          <Text style={styles.buttonText}>Artır</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: "center",
    justifyContent: "center",
  },
  device: {
    width: 300,
    height: 500,
    backgroundColor: colors.device,
    borderRadius: 20,
    padding: 20,
  },
  screen: {
    flex: 1,
    backgroundColor: colors.screen,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    color: colors.text,
    marginBottom: 20,
  },
  count: {
    fontSize: 48,
    color: colors.text,
  },
  button: {
    backgroundColor: colors.button,
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    alignItems: "center",
  },
  buttonText: {
    color: colors.buttonText,
    fontSize: 18,
  },
});

export default HomeScreen;

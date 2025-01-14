import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { colors } from "../styles/colors";

const HomeScreen = () => {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <View style={styles.device}>
        <View style={styles.screen}>
          <Text style={styles.title}>zikirmatik</Text>
          <Text style={styles.count}>{count}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <View style={styles.buttonWrapper}>
            <TouchableOpacity
              style={styles.mainButton}
              onPress={() => setCount((prev) => prev + 1)}
            >
              <Text style={styles.buttonText}>COUNT</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonWrapper}>
            <TouchableOpacity
              style={styles.resetButton}
              onPress={() => setCount(0)}
            >
              <Text style={styles.resetButtonText}>RESET</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#808080",
    alignItems: "center",
    justifyContent: "center",
  },
  device: {
    width: 250,
    height: 400,
    backgroundColor: "#000000",
    borderRadius: 30,
    borderWidth: 2,
    borderColor: "#000",
    alignItems: "center",
    padding: 20,
  },
  screen: {
    width: "100%",
    height: 120,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 15,
  },
  title: {
    fontSize: 20,
    color: "#000",
    textAlign: "center",
    opacity: 0.5,
    position: "absolute",
    width: "100%",
    top: 5,
    left: 15,
    paddingHorizontal: 15,
  },
  count: {
    fontSize: 48,
    color: "#FF0000",
    textAlign: "center",
    marginTop: 28,
    fontWeight: "bold",
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 40,
    gap: 20,
  },
  buttonWrapper: {
    alignItems: "center",
  },
  mainButton: {
    width: 80,
    height: 80,
    backgroundColor: "#4CAF50",
    borderRadius: 40,
    borderWidth: 2,
    borderColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  resetButton: {
    width: 40,
    height: 40,
    backgroundColor: "#FF6B6B",
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 12,
    color: "#000",
  },
  resetButtonText: {
    fontSize: 8,
    color: "#000",
  },
});

export default HomeScreen;

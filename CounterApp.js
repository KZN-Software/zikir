import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const App = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const resetCount = () => {
    setCount(0);
  };

  return (
    <View style={styles.container}>
      <View style={styles.displayContainer}>
        <Text style={styles.title}>Ruhiyi Sikmatik</Text>
        <Text style={styles.count}>{count}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={incrementCount}>
          <Text style={styles.buttonText}>COUNT</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={resetCount}>
          <Text style={styles.buttonText}>RESET</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.counterButton} onPress={incrementCount} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0000FF", // Mavi arka plan
  },
  displayContainer: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    width: 200,
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    color: "#000000",
    marginBottom: 10,
  },
  count: {
    fontSize: 36,
    color: "#000000",
  },
  buttonContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#000000",
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 5,
    borderRadius: 5,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
  },
  counterButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default App;

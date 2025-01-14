import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { colors } from "../styles/colors";

export const CounterButton = ({ setCount, count }) => {
  const handlePress = () => {
    setCount(count + 1);
  };

  return (
    <TouchableOpacity style={styles.button} onPress={handlePress}>
      <Text style={styles.buttonText}>Sayacı Artır</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    padding: 20,
    borderRadius: 100, // Yuvarlak buton için
    width: 200,
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    elevation: 3, // Android için gölge
    shadowColor: "#000", // iOS için gölge
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  buttonText: {
    color: colors.text,
    fontSize: 24,
    fontWeight: "bold",
  },
});

// components/Counter.js
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Counter = ({ count }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.count}>{count}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  count: {
    fontSize: 48,
    color: "#FFFFFF",
  },
});

export default Counter;

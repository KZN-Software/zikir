import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { ZikirmatikSVG } from "../components/ZikirmatikSVG";
import { colors } from "../styles/colors";

const HomeScreenSVG = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    console.log("Artırma çalıştı:", count + 1);
    setCount((prevCount) => prevCount + 1);
  };

  const handleReset = () => {
    console.log("Sıfırlama çalıştı");
    setCount(0);
  };

  return (
    <View style={styles.container}>
      <ZikirmatikSVG
        count={count}
        onPressCount={handleIncrement}
        onPressReset={handleReset}
      />
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
});

export default HomeScreenSVG;

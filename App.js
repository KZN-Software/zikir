import React from "react";
import { View } from "react-native";
import HomeScreenSVG from "./screens/HomeScreenSVG";
import { globalStyles } from "./styles/global";

const App = () => {
  return (
    <View style={globalStyles.container}>
      <HomeScreenSVG />
    </View>
  );
};

export default App;

import React from "react";
import { Pressable, View } from "react-native";
import Svg, { Path, Rect, Circle, Text, G } from "react-native-svg";
import { colors } from "../styles/colors";

export const ZikirmatikSVG = ({ count, onPressCount, onPressReset }) => {
  return (
    <View>
      <Svg width="300" height="400" viewBox="0 0 300 400">
        {/* Cihaz gövdesi - mavi kısım */}
        <G>
          <Path
            d="M60 80 
               C60 60, 240 60, 240 80 
               L240 300 
               C240 330, 60 330, 60 300 Z"
            fill={colors.primary}
            stroke="#000"
            strokeWidth="2"
          />
        </G>

        {/* LCD Ekran */}
        <G>
          <Rect
            x="80"
            y="100"
            width="140"
            height="100"
            fill={colors.secondary}
            rx="10"
          />

          {/* Ekrandaki metinler */}
          <Text
            x="150"
            y="130"
            fontSize="16"
            fill={colors.text}
            textAnchor="middle"
          >
            zikirmatik
          </Text>

          <Text
            x="150"
            y="170"
            fontSize="32"
            fill={colors.text}
            textAnchor="middle"
            fontFamily="monospace"
          >
            {count}
          </Text>

          {/* Buton etiketleri */}
          <Text
            x="110"
            y="190"
            fontSize="12"
            fill={colors.text}
            textAnchor="middle"
          >
            COUNT
          </Text>

          <Text
            x="190"
            y="190"
            fontSize="12"
            fill={colors.text}
            textAnchor="middle"
          >
            RESET
          </Text>
        </G>
      </Svg>

      {/* Butonları SVG dışında Pressable olarak ekliyoruz */}
      <Pressable
        onPress={onPressCount}
        style={{
          position: "absolute",
          left: 85,
          top: 220,
          width: 70,
          height: 70,
          borderRadius: 35,
          backgroundColor: colors.buttonBg,
          borderWidth: 2,
          borderColor: colors.buttonBorder,
        }}
      />

      <Pressable
        onPress={onPressReset}
        style={{
          position: "absolute",
          right: 85,
          top: 230,
          width: 44,
          height: 44,
          borderRadius: 22,
          backgroundColor: colors.buttonBg,
          borderWidth: 2,
          borderColor: colors.buttonBorder,
        }}
      />
    </View>
  );
};

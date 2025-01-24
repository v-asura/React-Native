import React, { useState } from 'react';
import {
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

function App(): JSX.Element {
  const [randomBackground, setRandomBackground] = useState("#ffffff");
  const [shapeColors, setShapeColors] = useState({
    square: "#FF5733",
    circle: "#33FF57",
    triangle: "#3357FF",
    rectangle: "#F1C40F",
  });

  const generateColor = () => {
    const hexRange = "0123456789ABCDEF";
    const randomHex = () =>
      `#${Array.from({ length: 6 }, () =>
        hexRange[Math.floor(Math.random() * 16)]
      ).join('')}`;
    setShapeColors({
      square: randomHex(),
      circle: randomHex(),
      triangle: randomHex(),
      rectangle: randomHex(),
    });
    setRandomBackground(randomHex());
  };

  return (
    <>
      <StatusBar backgroundColor={randomBackground} />
      <View style={[styles.container, { backgroundColor: randomBackground }]}>
        {/* Shapes */}
        <View
          style={[
            styles.square,
            { backgroundColor: shapeColors.square },
          ]}
        />
        <View
          style={[
            styles.circle,
            { backgroundColor: shapeColors.circle },
          ]}
        />
        <View
          style={[
            styles.triangle,
            { borderBottomColor: shapeColors.triangle },
          ]}
        />
        <View
          style={[
            styles.rectangle,
            { backgroundColor: shapeColors.rectangle },
          ]}
        />

        {/* Button */}
        <Pressable
          onPress={generateColor}
          style={({ pressed }) => [
            styles.actionBtn,
            { backgroundColor: pressed ? "#8E244B" : "#6A1B4D" },
          ]}
        >
          <Text style={styles.actionBtnTxt}>Press me</Text>
        </Pressable>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  square: {
    position: "absolute",
    width: 80,
    height: 80,
    top: 20,
    left: 20,
  },
  circle: {
    position: "absolute",
    width: 80,
    height: 80,
    borderRadius: 40,
    top: 20,
    right: 20,
  },
  triangle: {
    position: "absolute",
    width: 0,
    height: 0,
    borderLeftWidth: 40,
    borderRightWidth: 40,
    borderBottomWidth: 80,
    borderStyle: "solid",
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "#3357FF", // Default color
    bottom: 20,
    left: 20,
  },
  rectangle: {
    position: "absolute",
    width: 120,
    height: 60,
    bottom: 20,
    right: 20,
  },
  actionBtn: {
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 40,
    backgroundColor: "#6A1B4D",
  },
  actionBtnTxt: {
    fontSize: 24,
    color: "#FFFFFF",
    textTransform: "uppercase",
  },
});

export default App;

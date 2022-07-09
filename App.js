import { useState } from "react";
import { StyleSheet, ImageBackground, SafeAreaView, StatusBar } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import GameScreen from "./screens/GameScreen";
import Colors from "./constants/colors";

export default function App() {
  const [pickedNumber, setPickedNumber] = useState("");
  return (
    <LinearGradient colors={[Colors.primary500, Colors.accent500]} style={styles.container}>
      <ImageBackground
        source={require("./assets/images/background.png")}
        resizeMode="cover"
        style={styles.container}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={[styles.container, styles.safeArea]}>
          {!pickedNumber ? (
            <StartGameScreen setPickedNumber={setPickedNumber} />
          ) : (
            <GameScreen />
          )}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  safeArea:{
    marginTop: StatusBar.currentHeight + 15
  },
  backgroundImage: {
    opacity: 0.15,
  },
});

import { useState } from "react";
import {
  StyleSheet,
  ImageBackground,
  SafeAreaView,
  StatusBar,
} from "react-native";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import GameScreen from "./screens/GameScreen";
import GameOverScreen  from './screens/GameOverScreen';
import Colors from "./constants/colors";

export default function App() {
  const [pickedNumber, setPickedNumber] = useState("");
  const [isGameOver, setIsGameOver] = useState(true);
  const [fontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  });

  if(!fontsLoaded){
    return <AppLoading />;
  }

  const pickedNumberHandler = (num) => {
    setPickedNumber(num);
    setIsGameOver(false);
  };

  let screen;

  if (!pickedNumber) {
    screen = <StartGameScreen setPickedNumber={pickedNumberHandler} />;
  } else if (pickedNumber && isGameOver) {
    screen = <GameOverScreen />;
  } else if (!isGameOver && !isGameOver) {
    screen = <GameScreen picked={parseInt(pickedNumber)} setGameOver={setIsGameOver} />;
  }

  return (
    <LinearGradient
      colors={[Colors.primary500, Colors.accent500]}
      style={styles.container}
    >
      <ImageBackground
        source={require("./assets/images/background.png")}
        resizeMode="cover"
        style={styles.container}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={[styles.container, styles.safeArea]}>
          {screen}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    marginTop: StatusBar.currentHeight + 15,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});

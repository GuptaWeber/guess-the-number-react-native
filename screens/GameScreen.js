import { useState } from "react";
import { View, StyleSheet, Text, Alert } from "react-native";
import Card from "../components/Card";
import InstructionText from "../components/InstructionText";
import PrimaryButton from "../components/PrimaryButton";
import Title from "../components/Title";
import Colors from "../constants/colors";
import Ionicons from '@expo/vector-icons/Ionicons';

function randomNumberBetween(min, max, exclude) {
  const randomNumber = parseInt(Math.random() * (max - min) + min);
  if (randomNumber === exclude) {
    return randomNumberBetween(min, max, exclude);
  }
  return randomNumber;
}

let minBoundary = 1;
let maxBoundary = 100;

export default function GameScreen({ picked, setGameOver }) {
  const [currentGuess, setCurrentGuess] = useState(
    randomNumberBetween(1, 100, picked)
  );

  function nextGuessHandler(direction) {
    if (
      (direction === "lower" && currentGuess < picked) ||
      (direction === "higher" && currentGuess > picked)
    ) {
      Alert.alert("You lied!", "You know that this is wrong!", [
        {
          text: "Sorry",
          style: "cancel",
        },
      ]);
      return;
    }

    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    const random = randomNumberBetween(minBoundary, maxBoundary, currentGuess);
    console.log(random, picked);
    if (random === picked) {
      setGameOver(true);
    } else {
      setCurrentGuess(random);
    }
  }

  return (
    <View style={styles.container}>
      <Title>Opponent's Guess</Title>
      <View style={styles.numberContainer}>
        <Text style={styles.numberText}>{currentGuess}</Text>
      </View>
      <Card>
        <InstructionText style={styles.instructionText}>Higher or Lower?</InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={() => nextGuessHandler("lower")}>
              <Ionicons name="md-remove" size={24} color='white' />
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={() => nextGuessHandler("higher")}>
            <Ionicons name="md-add" size={24} color='white' />
            </PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  numberContainer: {
    borderWidth: 4,
    borderColor: Colors.accent500,
    padding: 24,
    borderRadius: 8,
    margin: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    fontSize: 36,
    fontWeight: "bold",
    color: Colors.accent500,
    textAlign: "center",
    fontFamily:'open-sans-bold'
  },
  instructionText: {
    marginBottom: 16
  },    
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});

import { useState } from "react";
import { View, StyleSheet, TextInput, Alert, Text } from "react-native";
import Card from "../components/Card";
import InstructionText from "../components/InstructionText";
import PrimaryButton from "../components/PrimaryButton";
import Title from "../components/Title";
import Colors from "../constants/colors";

function StartGameScreen({ setPickedNumber }) {
  const [number, setNumber] = useState("");

  const onSubmitHandler = () => {
    let chosenNumber = parseInt(number);
    if (chosenNumber < 0 || chosenNumber > 100 || isNaN(chosenNumber)) {
      createAlert();
    } else {
      setPickedNumber(number);
    }
  };

  const resetHandler = () => {
    setNumber("");
  };

  const createAlert = () => {
    return Alert.alert(
      "Wrong Input",
      "Please Enter a Number Between 1 and 99",
      [
        {
          text: "Okay",
          style: "destructive",
          onPress: () => resetHandler,
        },
      ]
    );
  };

  return (
    <View style={styles.rootContainer}>
      <Title>Guess The Number</Title>
      <Card style={styles.inputContainer}>
        <InstructionText>
          Enter a Number
        </InstructionText>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="numeric"
          value={number}
          onChangeText={setNumber}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={resetHandler}>Reset</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={onSubmitHandler}>Submit</PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({

  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: 'center'
  },

  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomWidth: 2,
    borderBottomColor: Colors.accent500,
    marginVertical: 8,
    color: Colors.accent500,
    textAlign: "center",
    marginBottom: 24,
    fontFamily:'open-sans-bold'
  },

  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});

export default StartGameScreen;

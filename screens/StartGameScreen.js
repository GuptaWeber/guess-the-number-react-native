import { useState } from "react";
import { View, StyleSheet, TextInput, Alert } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import Colors from "../constants/colors";

function StartGameScreen({setPickedNumber}) {

  const [number, setNumber] = useState('');

  const onSubmitHandler= () => {
    let chosenNumber = parseInt(number);
    if(chosenNumber<0 || chosenNumber>100 || isNaN(chosenNumber)){
      createAlert();
    }else{
      setPickedNumber(number);
    }
  }

  const resetHandler = () => {
    setNumber('');
  }

  const createAlert = () => {
    return Alert.alert('Wrong Input', "Please Enter a Number Between 1 and 99", [
      {
        text: 'Okay',
        style: 'destructive',
        onPress: () => resetHandler
      }
    ])
  }

  return (
    <View style={styles.inputContainer}>
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
    </View>
  );
}

const styles = StyleSheet.create({
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
  },
  inputContainer: {
    marginTop: 75,
    backgroundColor: Colors.primary800,
    padding: 16,
    marginHorizontal: 24,
    borderRadius: 10,
    elevation: 10,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1
  },
});

export default StartGameScreen;

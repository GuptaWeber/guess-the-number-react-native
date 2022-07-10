import { View, Text, Image, StyleSheet, Dimensions, useWindowDimensions } from "react-native";
import Title from "../components/Title";
import Colors from "../constants/colors";
import PrimaryButton from "../components/PrimaryButton";

const GameOverScreen = ({ userNumber, rounds, onStartNewGame }) => {

  const {width} = useWindowDimensions();

  let content= <>
        <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/success.png")}
        />
      </View>
      <Text style={styles.summary}>
        Your phone needed <Text style={styles.highlight}>{rounds}</Text> rounds
        to guess the number{" "}
        <Text style={styles.highlight}>{userNumber}</Text>
      </Text>
      <PrimaryButton onPress={onStartNewGame}>Start a New Game</PrimaryButton>
  </>;

  if(width>500){
    content= <>
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
    <View style={[styles.imageContainer, {flex: 1, width: 200, height: 200, borderRadius: 100}]}>
        <Image
          style={styles.image}
          source={require("../assets/images/success.png")}
        />
      </View>
    <View style={{flex: 1}}>
    <Text style={styles.summary}>
        Your phone needed <Text style={styles.highlight}>{rounds}</Text> rounds
        to guess the number{" "}
        <Text style={styles.highlight}>{userNumber}</Text>
      </Text>
      <PrimaryButton onPress={onStartNewGame}>Start a New Game</PrimaryButton>
    </View>
    </View>
    </>;
  }

  return (
    <View style={styles.container}>
      <Title>Game Over</Title>
      {content}
    </View>
  );
};

export default GameOverScreen;

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: deviceWidth<380? 200 : 300,
    height: deviceWidth<380? 200 : 300,
    borderRadius:  deviceWidth<380? 100 : 150,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summary: {
    fontSize: 24,
    textAlign: "center",
    fontFamily: "open-sans",
    marginBottom: 24,
  },
  highlight: {
    color: Colors.primary500,
    fontFamily: "open-sans-bold",
  },
});

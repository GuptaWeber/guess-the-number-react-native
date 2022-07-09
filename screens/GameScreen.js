import { View, StyleSheet} from "react-native";
import Title from "../components/Title";

export default function GameScreen() {
  return (
    <View style={styles.container}>
        <Title>Opponent's Guess</Title>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 24
    }
});
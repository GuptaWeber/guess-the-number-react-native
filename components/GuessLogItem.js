import { View, Text, StyleSheet } from "react-native"
import Colors from "../constants/colors";

export default function GuessLogItem({round, guess}) {
  return (
    <View style={styles.listItem}>
        <Text style={styles.number}>#{round}</Text>
        <Text style={styles.number}>Opponent's Guess: {guess}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    listItem:{
        flexDirection: 'row',
        backgroundColor: Colors.accent500,
        borderWidth: 3,
        borderRadius: 24,
        justifyContent: 'space-between',
        padding: 12,
        margin: 12,
        elevation: 4,
        alignSelf: 'stretch'
    },
    number:{
        fontFamily: 'open-sans'
    }
});

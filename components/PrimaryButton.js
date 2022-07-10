import { View, Text, StyleSheet, Pressable } from "react-native";
import Colors from "../constants/colors";

export default function PrimaryButton({ children, onPress, style }) {
  return (
    <View style={[styles.outerContainer, style]}>
      <Pressable
        onPress={onPress}
        style={ ({pressed}) => pressed? {...styles.container, ...styles.pressed}: styles.container}
        android_ripple={{ color: Colors.primary600 }}
      >
        <Text style={styles.text}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({

  outerContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: 'hidden'
  },
  container: {
    backgroundColor: Colors.primary500,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  text: {
    color: "#ffffff",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75
  }
});

import {View, StyleSheet} from 'react-native';
import Colors from '../constants/colors';

export default function Card({children}) {
  return (
    <View style={styles.inputContainer}>{children}</View>
  )
}

const styles= StyleSheet.create({
    inputContainer: {
        marginTop: 36,
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
});



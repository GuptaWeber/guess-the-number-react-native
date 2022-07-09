import {View} from 'react-native';
import PrimaryButton from '../components/PrimaryButton';

function StartGameScreen() {
  return (
    <View>
        <PrimaryButton>Reset</PrimaryButton>
        <PrimaryButton>Submit</PrimaryButton>
    </View>
  )
}

export default StartGameScreen
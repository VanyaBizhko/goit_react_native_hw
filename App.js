
import LoginScreen from './Screens/LoginScreen/LoginScreen';
import RegistrationScreen from './Screens/RegistrationScreen/RegistrationScreen';
import { useFonts } from 'expo-font';




export default function App() {
  const [fontsLoaded] = useFonts({
    'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf')
  });
     if (!fontsLoaded) {
    return null;
  }

  return (
    // <RegistrationScreen/>
    <LoginScreen/>
  );
}



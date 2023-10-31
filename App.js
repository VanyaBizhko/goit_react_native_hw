import 'react-native-gesture-handler';
import LoginScreen from './Screens/LoginScreen/LoginScreen';
import RegistrationScreen from './Screens/RegistrationScreen/RegistrationScreen';
import { useFonts } from 'expo-font';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import PostsScreen from './Screens/PostsScreen/PostsScreen';
import Home from './Screens/Home/Home';




export default function App() {
  const MainStack = createStackNavigator();
  const [fontsLoaded] = useFonts({
    'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf')
  });
     if (!fontsLoaded) {
    return null;
  }

  return (
   <NavigationContainer>
      <MainStack.Navigator initialRouteName="Login">
        <MainStack.Screen name="Registration" component={RegistrationScreen} />
        <MainStack.Screen name="Login" component={LoginScreen} />
        <MainStack.Screen name="Home" component={Home} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}



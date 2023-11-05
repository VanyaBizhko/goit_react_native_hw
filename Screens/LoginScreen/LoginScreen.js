import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
  TouchableOpacityBase,
} from "react-native";
import background from "../../assets/photo/background.jpg";
import { useState } from "react";
import { useNavigation } from '@react-navigation/native';

export default LoginScreen = () => {
const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const[password, setPassword] = useState("");  
  const onLogin = () => {
    console.log(` Email: ${email},
    Пароль: ${password}`);
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}> 
    <View >
        <ImageBackground style={styles.bg} source={background}>
          <KeyboardAvoidingView style={styles.kbPosition} behavior={Platform.OS == "ios" ? "padding" : "height"}>
          <View style={styles.container}>
            
            <Text style={styles.loginText}>Увійти</Text>
            
          <TextInput
            style={styles.input}
              placeholder="Адреса електронної пошти"
              value={email}
              onChangeText={setEmail}
          />
            <View>
              
            <TextInput
              style={styles.inputLast}
                placeholder="Пароль"
                value={password}
                onChangeText={setPassword}
                ></TextInput>
              
            <Text style={styles.showTxt}>Показати</Text>
          </View>
          
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText} onPress={() => navigation.navigate("Home", { sessionId: 45, email: {email} })}>Увійти</Text>
          </TouchableOpacity>
          <TouchableOpacity  onPress={() => navigation.navigate("Registration")}><Text style={styles.goToRegTxt}>Немає акаунту? Зареєструватися</Text></TouchableOpacity>
            </View>
            </KeyboardAvoidingView>
      </ImageBackground>
      </View>

      </TouchableWithoutFeedback>
  );
};
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const styles = StyleSheet.create({
  kbPosition:{
    // flex: 1,
    
    justifyContent: 'flex-end',
  },

  container: {
    borderTopStartRadius: 25,
    borderTopEndRadius: 25,
    marginTop: 273,
    // marginTop:500,
    backgroundColor: "#fff",
    height:height*0.55,
    // paddingBottom:100,
  },
  loginText: {
    fontFamily: "Roboto-Regular",

    marginTop: 32,
    textAlign: "center",
    backgroundColor: "#fff",
    color: "#212121",

    fontSize: 30,
    marginBottom: 33,
  },
  input: {
    backgroundColor: "#F6F6F6",
    paddingBottom: 15,
    paddingTop: 16,
    paddingLeft: 16,
    marginBottom: 16,
    marginLeft: 16,
    marginRight: 16,
    borderRadius: 10,
    borderStyle: "solid",
    borderColor: "#E8E8E8",
    borderWidth: 1,
    fontSize: 16,
  },
  inputLast: {
    backgroundColor: "#F6F6F6",
    paddingBottom: 15,
    paddingTop: 16,
    paddingLeft: 16,
    marginBottom: 0,
    marginLeft: 16,
    marginRight: 16,
    borderRadius: 10,
    borderStyle: "solid",
    borderColor: "#E8E8E8",
    borderWidth: 1,
    fontSize: 16,
  },
  showTxt: {
    fontFamily: "Roboto-Regular",
    position: "absolute",
    left: width * 0.77,

    fontSize: 16,
    lineHeight: 19,
    color: "#1B4371",

    top: height * 0.02,
  },
  button: {
    backgroundColor: "#FF6C00",
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 32,
    paddingRight: 32,
    borderRadius: 100,
    marginTop: 43,
    marginLeft: 16,
    marginRight: 16,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    textAlign: "center",
  },
  goToRegTxt: {
    textAlign: "center",
    marginTop: 16,
    color: "#1B4371",
    fontSize: 16,
  },
});

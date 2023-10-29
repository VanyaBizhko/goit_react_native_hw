import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  ImageBackground,
  Dimensions,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
} from "react-native";
import background from "../../assets/photo/background.jpg";
import add from "../../assets/photo/add.png";
export default RegistrationScreen = () => {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const[password, setPassword] = useState("");  
  const onLogin = () => {
    console.log(`Логін : ${login},
    Email: ${email},
    Пароль: ${password}`);
  };

  return (
     <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View>
        <ImageBackground source={background} style={background}>
          <KeyboardAvoidingView style={styles.kbPosition} behavior={Platform.OS == "ios" ? "height" : "height"}>
        <View style={styles.container}>
          <TouchableOpacity style={styles.addUserPhoto}>
            <Image style={styles.userImage}></Image>
            <Image source={add} style={styles.userAddImage} />
          </TouchableOpacity>
          <Text style={styles.registrationText}>Реєстрація</Text>
          <TextInput style={styles.input} placeholder="Логін" value={login}
        onChangeText={setLogin} />
          <TextInput
              style={styles.input}
              value={email}
        onChangeText={setEmail}
            placeholder="Адреса електронної пошти"
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

          <TouchableOpacity style={styles.button} onPress={onLogin}>
            <Text style={styles.buttonText}>Зареєстуватися</Text>
          </TouchableOpacity>
          <Text style={styles.goToLoginTxt}>Вже є акаунт? Увійти</Text>
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
  addUserPhoto: {
    justifyContent: "center",
    alignItems: "center",
    zIndex: 3,
    top: width * -0.03,
  },
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    resizeMode: "cover,",
  },

  userImage: {
    position: "absolute",
    backgroundColor: "#F6F6F6",

    width: 120,
    height: 120,
    borderRadius: width * 0.05,
  },
  userAddImage: {
    left: 60,
    top: 30,
  },
  container: {
    borderTopStartRadius: 25,
    borderTopEndRadius: 25,
    marginTop: width * 0.55,
    backgroundColor: "#fff",
  },
  registrationText: {
    marginTop: 60,
    textAlign: "center",
    backgroundColor: "#fff",
    color: "#212121",
    fontFamily: "Roboto-Medium",

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
    position: "relative",
  },
  showTxt: {
    fontFamily: "Roboto-Medium",
    position: "absolute",
    left: width * 0.75,

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
  goToLoginTxt: {
    textAlign: "center",
    marginTop: 16,
    color: "#1B4371",
    fontSize: 16,
  },
});

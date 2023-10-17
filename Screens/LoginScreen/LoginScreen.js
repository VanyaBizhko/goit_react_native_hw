import {StyleSheet, Text ,View, TextInput, TouchableOpacity, Image,ImageBackground, Dimensions} from "react-native";
import background from '../../assets/photo/background.jpg';

export default LoginScreen = () => {

    return (
        <View>
             <ImageBackground source={background}>
            
            <View style={styles.container}>
                 <Text style={styles.loginText}>Увійти</Text>
                <TextInput
                    style={styles.input}
                placeholder="Адреса електронної пошти"
            />
                <TextInput
                    style={styles.inputLast}
                        placeholder="Пароль"
                    ></TextInput>
                    <Text style={styles.showTxt}>Показати</Text>
                    
                    <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>Увійти</Text></TouchableOpacity>
                    <Text style={styles.goToRegTxt}>Немає акаунту? Зареєструватися</Text>
                </View>
                </ImageBackground>
        </View>
    )
}
const width = Dimensions.get('window').width;


const styles = StyleSheet.create({
    addUserPhoto: {
       justifyContent: 'center',
        alignItems: 'center',
        zIndex:3,
        top: width * 0.6,
        
  },
   
      userImage: {
    position: 'absolute',
          backgroundColor: '#F6F6F6',
    
    width: 120,
    height: 120,
    borderRadius: width * 0.05,
  },
    container: {
        borderTopStartRadius: 25,
        borderTopEndRadius:25,
        marginTop:273,
    backgroundColor:"#fff"    
    },
    loginText: {
      marginTop:32,
    textAlign:"center",
    backgroundColor: "#fff",
        color: "#212121",
        // fontWeight:500,
        fontSize: 30,
    marginBottom:33,
    
    },
    input: {
        backgroundColor: "#F6F6F6",
        paddingBottom: 15,
        paddingTop: 16,
        paddingLeft:16,
        marginBottom: 16,
        marginLeft: 16,
        marginRight: 16,
        borderRadius: 10,
        borderStyle: 'solid',
        borderColor: "#E8E8E8",
        borderWidth: 1,
        fontSize:16,
        
    },
    inputLast: {
                backgroundColor: "#F6F6F6",
        paddingBottom: 15,
        paddingTop: 16,
        paddingLeft:16,
        marginBottom: 0,
        marginLeft: 16,
        marginRight: 16,
        borderRadius: 10,
        borderStyle: 'solid',
        borderColor: "#E8E8E8",
        borderWidth: 1,
        fontSize:16,
    },
    showTxt: {
         fontFamily: 'Roboto-Regular',
    fontSize: 16,
    lineHeight: 19,
        color: '#1B4371',
        position: 'absolute',
    top: 185,
    right: width * 0.07,
    },
    button: {
        backgroundColor: '#FF6C00',
        paddingTop: 16,
        paddingBottom: 16,
        paddingLeft: 32,
        paddingRight: 32,
        borderRadius: 100,
        marginTop:43,
        marginLeft: 16,
        marginRight:16,
    },
    buttonText:{
        color: "#ffffff",
        fontSize: 16,
        textAlign:"center",
    },
    goToRegTxt: {
        textAlign: "center",
        marginTop: 16,
        color: "#1B4371",
        fontSize:16,
        
    }
});
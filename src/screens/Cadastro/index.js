import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import BackIcon from "react-native-vector-icons/Ionicons";
import { api2 } from '../../services/api';
import { styles } from "./styles";


const Cadastro = () => { 

    const [showPass, setShowPass] = useState(true)
    const [showConfirmPass, setShowConfirmPass] = useState(true);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [mensagem, setMensagem] = useState("");
    const navigation = useNavigation()
    
    
    const registerUser = () => {
        if (password !== confirmPassword) {
          setMensagem("")
          setMensagem("Senhas não conferem, favor conferir!")
          return;
        }
        if(username.length <=0 || password.length <=0 || confirmPassword.length <=0) {
          setMensagem("")
          setMensagem("Nenhum dos campos pode ser nulo")
            return; 
        }
        
        const user = {
          username: username,
          password: password
        };
        
        api2.post("/users", user)
        .then((res) => {
          navigation.navigate('Login')
          console.log(res.data)
        }).catch((err) => { 
          console.log(err)
        })
         
      };





    return (
        <View style={styles.containerCadastro}>
            <View style={{ height: "10%", width: "100%", justifyContent: "flex-start", alignItems: "flex-end", padding: 10, marginRight: 20}}>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}> 
                  <BackIcon size={40} color={"#008ea2"} name={"arrow-back-circle-outline"}/>
                </TouchableOpacity>
            </View>
           
            <Text style={styles.textTitle}> CADASTRO </Text>
            
        <View>
            <Text style={styles.textLabel}> USUARIO </Text>
            <TextInput 
             placeholder="Usuario"
            placeholderTextColor="#D3D3D3"
            style={styles.input} 
            onChangeText={(e) => setUsername(e)}/>
        </View>

        <View>
            <View style={styles.hideOrShowPass}>
           
                <Text style={styles.textLabel}> SENHA </Text>
                <TouchableOpacity style={styles.iconSenha} onPress={() => setShowPass(!showPass)}>
                    {showPass ?
                        <Icon name="eye" size={20} color="#008ea2" />
                        :
                        <Icon name="eye-off" size={20} color="#008ea2" />
                    }
                </TouchableOpacity>
            </View>
        
            <TextInput 
            placeholder="Senha"
            placeholderTextColor="#D3D3D3"
            style={styles.input}
            secureTextEntry={showPass} 
            onChangeText={(e) => setPassword(e)}/>

        </View>

        
        <View>
           <View style={styles.hideOrShowPass}> 
                <Text style={styles.textLabel}> CONFIRME SUA SENHA </Text>
                <TouchableOpacity style={styles.iconSenha} onPress={() => setShowConfirmPass(!showConfirmPass)}>
                    {showConfirmPass ?
                        <Icon name="eye" size={20} color="#008ea2" />
                        :
                        <Icon name="eye-off" size={20} color="#008ea2" />
                    }
                </TouchableOpacity>
            </View>
            <TextInput 
            placeholder="Confirme sua senha"
            placeholderTextColor="#D3D3D3"
            style={styles.input} 
            secureTextEntry={showConfirmPass}
            onChangeText={(e) => setConfirmPassword(e)}/>
        </View>
           <Text style={styles.errorMessage}>{mensagem}</Text>
          <TouchableOpacity  onPress={() => registerUser()} style={styles.button} >
            <Text style={styles.textButton}>CADASTRAR</Text>
          </TouchableOpacity>
      
        </View>
    )
}
export default Cadastro; 
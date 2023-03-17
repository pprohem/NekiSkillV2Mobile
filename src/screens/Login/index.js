import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { useContext, useEffect, useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { CheckBox } from "react-native-elements";
import Icon from "react-native-vector-icons/Feather";
import { AuthContext } from "../../Context/auth";
import { styles } from "./styles";

const Login = () => {
  const [showPass, setShowPass] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const { login } = useContext(AuthContext);
  const navigation = useNavigation();

  useEffect(() => {
    const loadLoginCredentials = async () => {
      const storedCredentials = await AsyncStorage.getItem("loginCredentials");
      if (storedCredentials) {
        const { username: storedUsername, password: storedPassword } =
          JSON.parse(storedCredentials);
        setUsername(storedUsername);
        setPassword(storedPassword);
        setRememberMe(true);
      }
    };
    loadLoginCredentials();
  }, []);

  const handleLogin = async () => {
    if (rememberMe) {
      const credentials = { username, password };
      await AsyncStorage.setItem(
        "loginCredentials",
        JSON.stringify(credentials)
      );
    } else {
      await AsyncStorage.removeItem("loginCredentials");
    }
    login(username, password).then(() => {
      navigation.navigate("Home");
    });
  };

  return (
    <View style={styles.boxLogin}>
      <View style={styles.boxLogin}>
        <View style={styles.viewTitle}>
          <Image
            style={styles.logo}
            source={require("../../../assets/Logo-Neki.png")}
          />
          <Text style={styles.title}>LOGIN</Text>
        </View>

        <TextInput
          placeholder="Username"
          placeholderTextColor="#D3D3D3"
          onChangeText={setUsername}
          value={username}
          style={styles.input}
        />

        <TouchableOpacity
          style={styles.iconSenha}
          onPress={() => setShowPass(!showPass)}
        >
          {showPass ? (
            <Icon name="eye" size={20} color="#008ea2" />
          ) : (
            <Icon name="eye-off" size={20} color="#008ea2" />
          )}
        </TouchableOpacity>

        <TextInput
          placeholder="Password"
          placeholderTextColor="#D3D3D3"
          onChangeText={setPassword}
          value={password}
          style={styles.input}
          secureTextEntry={showPass}
        />

        <View>
          <CheckBox
            title="Remember me"
            checked={rememberMe}
            onPress={() => setRememberMe(!rememberMe)}
            checkedColor="#008ea2"
            uncheckedColor="#d3d3d3"
            containerStyle={{ backgroundColor: "transparent", borderWidth: 0 }}
          />

          <TouchableOpacity onPress={handleLogin} style={styles.button}>
            <Text style={styles.textButton}>SIGN IN </Text>
          </TouchableOpacity>

          <Text style={styles.textCadastro}>
            {" "}
            Não possui cadastro?{" "}
            <Text
              onPress={() => navigation.navigate("Cadastro")}
              style={styles.textSpan}
            >
              Cadastre-se!
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Login;

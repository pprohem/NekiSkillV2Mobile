import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { useContext, useEffect, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import Card from "../../components/Card";
import { AuthContext } from "../../Context/auth";
import { api, api2 } from "../../services/api";
import { styles } from "./styles";

const Home = () => {
  const { logout } = useContext(AuthContext);
  const navigation = useNavigation();
  const [userSkill, setUserSkill] = useState([]);
  


  // Get USERSKILLS
  useEffect(() => {
    AsyncStorage.getItem("ID")
      .then((idLogado) => api2.get(`/users/${idLogado}`))
      .then((response) => {
        setUserSkill(response.data.userSkill);
      
      })
      .catch((error) => {
        console.error(error);
      });
  }, [api2]);


  



  const handleDeleteCard = (cardId) => {
    api
      .delete(`/userskill/${cardId}`)
      .then(() => {
        setUserSkill((prevSkills) =>
          prevSkills.filter((skill) => skill.id !== cardId)
        );
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleLogout = () => {
    logout();
    navigation.navigate("Login");
  };


  
  
  return (
    <View style={styles.Container}>
      <View style={styles.header}>
        <View style={styles.Viewlogo}>
          <Image
            style={styles.logo}
            source={require("../../../assets/Logo-Neki.png")}
          />
          <Text style={styles.textHeader}>SKILLS</Text>
        </View>
        <View style={{ display: "flex", flexDirection: "row", padding: 10 }}>
          <TouchableOpacity onPress={() => navigation.navigate('CadastroSkill')} style={{ margin: 5 }}>
            <Icon name="create-new-folder" size={30} />
          </TouchableOpacity>

          <TouchableOpacity style={{ margin: 5 }} onPress={handleLogout}>
            <Icon name="logout" size={30} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.ViewContent}>
      
        <Card
          onDeleteSkill={handleDeleteCard}
          cardProps={userSkill}
          style={styles.card}
        ></Card>
      </View>
    </View>
  );
};

export default Home;

import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import BackIcon from "react-native-vector-icons/Ionicons";
import { api, api2 } from "../../services/api";
import { styles } from "./styles";

const CadastroSkill = () => {
  const [level, setLevel] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [name, setName] = useState("");
  const [userId, setUserId] = useState();
  const [skills, setSkills] = useState([]);
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [open, setOpen] = useState(false);

  const navigation = useNavigation();
  useEffect(() => {
    async function fetchSkills() {
      try {
        const response = await api2.get("/skill");
        const skillsData = response.data.map((skill) => ({
          label: skill.name,
          value: skill.id,
        }));
        setSkills(skillsData);
      } catch (error) {}
    }

    fetchSkills();
  }, []);

  // GET USER NAME / ID
  useEffect(() => {
    async function getName() {
      try {
        const valueName = await AsyncStorage.getItem("user");
        const valueID = await AsyncStorage.getItem("ID");
        if (valueName !== null && valueID !== null) {
          setName(valueName);
          setUserId(valueID);

          
        }
      } catch (error) {
        console.log(error);
      }
    }
    getName();
  }, []);

  const handleSubmit = (event) => {
    if (level > 10 || level <= 0) {
      setMensagem("O nível de conhecimento tem que estar entre 1 e 10");
    }
    if(selectedSkill === null ) {
      setMensagem("Você PRECISA escolher uma habilidade");
    }
    
    else {
      event.preventDefault();
      const skillPost = {
        knowledgeLevel: level,
        user: {
          id: userId,
        },
        skill: {
          id: selectedSkill,
        },
      };

      api
        .post("userskill", skillPost)
        .then((res) => {
          console.log("ok!");
          setMensagem("Skill Cadastrada com sucesso");
          navigation.goBack();
        })
        .catch((err) => {
          console.log("erro" + err);
          setMensagem("Ops, tente novamente mais tarde.");
        });
    }
  };




 




  return (
    <View style={styles.containerCadastro}>
      <View
        style={{
          height: "10%",
          width: "100%",
          justifyContent: "flex-start",
          alignItems: "flex-end",
          padding: 10,
          marginRight: 20,
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <BackIcon
            size={40}
            color={"#008ea2"}
            name={"arrow-back-circle-outline"}
          />
        </TouchableOpacity>
      </View>

      <Text style={styles.textTitle}>Olá {name}, cadastre novas Skills aqui!</Text>


      <View>
      <Text style={styles.textLabel}> Selecione a Skill</Text>
        <DropDownPicker
          items={skills}
          open={open}
          setOpen={setOpen}
          value={selectedSkill}
          setValue={setSelectedSkill}
          placeholder="Selecione uma habilidade"
          onChangeItem={(item) => {
            setSelectedSkill(item.value);
            onValueChange(item.value);
            setOpen(false);
          }}
        />
         <View>
        <Text style={styles.textLabel}> Nivel de Conhecimento (Stars) </Text>
        <TextInput
          placeholder="nivel de conhecimento"
          placeholderTextColor="#D3D3D3"
          style={styles.input}
          onChangeText={setLevel}
        />
      </View>


       
      </View>
      
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.textButton}>+ SKILL</Text>
      </TouchableOpacity>

      <Text style={styles.errorMessage}>{mensagem}</Text>
    </View>
  );
};
export default CadastroSkill;

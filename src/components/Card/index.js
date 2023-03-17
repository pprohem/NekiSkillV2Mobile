import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import Modal from "react-native-modal";
import Icon from "react-native-vector-icons/FontAwesome";
import BackIcon from "react-native-vector-icons/Ionicons";

import { api } from "../../services/api";
import SkillRating from "../SkillRating";

import styles from "./styles";

const Card = ({ cardProps, onDeleteSkill }) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [isListUpdated, setIsListUpdated] = useState(false);
  const [userId, setUserId] = useState();
  const [userSkillID, setUserSkillID] = useState();
  const [skillID, setSkillID] = useState();
  const [newLevel, setNewLevel] = useState();
  const [mensagem, setMensagem] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getId() {
      try {
        const valueID = await AsyncStorage.getItem("ID");
        if (valueID !== null) {
          setUserId(valueID);
        }
      } catch (error) {
        console.log(error);
      }
    }
    getId();
  }, []);

  useEffect(() => {
    setData(cardProps);
  }, [cardProps]);

  const openModal = (skillId, userSkillId) => {
    setModalVisible(true);
    setSkillID(skillId);
    console.log(skillId);
    setUserSkillID(userSkillId);
    console.log(userSkillId);
  };

  const handleUptade = (event) => {
    if(newLevel <= 0 || newLevel > 10 ) { 
      setMensagem("O nível de conhecimento tem que ser entre 1 e 10")
      return; 
    }
    event.preventDefault();

    const dataToUpdate = {
      knowledgeLevel: newLevel,
      user: {
        id: userId,
      },
      skill: {
        id: skillID,
      },
    };

    api
      .put(`/userskill/${userSkillID}`, dataToUpdate)
      .then((res) => {
        console.log(res);
        const updatedData = data.map((item) => {
          if (item.id === userSkillID) {
            return { ...item, knowledgeLevel: newLevel };
          }
          return item;
        });
        setData(updatedData);
        setIsListUpdated(!isListUpdated); // atualiza o estado da lista
        setMensagem("O nível de conhecimento foi atualizado!")
      })
      .catch((err) => {
        console.error(err);
        setMensagem("Ocorreu um erro, tente novamente em instantes!")
      });
  };

  return (
    <FlatList
      data={data}
      extraData={isListUpdated}
      keyExtractor={(item) => item.id}
      renderItem={({ item, index }) => (
        <View style={styles.card}>
          <View style={styles.viewLogo}>
            <Image style={styles.logo} source={{ uri: item.skill.imageUrl }} />
            <SkillRating level={item.knowledgeLevel} />
            <Text style={{ fontSize: 8, color: "#FFFF" }}>
              Nivel de Conhecimento(2:1){" "}
            </Text>
          </View>

          <View style={styles.viewContent}>
            <Text style={styles.textDecoration}>Skill: {item.skill.name}</Text>
            <Text style={styles.textDecoration}>
              Versão: {item.skill.version}
            </Text>
            <Text style={styles.textDecoration}>
              Descrição: {item.skill.description}
            </Text>
            <View style={styles.viewButtons}>
              <TouchableOpacity
                onPress={() => openModal(item.skill.id, item.id)}
              >
                <Icon name="refresh" size={24} color="#00b5b6" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => onDeleteSkill(item.id)}>
                <Icon name="trash" size={24} color="#F44E3F" />
              </TouchableOpacity>
            </View>
          </View>
          <Modal animationType="slide" transparent isVisible={isModalVisible}>
            <View style={styles.modalContainer}>
              <Text style={styles.modalText}>Atualize seu nivel de conhecimento</Text>
              <Text>Em um nível de 1 a 10</Text>
              <TextInput
                placeholder="Novo Nivel"
                keyboardType="number"
                placeholderTextColor="#D3D3D3"
                onChangeText={setNewLevel}
                style={styles.input}
              />

              <Text style={styles.modalText}>{mensagem}</Text>
              <TouchableOpacity style={styles.buttonSubmit} onPress={handleUptade}>
                <Text style={styles.textButton}>Atualizar!</Text>
              </TouchableOpacity>
              <TouchableOpacity  onPress={() => setModalVisible(false)}>
                <BackIcon  size={30} name={"arrow-back-circle-outline"}/>
              </TouchableOpacity>
            </View>
          </Modal>
        </View>
      )}
    />
  );
};

export default Card;

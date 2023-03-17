import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    
  
    boxLogin:{
    flex: 1,
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#DDD9CE",
    flexDirection: "column",
    
    alignItems: "center",
    },
     
    title: {
      padding: "3%",
      color: "#008ea2",
      fontSize: 30,
      marginBottom: 7.5,
    },
     logo: { 
      width: 100,
      height: 100
     },
    input: {
      height: 50,
      padding: 10,
      width: 260,
      marginBottom: 10,
      marginTop: 10,
      fontSize: 20,
      color: "#008ea2",
      backgroundColor: "#f7f7f7",
      borderRadius: 5      
    },
  
    button: {
      backgroundColor: "#008ea2",
      justifyContent: "center",
      alignItems: "center",
      width: 260,
      borderRadius: 9,
      paddingVertical: 10,
      marginTop: 25,
    },

    textButton: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#fff",
        textAlign: "center",
    },

    textCadastro: {
        fontSize: 15,
        fontWeight: "bold",
        color: "#008ea2",
        marginTop: 30
    },

    viewTitle: {
      width: 150,
      marginLeft: 50
    },

    textSpan: { 
      fontSize: 15,
      fontWeight: "bold",
      color: "#0d324f",
      marginTop: 30
    },

    iconSenha: {
      alignItems: "center",
      justifyContent: "center",
      width: "20%",
      marginLeft: 220
    },
  
  });
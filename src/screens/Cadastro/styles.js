import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  containerCadastro: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#DDD9CE",
    flexDirection: "column",
  },

  textTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#008ea2",
    marginBottom: 80,
  },

  textLabel: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#008ea2",
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
    borderRadius: 5,
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
  iconSenha: {
    alignItems: "center",
    justifyContent: "center",
    width: "20%",
  },

  hideOrShowPass: {
    display: "flex",
    flexDirection: "row",
  },

  errorMessage: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ff3700",
  },
});

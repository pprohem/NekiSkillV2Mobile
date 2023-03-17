import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    Container:{
        flex: 1,
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#DDD9CE",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        },

    header: { 
        height: "13%",
        backgroundColor: "#00b5b6",
        width: "100%",
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "space-between",
        flexDirection: "row",
        padding: 15,
    },

    logo: { 
        height: 50,
        width: 50,
        marginTop: 25,
    },

    textHeader: { 
        fontSize: 12,
        fontWeight: "bold",
        marginLeft: 6,
        color: "#0d324f"
    },

    Viewlogo: { 
        marginTop: 15
    },

    ViewContent: { 
        width: "90%",
        height: "85%",
        marginBottom: 10,
      
        display: "flex",
        alignItems: "center"
    }
})

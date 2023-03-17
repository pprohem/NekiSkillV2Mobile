import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  card: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 5,
    backgroundColor: '#211b15',
    padding: 10,
    borderRadius: 10,
    marginTop: 50,
    height: 200,
    width: 380,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  viewButtons: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
    padding: 10,
    
    width: "80%"

  },

  logo: { 
    width: 60,
    height: 60,
    marginBot: 30,
  },

  viewButtons: { 
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: 150,
    marginTop: 20,
    padding: 10, 

  },
  modalContainer: {
    backgroundColor: '#DDD9CE',
    padding: 20,
    borderRadius: 10,
    height: 350,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  modalText: {
    fontSize: 16,
    marginBottom: 20,
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
 

  buttonSubmit: { 

    height: "15%",
    width: "40%",
    margin: 20,
    backgroundColor:  "#008ea2",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "5%"
  },

  textButton: { 
    color: "#F5F5F5",
    fontWeight: "bold",
    fontSize: 16
  },
 
  viewLogo: { 
    height: '90%',
    width: '40%',
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column"
  },
 
  viewContent: { 
    
    width: "60%",
    height: "90%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column"

  },

  textDecoration: { 
    color: "#FFFF",
    fontFamily: "Helvetica",
    fontSize: 16
  }


});

export default styles;
import { StyleSheet, Dimensions } from "react-native";
const screenHeight = Dimensions.get('window').height

export const Estilo = StyleSheet.create({
       content: {
      paddingTop: 10,
      justifyContent: 'center',
      paddingLeft: 15,
      paddingRight: 15,

      // backgroundColor: '#FCFCFB',
    },
    header: {

      backgroundColor: "#ED56F7"

    },
    headerTitle: {
      color: '#FCFCFB'
    },
    container: {
      flex: 1,

    },

    View: {
      flex: 1,
      backgroundColor: '#F0F0F0',
      marginTop:7
    },


    textinput: {
         marginBottom: 5
    },
    fab: {
      position: 'absolute',
      margin: 16,
      right: 0,
      bottom: 50,
      backgroundColor: '#E535F3',
      // width: 70,
      alignItems: 'center',
      borderRadius:100
    },

    titleText: {
      fontSize: 15,
      fontWeight: 'bold',
      color: '#333',
      borderBottomColor: '#E535F3',
      paddingBottom: 4,
    },

    Card:{

      marginBottom: 20,
    }
  });


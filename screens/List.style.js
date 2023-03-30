import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    inputContainer: {
      width: "90%",
      alignSelf: "center",
      justifyContent: "space-between",
      flexDirection: "row",
      backgroundColor: "white",
      alignItems: "center",
      borderRadius: 10,
      marginVertical: 10
    },
    buttonContainer: {
      position: "absolute",
      flexDirection: "row",
      right: 0,
    },
    searchButton: {
      backgroundColor: "#34CB65",
      width: 80,
      height: 40,
      justifyContent: "center",
      marginRight: 2,
      alignItems: "center",
      borderRadius: 8
    },
    clearButton: {
      width: 60,
      height: 40,
      justifyContent: "center",
      alignItems: "center",
    },
    buttonText: {
      color: "black",
      fontWeight: "700",
      fontSize: 16
    },
    input: {
      paddingHorizontal: 10,
      fontSize: 20
    }
  });

  export default styles;
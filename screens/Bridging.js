import React from "react";
import { NativeModules, StyleSheet, Text, TouchableOpacity } from "react-native";

const Bridge = NativeModules.HelloWorldModule;

const BridgingScreen = () => {

    return (
        <>
        <Text style={styles.topTitle} >Note: This button will show the toast using native modules</Text>
            <TouchableOpacity style={styles.buttonContainer} onPress={() => { Bridge.ShowMessage("This is the success toast !", 2000) }} >
                <Text style={styles.buttonText} >Show Toast</Text>
            </TouchableOpacity>
        </>
    );
};

export default BridgingScreen;

const styles = StyleSheet.create({
    buttonContainer: {
        width: 150,
        height: 50,
        backgroundColor: "#34CB65",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        marginTop: 200,
        borderRadius:10
    },
    buttonText:{
        color:"white",
        fontWeight:"bold",
        fontSize:15,
    },
    topTitle:{
        alignSelf:"center",
        marginTop:20
    }
})
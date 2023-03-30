import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    loaderStyle: {
        marginVertical: 16,
        alignItems: "center",
        marginTop: 20
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        width: "90%",
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    modalText: {
        marginBottom: 15,
        color: "black",
        fontWeight: "bold"
    },
    modalText2: {
        marginBottom: 15,
    },
    modalRow: {
        flexDirection: "row",
        width: "80%",
        justifyContent: "space-between",
    },
    leftSide: {
        width: "40%",
        height: "100%",
    },
    rightSide: {
        width: "60%",
    },
    modalTitle: {
        color: "black",
        fontWeight: "800",
        fontSize: 25,
        marginBottom: "8%"
    },
    closeButton: {
        width: 100,
        height: 40,
        borderRadius: 15,
        backgroundColor: "red",
        justifyContent: "center",
        marginTop: 80
    },
    closeText: {
        color: "white",
        fontWeight: "800",
        fontSize: 18,
        alignSelf: "center"
    },
    reloadButton: {
        right: 10,
        width: "100%",
        height: 45,
        justifyContent: "center",
        alignItems: "flex-end",
    },
    cardMargin:{
        marginVertical:8
    }

});

export default styles;
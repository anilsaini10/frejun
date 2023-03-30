import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: "90%",
        backgroundColor: "white",
        alignSelf: "center",
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    image: {
        width: "100%",
        height: 200,
        resizeMode: "contain",
        backgroundColor: "#D3D3D3",
    },
    smallContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 8,
        marginVertical: 2
    },
    minorContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "50%",
        marginBottom: 8
    },
    title: {
        fontWeight: "700",
        fontSize: 18,
        color: "black"
    },
    value: {
        marginLeft: 8,
        fontWeight: "500",
        fontSize: 16,
        fontStyle: "italic",
        color: "grey"
    },
    titleContainer: {
        width: "40%",
    },
    valueContainer: {
        width: "60%",
    }
});

export default styles;
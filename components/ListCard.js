import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const ListComp = (props) => {

    const data = props?.data;
    return (
        <>
            <View style={styles.container} >
                <Image source={{
                    uri: `${data.thumbnail}`
                }} alt="Alternate Text" style={styles.image} />
                <View style={styles.marginLeft} >
                    <TitleAndValue title={"Title"} value={`${data.title}`} />
                </View>
                <View style={styles.marginLeft} >
                    <TitleAndValue title={"Price"} value={`${(data.price)}`} />
                </View>
                <View style={styles.smallContainer} >
                    <TitleAndValue title={"Brand"} value={`${(data.brand)}`} />
                    <TitleAndValue title={"Stock"} value={`${(data.stock)}`} />
                </View>

            </View>
        </>
    );
};

export default ListComp;

// Pass the title and it's value to this component.
const TitleAndValue = ({ title, value }) => {
    return (
        <>
            <View style={styles.minorContainer} >
                <View style={styles.titleContainer} >
                    <Text style={styles.title} >{title}</Text>
                </View>
                <View style={styles.valueContainer} >
                    <Text style={styles.value} >- {value}</Text>
                </View>
            </View>
        </>
    )
}

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
    },
    marginLeft: {
        marginLeft: 8
    }
});
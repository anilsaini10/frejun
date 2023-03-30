import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import styles from "./CardComp.Style";

const CardComp = (props) => {

    const data = props?.data;
    return (
        <>
            <View style={styles.container} >
                <Image source={{
                    uri: `${data.picture.large}`
                }} alt="Alternate Text" style={styles.image} />

                <View style={styles.smallContainer} >
                    <TitleAndValue title={"Name"} value={`${data.name.title} ${data.name.first}`} />
                    <TitleAndValue title={"City"} value={`${(data.location.city)?.slice(0, 10)}`} />
                </View>

                <View style={styles.smallContainer} >
                    <TitleAndValue title={"City"} value={`${(data.location.state)?.slice(0, 10)}`} />
                    <TitleAndValue title={"Country"} value={`${(data.location.country)?.slice(0, 10)}`} />
                </View>

            </View>
        </>
    );
};

export default CardComp;


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

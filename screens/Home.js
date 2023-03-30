import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Image, StyleSheet, ActivityIndicator, StatusBar, Alert, Modal, TouchableOpacity } from "react-native";
import axios from "axios";
import CardComp from "../components/CardComp";
import { useDispatch, useSelector } from "react-redux";
import { updateData } from "../redux/reducers/reducers";

const HomeScreen = () => {

    const myState = useSelector(state => state.counter)
    const currentReduxData = (myState.updateTheData.data);
    console.log("currentReduxData", currentReduxData.length)
    const dispatch = useDispatch();

    const [currentPage, setCurrentPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [currenModalData, setCurrentModalData] = useState([]);

    const getUsers = () => {
        setIsLoading(true);
        axios.get(`https://randomuser.me/api/?page=${currentPage}&results=10`)
            .then(res => {
                const curr = [...currentReduxData, ...res.data.results];
                dispatch(updateData(curr));
                setIsLoading(false);
            });
    };

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => { setShowModal(true); setCurrentModalData(item) }} >
                <CardComp data={item} />
            </TouchableOpacity>
        );
    };

    const renderLoader = () => {
        return (
            <>
                {isLoading ?
                    <View style={styles.loaderStyle}>
                        <ActivityIndicator size="large" color="#aaa" />
                    </View> :
                    <></>}
            </>
        );
    };

    const loadMoreItem = () => {
        setCurrentPage(currentPage + 1);
    };

    const ModalRow = ({ title, value }) => {
        return (
            <>
                <View style={styles.modalRow} >
                    <View style={styles.leftSide} >
                        <Text style={styles.modalText}>{title}:</Text>
                    </View>
                    <View style={styles.rightSide} >
                        <Text style={styles.modalText2}>{value}</Text>
                    </View>
                </View>
            </>
        )
    }

    useEffect(() => {
        getUsers();
    }, [currentPage]);

    return (
        <>
            <StatusBar backgroundColor="#000" />
            <Modal
                animationType="slide"
                transparent={true}
                visible={showModal}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible(!modalVisible);
                }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalTitle} >{currenModalData.name?.first + " " + currenModalData.name?.last}</Text>
                        <ModalRow title="Username" value={`${currenModalData?.login?.username}`} />
                        <ModalRow title="DOB" value={`${(currenModalData?.dob?.date)?.slice(0, 10)}`} />
                        <ModalRow title="Phone" value={`${currenModalData?.phone}`} />
                        <ModalRow title="Gender" value={`${currenModalData?.gender}`} />
                        <ModalRow title="Email" value={`${currenModalData?.email}`} />
                        <ModalRow title="City" value={`${currenModalData?.location?.city}`} />
                        <ModalRow title="State" value={`${currenModalData?.location?.state}`} />
                        <ModalRow title="Country" value={`${currenModalData?.location?.country}`} />
                        <ModalRow title="Postcode" value={`${currenModalData?.location?.postcode}`} />
                        <TouchableOpacity onPress={() => { setShowModal(false) }}
                            style={styles.closeButton}
                        >
                            <Text style={styles.closeText} >Close</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
            <FlatList
                data={currentReduxData}
                renderItem={renderItem}
                keyExtractor={item => item.email}
                ListFooterComponent={renderLoader}
                onEndReached={loadMoreItem}
                onEndReachedThreshold={0}
            />


        </>
    );
};

const styles = StyleSheet.create({
    loaderStyle: {
        marginVertical: 16,
        alignItems: "center",
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
    }

});

export default HomeScreen;
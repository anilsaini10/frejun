import React, { useEffect, useState } from "react";
import { FlatList, Text, View, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import ListComp from "../components/ListCard";
import products from "../helper/constants";

const ListScreen = () => {

  const [list, setList] = useState();
  const [searchField, setSearchField] = useState();
  const [showClear, setShowClear] = useState(false);

  const handleFiltter = () => {
    if (!searchField || searchField.length == 0) {
      return;
    }
    setShowClear(true);
    const updateList = [];
    for (var i in products) {
      const title = (products[i]?.title).toLocaleLowerCase();
      const price = products[i]?.price?.toString();
      const brand = products[i]?.brand?.toLocaleLowerCase();
      const search = searchField.toLocaleLowerCase();
      if (title.indexOf(search) !== -1 || price.indexOf(search) !== -1 || brand.indexOf(search) !== -1) {
        updateList.push(products[i]);
      };
      console.log(updateList)
      setList(updateList);
    };

  };

  const handleClear = () => {
    setList(products);
    setShowClear(false);
  };

  useEffect(() => {
    setList(products);
  }, [])

  return (
    <>
      <View style={styles.inputContainer} >
        <TextInput placeholder="search" style={styles.input} onChangeText={(value) => { setSearchField(value) }} />
        <View style={styles.buttonContainer} >
          <TouchableOpacity onPress={() => { handleFiltter(); }} style={styles.searchButton} >
            <Text style={[styles.buttonText, { color: "white" }]} >Search</Text>
          </TouchableOpacity>
          {showClear ? (<TouchableOpacity onPress={() => { handleClear(); }} style={styles.clearButton} >
            <Text style={styles.buttonText} >Clear</Text>
          </TouchableOpacity>) : (
            <></>
          )}
        </View>
      </View>

      <FlatList
        data={list}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <>
              <View style={{ marginVertical: 10 }} >
                <ListComp data={item} />
              </View>
            </>
          )
        }}
      />
    </>
  );
};

export default ListScreen;

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
})
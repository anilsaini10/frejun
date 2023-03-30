import React, { useEffect, useState } from "react";
import { FlatList, Text, View, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import ListComp from "../components/ListCard";
import products from "../helper/constants";
import Icon from "react-native-vector-icons/AntDesign";
import styles from "./List.style";

const ListScreen = () => {

  const [list, setList] = useState();
  const [searchField, setSearchField] = useState();
  const [showClear, setShowClear] = useState(false);
  const [_sort, setSort] = useState(false);

  const handleSort = () => {
    setSort(!_sort);
    let currentList = list;
    currentList = currentList.sort(function (a, b) {
      if (_sort) {
        if (a.title < b.title) {
          return -1;
        }
        if (a.title > b.title) {
          return 1;
        }
      } else {
        if (a.title < b.title) {
          return 1;
        }
        if (a.title > b.title) {
          return -1;
        }
      }

    });
    setList(currentList);
    console.log(currentList[0])
  }

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

          <TouchableOpacity onPress={() => { handleSort(); }} style={[styles.searchButton, { width: 50 }]} >
            <Icon name={`${!_sort ? "arrowup" : "arrowdown"}`} size={20} color="white" />
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


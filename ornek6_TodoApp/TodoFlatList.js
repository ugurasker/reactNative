import React, { useState } from "react";
import { Platform } from "react-native";
import { Alert } from "react-native";
import { ToastAndroid } from "react-native";
import {
  View,
  TextInput,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  TouchableHighlight,
 
} from "react-native";
import { Button, Text } from "react-native-elements";
import MyButton from "./MyButton";
export default function TodoFlatList() {
  const [is, setIs] = useState("");
  const [isler, setIsler] = useState([]);
  const girilenIsiOku = function (girisText) {
    setIs(girisText);
  };
  const ekle = function () {
    if (!is){
      if(Platform.OS ==="android") {
      ToastAndroid.showWithGravity("bos birakilamaz",
      ToastAndroid.SHORT,
      ToastAndroid.CENTER)
      } else if (Platform.OS ==="ios") {
        Alert.alert ("Bos birakilamaz")
      }
    } else {
    setIsler((mevcutIsler) => [
      ...mevcutIsler,
      { id: Math.random().toString(), deger: is },
    ]);
    setIs("");
  }
  };
  const isSil = function(id) {
    setIsler ((suankiIsler) => suankiIsler.filter((is) =>is.id !== id))
  }
  return (
    <View style={styles.body}>
      <Text h2 style={styles.baslik}>
        YAPILACAKLAR
      </Text>
      <MyButton onPress={()=>alert("olmaz")}>Super Button </MyButton>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Yapilacaklari giriniz"
          value={is}
          onChangeText={girilenIsiOku}
        ></TextInput>
        <Button
          title="EKLE"
          buttonStyle={{ backgroundColor: "green", width: 80, height: 40 }}
          onPress={ekle}
        ></Button>
      </View>
      <FlatList
        keyExtrator={(item) => item.id}
        data={isler}
        renderItem={(is) => (
          <TouchableOpacity
            activeOpacity={0.5}
            // underlayColor="grey"
            onPress={() => isSil(is.item.id)}
          >
            <View style={styles.isKutu}>
              <Text style={styles.isYazi}>{is.item.deger}</Text>
            </View>
          </TouchableOpacity>
        )}
      ></FlatList>
    </View>
  );
}
const styles = StyleSheet.create({
  body: {
    padding: 50,
  },
  baslik: {
    textAlign: "center",
    color: "darkgreen",
    fontWeight: "700",
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  input: {
    width: "80%",
    borderWidth: 1,
    height: 40,
    marginRight: 10,
  },
  isKutu: {
    padding: 10,
    backgroundColor: "yellowgreen",
    marginVertical: 15,
    borderRadius: 5,
    shadowColor: "black",
    shadowOpacity: 0.5,
    elevation: 5,
  },
  isYazi: {
    fontSize: 20,
    fontWeight: "700",
  },
});
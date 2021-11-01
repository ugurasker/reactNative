import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
export default function Sayac() {
  const [sayi, setSayi] = useState(0);
  function arttir() {
    setSayi(sayi + 1);
  }
  function azalt() {
    setSayi(sayi - 1);
  }
  function sifirla() {
    setSayi(0);
  }
  return (
    <View style={styles.container}>
      <View style={[styles.gosterge,styles.shadow]}>
        <Text style={styles.yazi}>SAYAC={sayi}</Text>
      </View>
      <View style={styles.btnContainer}>
        <Button title="ARTTIR" color="green" onPress={arttir}></Button>
        <View style={styles.bosluk}></View>
        <Button title="AZALT" color="red" onPress={azalt}></Button>
        <View style={styles.bosluk}></View>
        <Button title="SIFIRLA" color="black" onPress={sifirla}></Button>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: 300,
    alignItems: "center",
  },
  gosterge: {
    width: "100%",
    height: 50,
    backgroundColor: "lightblue",
    alignItems: "center",
    justifyContent: "center",
    marginBottom:40,
  },
  yazi: {
    fontSize: 40,
    color: "blue",
    fontWeight: "bold",
  },
  shadow: {
      shadowColor:"black",
      borderStartWidth:{width:1,height:2},
      shadowOpacity:0.7,
      shadowRadius:4,
  },
  bosluk: {
      margin:10,
  },
  btnContainer: {
   width:"80%",
  },
});
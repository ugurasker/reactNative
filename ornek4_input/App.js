import React, { useState } from "react";
import { StyleSheet, SafeAreaView, TextInput,View } from "react-native";
import { Button, Text } from "react-native-elements";
function App() {
  const [ad, setAd] = useState("");
  const [yas,setYas]=useState("");
  console.log(ad);
  function handleSil () {
    setAd("")
    setYas("")
  }
  function handleGonder (){
    console.log("kaydedilen bilgiler:"+ad,yas);
     handleSil()
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text h1>KAYIT FORMU</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Adinizi Giriniz"
        value={ad}
        onChangeText={(ad) => setAd(ad)}
      ></TextInput>
       <TextInput
        style={styles.textInput}
        placeholder="Yasnizi Giriniz"
        value={yas}
        onChangeText={(yas) => setYas(yas)}
      ></TextInput>
      <View style={styles.btnContainer}>
      <Button 
      buttonStyle={{backgroundColor:"green"}}
      type="outline"
      title="Gonder"
      onPress={handleGonder}>
      </Button>
      <Button 
      buttonStyle={{backgroundColor:"red"}}
      type="outline"
      title="Sil"
      onPress={handleSil}>
      </Button>
      </View>
       {ad ? <Text>benim adim {ad}</Text>:null} 
       {ad && yas && <Text> {ad}</Text>}
       {yas && <Text> {yas}</Text> }
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textInput: {
    borderWidth: 1,
    width: 200,
    padding: 10,
    backgroundColor: "lightblue",
    borderRadius: 4,
    color: "red",
    marginVertical: 10,
  },
  btnContainer:{
    flexDirection : "row",
    justifyContent:"space-evenly",
    width:300,
    marginTop:20,
  },
});
export default App;
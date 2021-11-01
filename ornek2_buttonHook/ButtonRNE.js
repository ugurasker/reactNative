import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-elements";
//?- REACT NATIVE ELEMENT UI Tasarimi icin guzel bir kütüphane
//?- Detayli bilgi icin  https://reactnativeelements.com/
//!- Projeye eklemek icin: "npm install react-native-elements"
//!- Kullanilacak komponenterin import edilmesi gerekir.
import FaIcon from "react-native-vector-icons/FontAwesome";
import MatIcon from "react-native-vector-icons/MaterialIcons";
//? Projemize ikon eklemek icin react-native-vector-icons kullanilabilir.
//! Bunun icin "npm install react-native-vector-icons" komutu yazilir.
//? İstenilen icon kutuphaneleri import edilir.
//? hangi kutuphanede hangi isimle ikon var bulmak icin asadaki link kullanilabilir.
//! "oblador.github.io/react-native-vector-icons/
const ButtonRNE = () => {
    const[kisi,setKisi]=useState({ad:"Ahmet",yas:30});
    const[renk,setRenk]=useState("blue");
    const[toggle,setToggle] = useState(false);
     
    function guncelle() {
        toggle ?
      setKisi({ad:"Mehmet",yas:40}):
      setKisi({ad:"Ahmet",yas:30})
      setToggle(!toggle)
    }
    function degistir () {
        toggle ?
        setRenk("red"):
        setRenk("blue")
        setToggle(!toggle)
    }
    function sil() {
        setKisi([])
    }
  return (
    <View style={styles.container}>
    {kisi.ad &&  <Text style={[styles.yazi, {color:renk}]}>Benim adim {kisi.ad} ve yasim {kisi.yas}</Text>}
     
      <View style={styles.btnContainer}>
      <Button
      icon={<MatIcon name="update" size={25} color="white"/>}
        buttonStyle={{ backgroundColor: "green" }}
        type="solid"
        title="GUNCELLE"
        color="white"
        titleStyle={{ fontSize: 20 }}
        onPress={guncelle}
      ></Button>
      <View style={styles.bosluk}></View>
      <Button
      icon={<MatIcon name="color-lens" size={25} color="white"/>}
        buttonStyle={{ backgroundColor: "green" }}
        type="solid"
        title="DEGISTIR"
        color="white"
        titleStyle={{ fontSize: 20 }}
        onPress={degistir}
      ></Button>
      <View style={styles.bosluk}></View>
      <Button
        icon={<MatIcon name="delete-forever" size={25} color="blue"/>}
        type="outline"
        title="Sil"
        color="white"
        titleStyle={{ fontSize: 20}}
        onPress={sil}
      ></Button>
      </View>
    </View>
  );
};
export default ButtonRNE;
const styles = StyleSheet.create({
    container: {
      flex:1,
      width: 400,
      justifyContent:"center",
      alignItems: "center",
    },
   
    yazi: {
      fontSize: 20,
      marginBottom:20,
      fontWeight: "bold",
    },
 
    bosluk: {
        margin:10,
    },
    btnContainer: {
     width:"100%",
    },
  });
import React, { useState } from "react";
import { View, TextInput, StyleSheet, ScrollView } from "react-native";
import { Button, Text } from "react-native-elements";
import { globalStyles } from "./styles/globalStyles";
export default function Scroll() {
  const [is, setIs] = useState("");
  const [isler, setIsler] = useState([]);
  const girilenIsiOku = function (girisText) {
    setIs(girisText);
  };
  const ekle = function () {
    setIsler((mevcutIsler) => [
      ...mevcutIsler,
      { id: Math.random().toString(), deger: is },
    ]);
  };
  return (
    <View style={styles.body}>
      <Text h2 style={globalStyles.baslik}>
        YAPILACAKLAR
      </Text>
      <View style={globalStyles.inputContainer}>
        <TextInput
          style={globalStyles.input}
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
      <ScrollView>
        <View>
          {isler.map((job) => (
            <View style={globalStyles.isKutu}>
              <Text style={globalStyles.isYazi} key={job.id}>
                {job.deger}
              </Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  body: {
    padding: 50,
  },
});
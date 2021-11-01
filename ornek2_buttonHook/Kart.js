import React from "react";
import { Linking, StyleSheet, Text, View } from "react-native";
import { Button, Card } from "react-native-elements";
import FaIcon from "react-native-vector-icons/FontAwesome";
import MatIcon from "react-native-vector-icons/MaterialIcons";
const Kart = () => {
  return (
    <View style={styles.container}>
      <Card>
        <Card.Title>Konyaya Hosgeldiniz</Card.Title>
        <Card.Divider />
        <Card.Image
          source={{
            uri: "https://images.pexels.com/photos/624015/pexels-photo-624015.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          }}
        >
          
        </Card.Image>
        <Text style={{ marginBottom: 10 }}>
            The idea with React Native Elements is more about component
            structure than actual design.
          </Text>
          <Button
            icon={<FaIcon name="code" size={20} color="#ffffff" />}
            buttonStyle={{
              borderRadius: 0,
              marginLeft: 0,
              marginRight: 0,
              marginBottom: 0,
            }}
            titleStyle={{marginLeft:10}}
            title="Detaylar"
            onPress={()=>Linking.openURL("http://google.com")}
          />
      </Card>
    </View>
  );
};
export default Kart;
const styles = StyleSheet.create({
  container: {
    flex:1,
    width: 400,
    alignItems: "center",
  },
 
});
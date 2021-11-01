import React from "react";
import { StyleSheet, View, Text } from "react-native";

function App() {
  return (
    <SafeAreaView style={styles.container}>
    {/*Flexbox01 komponenti ekranin 1/3nu kaplasin */}
      <Flexbox01 />
      <Flexbox02 />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;

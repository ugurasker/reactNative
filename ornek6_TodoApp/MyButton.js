import Color from 'color'
import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import Colors from "./constants/color"

export default function MyButton(props) {
    return (
        <TouchableOpacity activeOpacity={0.5} onPress={props.onPress}>
        <View style={styles.button}>
            <Text style={styles.text}>{props.children}</Text>
        </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
 button:{
     backgroundColor:Renkler.mavi7,
     paddingVertical:10,
     paddingHorizontal:20,
     borderRadius:10,
     textAlign:"center",
     marginVertival:20,
     marginHorizontal:10,
 },
 text:{
     color:"white",
     fontSize:25,
     fontWeight:"500",
     textAlign:"center",
 },
})

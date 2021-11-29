import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView, // Add this
} from "react-native";
import monkeyPng from "./assets/monkey.png";

export default function App() {
  
  const [text, setText] = useState(null);

  return (
    <ScrollView>
      <Text style={{fontSize:50}}>Hello, smile!</Text>
      <Image
        style={styles.image}
        source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR2wcpqmDDUjViB6TEfWO-hxzaf5cwENejaQ&usqp=CAU",
        }}
      ></Image>
      <Image source={monkeyPng}></Image>
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={setText}
      ></TextInput>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 500,
    width: 500,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

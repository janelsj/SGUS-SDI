import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import testImage from "./assets/test.jpg";

export default function App() {
  const [text, setText] = useState(null);

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Image 
        style= {styles.topImage}
        source={{
        uri: "https://www.thesprucepets.com/thmb/sfuyyLvyUx636_Oq3Fw5_mt-PIc=/3760x2820/smart/filters:no_upscale()/adorable-white-pomeranian-puppy-spitz-921029690-5c8be25d46e0fb000172effe.jpg"
      }}></Image>
      <Image style={styles.bottomImage} source={testImage}></Image>
      <TextInput style={styles.input} value={text} onChangeText={setText}></TextInput>
      <Text>You have typed: {text} </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  topImage:{
    width: 120,
    height: 60
  },
  bottomImage:{
    width: 120,
    height: 60
  },
  input: {
    height: 50,
    width: 120,
    margin: 10,
    borderWidth: 2,
    padding: 10
  }
});

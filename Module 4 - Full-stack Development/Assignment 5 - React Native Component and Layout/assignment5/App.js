import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import { StyleSheet, Text, TextInput, Button, Alert, View, ScrollView, SafeAreaView } from 'react-native';


const radio_props = [
  {label: 'Yes', value: 'like' },
  {label: 'No', value: "don't like" }
];


export default function App() {

  const [name, setName] = useState(null);
  const [age, setAge] = useState(null);
  const [radioButton, setRadioButton] = useState(radio_props);

  return (
    <SafeAreaView style={styles.container}>
    <ScrollView style={styles.scrollView}>

      <Text style={styles.text}>Your Name:</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
      ></TextInput>
      
      <Text style={styles.text}>Your Age:</Text>
      <TextInput
        style={styles.input}
        value={age}
        onChangeText={setAge}
      ></TextInput>
      
      <Text style={styles.text}>Like Coffee?</Text>
      <RadioForm
        radio_props={radio_props}
        initial={-1}
        formHorizontal={true}
        labelHorizontal={true}
        borderWidth={1}
        buttonColor={'#000000'}
        buttonSize={15}
        animation={true}
        onPress={(value) => {setRadioButton({value:value})}}
      />
      <Button
        onPress={() => Alert.alert(`Summary \nMy name is ${name}, I am ${age} years old. I ${radioButton.value} coffee.`)}
        title="Submit"
        color="#841584"
      />

      <StatusBar style="auto" />
    </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    flexBasis: '33%'
  },
  scrollView: {
    backgroundColor: 'lavender',
    marginHorizontal: 20,
    marginVertical: 30,
    padding: 20,
  },
  text: {
    fontSize: 18,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer, useFocusEffect } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const FruitScreen = ({ navigation }) => (
  <View>
    <Text>Fruit</Text>
    <Button
      title="Go to Veg"
      onPress={() =>
        navigation.navigate("Veg", { from: "Fruit Screen", to: "Veg Screen" })
      }
    ></Button>
  </View>
);

const VegScreen = ({ route, navigation }) => {
  const { from, to } = route.params;

  useFocusEffect(
    React.useCallback(() => {
      const unsubscribe = () => console.log("blur");
      console.log('focus');
      return unsubscribe;
    }, [navigation])
  );

  return (
    <View>
      <Text>Veg</Text>
      <Text>From: {from}</Text>
      <Text>To: {to}</Text>
      <Button
        title="Go to Fruit"
        onPress={() => navigation.navigate("Fruit")}
      ></Button>
    </View>
  );
};

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Fruit" component={FruitScreen} />
        <Stack.Screen name="Veg" component={VegScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

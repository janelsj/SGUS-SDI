import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, Button, View , Image} from 'react-native';
import {NavigationContainer, useFocusEffect} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const UserLoginScreen = ({navigation}) => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  return (
    <View>
      <Text>Login</Text>
      <Text>Username</Text>
      <TextInput 
        style={{height: 40, width:200, backgroundColor:'#fff', borderWidth: 1, margin: 12, padding: 10}}
        value={username}
        onChangeText={setUsername}
      ></TextInput>
      <Text>Password</Text>
      <TextInput 
        style={{height: 40, width:200, backgroundColor:'#fff', borderWidth: 1, margin: 12, padding: 10}}
        value={password}
        onChangeText={setPassword}
      ></TextInput>
    <Button 
      title = "Login to your dashboard"
      onPress={()=>navigation.navigate("Dashboard", {from: username, to: "dashboard", userImage:"https://www.thesprucepets.com/thmb/sfuyyLvyUx636_Oq3Fw5_mt-PIc=/3760x2820/smart/filters:no_upscale()/adorable-white-pomeranian-puppy-spitz-921029690-5c8be25d46e0fb000172effe.jpg"})} //The 'from' and 'to' object keys are up to you to define - doesn't have to be 'from' and 'to'
      ></Button>
    </View>
  )
};

const DashboardScreen = ({route, navigation}) => {
  const {from, to, userImage} = route.params;

  useFocusEffect(
    React.useCallback(() => {
    const unsubscribe = () => console.log("blur");
    console.log('focus');
    return unsubscribe;
    }, [navigation])
    );

  return (
    <View>
      <Text>Hello {from}!</Text>
      <Text>Welcome to your {to} page!</Text>
      <Image style={{height:80, width:150}} source = {{uri:userImage}}></Image>
      <Button 
      title = "Go to Login Page"
      onPress={()=>navigation.navigate("Login")}
      ></Button>
    </View>
  )
};

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={UserLoginScreen} />
        <Stack.Screen name="Dashboard" component={DashboardScreen} options={{title:"My Dashboard"}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

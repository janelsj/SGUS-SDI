import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView} from 'react-native';
import Header from "./components/header";
import SubHeader from "./components/subheader";

export default function App() {
  return (
    <SafeAreaView>    
      <ScrollView contentConstainerStyle={styles.container}>
        <Header text="Vaccinations coverage above 80%" imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZdr18OjYKxxBxfzNyPpZxHxIDBmGuqg9QNw&usqp=CAU" descText="This is a description text that shows the summary of what this article is talking about."></Header>
        <SubHeader text="More children take turns to live with each parent in post-divorce arrangements"></SubHeader>
        <SubHeader text="Chinese tennis star Peng Shuai tells IOC president she is safe during video call"></SubHeader>
        <SubHeader text="Chinese tennis star Peng Shuai tells IOC president she is safe during video call"></SubHeader>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});

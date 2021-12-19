import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';
import Header from './components/header';
import Subheader from './components/subheader';

export default function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <Header 
        url = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZdr18OjYKxxBxfzNyPpZxHxIDBmGuqg9QNw&usqp=CAU" 
        titleText="Vaccinations coverage above 80%" 
        description = "This is a description text."></Header>
        <Subheader subheaderText="More children take turns to live with each parent in post-divorce arrangements"/>
        <Subheader subheaderText="Chinese tennis star Peng Shuai tells IOC president she is safe during video call"/>
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
  },
});

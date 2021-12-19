import * as React from 'react';
import { AppRegistry } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { name as appName } from './app.json';
import Header from "./components/header";
import SubHeader from "./components/subheader";

function App() {
  return (<>
    <Header text="Vaccinations coverage above 80%" imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZdr18OjYKxxBxfzNyPpZxHxIDBmGuqg9QNw&usqp=CAU" descText="This is a description text that shows the summary of what this article is talking about."></Header>
    <SubHeader text="More children take turns to live with each parent in post-divorce arrangements"></SubHeader>
    <SubHeader text="Chinese tennis star Peng Shuai tells IOC president she is safe during video call"></SubHeader>
    <SubHeader text="Chinese tennis star Peng Shuai tells IOC president she is safe during video call"></SubHeader>
    </>);
};

export default function Main() {
  return (
    <PaperProvider>
      <App />
    </PaperProvider>
  );
};

AppRegistry.registerComponent(appName, () => Main);
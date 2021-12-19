import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import tw from "tailwind-rn";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Header = ({url, titleText, description}) => {
    return (
        <View style={styles.container}>
            <Image style={tw("w-full h-full")} source={{uri:url}}></Image>
            <Text style={styles.headerText}>{titleText}</Text>
            <Text style={styles.descText}>{description}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingBottom:20,
        borderBottomWidth:1,
        borderBottomColor:"grey"
    },

    headerImage:{
        width:windowWidth,
        height:windowHeight / 4,        
    },

    headerText:{
        fontSize:40,
        marginBottom:20
    },

    descText:{
        fontSize:20
    }
  });

export default Header;

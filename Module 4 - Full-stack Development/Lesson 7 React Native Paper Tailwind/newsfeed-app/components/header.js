import React from 'react';
import { StyleSheet, Text, Image, View, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Header = ({imgUrl, text, descText}) => {
    return (
        <View style={styles.container}>
            <Image style={styles.headerImage} source={{uri:imgUrl}}></Image>
            <Text style={styles.headerText}>{text}</Text>
            <Text style={styles.descText}>{descText}</Text>
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
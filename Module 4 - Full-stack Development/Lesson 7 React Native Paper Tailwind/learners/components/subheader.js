import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import tw from "tailwind-rn";

const windowWidth = Dimensions.get('window').width;

const Subheader = ({subheaderText}) => {
    return (
        <View style={styles.container}>
            <Text style={tw("text-2xl w-full font-bold")}>{subheaderText}</Text>
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

    subheaderText:{
        width: windowWidth,
        fontSize:24,
        fontWeight:"bold"
    }
  });

export default Subheader;

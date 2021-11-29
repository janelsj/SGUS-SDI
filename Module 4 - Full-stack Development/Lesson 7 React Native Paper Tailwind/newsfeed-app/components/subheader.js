import React from 'react';
import { StyleSheet, Text, Image, View, Dimensions } from 'react-native';
import tw from "tailwind-rn";

const windowWidth = Dimensions.get('window').width;

const SubHeader = ({text}) => {
      
    return(
        <View style={styles.container}>
            <Text style={tw("text-2xl w-full font-bold")}>{text}</Text>            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',        
        width:windowWidth,
        paddingTop:20,
        paddingBottom:20,
        borderBottomWidth:1,
        borderBottomColor:"grey"
      },
    headerText:{
        width: windowWidth,
        fontSize:24,
        fontWeight:"bold"
    }
  });

export default SubHeader
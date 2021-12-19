import React from 'react';
import { View } from 'react-native';
import { Divider, Subheading } from 'react-native-paper';

const SubHeader = ({text}) => {
    return(
        <View>
            <Subheading >{text}</Subheading>
            <Divider />            
        </View>
    )
}

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center',        
//         width:windowWidth,
//         paddingTop:20,
//         paddingBottom:20,
//         borderBottomWidth:1,
//         borderBottomColor:"grey"
//       },
//     headerText:{
//         width: windowWidth,
//         fontSize:24,
//         fontWeight:"bold"
//     }
//   });

export default SubHeader;
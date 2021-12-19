import React from 'react';
import { Avatar, Card, Title, Paragraph } from 'react-native-paper';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const Header = ({imgUrl, text, descText}) => {
    return (
        <Card>
            <Card.Cover source={{ uri: imgUrl }} />
            <Card.Content>
                <Title>{text}</Title>
                <Paragraph>{descText}</Paragraph>
            </Card.Content>
        </Card>
    );
}

// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       alignItems: 'center',
//       justifyContent: 'center',
//       paddingBottom:20,
//         borderBottomWidth:1,
//         borderBottomColor:"grey"
//     },

//     headerImage:{
//         width:windowWidth,
//         height:windowHeight / 4,        
//     },

//     headerText:{
//         fontSize:40,
//         marginBottom:20
//     },

//     descText:{
//         fontSize:20
//     }
//   });

  
export default Header;
import React from 'react';
import { Card, Title, Paragraph } from 'react-native-paper';

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

export default Header;
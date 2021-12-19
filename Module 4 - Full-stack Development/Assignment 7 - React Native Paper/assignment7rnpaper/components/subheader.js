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

export default SubHeader;
import React from 'react';
import { View } from 'react-native-animatable';
import Back_arrow from './Back_arrow';
import { Text } from 'react-native-paper';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { COLORS, FONT } from '../constants';



const Header = ({HeaderName ,onPress}) => {

  return (
    <>
    <View style={{ flexDirection: "row", marginLeft: RFPercentage(2) }}>
          <Back_arrow onPress ={onPress} />
          <Text style={{
            fontSize: RFPercentage(3.5),
            textAlign: "center",
            flex: 0.85,
            fontFamily: FONT.Quicksand_Bold,
            color: COLORS.black, padding: RFPercentage(2)
          }}>{HeaderName}</Text>
        </View>
    </>
  );
};

export default Header;

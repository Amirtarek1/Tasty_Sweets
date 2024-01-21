import React from 'react';
import { View } from 'react-native-animatable';
import Back_arrow from './Back_arrow';
import { Text } from 'react-native-paper';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { COLORS, FONT } from '../constants';



const Header = ({ HeaderName, onPress }) => {

  return (
    <>
     <View
        style={{
          backgroundColor: HeaderName == "Order Pay" ? COLORS.plusbottonColor : COLORS.white ,
          flexDirection: 'row', 
          paddingTop: RFPercentage(2),
          paddingHorizontal: RFPercentage(2),
        }}>

        <Back_arrow
          onPress={onPress}
        />

        <Text
          style={{
            textAlign: 'center',
            flex: 0.85,
            marginVertical: RFPercentage(1),
            fontSize: RFPercentage(3.5),
            fontFamily: FONT.Quicksand_Bold,
            color: COLORS.Top_Flavour_Name,
          }}>
          {HeaderName}
        </Text>
      </View>


    </>
  );
};

export default Header;

import React from 'react';
import { Dimensions, Text, TouchableOpacity, View } from 'react-native';
// import { COLORS, FONT } from '../../constants';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { COLORS, FONT } from '../constants';

const h = Dimensions.get("screen").height
const w = Dimensions.get("screen").width

const StartButton = ({ Confirm_press, button_name }) => {

    return (
        <>


            <TouchableOpacity
                onPress={Confirm_press}
                style={{
                    alignSelf: "center",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: COLORS.Text_on_button,
                    width: w * 0.75,
                    marginTop: RFPercentage(8),
                    marginHorizontal: RFPercentage(2),
                    height: w * 0.15,
                    borderRadius: RFPercentage(3)
                }}>
                <Text style={{
                    fontFamily: FONT.Quicksand_Bold,
                    color: COLORS.white,
                    fontSize: RFPercentage(3),
                    textAlign: "center", justifyContent: "center",
                }}>{button_name}</Text>
            </TouchableOpacity>
        </>
    )
};

export default StartButton;

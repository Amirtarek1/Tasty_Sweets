import React from 'react';
import { Dimensions,Text, TouchableOpacity, View } from 'react-native';
// import { COLORS, FONT } from '../../constants';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { COLORS ,FONT} from '../constants';

const h = Dimensions.get("screen").height
const w = Dimensions.get("screen").width

const StartButton = ({Confirm_press ,button_name }) => {

    return (
        <>


            <TouchableOpacity
                onPress={Confirm_press}
                style={{
                    alignSelf: "center",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: COLORS.Button_color,
                    width: w * 0.825,
                    marginTop: RFPercentage(8),
                    marginHorizontal: RFPercentage(2),
                    height: w * 0.18, borderRadius: RFPercentage(8)
                }}>
                <Text style={{
                    fontFamily: FONT.Quicksand_Bold, color: COLORS.Text_on_button,
                    // backgroundColor: "#00d",
                    fontSize: RFPercentage(3.8), textAlign: "center"
                }}>{button_name}</Text>
            </TouchableOpacity>
        </>
    )
};

export default StartButton;

import React from 'react';
import { Dimensions, ImageBackground, SafeAreaView, Text, View } from 'react-native';
import { COLORS, FONT, images } from '../../constants';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import StartButton from '../../Components/StartButton';
import { useNavigation } from '@react-navigation/native';

const h = Dimensions.get("screen").height
const w = Dimensions.get("screen").width

const StartScreen = () => {

    const navigation = useNavigation();


    return (
        <>
            <SafeAreaView style={{ backgroundColor: COLORS.backgroundColorIceORbuttomcolor, flex: 1 }}>
                <ImageBackground resizeMode='cover' source={images.ice4} style={{ flex: 1, justifyContent: "space-between" }}  >

                    <View style={{
                        alignSelf: "center",
                        marginTop: RFPercentage(9)
                    }}>
                        <Text style={{
                            color: COLORS.TextColor,
                            fontSize: w*0.135,
                            // fontSize:RFValue(50),
                            fontFamily: FONT.Quicksand_Bold
                        }} >Tasty Sweets</Text>


                    </View>
                    <View style={{ marginBottom: RFPercentage(4) }}>
                        <StartButton button_name={"Get started"} 
                        Confirm_press={() => navigation.navigate("Login")} />
                    </View>
                </ImageBackground>
            </SafeAreaView>
        </>
    );
};

export default StartScreen;

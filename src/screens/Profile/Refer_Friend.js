import React from 'react';
import { Text, TouchableOpacity, Dimensions, View, ScrollView } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { COLORS, FONT } from '../../constants';
import { RFPercentage } from 'react-native-responsive-fontsize';
import LottieView from 'lottie-react-native';
import lotties from '../../constants/lotties';
import { hp, wp } from '../../constants/themes';
import SHARE from "../../../src/assets/Icons/Shareing.svg"
import Offers from "../../../src/assets/Icons/Offers.svg"
import Gift from "../../../src/assets/Icons/Gift.svg"
import { useNavigation } from '@react-navigation/native';
import Share from 'react-native-share';
import Header from '../../Components/Header';


const h = Dimensions.get('screen').height;
const w = Dimensions.get('screen').width;

const Refer_Friend = () => {
    const navigation = useNavigation();

     const SHAre = async () => {
        try {
            const options = {
                title: 'شارك البرنامج مع اصداقائك واربح نقط ',
                url: 'https://reactnative.dev/',
            };
            await Share.open(options);
        } catch (error) {
            alert("hi")
            // Toast.show({
            //     type: 'error',
            //     position: 'bottom',
            //     text1: "لم تتم المشاركة",
            //     visibilityTime: 3000,
            //     autoHide: true,
            //     topOffset: 50,
            //     bottomOffset: 150,
            // });
        }
    };

    return (
        <>
            <SafeAreaProvider>
                <View style={{ flex: 1, backgroundColor: COLORS.white }}>

                <Header HeaderName={"Refer a friend"} onPress={() => navigation.navigate("AnimTab2", { screen: "ProfileDetails" })} /> 

                    <ScrollView showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}>

                        <View style={{
                            paddingHorizontal: RFPercentage(2),
                        }}>

                            <LottieView
                                style={{
                                    width: hp(100), height: hp(40),
                                    alignSelf: "center"
                                }}
                                source={lotties.ReferaFriend} autoPlay loop />
                            <View style={{ flexDirection: "row", alignItems: "center", padding: RFPercentage(1) }}>
                                <SHARE height={hp(8)} width={wp(8)} />
                                <View style={{ marginLeft: RFPercentage(2), justifyContent: "center", maxWidth: w * 0.75 }}>
                                    <Text style={{
                                        color: COLORS.TextColorName,
                                        fontFamily: FONT.Quicksand_SemiBold,
                                        fontSize: RFPercentage(2.5),
                                    }}>Share your code</Text>
                                    <Text style={{
                                        fontFamily: FONT.Quicksand_Medium, textAlign: "justify",
                                        fontSize: RFPercentage(2), color: COLORS.ColorofCurrentLabel
                                    }}>Get EGP 60 worth of vouchers to spend at
                                        selected items for every friend who signs up</Text>
                                </View>
                            </View>

                            <View style={{ flexDirection: "row", alignItems: "center", padding: RFPercentage(1) }} >
                                <Offers height={hp(8)} width={wp(9)} fill="#e1acab" />
                                <View style={{ marginLeft: RFPercentage(2), justifyContent: "center", maxWidth: w * 0.75 }}>
                                    <Text style={{
                                        color: COLORS.TextColorName,
                                        fontFamily: FONT.Quicksand_SemiBold,
                                        fontSize: RFPercentage(2.5),
                                    }}>Treat your friends</Text>
                                    <Text style={{
                                        fontFamily: FONT.Quicksand_Medium, textAlign: "justify",
                                        fontSize: RFPercentage(2), color: COLORS.ColorofCurrentLabel
                                    }}>Thet get EGP 150 in vouchers to sprnf across 3 orders </Text>
                                </View>
                            </View>


                            <View style={{ flexDirection: "row", alignItems: "center", padding: RFPercentage(1) }}>
                                <Gift height={hp(8)} width={wp(9)} />
                                <View style={{ marginLeft: RFPercentage(2), justifyContent: "center", maxWidth: w * 0.75 }}>
                                    <Text style={{
                                        color: COLORS.TextColorName,
                                        fontFamily: FONT.Quicksand_SemiBold,
                                        fontSize: RFPercentage(2.5),
                                    }}>Enjoy your reward</Text>
                                    <Text style={{
                                        fontFamily: FONT.Quicksand_Medium, textAlign: "justify",
                                        fontSize: RFPercentage(2), color: COLORS.ColorofCurrentLabel
                                    }}>After their first order, the Vouchera will be added to your account</Text>
                                </View>
                            </View>

                            <View style={{
                                backgroundColor: COLORS.TrybackgroundColorIce1,
                                alignItems: "center",
                                alignSelf: 'center', justifyContent: "center",
                                marginVertical: RFPercentage(1.2),
                                width: w * 0.85,
                                borderRadius: RFPercentage(1.5)
                            }}>
                                <Text style={{
                                    color: COLORS.black,
                                    fontSize: RFPercentage(2),
                                    fontFamily: FONT.Quicksand_Regular,
                                    justifyContent: "center",
                                    textAlign: "center",
                                    padding: RFPercentage(0.2),
                                }}>Your code</Text>

                                <Text style={{
                                    color: COLORS.black,
                                    fontSize: RFPercentage(3),
                                    fontFamily: FONT.Quicksand_Bold,
                                    justifyContent: "center",
                                    padding: RFPercentage(0.5),
                                    textAlign: "center"
                                }}>AMIRTAREK-45621</Text>
                            </View>

                            <View style={{ alignSelf: "center", alignItems: "center" }}>
                                <TouchableOpacity
                                    onPress={SHAre}
                                    style={{
                                        marginVertical: RFPercentage(1.2),
                                        backgroundColor: COLORS.plusbottonColor,
                                        width: w * 0.85,
                                        alignSelf: "center", alignItems: "center",
                                        borderRadius: RFPercentage(1.5)
                                    }}
                                >
                                    <Text style={{
                                        color: COLORS.white,
                                        fontSize: RFPercentage(2.5),
                                        fontFamily: FONT.Quicksand_Bold,
                                        justifyContent: "center",
                                        padding: RFPercentage(1.8), textAlign: "center"
                                    }}>Share</Text>

                                </TouchableOpacity>
                            </View>

                        </View>
                    </ScrollView>

                </View>

            </SafeAreaProvider>

        </>
    );
};

export default Refer_Friend;

import React from 'react';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { Text, View, Dimensions } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { COLORS } from '../../constants';
import { FONT } from '../../constants/themes';
import { useNavigation } from '@react-navigation/native';
import Header from '../../Components/Header';
import { Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


const h = Dimensions.get('screen').height;
const w = Dimensions.get('screen').width;
const OffersDetails = ({ route }) => {
    const navigation = useNavigation();

    const { OfferDetails } = route.params
    return (
        <>
            <SafeAreaProvider>
                <View style={{ flex: 1, backgroundColor: COLORS.white }}>

                    <Header HeaderName={OfferDetails.name} onPress={() => navigation.navigate("AnimTab2", { screen: "ProfileDetails" })} />

                    <View style={{
                        alignSelf: "center", flex: 1
                        , alignItems: "center", marginTop: RFPercentage(5)
                    }}>
                        <Image source={OfferDetails.image} style={{
                            width: w * 0.3,
                            height: w * 0.3, borderRadius: RFPercentage(1)
                        }} />

                        <View style={{ marginTop: RFPercentage(2), alignSelf: "center", alignItems: "center" }}>
                            <Text style={{
                                color: COLORS.Top_Flavour_Name,
                                fontSize: RFPercentage(2.7),
                                fontFamily: FONT.Quicksand_SemiBold,
                                justifyContent: "center",
                                padding: RFPercentage(0.5),
                                maxWidth: w * 0.98,

                            }}>Order Your sweets</Text>
                            <Text style={{
                                color: COLORS.Top_Flavour_Name,
                                fontSize: RFPercentage(2.2),
                                fontFamily: FONT.Quicksand_SemiBold,
                                justifyContent: "center",
                                padding: RFPercentage(0.5),
                                paddingHorizontal: RFPercentage(4),
                                maxWidth: w * 0.98,

                            }}>{OfferDetails.head}</Text>
                            <Text style={{
                                color: COLORS.Top_Flavour_Name,
                                fontSize: RFPercentage(2),
                                fontFamily: FONT.Quicksand_SemiBold,
                                justifyContent: "center",
                                paddingHorizontal: RFPercentage(4),
                                paddingVertical: RFPercentage(0.5),
                                maxWidth: w * 0.98,


                            }}>{OfferDetails.Details}</Text>

                            <View style={{
                                marginTop: RFPercentage(2),
                                alignSelf: "center", alignItems: "center"
                            }}>
                                <TouchableOpacity
                                    onPress={() => navigation.navigate("Home_Page", { FromVoucher: "show" })}

                                  style={{
                                        marginVertical: RFPercentage(1.2),
                                        backgroundColor: COLORS.plusbottonColor,
                                        width: w * 0.85,
                                        alignSelf: "center", alignItems: "center",
                                        borderRadius: RFPercentage(1.5)
                                    }}>
                                    <Text style={{
                                        color: COLORS.white,
                                        fontSize: RFPercentage(2.5),
                                        fontFamily: FONT.Quicksand_Bold,
                                        justifyContent: "center",
                                        padding: RFPercentage(1.8), textAlign: "center"
                                    }}>Show menu</Text>

                                </TouchableOpacity>
                            </View>

                        </View>
                    </View>

                </View>
            </SafeAreaProvider>


        </>
    );
};

export default OffersDetails;

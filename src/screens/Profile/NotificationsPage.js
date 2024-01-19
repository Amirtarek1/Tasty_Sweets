import React from 'react';
import {  Text, View, Dimensions } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { COLORS } from '../../constants';
import { FONT } from '../../constants/themes';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { useNavigation } from '@react-navigation/native';
import Header from '../../Components/Header';

const h = Dimensions.get("screen").height
const w = Dimensions.get("screen").width

const NotificationsPage = () => {

    const navigation = useNavigation();

    return (
        <>
            <SafeAreaProvider>
                <View style={{ flex: 1, backgroundColor: COLORS.white }}>

                <Header HeaderName={"Notifications"} onPress={() => navigation.navigate("AnimTab2", { screen: "ProfileDetails" })} />

                    <View style={{alignSelf:"center" , justifyContent:"center" , flex:1 , alignItems:"center"}}>
                        <Text style={{
                                    color: COLORS.Top_Flavour_Name,
                                    fontSize: RFPercentage(2.7),
                                    fontFamily: FONT.Quicksand_SemiBold,
                                    justifyContent: "center",
                                    padding: RFPercentage(0.5),

                                }}>We have no updates</Text>
                        <Text style={{
                                    color: COLORS.Top_Flavour_Name,
                                    fontSize: RFPercentage(2.7),
                                    fontFamily: FONT.Quicksand_SemiBold,
                                    justifyContent: "center",
                                    padding: RFPercentage(0.5),

                                }}>Please check again later</Text>
                    </View>

                </View>
            </SafeAreaProvider>


        </>
    );
};

export default NotificationsPage;

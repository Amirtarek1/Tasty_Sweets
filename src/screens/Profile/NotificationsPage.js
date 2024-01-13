import React from 'react';
import {  Text, View, Dimensions } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { COLORS } from '../../constants';
import { FONT } from '../../constants/themes';
import { RFPercentage } from 'react-native-responsive-fontsize';
import Back_arrow from '../../Components/Back_arrow';
import { useNavigation } from '@react-navigation/native';

const h = Dimensions.get("screen").height
const w = Dimensions.get("screen").width

const NotificationsPage = () => {

    const navigation = useNavigation();

    return (
        <>
            <SafeAreaProvider>
                <View style={{ flex: 1, backgroundColor: COLORS.white }}>


                    <View
                        style={{
                            backgroundColor: COLORS.white,
                            flexDirection: 'row',
                            paddingTop: RFPercentage(2),
                            paddingHorizontal: RFPercentage(2),
                        }}>

                        <Back_arrow
                        onPress={() => navigation.navigate("AnimTab2", { screen: "ProfileDetails" })}
                        />
                        <Text
                            style={{
                                textAlign: 'center',
                                flex: 0.9,
                                marginVertical: RFPercentage(1),
                                fontSize: RFPercentage(3.5),
                                fontFamily: FONT.Quicksand_Bold,
                                color: COLORS.Top_Flavour_Name,
                            }}>

                            Notifications
                        </Text>
                    </View>

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

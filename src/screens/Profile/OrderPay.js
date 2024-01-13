import React from 'react';
import { Text, View, ScrollView, Dimensions, FlatList } from 'react-native';
import Back_arrow from '../../Components/Back_arrow';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { COLORS, FONT } from '../../constants';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Credits from "../../../src/assets/Icons/credits.svg"
import { hp, wp } from '../../constants/themes';
import NEWRE from "../../../src/assets/Icons/NEWRE.svg";
import { RefundData } from '../../Utils/Dummy';
import { useNavigation } from '@react-navigation/native';



const h = Dimensions.get('screen').height;
const w = Dimensions.get('screen').width;
const OrderPay = () => {
    const navigation = useNavigation();

    const totalMoney = RefundData.reduce((sum, item) => sum + item.Money, 0);

    return (
        <>
            <SafeAreaProvider>
                <View style={{ flex: 1, backgroundColor: COLORS.white }}>


                    <View
                        style={{
                            backgroundColor: COLORS.plusbottonColor,
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
                            Order Pay
                        </Text>
                    </View>



                    <View style={{
                        backgroundColor: COLORS.plusbottonColor,
                        padding: RFPercentage(2),
                        borderBottomEndRadius: RFPercentage(1.7),
                        borderBottomStartRadius: RFPercentage(1.7)
                    }}>
                        <View style={{
                            paddingTop: RFPercentage(2),
                        }}>
                            <View style={{ marginLeft: RFPercentage(5) }}>
                                <Text style={{
                                    color: COLORS.black,
                                    fontSize: RFPercentage(2),
                                    fontFamily: FONT.Quicksand_Regular,
                                    justifyContent: "center",
                                    padding: RFPercentage(0.5),

                                }}>Available Credit</Text>
                                <Text style={{
                                    color: COLORS.black,
                                    fontSize: RFPercentage(4),
                                    fontFamily: FONT.Quicksand_Bold,
                                    justifyContent: "center",
                                    padding: RFPercentage(0.5),
                                }}>EGP {totalMoney}</Text>
                            </View>
                            <View style={{ alignItems: "center" }}>
                                <View style={{
                                    marginHorizontal: RFPercentage(2),
                                    backgroundColor: COLORS.white
                                    , alignItems: "center",
                                    alignContent: "center",
                                    justifyContent: "center",
                                    alignSelf: "center",
                                    borderRadius: RFPercentage(60),
                                    height: w * 0.125,
                                    width: w * 0.125
                                }}>
                                    <Credits height={hp(4.5)} width={wp(10)} />
                                </View>
                                <Text style={{
                                    color: COLORS.black,
                                    fontSize: RFPercentage(2),
                                    fontFamily: FONT.Quicksand_Medium,
                                    justifyContent: "center",
                                    padding: RFPercentage(0.2),
                                }}>Cards</Text>
                            </View>

                        </View>

                    </View>
                    <View style={{
                        backgroundColor: COLORS.white,
                        padding: RFPercentage(2),
                        borderBottomEndRadius: RFPercentage(1.7),
                        borderBottomStartRadius: RFPercentage(1.7),

                    }}>
                        <Text style={{
                            color: COLORS.black,
                            fontSize: RFPercentage(3.2),
                            fontFamily: FONT.Quicksand_Bold,
                            justifyContent: "center",
                        }}>Recent Transaction</Text>

                        <FlatList
                            data={RefundData}
                            numColumns={1}
                            showsVerticalScrollIndicator={false}
                            style={{ height: h * 0.5 }}
                            renderItem={({ item }) => (
                                <>

                                    <View style={{
                                        margin: RFPercentage(1),
                                        borderRadius: RFPercentage(1.5),
                                        elevation: 5,
                                        backgroundColor: COLORS.TrybackgroundColorIce1,
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        alignSelf: "center",
                                        width: w * 0.91, padding: RFPercentage(1.7),

                                    }}>
                                        <View style={{
                                            flexDirection: "row",
                                            alignItems: "center",
                                        }}>
                                            <View style={{
                                                marginHorizontal: RFPercentage(0.5),
                                                backgroundColor: "#eae8e8",
                                                alignItems: "center",
                                                alignContent: "center",
                                                justifyContent: "center",
                                                borderRadius: RFPercentage(60),
                                                height: w * 0.125,
                                                width: w * 0.125,

                                            }}>
                                                <NEWRE height={hp(4)} width={wp(8)} />
                                            </View>

                                            <View >

                                                <Text style={{
                                                    color: COLORS.black,
                                                    fontSize: RFPercentage(2.2),
                                                    fontFamily: FONT.Quicksand_Bold,
                                                    justifyContent: "center",
                                                    paddingHorizontal: RFPercentage(0.5),

                                                }}>Refound</Text>
                                                <Text style={{
                                                    color: COLORS.black,
                                                    fontSize: RFPercentage(2),
                                                    fontFamily: FONT.Quicksand_Regular,
                                                    justifyContent: "center",
                                                    paddingHorizontal: RFPercentage(0.5),

                                                }}>{item.Date}</Text>

                                            </View>
                                        </View>


                                        <View >
                                            <Text style={{
                                                color: COLORS.black,
                                                fontSize: RFPercentage(2.8),
                                                fontFamily: FONT.Quicksand_Bold,
                                                justifyContent: "center",
                                                paddingHorizontal: RFPercentage(0.5),

                                            }}>+{item.Money}</Text>
                                        </View>
                                    </View>
                                </>
                            )}
                        />



                    </View>


                </View>

            </SafeAreaProvider>
        </>
    );
};

export default OrderPay;

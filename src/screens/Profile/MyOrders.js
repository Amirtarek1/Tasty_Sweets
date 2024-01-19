import React, { useState } from 'react';
import { Dimensions, FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { COLORS, FONT } from '../../constants';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { allOrders } from '../../Utils/Dummy';
import BackWhiteArrow from "../../../src/assets/Icons/backWhiteArrow.svg"
import { hp, wp } from '../../constants/themes';
import { useNavigation } from '@react-navigation/native';
import Header from '../../Components/Header';

const h = Dimensions.get("screen").height
const w = Dimensions.get("screen").width

const MyOrders = () => {
    const navigation = useNavigation();

    const [Showallorders] = useState(allOrders)

    return (
        <>
            <SafeAreaProvider>
                <View style={{ flex: 1, backgroundColor: COLORS.white }}>
                    <FlatList
                        data={Showallorders}
                        keyExtractor={(item, index) => index.toString()}
                        ListHeaderComponent={() => (
                            <Header HeaderName={"My orders"}  onPress={() => navigation.navigate("AnimTab2", { screen: "ProfileDetails" })} />
                        )}

                        renderItem={({ item }) => (
                            <View style={{
                                backgroundColor: COLORS.white
                            }}>
                                <View style={{
                                    padding: RFPercentage(2),
                                    margin: RFPercentage(2),
                                    backgroundColor: COLORS.TrybackgroundColorIce1,
                                    borderRadius: RFPercentage(2),
                                    elevation: 8

                                }}>
                                    <View style={{
                                        flexDirection: "row",
                                        justifyContent: "space-between"
                                    }}>
                                        <Text style={{
                                            fontFamily: FONT.Quicksand_Bold,
                                            fontSize: RFPercentage(2.7),
                                             color: COLORS.TextColorName,
                                            textAlign: "center"

                                        }}>Number Order: {item.order_number}</Text>
                                        <Text style={{
                                            fontFamily: FONT.Quicksand_Bold,
                                            fontSize: RFPercentage(2.7),
                                            color: COLORS.TextColorName,
                                            textAlign: "center"
                                        }}>Price:{item.order_price}</Text>
                                    </View>
                                    <View style={{
                                        flex: 1,
                                        flexDirection: "row",
                                        justifyContent: "space-between",

                                    }}>
                                        <View style={{
                                            flexDirection: "row",
                                            justifyContent: "space-between",
                                            width: w * 0.75
                                        }}>
                                            <FlatList

                                                data={item.order_content}
                                                keyExtractor={(orderItem) => orderItem.order_item_id.toString()}
                                                horizontal
                                                showsHorizontalScrollIndicator={false}
                                                renderItem={({ item: orderItem }) => (
                                                    <View style={{
                                                        backgroundColor: COLORS.white,
                                                        padding: RFPercentage(0.7),
                                                        margin: RFPercentage(0.7),
                                                        borderRadius: RFPercentage(0.5),
                                                        elevation: 5
                                                    }}>
                                                        <Text style={{
                                                            fontFamily: FONT.Quicksand_Regular,
                                                            fontSize: RFPercentage(2.2),
                                                            color: COLORS.TextColorName
                                                        }}>{orderItem.order_item_name}</Text>
                                                    </View>
                                                )}
                                            />

                                        </View>
                                        <TouchableOpacity onPress={()=>navigation.navigate("DitailsOrder" , {Allorders :item.order_content})}>
                                            <BackWhiteArrow height={hp(6)} width={wp(8)} />
                                        </TouchableOpacity>
                                    </View>

                                </View>



                            </View>
                        )}
                    />


                </View>
            </SafeAreaProvider>
        </>
    );
};

export default MyOrders;
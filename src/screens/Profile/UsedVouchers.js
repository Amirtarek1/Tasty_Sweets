import React, { useState } from 'react';
import { View, Text, FlatList, Dimensions } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { COLORS, FONT } from '../../constants';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { VouchersCodes } from '../../Utils/Dummy';
import Voucher from "../../../src/assets/Icons/Voucher.svg"
import { hp, wp } from '../../constants/themes';


const w = Dimensions.get("screen").width


const UsedVouchers = () => {
    const [Showallorders] = useState(VouchersCodes)

    return (
        <SafeAreaProvider>
            <View style={{ flex: 1, backgroundColor: COLORS.white }}>

                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={Showallorders}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (

                        <View style={{
                            backgroundColor: COLORS.white
                        }}>
                            {item.status == "used" ? (
                                <View style={{
                                    padding: RFPercentage(1.5),
                                    margin: RFPercentage(2),
                                    backgroundColor: COLORS.white,
                                    borderRadius: RFPercentage(2),
                                    elevation: 8
                                }}>
                                    <View style={{
                                        flexDirection: "row",
                                        maxWidth: w * 0.9,
                                        // backgroundColor:"#00d"
                                    }}>
                                        <Voucher height={hp(6)} width={wp(8)} />
                                        <View style={{ marginLeft:RFPercentage(1.5) ,
                                            margin: RFPercentage(0.3) ,
                                            // backgroundColor:"#00d"
                                             }}>
                                            <Text style={{
                                                fontFamily: FONT.Quicksand_Bold,
                                                fontSize: RFPercentage(2.5),
                                                color: COLORS.TextColorName,
                                                textAlign: "left",
                                                maxWidth: w * 0.8,

                                            }}>{item.head}</Text>

                                            <Text style={{
                                                fontFamily: FONT.Quicksand_SemiBold,
                                                fontSize: RFPercentage(2.2),
                                                color: COLORS.Top_Flavour_Name,
                                                textAlign: "left",
                                                maxWidth: w * 0.8,

                                            }}>{item.expire}</Text>
                                        </View>



                                    </View>
                                </View>
                            ) : (null)}



                        </View>
                    )}
                />

            </View>
        </SafeAreaProvider>

    );
};

export default UsedVouchers;
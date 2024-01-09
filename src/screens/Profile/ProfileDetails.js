import React, { useState } from 'react';
import { View, Dimensions, Image, Text, FlatList, TouchableOpacity } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { COLORS, FONT, images } from '../../constants';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { Profile_Buttons } from '../../Utils/Dummy';
import { hp, wp } from '../../constants/themes';
import Offers from "../../../src/assets/Icons/Offers.svg"
import Friends from "../../../src/assets/Icons/friends.svg"
import Wallet from "../../../src/assets/Icons/Wallet.svg"
import Shopping from "../../../src/assets/Icons/Shopping.svg"
import About from "../../../src/assets/Icons/About.svg"
import BellNotification from "../../../src/assets/Icons/BellNotification.svg"
import Voucher from "../../../src/assets/Icons/Voucher.svg"
import Help from "../../../src/assets/Icons/Help.svg"
import { useNavigation } from '@react-navigation/native';

const h = Dimensions.get("screen").height
const w = Dimensions.get("screen").width


const CartIcon = require('../../../src/assets/Icons/cart.svg').default;

const ProfileDetails = () => {
    const navigation = useNavigation();


    const [buttons, setbuttons] = useState(Profile_Buttons)

    return (
        <SafeAreaProvider>
            <View style={{ flex: 1, backgroundColor: COLORS.white }}>
                <FlatList
                    data={buttons}
                    keyExtractor={(item, index) => index.toString()}
                    ListHeaderComponent={() => (
                        <View style={{
                            padding: RFPercentage(2),
                        }}>
                            <View style={{ flexDirection: "row" }}>
                                <View style={{
                                    marginRight: RFPercentage(2.25),
                                    justifyContent: "center"
                                }}>
                                    <Image source={images.USER_PROFILE}
                                        style={{
                                            borderRadius: RFPercentage(5),
                                            width: w * .18,
                                            height: w * .18
                                        }} />
                                </View>
                                <View>
                                    <Text style={{
                                        fontFamily: FONT.Quicksand_Bold,
                                        fontSize: RFPercentage(2.7), color: COLORS.TextColorName
                                    }}>Amir</Text>
                                    <Text style={{
                                        fontFamily: FONT.Quicksand_Medium,
                                        fontSize: RFPercentage(2.1), color: COLORS.ColorofCurrentLabel
                                    }}>Egypt</Text>
                                </View>
                            </View>
                        </View>
                    )}

                    renderItem={({ item }) => (
                        <View style={{
                            backgroundColor: COLORS.white,
                        }}>
                            <TouchableOpacity onPress={()=>alert(item.name)} style={{
                                paddingVertical: RFPercentage(1.5),
                                padding: RFPercentage(2),
                                flexDirection: "row"
                            }}>
                                
                                {item.name === 'Your orders' && <Shopping height={hp(5)} width={wp(8)} />}
                                {item.name === 'Offers' && <Offers height={hp(7)} width={wp(9)}  />}

                                {item.name === 'Notifications' && <BellNotification height={hp(5)} width={wp(8)} />}
                                {item.name === 'Orders pay' && <Wallet height={hp(5)} width={wp(8)} />}

                                {item.name === 'Refer a friend' && <Friends height={hp(5)} width={wp(8)} />}
                                {item.name === 'Vouchers' && <Voucher height={hp(5)} width={wp(8)} />}

                                {item.name === 'Get help' && <Help height={hp(5)} width={wp(8)} />}
                                {item.name === 'About' && <About height={hp(5)} width={wp(8)} />}

                                
                                <Text style={{
                                    marginLeft: RFPercentage(1),
                                    justifyContent: "center", alignSelf: "center",
                                    fontFamily: FONT.Quicksand_Bold, fontSize: RFPercentage(2.5)
                                }}>{item.name}</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                />
            </View>
        </SafeAreaProvider>
    );
};

export default ProfileDetails;

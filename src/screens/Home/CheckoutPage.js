import React, { useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { COLORS, FONT } from '../../constants';
import { View, Text, Switch ,Dimensions ,TextInput } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import Back_arrow from '../../Components/Back_arrow';
import { hp } from '../../constants/themes';

const CheckoutPage = () => {

    const h = Dimensions.get("screen").height
    const w = Dimensions.get("screen").width
    
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
        <>
            <SafeAreaProvider >

                <View style={{
                    backgroundColor: COLORS.white,
                    flex: 1,
                    padding: RFPercentage(1.5)
                }}>

                    <View style={{ flexDirection: "row", padding: RFPercentage(0.5) }}>
                        <Back_arrow onPress={() => { }} />
                        <Text style={{
                            textAlign: "center", flex: 0.9, marginVertical: RFPercentage(2),
                            fontSize: RFPercentage(4), fontFamily: FONT.Quicksand_Bold,
                            color: COLORS.Top_Flavour_Name
                        }}>Checkout</Text>
                    </View>


                    <View style={{
                        flexDirection: "row", justifyContent: "space-between",
                        marginTop: RFPercentage(2),
                        padding: RFPercentage(0.5),
                        marginVertical: RFPercentage(2), alignItems: "center"
                    }}>
                        <View>
                            <Text style={{
                                fontFamily: FONT.Quicksand_SemiBold,
                                fontSize: RFPercentage(2.4), color: COLORS.TextColorName
                            }}>
                                Keep Social Distancing
                            </Text>
                            <Text style={{
                                fontFamily: FONT.Quicksand_Medium,
                                fontSize: RFPercentage(2.2), color: COLORS.Top_Flavour_Name
                            }}>
                                Leave your order on the doorstep
                            </Text>
                        </View>
                        <View >
                            <Switch
                                style={{ transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }] }}
                                trackColor={{ false: '#767577', true: COLORS.minusbotooncolor }}
                                thumbColor={isEnabled ? COLORS.plusbottonColor : '#f4f3f4'}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleSwitch}
                                value={isEnabled}
                            />
                        </View>

                    </View>



                    <View style={{
                        flexDirection: "row", justifyContent: "space-between",
                        marginTop: RFPercentage(2),
                        padding: RFPercentage(0.5)
                    }}>
                        <View>
                            <Text style={{
                                fontFamily: FONT.Quicksand_Medium,
                                fontSize: RFPercentage(2.2), color: COLORS.Top_Flavour_Name
                            }}>
                                Delivery to
                            </Text>
                            <Text style={{
                                fontFamily: FONT.Quicksand_SemiBold,
                                fontSize: RFPercentage(2.4), color: COLORS.TextColorName
                            }}>
                               Cairo 6 October
                            </Text>
                            
                            <TextInput
                                style={{
                                    marginTop:RFPercentage(2),
                                    height: hp(6),
                                    width: w * 0.85,
                                    borderRadius: RFPercentage(1.2),
                                    backgroundColor: COLORS.TrybackgroundColorIce1,
                                    paddingHorizontal: 15,
                                    fontFamily: FONT.Quicksand_Regular,
                                    fontSize: RFPercentage(2.1),
                                    color: COLORS.TextColorName,

                                }}
                                placeholder="Add a note of delivery address"
                                // value={searchQuery}
                                // onChangeText={handleSearch}
                            />
                        </View>
                        {/* <View>
                            <Text>Add notes</Text>
                        </View> */}

                    </View>




                </View>


                <View style={{ backgroundColor: COLORS.white }}>
                    <Text>Payment</Text>
                </View>

            </SafeAreaProvider>

        </>
    );
};

export default CheckoutPage;


{/**
**
on that page 
1- make a onchange text that for add note 
2- part of my cart with arrow 
3- part of payment with Visa or vodafone cash 
4- part of notification 
 
****/}
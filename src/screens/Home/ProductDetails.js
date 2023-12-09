
import React, { useState } from 'react';
import { Dimensions, ImageBackground, ScrollView, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { COLORS, FONT, images } from '../../constants';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { TouchableOpacity } from 'react-native';

const h = Dimensions.get('screen').height;
const w = Dimensions.get('screen').width;
const ProductDetails = () => {


    const [Count, setCount] = useState(0)

    const increment = () => {
        setCount(Count + 1);
    }
    const decrement = () => {
        if (Count > 1) {
            setCount(Count - 1);
        }
    }

    return (
        <>
            <SafeAreaProvider style={{ backgroundColor: COLORS.white, flex: 1 }}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <ImageBackground
                        source={images.Flavour2}
                        style={{
                            width: w,
                            height: w * 1.15,
                            overflow: 'hidden',

                        }}
                    >
                    </ImageBackground>

                    <View
                        style={{
                            // height: w * 1,
                            borderTopLeftRadius: RFPercentage(10),
                            backgroundColor: COLORS.white,
                            marginTop: -RFPercentage(8),
                        }}
                    >
                        <View style={{ margin: RFPercentage(5) }}>
                            <Text numberOfLines={2} style={{
                                fontFamily: FONT.Quicksand_Bold,
                                fontSize: RFPercentage(2.9),
                                color: COLORS.color_addtocartButtom
                            }}
                            >Vanila Flavour Filled with Candy and Extra Topping</Text>
                            <Text numberOfLines={5} style={{
                                marginVertical: RFPercentage(2), fontSize: RFPercentage(2.2),
                                fontFamily: FONT.Quicksand_Medium, color: COLORS.Top_Flavour_Name
                            }}>Vanilla ice cream is a classic dessert to serve withCandy and Extra Topping
                                .Vanilla ice cream is a classic treat that everyone loves</Text>

                            <Text style={{
                                fontSize: RFPercentage(2.5), marginVertical: RFPercentage(1), fontFamily: FONT.Quicksand_SemiBold,
                                color: COLORS.Top_Flavour_Name
                            }}>Free Delivery</Text>

                            <View style={{
                                flexDirection: "row", justifyContent: "space-between",
                                marginBottom: RFPercentage(1)
                            }}>
                                <Text style={{
                                    fontFamily: FONT.Quicksand_Bold,
                                    fontSize: RFPercentage(2.9),
                                    color: COLORS.backgroundColorIceORbuttomcolor
                                }}>$18.500</Text>
                                <Text style={{
                                    fontFamily: FONT.Quicksand_Bold,
                                    fontSize: RFPercentage(2.9),
                                    color: COLORS.backgroundColorIceORbuttomcolor
                                }}>1KG</Text>
                            </View>
                            <View style={{
                                flexDirection: "row",
                                justifyContent: "space-between"
                            }} >
                                <View style={{
                                    backgroundColor: COLORS.backgroundColorIceORbuttomcolor,
                                    justifyContent: "center",
                                    width: w * 0.3,
                                    height: w * 0.16,
                                    borderRadius: RFPercentage(1.5),

                                }}>
                                    <View style={{
                                        flexDirection: "row",
                                        justifyContent: "space-around"
                                    }}>
                                        <TouchableOpacity onPress={decrement}
                                            style={{ borderRadius: RFPercentage(1.5), }}>
                                            <Text style={{
                                                padding: RFPercentage(2),
                                                fontSize: RFPercentage(2.8),
                                                fontFamily: FONT.Quicksand_Bold,
                                                color: COLORS.white
                                            }} >-</Text>
                                        </TouchableOpacity>
                                        <Text numberOfLines={1}  style={{
                                            maxWidth:w*0.14,
                                            padding: RFPercentage(2),
                                            fontSize: RFPercentage(3),
                                            fontFamily: FONT.Quicksand_Bold,
                                            color: COLORS.white
                                        }} >{Count}</Text>
                                        <TouchableOpacity onPress={increment}
                                            style={{ borderRadius: RFPercentage(1.5), }}>
                                            <Text style={{
                                                padding: RFPercentage(2),
                                                fontSize: RFPercentage(2.8),
                                                fontFamily: FONT.Quicksand_Bold,
                                                color: COLORS.white
                                            }} >+</Text>
                                        </TouchableOpacity>
                                    </View>

                                </View>
                                <TouchableOpacity style={{
                                    backgroundColor: COLORS.color_addtocartButtom,
                                    justifyContent: "center",
                                    width: w * 0.49,
                                    height: w * 0.16,
                                    borderRadius: RFPercentage(1.5),
                                    alignItems: "center"
                                }}>
                                    <Text style={{
                                        fontSize: RFPercentage(2.8),
                                        fontFamily: FONT.Quicksand_Bold,
                                        color: COLORS.white
                                    }} >Add to cart</Text>
                                </TouchableOpacity>
                            </View>
                        </View>



                    </View>
                </ScrollView>
            </SafeAreaProvider>
        </>
    );
};

export default ProductDetails;

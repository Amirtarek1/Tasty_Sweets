
import React, { useEffect, useState } from 'react';
import { Dimensions, ImageBackground, ScrollView, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { COLORS, FONT, images } from '../../constants';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { TouchableOpacity } from 'react-native';
import Back_arrow from '../../Components/Back_arrow';
import { useNavigation } from '@react-navigation/native';

const h = Dimensions.get('screen').height;
const w = Dimensions.get('screen').width;
const ProductDetails = ({ route }) => {
    const navigation = useNavigation();

    const { alldata, flavorOfItem } = route.params;
    // console.log( alldata ,"-====>", flavorOfItem ,"-====>" ,flavorOfItem)

    const [Count, setCount] = useState(flavorOfItem.product_count)


    const increment = () => {
        setCount(Count + 1);
    }
    const decrement = () => {
        if (Count >= 1) {
            setCount(Count - 1);
        }
    }


    return (
        <>
            <SafeAreaProvider style={{ backgroundColor: COLORS.white, flex: 1 }}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <ImageBackground
                        source={flavorOfItem.image}
                        style={{
                            width: w,
                            height: w * 1.15,
                            overflow: 'hidden',
                            backgroundColor: COLORS.backgroundBottonofflatlist

                        }}
                    >
                        <View style={{ alignItems: "center", margin: RFPercentage(3), alignSelf: "flex-start" }}>

                            <Back_arrow onPress={() => navigation.navigate("Flavours",
                             { alldata :alldata ,flavor: alldata.Flavour , categoryName: alldata.category_name })} />
                        </View>
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
                            >{flavorOfItem.name}</Text>
                            <Text numberOfLines={5} style={{
                                marginVertical: RFPercentage(2), fontSize: RFPercentage(2.2),
                                fontFamily: FONT.Quicksand_Medium, color: COLORS.Top_Flavour_Name
                            }}>{flavorOfItem.info}</Text>

                            <Text style={{
                                fontSize: RFPercentage(2.5), marginVertical: RFPercentage(1), fontFamily: FONT.Quicksand_SemiBold,
                                color: COLORS.Top_Flavour_Name
                            }}>{flavorOfItem.delivery_type}</Text>

                            <View style={{
                                flexDirection: "row", justifyContent: "space-between",
                                marginBottom: RFPercentage(1)
                            }}>
                                <Text style={{
                                    fontFamily: FONT.Quicksand_Bold,
                                    fontSize: RFPercentage(2.9),
                                    color: COLORS.backgroundColorIceORbuttomcolor
                                }}>${flavorOfItem.price}</Text>
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
                                        <Text numberOfLines={1} style={{
                                            maxWidth: w * 0.14,
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
                                <TouchableOpacity
                                    onPress={() => navigation.navigate("AnimTab2", { item: flavorOfItem.product_count })}
                                    style={{
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

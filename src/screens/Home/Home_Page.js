import React, { useCallback, useEffect, useState } from 'react';
import { Text, View, Image, Dimensions, TextInput, FlatList, TouchableOpacity } from 'react-native';
import { COLORS, FONT, images } from '../../constants';
import { RFPercentage } from 'react-native-responsive-fontsize';
import FlatListHorizontal from './Component/FlatListHorizontal';
import FlatListVertival from './Component/FlatListVertival';
import { Popular_Flavour, Top_Flavours, categories } from '../../Utils/Dummy';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { hp, wp } from '../../constants/themes';
import { useNavigation } from '@react-navigation/native';
import Cart from "../../../src/assets/Icons/cart.svg"

const h = Dimensions.get("screen").height
const w = Dimensions.get("screen").width

const Home_Page = ({ route }) => {


    const navigation = useNavigation();
    const [Top_FlavoursData, setTop_Flavours] = useState(Top_Flavours)

    // const FromVoucher = route.params || null;

    const FromVoucher = route.params?.FromVoucher || null;
    const [CategoriesData, setCategoriesData] = useState(categories);

    const [filteredData, setFilteredData] = useState(CategoriesData);

    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (text) => {
        setSearchQuery(text);

        if (text === '') {
            setFilteredData(CategoriesData);
        } else {
            const filtered = CategoriesData.filter(item =>
                item.category_name && item.category_name.toLowerCase().includes(text.toLowerCase())
            );

            setFilteredData(filtered);
        }
    };


    const [number, setnumber] = useState(4)

    // const updateCartNumber = useCallback(() => {
    //     const counter = Popular_FlavourData.length;
    //     setnumber(counter);
    // }, [Popular_FlavourData]);

    // useEffect(() => {
    //     updateCartNumber();
    // }, [updateCartNumber]);

    // const addToCart = (itemId) => {
    //     //  addToCart(item.id) <== used with postProduct 

    //     updateCartNumber();
    // };

    return (
        <SafeAreaProvider>
            <FlatList
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    backgroundColor: COLORS.white,
                    flexGrow: 1,
                }}
                ListHeaderComponent={
                    <>

                        {FromVoucher == "show" ?
                            (
                                <View style={{ backgroundColor: COLORS.TrybackgroundColorIce1 }}>

                                    <View style={{
                                        marginHorizontal: RFPercentage(2),
                                        marginVertical: RFPercentage(1),
                                    }}>
                                        <Text style={{
                                            fontSize: RFPercentage(2.5),
                                            fontFamily: FONT.Quicksand_SemiBold,
                                            color: COLORS.TextColorName
                                        }}>Use the Voucher</Text>
                                        <Text style={{
                                            fontSize: RFPercentage(2),
                                            fontFamily: FONT.Quicksand_Medium,
                                            color: COLORS.TextColorName
                                        }}>Order your sweets that you use its Voucher</Text>
                                    </View>
                                </View>
                            ) : null}


                        <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: RFPercentage(2), paddingVertical: RFPercentage(2) }}>
                            <View style={{ justifyContent: "center", marginLeft: RFPercentage(2.5) }}>
                                <Text style={{ fontSize: RFPercentage(3.2), fontFamily: FONT.Quicksand_Bold, color: COLORS.TextColorName }}>Hi Amir</Text>
                                <Text style={{ fontSize: RFPercentage(1.9), fontFamily: FONT.Quicksand_Regular, color: COLORS.TextColorName }}>What Flavour are you looking for?</Text>
                            </View>

                            <View style={{ marginRight: RFPercentage(2.5) }}>
                                <Image source={images.USER_PROFILE}
                                    style={{ borderRadius: RFPercentage(5), width: w * .18, height: w * .18 }} />
                            </View>
                        </View>

                        <View style={{ alignItems: "center", flexDirection: "row" }}>
                            <TextInput
                                style={{
                                    height: hp(7),
                                    width: w * 0.9,
                                    marginHorizontal: RFPercentage(2),
                                    borderRadius: RFPercentage(2),
                                    backgroundColor: COLORS.TrybackgroundColorIce1,
                                    paddingHorizontal: 15,
                                    fontFamily: FONT.Quicksand_Regular,
                                    fontSize: RFPercentage(2.1),
                                    color: COLORS.TextColorName,
                                }}
                                placeholder="Search by flavour"
                                value={searchQuery}
                                onChangeText={handleSearch}
                            />
                            {/* <View style={{ backgroundColor: COLORS.TrybackgroundColorIce1, padding: RFPercentage(0.9), borderRadius: RFPercentage(2) }}>
                                <Image source={images.USER_PROFILE} style={{ borderRadius: RFPercentage(5), width: w * .11, height: w * .11 }} />
                            </View> */}

                        </View>

                        <View style={{ marginHorizontal: RFPercentage(0.5), padding: RFPercentage(2) }}>
                            <View>
                                <Text style={{ fontSize: RFPercentage(3), fontFamily: FONT.Quicksand_Bold, color: COLORS.TextColorName }}>Populary Today</Text>
                            </View>
                            <View style={{ flexDirection: "row", flexWrap: "nowrap" }}>
                                <FlatListHorizontal data={Top_FlavoursData} />
                            </View>
                        </View>
                    </>
                }
                ListFooterComponent={
                    <>
                        <View style={{
                            marginHorizontal: RFPercentage(0.5),
                            paddingHorizontal: RFPercentage(2),
                            flexDirection: "row", justifyContent: "space-between"
                        }}>
                            <Text style={{
                                fontSize: RFPercentage(3),
                                fontFamily: FONT.Quicksand_Bold,
                                color: COLORS.TextColorName
                            }}>Sweets</Text>
                            <TouchableOpacity onPress={() => navigation.navigate("Cart")} style={{
                                justifyContent: "center",
                                alignItems: "center",
                                alignContent: "center"
                            }}>
                                <Cart height={hp(6)} width={wp(12)} fill="#e1acab" />
                                {number > 0 ? <View style={{
                                    height: hp(3.5), width: hp(3.5),
                                    backgroundColor: COLORS.TextColorName, borderRadius: 20,
                                    justifyContent: "center"
                                    , alignItems: "center", position: "absolute", top: -10, left: -8
                                }} >
                                    <Text style={{ color: COLORS.white, fontSize: RFPercentage(2) }}
                                    >{number}</Text>
                                </View> :
                                    null}


                            </TouchableOpacity>
                        </View>
                        <View style={{ marginBottom: RFPercentage(4) }} >
                            <FlatListVertival data={filteredData} />
                        </View>
                    </>
                }
            />
        </SafeAreaProvider>
    );
};

export default Home_Page;

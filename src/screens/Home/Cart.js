import React, { useState, useEffect } from 'react';
import { Text, TouchableOpacity, View, Dimensions, Image, FlatList } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { COLORS, FONT, images } from '../../constants';
import { RFPercentage } from 'react-native-responsive-fontsize';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { cart_products } from '../../Utils/Dummy';
import DeleteICon from "../../assets/Icons/Delete2.svg"
import { hp } from '../../constants/themes';
import FreeDelivery from "../../assets/Icons/FreeDelivery.svg"

const h = Dimensions.get("screen").height
const w = Dimensions.get("screen").width



const Cart = () => {



    const [count, setCount] = useState(cart_products.reduce((sum, product) => sum + product.product_count, 0));

    const [products, setProducts] = useState(cart_products);
    const [TotalPrice, setTotalPrice] = useState(cart_products.reduce((sum, product) => sum + product.product_price_with_sale * product.product_count, 0));



    const loadCountFromStorage = async () => {
        try {
            const storedCount = await AsyncStorage.getItem("count");
            if (storedCount !== null) {
                setCount(parseInt(storedCount, 10));
            }
        } catch (error) {
            console.error("Error loading count from storage:", error);
        }
    };

    useEffect(() => {
        loadCountFromStorage();
    }, [count]);


    useEffect(() => {
        const totalCount = cart_products.reduce((sum, product) => sum + product.product_count, 0);
        setCount(totalCount);
    }, [cart_products]);


    const saveCountToStorage = async newCount => {
        AsyncStorage.setItem("count", newCount.toString())
            .catch(error => console.error('Error saving count to storage:', error));
    }


    const increment = async (product_id) => {
        const updatedProducts = products.map((product) => {
            if (product.product_id === product_id) {
                return { ...product, product_count: product.product_count + 1 };
            }
            return product;
        });
        setProducts(updatedProducts);
        const totalCount = updatedProducts.reduce((sum, product) => sum + product.product_count, 0);
        saveCountToStorage(totalCount);
        setCount(totalCount);
        setTotalPrice(prevTotalPrice => prevTotalPrice + updatedProducts.find(product => product.product_id === product_id).product_price_with_sale);

    };


    const decrement = async (product_id) => {
        const updatedProducts = products.map((product) => {
            if (product.product_id === product_id && product.product_count > 1) {
                return { ...product, product_count: product.product_count - 1 };
            }
            return product;
        });
        setProducts(updatedProducts);
        const totalCount = updatedProducts.reduce((sum, product) => sum + product.product_count, 0);
        saveCountToStorage(totalCount);
        setCount(totalCount);
        setTotalPrice(prevTotalPrice => prevTotalPrice - updatedProducts.find(product => product.product_id === product_id).product_price_with_sale);
    };



    const deleteProduct = (product_id) => {
        const updatedProducts = products.filter((product) => product.product_id !== product_id);
        setProducts(updatedProducts);

        const totalCount = updatedProducts.reduce((sum, product) => sum + product.product_count, 0);
        saveCountToStorage(totalCount);
        setCount(totalCount);

        const deletedProduct = products.find((product) => product.product_id === product_id);
        setTotalPrice((prevTotalPrice) => prevTotalPrice - deletedProduct.product_price_with_sale * deletedProduct.product_count);
    };



    return (
        <>
            <SafeAreaProvider>

                <View style={{
                    backgroundColor: COLORS.white,
                    flex: 1,
                }}>

                    <View style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginHorizontal: RFPercentage(1.5),
                        marginVertical: RFPercentage(1),
                    }}>
                        <Text style={{
                            fontSize: RFPercentage(4),
                            fontFamily: FONT.Quicksand_Bold,
                            color: COLORS.TextColorName,
                        }}>My Cart</Text>
                        <View>
                            <View style={{ flexDirection: "row" }}>
                                <TouchableOpacity style={{
                                    paddingHorizontal: RFPercentage(1),
                                    backgroundColor: COLORS.backgroundColorIceORbuttomcolor,
                                    borderRadius: RFPercentage(0.7),
                                    marginRight: RFPercentage(1)
                                }}>
                                    <Text style={{
                                        fontSize: RFPercentage(3),
                                        color: COLORS.white,
                                    }}>+</Text>
                                </TouchableOpacity>
                                <Text style={{
                                    justifyContent: "center",
                                    textAlign: "center",
                                    color: "#e7c2c1",
                                    fontFamily: FONT.Quicksand_SemiBold,
                                    fontSize: RFPercentage(2.5),
                                }}>Add items
                                </Text>
                            </View>
                        </View>
                    </View>



                    <FlatList
                        data={products}
                        style={{
                            marginTop: RFPercentage(1),
                            paddingTop: RFPercentage(1)
                        }}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item, index }) => (
                            <>

                                <View style={{
                                    alignSelf: "center",
                                    width: w * 0.95,
                                    padding: RFPercentage(1),
                                    marginBottom: RFPercentage(2),
                                    shadowColor: COLORS.black,
                                    backgroundColor: COLORS.white,
                                    elevation: 3,
                                    shadowOffset: { width: 10, height: 14 },
                                    shadowOpacity: .5,
                                    borderRadius: RFPercentage(2),
                                }}>
                                    <View style={{ flexDirection: "row" }}>
                                        <Image
                                            source={item.product_image}
                                            style={{
                                                borderRadius: RFPercentage(1.5),
                                                width: w * 0.3,
                                                height: h * 0.15,

                                            }}
                                        />
                                        <View style={{ marginLeft: RFPercentage(1) }}>
                                            <View style={{
                                                marginVertical: RFPercentage(0.5),
                                                width: w * 0.6,
                                                maxWidth: w * 0.6,
                                                flexDirection: "row",
                                                // backgroundColor: "#d0d",
                                                justifyContent: "space-between",
                                                alignItems:"center", 
                                            }}>
                                                <Text numberOfLines={2} style={{
                                                    maxWidth: w * 0.5,
                                                    fontSize: RFPercentage(2.2),
                                                    fontFamily: FONT.Quicksand_Bold,
                                                    color: COLORS.TextColorName
                                                }}>
                                                    {item.product_name}
                                                </Text>

                                                <TouchableOpacity
                                                    onPress={() => deleteProduct(item.product_id)}

                                                    style={{
                                                        alignItems:"center", justifyContent:"center",
                                                        backgroundColor: COLORS.white,
                                                        borderRadius: RFPercentage(5),
                                                        padding: RFPercentage(0.2),
                                                        elevation: 4,marginRight:RFPercentage(0.5),
                                                        shadowOffset: { width: 14, height: 14 },
                                                        shadowOpacity: .5,
                                                    }}>
                                                    <DeleteICon width={hp(4.5)} height={hp(4.5)} />
                                                </TouchableOpacity>
                                            </View>
                                            <View style={{
                                                marginVertical: RFPercentage(0.5),
                                                width: w * 0.6,
                                                maxWidth: w * 0.6,
                                                flexDirection: "row",
                                                // backgroundColor: "#0dd",
                                            }}>
                                                <Text style={{
                                                    fontSize: RFPercentage(2.25),
                                                    fontFamily: FONT.Quicksand_Bold,
                                                    color: COLORS.TextColorName
                                                }}>
                                                    ${item.product_price_with_sale}
                                                </Text>
                                                <Text style={{
                                                    fontSize: RFPercentage(2.25),
                                                    textDecorationLine: "line-through",
                                                    fontFamily: FONT.Quicksand_SemiBold,
                                                    color: COLORS.text_color,
                                                    marginLeft: RFPercentage(2)

                                                }}>
                                                    ${item.product_price_without_sale}
                                                </Text>
                                            </View>
                                            <View style={{
                                                marginVertical: RFPercentage(0.5),
                                                width: w * 0.6,
                                                maxWidth: w * 0.6,
                                                flexDirection: "row",
                                                // backgroundColor: "#0d0",
                                                // justifyContent: "space-between"
                                            }}>
                                                <View style={{
                                                    backgroundColor: COLORS.gray_ofwhite,
                                                    borderRadius: RFPercentage(5),
                                                    // padding: RFPercentage(0.2), 
                                                    elevation: 2,
                                                    shadowOffset: { width: 14, height: 14 },
                                                    shadowOpacity: .5,
                                                    marginRight:RFPercentage(1)
                                                }}>
                                                    <FreeDelivery width={hp(3.5)} height={hp(3.5)}  />
                                                </View>
                                                <Text style={{
                                                    fontSize: RFPercentage(2.25),
                                                    justifyContent:"center",
                                                    // backgroundColor:"#00d",
                                                    fontFamily: FONT.Quicksand_SemiBold,
                                                    color: COLORS.text_color
                                                }}>
                                                    {item.product_delivery_status}
                                                </Text>
                                            </View>


                                        </View>
                                    </View>

                                    <View style={{
                                        flexDirection: "row",
                                        alignSelf: "flex-end",
                                        backgroundColor: "#f2f0ef",
                                        borderRadius: RFPercentage(1),
                                    }}>
                                        <TouchableOpacity
                                            onPress={() => decrement(item.product_id)}
                                            // onPress={decrement(item.product_id)}
                                            style={{
                                                justifyContent: "center",
                                            }}>
                                            <Text style={{
                                                borderRadius: RFPercentage(1),
                                                paddingVertical: RFPercentage(0.5),
                                                paddingHorizontal: RFPercentage(2),
                                                fontSize: RFPercentage(3),
                                                fontFamily: FONT.Quicksand_Bold,
                                                color: COLORS.white,
                                                backgroundColor: COLORS.minusbotooncolor
                                            }}>-</Text>
                                        </TouchableOpacity>

                                        <Text numberOfLines={1} style={{
                                            justifyContent: "center", maxWidth: w * 0.14,
                                            paddingHorizontal: RFPercentage(1),
                                            fontSize: RFPercentage(2.5),
                                            alignSelf: "center",
                                            fontFamily: FONT.Quicksand_Bold,
                                            color: COLORS.Top_Flavour_Name
                                        }}>{item.product_count}</Text>

                                        <TouchableOpacity
                                            onPress={() => increment(item.product_id)}
                                            style={{
                                                justifyContent: "center",
                                            }}>
                                            <Text style={{
                                                borderRadius: RFPercentage(1),
                                                paddingVertical: RFPercentage(0.5),
                                                paddingHorizontal: RFPercentage(2),
                                                fontSize: RFPercentage(3),
                                                fontFamily: FONT.Quicksand_Bold,
                                                color: COLORS.white,
                                                backgroundColor: COLORS.plusbottonColor
                                            }}>+</Text>
                                        </TouchableOpacity>


                                    </View>

                                </View>


                            </>
                        )}
                    />





                </View>


                <View style={{
                    backgroundColor: COLORS.white,
                    padding: RFPercentage(3),
                    paddingTop: RFPercentage(2)
                }}>
                    <View style={{
                        flexDirection: "row",
                        alignContent: "center",
                        justifyContent: "space-between"
                    }}>
                        <Text style={{
                            fontFamily: FONT.Quicksand_Bold,
                            textAlign: "center",
                            fontSize: RFPercentage(3.5),
                            color: COLORS.TextColorName
                        }}>Total Price</Text>
                        <Text style={{
                            fontFamily: FONT.Quicksand_Bold,
                            textAlign: "center",
                            fontSize: RFPercentage(3.5),
                            color: COLORS.plusbottonColor
                        }}>${TotalPrice.toFixed(2)}</Text>
                    </View>

                    <TouchableOpacity
                        onPress={() => { }}
                        style={{
                            backgroundColor: COLORS.color_addtocartButtom,
                            justifyContent: "center",
                            borderRadius: RFPercentage(1.5),
                            marginTop: RFPercentage(1.5),
                            alignItems: "center"
                        }}>
                        <Text style={{
                            fontSize: RFPercentage(2.8),
                            fontFamily: FONT.Quicksand_Bold,
                            color: COLORS.white,
                            paddingVertical: RFPercentage(2.5)

                        }} >Checkout</Text>
                    </TouchableOpacity>

                </View>

            </SafeAreaProvider>

        </>
    );
};

export default Cart;






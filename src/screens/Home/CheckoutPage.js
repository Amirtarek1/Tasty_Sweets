import React, { useEffect, useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { COLORS, FONT } from '../../constants';
import {
  View,
  Text,
  Switch,
  Dimensions,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import Back_arrow from '../../Components/Back_arrow';
import { hp, wp } from '../../constants/themes';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { cart_products } from '../../Utils/Dummy';
import DeleteICon from '../../assets/Icons/Delete2.svg';
import FreeDelivery from '../../assets/Icons/FreeDelivery.svg';
import DownArrow from '../../assets/Icons/DownArrow.svg';
import UpArrow from '../../assets/Icons/UpArrow.svg';


// UpArrow.svg
const CheckoutPage = () => {
  useEffect(() => {
    getsavenote();
  }, []);

  const [products, setProducts] = useState(cart_products);
  const [count, setCount] = useState(
    cart_products.reduce((sum, product) => sum + product.product_count, 0),
  );
  const [TotalPrice, setTotalPrice] = useState(
    cart_products.reduce(
      (sum, product) =>
        sum + product.product_price_with_sale * product.product_count,
      0,
    ),
  );
  const [Totalfee, setTotalfee] = useState(
    cart_products.reduce(
      (sum, product) => sum + product.price_delivery * product.product_count,
      0,
    ),
  );

  const h = Dimensions.get('screen').height;
  const w = Dimensions.get('screen').width;

  const [isEnabled, setIsEnabled] = useState(false);
  const [addnote, setaddnotes] = useState('');
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const [showAllItems, setShowAllItems] = useState(false);

  const savenote = async () => {
    await AsyncStorage.setItem('savednote', JSON.stringify(addnote));
  };

  const getsavenote = async () => {
    let notes = await AsyncStorage.getItem('savednote');
    notes = JSON.parse(notes);
    if (notes) {
      setaddnotes(notes);
    }
  };
  const saveCountToStorage = async newCount => {
    AsyncStorage.setItem('count', newCount.toString()).catch(error =>
      console.error('Error saving count to storage:', error),
    );
  };

  const increment = async product_id => {
    const updatedProducts = products.map(product => {
      if (product.product_id === product_id) {
        return { ...product, product_count: product.product_count + 1 };
      }
      return product;
    });
    setProducts(updatedProducts);
    const totalCount = updatedProducts.reduce(
      (sum, product) => sum + product.product_count,
      0,
    );
    saveCountToStorage(totalCount);
    setCount(totalCount);
    setTotalPrice(
      prevTotalPrice =>
        prevTotalPrice +
        updatedProducts.find(product => product.product_id === product_id)
          .product_price_with_sale,
    );
    setTotalfee(
      prevTotalfee =>
        prevTotalfee +
        updatedProducts.find(product => product.product_id === product_id)
          .price_delivery,
    );
  };

  const decrement = async product_id => {
    const updatedProducts = products.map(product => {
      if (product.product_id === product_id && product.product_count > 1) {
        return { ...product, product_count: product.product_count - 1 };
      }
      return product;
    });
    setProducts(updatedProducts);
    const totalCount = updatedProducts.reduce(
      (sum, product) => sum + product.product_count,
      0,
    );
    saveCountToStorage(totalCount);
    setCount(totalCount);
    setTotalPrice(
      prevTotalPrice =>
        prevTotalPrice -
        updatedProducts.find(product => product.product_id === product_id)
          .product_price_with_sale,
    );
    setTotalfee(
      prevTotalfee =>
        prevTotalfee +
        updatedProducts.find(product => product.product_id === product_id)
          .price_delivery,
    );
  };

  const deleteProduct = product_id => {
    const updatedProducts = products.filter(
      product => product.product_id !== product_id,
    );
    setProducts(updatedProducts);

    const totalCount = updatedProducts.reduce(
      (sum, product) => sum + product.product_count,
      0,
    );
    saveCountToStorage(totalCount);
    setCount(totalCount);

    const deletedProduct = products.find(
      product => product.product_id === product_id,
    );
    setTotalPrice(
      prevTotalPrice =>
        prevTotalPrice -
        deletedProduct.product_price_with_sale * deletedProduct.product_count,
    );
    setTotalfee(
      prevTotalfee =>
        prevTotalfee -
        deletedProduct.price_delivery * deletedProduct.product_count,
    );
  };

  return (
    <>
      <SafeAreaProvider>
        <View style={{ flex: 1, backgroundColor: COLORS.white }}>
          <FlatList
           showsVerticalScrollIndicator={false}
           showsHorizontalScrollIndicator={false}
            data={[{ type: 'header' }, { type: 'footer' }, ...products]}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => {
              if (item.type === 'header') {
                return (
                  <View
                    style={{
                      backgroundColor: COLORS.white,
                      flex: 1,
                      paddingHorizontal: RFPercentage(1.5),
                      paddingVertical:RFPercentage(1)
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        padding: RFPercentage(0.5),
                      }}>
                      <Back_arrow onPress={() => { }} />
                      <Text
                        style={{
                          textAlign: 'center',
                          flex: 0.9,
                          marginVertical: RFPercentage(1),
                          fontSize: RFPercentage(4),
                          fontFamily: FONT.Quicksand_Bold,
                          color: COLORS.Top_Flavour_Name,
                        }}>
                        Checkout
                      </Text>
                    </View>

                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginTop: RFPercentage(2),
                        padding: RFPercentage(0.5),
                        // marginVertical: RFPercentage(1),
                        alignItems: 'center',
                      }}>
                      <View>
                        <Text
                          style={{
                            fontFamily: FONT.Quicksand_SemiBold,
                            fontSize: RFPercentage(2.4),
                            color: COLORS.TextColorName,
                          }}>
                          Keep Social Distancing
                        </Text>
                        <Text
                          style={{
                            fontFamily: FONT.Quicksand_Medium,
                            fontSize: RFPercentage(2.2),
                            color: COLORS.Top_Flavour_Name,
                          }}>
                          Leave your order on the doorstep
                        </Text>
                      </View>
                      <View>
                        <Switch
                          style={{ transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }] }}
                          trackColor={{
                            false: '#767577',
                            true: COLORS.minusbotooncolor,
                          }}
                          thumbColor={
                            isEnabled ? COLORS.plusbottonColor : '#f4f3f4'
                          }
                          ios_backgroundColor="#3e3e3e"
                          onValueChange={toggleSwitch}
                          value={isEnabled}
                        />
                      </View>
                    </View>

                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginTop: RFPercentage(1),
                        padding: RFPercentage(0.5),
                      }}>
                      <View>
                        <Text
                          style={{
                            fontFamily: FONT.Quicksand_Medium,
                            fontSize: RFPercentage(2.2),
                            color: COLORS.Top_Flavour_Name,
                          }}>
                          Delivery to
                        </Text>
                        <Text
                          style={{
                            fontFamily: FONT.Quicksand_SemiBold,
                            fontSize: RFPercentage(2.4),
                            color: COLORS.TextColorName,
                          }}>
                          Cairo 6 October
                        </Text>

                        <TextInput
                          style={{
                            marginTop: RFPercentage(2),
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
                          value={addnote}
                          onChangeText={value => {
                            setaddnotes(value);
                          }}
                        />
                      </View>
                    </View>

                    <View
                      style={{
                        marginTop: RFPercentage(0.5),
                        padding: RFPercentage(0.5),
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}>
                      <Text
                        style={{
                          fontFamily: FONT.Quicksand_Bold,
                          fontSize: RFPercentage(3.5),
                          color: COLORS.TextColorName,
                        }}>
                        My Cart
                      </Text>

                      <View style={{ flexDirection: 'row', alignItems: "center" }}>
                        <TouchableOpacity
                          style={{
                            paddingHorizontal: RFPercentage(1),
                            backgroundColor:
                              COLORS.backgroundColorIceORbuttomcolor,
                            borderRadius: RFPercentage(0.7),
                            marginRight: RFPercentage(1),
                            maxHeight: RFPercentage(4.5),
                            maxWidth: RFPercentage(4),
                          }}>
                          <Text
                            style={{
                              fontSize: RFPercentage(3),
                              color: COLORS.white,
                            }}>
                            +
                          </Text>
                        </TouchableOpacity>

                        <Text
                          style={{
                            justifyContent: 'center',
                            textAlign: 'center',
                            color: '#e7c2c1',
                            fontFamily: FONT.Quicksand_SemiBold,
                            fontSize: RFPercentage(2.5),
                          }}>
                          Add items
                        </Text>
                      </View>
                    </View>
                  </View>
                );
              } else if (item.type === 'footer') {
                return (
                  <View style={{ backgroundColor: COLORS.white }}>
                    <FlatList
                      data={showAllItems ? products : [products[0]]}
                      showsVerticalScrollIndicator={false}
                      showsHorizontalScrollIndicator={false}
                      renderItem={({ item, index }) => (
                        <View
                          style={{
                            alignSelf: 'center',
                            width: w * 0.93,
                            padding: RFPercentage(1),
                            marginBottom: RFPercentage(2),
                            shadowColor: COLORS.black,
                            backgroundColor: COLORS.white,
                            elevation: 3,
                            shadowOffset: { width: 10, height: 14 },
                            shadowOpacity: 0.5,
                            borderRadius: RFPercentage(2),
                          }}>
                          <View style={{ flexDirection: 'row' }}>
                            <Image
                              source={item.product_image}
                              style={{
                                borderRadius: RFPercentage(1.5),
                                width: w * 0.3,
                                height: h * 0.15,
                              }}
                            />
                            <View style={{ marginLeft: RFPercentage(1) }}>
                              <View
                                style={{
                                  marginVertical: RFPercentage(0.5),
                                  maxWidth: w * 0.55,
                                  flexDirection: 'row',
                                  justifyContent: 'space-between',
                                  alignItems: 'center',
                                }}>
                                <Text
                                  numberOfLines={2}
                                  style={{
                                    maxWidth: w * 0.35,
                                    fontSize: RFPercentage(2.2),
                                    fontFamily: FONT.Quicksand_Bold,
                                    color: COLORS.TextColorName,
                                  }}>
                                  {item.product_name}
                                </Text>

                                <TouchableOpacity
                                  onPress={() => deleteProduct(item.product_id)}
                                  style={{
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    backgroundColor: COLORS.white,
                                    borderRadius: RFPercentage(5),
                                    padding: RFPercentage(0.2),
                                    elevation: 4,
                                    marginRight: RFPercentage(0.5),
                                    shadowOffset: { width: 14, height: 14 },
                                    shadowOpacity: 0.5,
                                  }}>
                                  <DeleteICon
                                    width={hp(4.5)}
                                    height={hp(4.5)}
                                  />
                                </TouchableOpacity>
                              </View>
                              <View
                                style={{
                                  marginVertical: RFPercentage(0.5),
                                  width: w * 0.6,
                                  maxWidth: w * 0.6,
                                  flexDirection: 'row',
                                  // backgroundColor: "#0dd",
                                }}>
                                <Text
                                  style={{
                                    fontSize: RFPercentage(2.25),
                                    fontFamily: FONT.Quicksand_Bold,
                                    color: COLORS.TextColorName,
                                  }}>
                                  ${item.product_price_with_sale}
                                </Text>
                                <Text
                                  style={{
                                    fontSize: RFPercentage(2.25),
                                    textDecorationLine: 'line-through',
                                    fontFamily: FONT.Quicksand_SemiBold,
                                    color: COLORS.text_color,
                                    marginLeft: RFPercentage(2),
                                  }}>
                                  ${item.product_price_without_sale}
                                </Text>
                              </View>
                              <View
                                style={{
                                  marginVertical: RFPercentage(0.5),
                                  width: w * 0.6,
                                  maxWidth: w * 0.6,
                                  flexDirection: 'row',
                                }}>
                                <View
                                  style={{
                                    backgroundColor: COLORS.gray_ofwhite,
                                    borderRadius: RFPercentage(5),
                                    // padding: RFPercentage(0.2),
                                    elevation: 2,
                                    shadowOffset: { width: 14, height: 14 },
                                    shadowOpacity: 0.5,
                                    marginRight: RFPercentage(1),
                                  }}>
                                  <FreeDelivery
                                    width={hp(3.5)}
                                    height={hp(3.5)}
                                  />
                                </View>
                                <Text
                                  style={{
                                    fontSize: RFPercentage(2.25),
                                    justifyContent: 'center',
                                    // backgroundColor:"#00d",
                                    fontFamily: FONT.Quicksand_SemiBold,
                                    color: COLORS.text_color,
                                  }}>
                                  {item.product_delivery_status}
                                </Text>
                              </View>
                            </View>
                          </View>

                          <View
                            style={{
                              flexDirection: 'row',
                              alignSelf: 'flex-end',
                              backgroundColor: '#f2f0ef',
                              borderRadius: RFPercentage(1),
                            }}>
                            <TouchableOpacity
                              onPress={() => decrement(item.product_id)}
                              style={{
                                justifyContent: 'center',
                              }}>
                              <Text
                                style={{
                                  borderRadius: RFPercentage(1),
                                  paddingVertical: RFPercentage(0.5),
                                  paddingHorizontal: RFPercentage(2),
                                  fontSize: RFPercentage(3),
                                  fontFamily: FONT.Quicksand_Bold,
                                  color: COLORS.white,
                                  backgroundColor: COLORS.minusbotooncolor,
                                }}>
                                -
                              </Text>
                            </TouchableOpacity>

                            <Text
                              numberOfLines={1}
                              style={{
                                justifyContent: 'center',
                                maxWidth: w * 0.14,
                                paddingHorizontal: RFPercentage(1),
                                fontSize: RFPercentage(2.5),
                                alignSelf: 'center',
                                fontFamily: FONT.Quicksand_Bold,
                                color: COLORS.Top_Flavour_Name,
                              }}>
                              {item.product_count}
                            </Text>

                            <TouchableOpacity
                              onPress={() => increment(item.product_id)}
                              style={{
                                justifyContent: 'center',
                              }}>
                              <Text
                                style={{
                                  borderRadius: RFPercentage(1),
                                  paddingVertical: RFPercentage(0.5),
                                  paddingHorizontal: RFPercentage(2),
                                  fontSize: RFPercentage(3),
                                  fontFamily: FONT.Quicksand_Bold,
                                  color: COLORS.white,
                                  backgroundColor: COLORS.plusbottonColor,
                                }}>
                                +
                              </Text>
                            </TouchableOpacity>
                          </View>
                        </View>
                      )}
                    />

                    <TouchableOpacity
                      onPress={() => setShowAllItems(!showAllItems)}
                      style={{
                        // backgroundColor: COLORS.black,
                        borderRadius: RFPercentage(1),
                        // paddingVertical: RFPercentage(1),
                        paddingHorizontal: RFPercentage(2),
                        alignSelf: 'center',
                        marginBottom: RFPercentage(2),
                      }}
                    >
                      {
                        showAllItems ?
                          <UpArrow
                            width={hp(7)}
                            height={hp(7)}
                          /> :
                          <DownArrow
                            width={hp(7)}
                            height={hp(7)}
                          />}
                    </TouchableOpacity>
                  </View>
                );
              } else {
                return null;
              }
            }}
          />
          <View style={{paddingTop:RFPercentage(1), paddingHorizontal: RFPercentage(2), }}>
            <Text
              style={{
                fontFamily: FONT.Quicksand_Bold,
                fontSize: RFPercentage(3.5),
                color: COLORS.TextColorName,
              }}>
              Payment
            </Text>
            <View
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text
                style={{
                  fontFamily: FONT.Quicksand_SemiBold,
                  fontSize: RFPercentage(2.2),
                  color: COLORS.TextColorName,
                }}>Items Total price
              </Text>

              <Text
                style={{
                  fontFamily: FONT.Quicksand_SemiBold,
                  fontSize: RFPercentage(2.2),
                  color: COLORS.TextColorName,
                }}>
                ${TotalPrice.toFixed(2)}
              </Text>
            </View>

            <View
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text
                style={{
                  fontFamily: FONT.Quicksand_SemiBold,
                  fontSize: RFPercentage(2.2),
                  color: COLORS.TextColorName,
                }}>Delivery fee
              </Text>

              <Text
                style={{
                  fontFamily: FONT.Quicksand_SemiBold,
                  fontSize: RFPercentage(2.2),
                  color: COLORS.TextColorName,
                }}>
                ${Totalfee.toFixed(2)}
              </Text>
            </View>

            <View style={{
              marginVertical: RFPercentage(1), borderColor: COLORS.black, height: hp(0.1), backgroundColor: COLORS.black
              , width: w * 0.93, alignSelf: "center"
            }} />

            <View
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text
                style={{
                  fontFamily: FONT.Quicksand_SemiBold,
                  fontSize: RFPercentage(2.2),
                  color: COLORS.TextColorName,
                }}>
                To pay
              </Text>

              <Text
                style={{
                  fontFamily: FONT.Quicksand_SemiBold,
                  fontSize: RFPercentage(2.2),
                  color: COLORS.TextColorName,
                }}>
                ${(Totalfee + TotalPrice).toFixed(2)}
              </Text>
            </View>

            <TouchableOpacity 
            onPress={()=>{}}
            style={{marginVertical:RFPercentage(1.8), 
              backgroundColor: COLORS.plusbottonColor,width:w*0.9,
              alignSelf:"center",alignItems:"center",
               borderRadius: RFPercentage(1.5)  }}>
              <Text style={{
                fontSize: RFPercentage(2.5), fontFamily: FONT.Quicksand_Bold,
                justifyContent: "center" ,padding:RFPercentage(1.8), textAlign: "center"
              }}>Continue</Text>
            </TouchableOpacity>
          </View>
        </View>







      </SafeAreaProvider>
    </>
  );
};

export default CheckoutPage;

import React, { useState } from 'react';
import { FlatList, Text, Dimensions, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { COLORS, FONT } from '../../constants';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { Vouchers } from '../../Utils/Dummy';
import Header from '../../Components/Header';

const h = Dimensions.get("screen").height
const w = Dimensions.get("screen").width


const Offers = () => {
    const navigation = useNavigation();
    const [Showallorders] = useState(Vouchers)

    return (
        <>
            <SafeAreaProvider>
                <View style={{ flex: 1, backgroundColor: COLORS.white }}>
                    
                    {Showallorders.length >0 ?
                    (
                        <FlatList
                        showsVerticalScrollIndicator={false}
                        data={Showallorders}
                        keyExtractor={(item, index) => index.toString()}
                        ListHeaderComponent={() => (
                            <Header HeaderName={"Offers"} onPress={() => navigation.navigate("AnimTab2", { screen: 'ProfileDetails' })} />
                          
                        )}

                        renderItem={({ item }) => (

                            <TouchableOpacity
                                onPress={() => navigation.navigate("OffersDetails", { OfferDetails: item })}
                                style={{
                                    padding: RFPercentage(2),
                                    margin: RFPercentage(2),
                                    backgroundColor: COLORS.white,
                                    borderRadius: RFPercentage(2),
                                    elevation: 8,
                                }}>
                                <View style={{
                                    flexDirection: "row",

                                }}>

                                    <Image source={item.image} style={{
                                        height: w * 0.2,
                                        borderRadius: RFPercentage(2),
                                        width: w * 0.2
                                    }} />

                                    <View style={{ margin: RFPercentage(2) }}>
                                        <Text style={{
                                            fontFamily: FONT.Quicksand_Bold,
                                            fontSize: RFPercentage(2.25),
                                            color: COLORS.TextColorName,
                                            textAlign: "left",
                                            maxWidth: w * 0.62

                                        }}>{item.head}</Text>

                                        <Text style={{
                                            fontFamily: FONT.Quicksand_Medium,
                                            fontSize: RFPercentage(2),
                                            color: COLORS.Top_Flavour_Name,
                                            textAlign: "left",
                                            maxWidth: w * 0.62
                                        }}>{item.Details}</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>

                        )}
                    />

                    )
                    :
                    ( <SafeAreaProvider>
                        <View style={{ flex: 1, backgroundColor: COLORS.white }}>
        
                        <Header HeaderName={"Offers"} onPress={() => navigation.navigate("AnimTab2", { screen: 'ProfileDetails' })} />
        
                            <View style={{alignSelf:"center" , justifyContent:"center" , flex:1 , alignItems:"center"}}>
                                <Text style={{
                                            color: COLORS.Top_Flavour_Name,
                                            fontSize: RFPercentage(2.7),
                                            fontFamily: FONT.Quicksand_SemiBold,
                                            justifyContent: "center",
                                            padding: RFPercentage(0.5),
        
                                        }}>We have no updates</Text>
                                <Text style={{
                                            color: COLORS.Top_Flavour_Name,
                                            fontSize: RFPercentage(2.7),
                                            fontFamily: FONT.Quicksand_SemiBold,
                                            justifyContent: "center",
                                            padding: RFPercentage(0.5),
        
                                        }}>Please check again later</Text>
                            </View>
        
                        </View>
                    </SafeAreaProvider>)
                    }
                    
                  

                </View>
            </SafeAreaProvider>
        </>
    );
};

export default Offers;


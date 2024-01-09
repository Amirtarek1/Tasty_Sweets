import React from 'react';
import { StatusBar ,Text, View ,ScrollView } from 'react-native';
import Back_arrow from '../../Components/Back_arrow';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { COLORS, FONT } from '../../constants';
import { SafeAreaProvider } from 'react-native-safe-area-context';


const OrderPay = () => {

  return (
    <>
      <SafeAreaProvider>
                <View style={{ flex: 1, backgroundColor: COLORS.white }}>


                    <View
                        style={{
                            flexDirection: 'row',
                            paddingTop: RFPercentage(2),
                            paddingHorizontal: RFPercentage(2),

                        }}>

                        <Back_arrow onPress={()=>{}} />
{/* onPress={() => navigation.navigate("AnimTab2", { screen: "ProfileDetails" })}  */}
                        <Text
                            style={{
                                textAlign: 'center',
                                flex: 0.9,
                                marginVertical: RFPercentage(1),
                                fontSize: RFPercentage(3.5),
                                fontFamily: FONT.Quicksand_Bold,
                                color: COLORS.Top_Flavour_Name,
                            }}>
                            Order Pay
                        </Text>
                    </View>

                    <ScrollView showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}>

                  
                    </ScrollView>

                </View>

            </SafeAreaProvider>
    </>
  );
};

export default OrderPay;

import React, { useState } from 'react';
import { FlatList, Text, Dimensions, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { COLORS, FONT } from '../../constants';
import { RFPercentage } from 'react-native-responsive-fontsize';
import Header from '../../Components/Header';

const w = Dimensions.get("screen").width


const DitailsOrder = ({ route }) => {
  const navigation = useNavigation();
  const { Allorders } = route.params;
  const [Showallorders] = useState(Allorders)

  return (
    <>
      <SafeAreaProvider>
        <View style={{ flex: 1, backgroundColor: COLORS.white }}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={Showallorders}
            keyExtractor={(item, index) => index.toString()}
            ListHeaderComponent={() => (

              <Header HeaderName={"Order details"}  onPress={() => navigation.navigate("AnimTab2", { screen: "ProfileDetails" })} />
            )}

            renderItem={({ item }) => (
              <View style={{
                backgroundColor: COLORS.white
              }}>
                <View style={{
                  padding: RFPercentage(2),
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

                    <Image source={item.image} style={{ height: w * 0.3, borderRadius: RFPercentage(2), width: w * 0.3 }} />
                    <View style={{ margin: RFPercentage(2) }}>
                      <Text style={{
                        fontFamily: FONT.Quicksand_Bold,
                        fontSize: RFPercentage(2.7),
                        color: COLORS.TextColorName,
                        textAlign: "left",
                        maxWidth: w * 0.45,

                      }}>{item.order_item_name}</Text>

                      <Text style={{
                        fontFamily: FONT.Quicksand_SemiBold,
                        fontSize: RFPercentage(2.7),
                        color: COLORS.Top_Flavour_Name,
                        textAlign: "left",
                        maxWidth: w * 0.45,

                      }}>Price for one : {item.order_item_price}</Text>
                      <Text style={{
                        fontFamily: FONT.Quicksand_SemiBold,
                        fontSize: RFPercentage(2.7),
                        color: COLORS.Top_Flavour_Name,
                        textAlign: "left", maxWidth: w * 0.45,


                      }}>Count : {item.Count}</Text>
                    </View>



                  </View>
                </View>



              </View>
            )}
          />


        </View>
      </SafeAreaProvider>
    </>
  );
};

export default DitailsOrder;

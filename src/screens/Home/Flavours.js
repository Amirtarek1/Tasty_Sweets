import React from 'react';
import { FlatList, View, Text, ImageBackground, Dimensions, TouchableOpacity, Image } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { useNavigation } from '@react-navigation/native';
import { COLORS, FONT } from '../../constants';
import { hp } from '../../constants/themes';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Header from '../../Components/Header';


const w = Dimensions.get("screen").width
const Flavours = ({ route }) => {
  const navigation = useNavigation();
  const { alldata, flavor, categoryName } = route.params;
  // console.log( alldata ,"-====>", flavor ,"-====>" ,categoryName)
  return (
    <SafeAreaProvider>
      <View style={{ backgroundColor: COLORS.white, flex: 1 }}>

        <Header HeaderName={categoryName} onPress={() => navigation.navigate("AnimTab2", { screen: 'Home' })} />


        <FlatList
          data={flavor}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <>

              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("ProductDetails", { flavorOfItem: item, alldata: alldata })
                }}
                style={{
                  margin: RFPercentage(1),
                  marginHorizontal: RFPercentage(0.5),
                  flex: 1,
                  paddingVertical: RFPercentage(1)
                }}  >
                <View style={{
                  borderRadius: RFPercentage(3),
                  alignItems: "center",
                  backgroundColor: COLORS.backgroundBottonofflatlist,
                  alignSelf: "center",
                }}>
                  <Image resizeMode='cover' source={item.image}
                    style={{
                      borderRadius: RFPercentage(3),
                      width: w * 0.425,
                      height: w * 0.6
                    }} />
                </View>

                <View style={{ margin: RFPercentage(1), marginLeft: RFPercentage(3) }}>
                  <Text numberOfLines={1} style={{
                    fontSize: RFPercentage(2.5),
                    maxWidth: hp(20),
                    fontFamily: FONT.Quicksand_SemiBold,
                    color: COLORS.TextColorName
                  }} >{item.name}</Text>
                  <Text numberOfLines={1} style={{
                    fontSize: RFPercentage(2.2),
                    maxWidth: hp(10),
                    fontFamily: FONT.Quicksand_Medium,
                    color: COLORS.Text_on_button
                  }} >${item.price}</Text>
                </View>
              </TouchableOpacity>
            </>
          )}
        />
      </View>
    </SafeAreaProvider>
  );
}

export default Flavours;

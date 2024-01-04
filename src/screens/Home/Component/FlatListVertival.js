import React from 'react';
import { FlatList, View, Text, ImageBackground, Dimensions, TouchableOpacity, Image } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { COLORS, FONT, hp } from '../../../constants/themes';
import { useNavigation } from '@react-navigation/native';


const h = Dimensions.get("screen").height
const w = Dimensions.get("screen").width
const FlatListVertival = ({ data }) => {
    const navigation = useNavigation();

    return (
        <FlatList
            data={data}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
                <>
                    <TouchableOpacity 
                    onPress={() => {
                        // navigation.navigate("Flavours", {  flavor: item.Flavour, categoryName: item.category_name });
                        navigation.navigate("Flavours", { alldata:item , flavor: item.Flavour, categoryName: item.category_name });

                      }}
                    style={{
                        margin: RFPercentage(1),
                        marginHorizontal: RFPercentage(0.5),
                        flex: 1,
                        backgroundColor:COLORS.white,
                        // paddingVertical:RFPercentage(2)
                    }}  >
                        <View style={{
                            borderRadius: RFPercentage(3),
                            alignItems: "center",
                            backgroundColor: COLORS.backgroundBottonofflatlist,
                            alignSelf: "center",
                        }}>
                            <Image resizeMode='cover' source={item.category_image}
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
                            }} >{item.category_name}</Text>
                            {/* <Text numberOfLines={1} style={{
                                fontSize: RFPercentage(2.2),
                                maxWidth: hp(10), 
                                fontFamily: FONT.Quicksand_Medium,
                                color: COLORS.Text_on_button
                            }} >${item.price}</Text> */}
                        </View>
                    </TouchableOpacity>
                </>
            )}
        />
    );
}

export default FlatListVertival;

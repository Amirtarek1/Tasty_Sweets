import React from 'react';
import { FlatList, View, Text, ImageBackground, Dimensions, TouchableOpacity, Image } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { COLORS, FONT, hp } from '../../../constants/themes';


const h = Dimensions.get("screen").height
const w = Dimensions.get("screen").width
const FlatListVertival = ({ data }) => {

    return (
        <FlatList
            data={data}
            numColumns={2}
            contentContainerStyle={{ marginBottom: RFPercentage(20) }}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
                <>
                    <View style={{ 
                    margin: RFPercentage(1) , 
                    marginHorizontal:RFPercentage(0.5) ,
                     flex:1}}  >
                        <TouchableOpacity onPress={()=>{}}  style={{
                            borderRadius:RFPercentage(3),
                            alignItems: "center",
                            backgroundColor: COLORS.backgroundBottonofflatlist,
                            alignSelf: "center",
                        }}>
                            <Image resizeMode='cover' source={item.image}
                                style={{
                                    borderRadius:RFPercentage(3),
                                    width: hp(24),
                                    height: hp(40)
                                }} />
                        </TouchableOpacity>

                        <View style={{ margin: RFPercentage(1) }}>
                            <Text numberOfLines={1}  style={{
                                fontSize: RFPercentage(2.5),
                                maxWidth :hp(20),
                                fontFamily: FONT.Quicksand_SemiBold,
                                color: COLORS.TextColorName
                            }} >{item.name}</Text>
                            <Text numberOfLines={1}  style={{
                                fontSize: RFPercentage(2.7),
                                maxWidth :hp(10),
                                fontFamily: FONT.Quicksand_Medium,
                                color: COLORS.Text_on_button
                            }} >${item.price}</Text>
                        </View>
                    </View>
                </>
            )}
        />
    );
}

export default FlatListVertival;

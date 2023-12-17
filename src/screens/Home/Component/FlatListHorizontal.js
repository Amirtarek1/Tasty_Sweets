import React from 'react';
import { FlatList, View, Text, ImageBackground, Dimensions, TouchableOpacity } from 'react-native';
import { images } from '../../../constants';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { COLORS, FONT, hp } from '../../../constants/themes';


const h = Dimensions.get("screen").height
const w = Dimensions.get("screen").width
const FlatListHorizontal = ({ data }) => {

    return (
        <FlatList
            data={data}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
                <>
                    <TouchableOpacity style={{
                        justifyContent: "center" 
                    }}  >
                        <ImageBackground resizeMode='cover' source={item.image}
                            style={{
                                padding:RFPercentage(2),
                                alignSelf: "center", 
                                width: w*0.89,
                                height: w*0.47, 
                                marginRight: RFPercentage(1.5),
                                marginVertical: RFPercentage(1),
                                justifyContent: "center",
                                borderRadius: hp(1.2),
                                overflow: 'hidden',
                            }}  >
                            <View style={{
                                justifyContent: 'flex-end', 
                                paddingTop:RFPercentage(15),
                            }}>
                                <Text style={{
                                    fontFamily: FONT.Quicksand_Bold,
                                    fontSize: RFPercentage(2.5),
                                     marginBottom: RFPercentage(0.2),
                                     color: COLORS.Top_Flavour_Name
                                }}
                                >{item.name}</Text>
                                <Text style={{
                                    fontFamily: FONT.Quicksand_Medium,
                                    fontSize: RFPercentage(2), marginBottom: RFPercentage(0.2), color: COLORS.Top_Flavour_Name
                                }}
                                >{item.delivery_type}</Text>
                                <Text style={{
                                    fontFamily: FONT.Quicksand_Bold,
                                    fontSize: RFPercentage(2.2), 
                                    color: COLORS.TrybackgroundColorIce2
                                }}
                                >${item.price}</Text>
                            </View>
                        </ImageBackground>
                    </TouchableOpacity>
                </>
            )}
        />
    );
}

export default FlatListHorizontal;

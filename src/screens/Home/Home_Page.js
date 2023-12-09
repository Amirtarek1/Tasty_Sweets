import React, { useState } from 'react';
import { Text, View, Image, Dimensions, TextInput, FlatList } from 'react-native';
import { COLORS, FONT, images } from '../../constants';
import { RFPercentage } from 'react-native-responsive-fontsize';
import FlatListHorizontal from './Component/FlatListHorizontal';
import FlatListVertival from './Component/FlatListVertival';
import { Popular_Flavour, Top_Flavours } from '../../Utils/Dummy';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { hp } from '../../constants/themes';

const h = Dimensions.get("screen").height
const w = Dimensions.get("screen").width

const Home_Page = () => {
    const [Top_FlavoursData, setTop_Flavours] = useState(Top_Flavours)
    const [Popular_FlavourData, setPopular_Flavour] = useState(Popular_Flavour)
    const [filteredData, setFilteredData] = useState(Popular_Flavour);
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (text) => {
        setSearchQuery(text);

        if (text === '') {
            setFilteredData(Popular_FlavourData);
        } else {
            const filtered = filteredData.filter(item =>
                item.name.toLowerCase().includes(text.toLowerCase())
            );

            setFilteredData(filtered);
        }
    };

    return (
        <SafeAreaProvider>
            <FlatList
                contentContainerStyle={{
                    backgroundColor: COLORS.white,
                    flexGrow: 1,
                }}
                ListHeaderComponent={
                    <>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: RFPercentage(2), paddingVertical: RFPercentage(2) }}>
                            <View style={{ justifyContent: "center", marginLeft: RFPercentage(2.5) }}>
                                <Text style={{ fontSize: RFPercentage(3.2), fontFamily: FONT.Quicksand_Bold, color: COLORS.TextColorName }}>Hi Amir</Text>
                                <Text style={{ fontSize: RFPercentage(2), fontFamily: FONT.Quicksand_Medium, color: COLORS.TextColorName }}>What Flavour are you looking for?</Text>
                            </View>

                            <View style={{ marginRight: RFPercentage(2.5) }}>
                                <Image source={images.USER_PROFILE} style={{ borderRadius: RFPercentage(5), width: w * .18, height: w * .18 }} />
                            </View>
                        </View>

                        <View style={{ alignItems: "center", flexDirection: "row" }}>
                            <TextInput
                                style={{
                                    height: hp(7),
                                    width: w * 0.75,
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
                            <View style={{ backgroundColor: COLORS.TrybackgroundColorIce1, padding: RFPercentage(0.9), borderRadius: RFPercentage(2) }}>
                                <Image source={images.USER_PROFILE} style={{ borderRadius: RFPercentage(5), width: w * .11, height: w * .11 }} />
                            </View>
                        </View>

                        <View style={{ marginHorizontal: RFPercentage(0.5), padding: RFPercentage(2) }}>
                            <View>
                                <Text style={{ fontSize: RFPercentage(3), fontFamily: FONT.Quicksand_Bold, color: COLORS.TextColorName }}>Top Flavour</Text>
                            </View>
                            <View style={{ flexDirection: "row", flexWrap: "nowrap" }}>
                                <FlatListHorizontal data={Top_FlavoursData} />
                            </View>
                        </View>
                    </>
                }
                ListFooterComponent={
                    <>
                        <View style={{ marginHorizontal: RFPercentage(0.5),
                             paddingHorizontal: RFPercentage(2), 
                             flexDirection: "row", justifyContent: "space-between" }}>
                            <Text style={{ fontSize: RFPercentage(3), fontFamily: FONT.Quicksand_Bold, color: COLORS.TextColorName }}>Popular Flavour</Text>
                            <Text onPress={() => { }} style={{ fontSize: RFPercentage(2.07), fontFamily: FONT.Quicksand_SemiBold, color: COLORS.Text_on_button }}>See all</Text>
                        </View>
                        <View >
                            <FlatListVertival data={filteredData} />
                        </View>
                    </>
                }
            />
        </SafeAreaProvider>
    );
};

export default Home_Page;

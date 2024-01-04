import React, { useEffect, useRef, useState } from 'react';
import { FlatList, View, Text, ImageBackground, Dimensions, TouchableOpacity } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { COLORS, FONT, hp } from '../../../constants/themes';
import ViewPropTypes from 'deprecated-react-native-prop-types';

const h = Dimensions.get("screen").height
const w = Dimensions.get("screen").width
const FlatListHorizontal = ({ data }) => {


    const flatlistRef = useRef(null);
    const [activeSlide, setActiveSlide] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
          if (flatlistRef.current && activeSlide === data.length - 1) {
            flatlistRef.current.scrollToIndex({
              index: 0,
              animated: true,
            });
            // console.log(activeSlide ,"case 0");
            setActiveSlide(0); // Reset the activeSlide to 0
          } else if (flatlistRef.current) {
            flatlistRef.current.scrollToIndex({
              index: activeSlide + 1,
              animated: true,
            });
            // console.log(activeSlide ," every case");
            setActiveSlide((prevSlide) => prevSlide + 1); // Increment activeSlide
          }
        }, 3500);
      
        // Cleanup the interval on component unmount
        return () => clearInterval(intervalId);
      }, [activeSlide, data]);
      

    const handleScroll = (event) => {
        const scrollPosition = event.nativeEvent.contentOffset.x;
    };


    const getItemLayout = (data, index) => ({
        length: w,
        offset: w * index,
        index: index,
      });
    return (
        <View>

            <FlatList
                ref={flatlistRef}
                data={data}
                horizontal
                keyExtractor={(item) => item.id}
                showsHorizontalScrollIndicator={false}
                onScroll={handleScroll}
                getitemLayout={getItemLayout}
                renderItem={({ item }) => (
                    <>
                        <TouchableOpacity style={{
                            justifyContent: "center"
                        }}  >
                            <ImageBackground resizeMode='cover' source={item.image}
                                style={{
                                    // ...ViewPropTypes.style,
                                    padding: RFPercentage(2),
                                    alignSelf: "center",
                                    width: w * 0.89,
                                    height: w * 0.47,
                                    marginRight: RFPercentage(1.5),
                                    marginVertical: RFPercentage(1),
                                    justifyContent: "center",
                                    borderRadius: hp(1.2),
                                    overflow: 'hidden',
                                }}  >
                                <View style={{
                                    justifyContent: 'flex-end',
                                    paddingTop: RFPercentage(15),
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
                )} />
        </View>
    );
}

export default FlatListHorizontal;

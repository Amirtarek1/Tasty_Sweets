import React from 'react';
import { Text, View, Dimensions, StyleSheet, ScrollView, FlatList } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { COLORS, FONT } from '../../constants';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import StepIndicator from 'react-native-step-indicator';
import { data } from '../../Utils/Dummy';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../../Components/Header';


const h = Dimensions.get("screen").height
const w = Dimensions.get("screen").width


const TrackingPage = () => {
    const navigation = useNavigation();

    const [currentPage, setCurrentPage] = React.useState(2);

    return (
        <>
            <SafeAreaProvider>

                <View style={{ backgroundColor: COLORS.white, flex: 1 }}>
                    <ScrollView showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}>
                        
                        
                        
                        <Header HeaderName={"Track Order"} onPress={() => navigation.navigate("AnimTab2", { screen: 'Home' })} />
                       
                       
                       
                        <View style={{
                            alignItems: "center", justifyContent: "center",
                            backgroundColor: COLORS.TrybackgroundColorIce1, padding: RFPercentage(2)
                        }}>
                            <Text style={{
                                fontSize: RFPercentage(2.5), textAlign: "center",
                                fontFamily: FONT.Quicksand_SemiBold,
                                color: COLORS.Text_on_button, padding: RFPercentage(1)
                            }}>Your Order Code: #234</Text>
                            <Text style={{
                                fontSize: RFPercentage(2.15), textAlign: "center",
                                fontFamily: FONT.Quicksand_Medium,
                                color: COLORS.ColorofCurrentLabel
                            }}>5 Items<Text> $500</Text></Text>
                        </View>
                        <View style={styles.Indicatorcontainer}>

                            <StepIndicator

                                customStyles={customStyles}
                                currentPosition={currentPage}
                                labels={data.map((item) => item.title)}
                                direction='vertical'
                                renderLabel={({ position, stepStatus, label, currentPosition }) => {
                                    return (
                                        <>

                                            <View style={{ alignSelf: "flex-start" }}>
                                                <Text
                                                    onPress={() => { console.log(position, currentPosition) }}

                                                    style={{
                                                        textAlign: "justify", marginLeft: RFPercentage(0.5),
                                                        fontSize: RFPercentage(2.4),
                                                        width: w * 0.7,
                                                        fontFamily: FONT.Quicksand_SemiBold,

                                                        color: position <= currentPage ? COLORS.TrybackgroundColorIce1 : COLORS.ColorofCurrentLabel

                                                        // color: position >= currentPosition ? COLORS.TrybackgroundColorIce1 : COLORS.black ,
                                                    }}>{data[position].title}</Text>
                                                <Text style={{
                                                    textAlign: "left",
                                                    fontSize: RFPercentage(2), marginLeft: RFPercentage(0.5),
                                                    fontFamily: FONT.Quicksand_Medium,
                                                    color: COLORS.ColorofCurrentLabel
                                                }}>{data[position].body}</Text>

                                            </View>
                                        </>)
                                }}
                            />

                        </View>

                        <TouchableOpacity style={{
                            alignSelf: "center",
                            width: w * 0.9,
                            backgroundColor: COLORS.TrybackgroundColorIce1,
                            borderRadius: RFPercentage(1),
                            padding: RFPercentage(2),
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                            onPress={() => navigation.navigate('AnimTab2', { screen: 'Cart' })}
                        >
                            <Text style={{
                                textAlign: 'center',
                                fontSize: RFPercentage(2.4),
                                fontFamily: FONT.Quicksand_Bold,
                                color: COLORS.white,
                            }}>Cart</Text>
                        </TouchableOpacity>


                    </ScrollView>

                </View>
            </SafeAreaProvider>
        </>
    );
};

const customStyles = {
    stepIndicatorSize: RFValue(25),
    currentStepIndicatorSize: RFValue(30),
    separatorStrokeWidth: RFValue(2),
    currentStepStrokeWidth: RFValue(3),
    stepStrokeWidth: RFValue(3),

    stepStrokeFinishedColor: COLORS.TrybackgroundColorIce1,// Change to your completed color
    separatorFinishedColor: COLORS.TrybackgroundColorIce1,// Change to your completed color
    stepIndicatorFinishedColor: COLORS.TrybackgroundColorIce1,// Change to your completed color

    stepStrokeUnFinishedColor: COLORS.ColorofCurrentLabel, // Change to your inactive color
    separatorUnFinishedColor: COLORS.ColorofCurrentLabel,// Change to your inactive color
    stepIndicatorUnFinishedColor: COLORS.ColorofCurrentLabel,// Change to your inactive color

    stepIndicatorCurrentColor: COLORS.TrybackgroundColorIce1,// Change to your active color
    stepStrokeCurrentColor: COLORS.TrybackgroundColorIce1,// Change to your active color

    stepIndicatorLabelFontSize: RFValue(13),// number inside circle complete
    currentStepIndicatorLabelFontSize: RFValue(13),// number inside current circle complete

    stepIndicatorLabelCurrentColor: "#000",// color number inside current circle complete
    stepIndicatorLabelFinishedColor: "#000",
    stepIndicatorLabelUnFinishedColor: "#000",
};

const styles = StyleSheet.create({
    Indicatorcontainer: {
        height: h * 0.6,
        padding: RFPercentage(2),
        marginLeft: RFPercentage(1),
        borderRadius: RFPercentage(2)

    },
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    rowItem: {
        flex: 3,
        paddingVertical: 20,
    },
    title: {
        flex: 1,
        fontSize: 20,
        color: '#333333',
        paddingVertical: 16,
        fontWeight: '600',
    },
    body: {
        flex: 1,
        fontSize: 15,
        color: '#606060',
        lineHeight: 24,
        marginRight: 8,
    },
});
export default TrackingPage;

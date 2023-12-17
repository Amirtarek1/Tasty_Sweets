
import React, { useEffect, useState } from 'react';
import { Dimensions, ImageBackground, StyleSheet, Text, TextInput, ScrollView, TouchableOpacity, View } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import Back_arrow from '../../Components/Back_arrow';
import { COLORS, FONT, images } from '../../constants';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import StepIndicator from 'react-native-step-indicator';
import Home_Page from './Home_Page';
import Cart from './Cart';
import StartButton from '../../Components/StartButton';
import { hp, wp } from '../../constants/themes';


const h = Dimensions.get('screen').height;
const w = Dimensions.get('screen').width;

const PayedPage = () => {


    const [currentStep, setCurrentStep] = useState(0);
    const [fullname, setfullname] = useState('');
    const [Address1, setAddress1] = useState('');
    const [Address2, setAddress2] = useState('');
    const [city, setcity] = useState('');
    const [zipCode, setzipCode] = useState('');
    const [state, setstate] = useState('');



    const steps = [
        { label: <Text style={{ color: currentStep >= 0 ? COLORS.color_addtocartButtom : COLORS.ColorofCurrentLabel }}>Billing</Text> },
        { label: <Text style={{ color: currentStep >= 1 ? COLORS.color_addtocartButtom : COLORS.ColorofCurrentLabel }}>Payment</Text> },
        { label: <Text style={{ color: currentStep >= 2 ? COLORS.color_addtocartButtom : COLORS.ColorofCurrentLabel }}>Confirm</Text> },
    ];


    const onNextStep = () => {
        if (currentStep === 0 && (!fullname || !Address1 || city || state)) {
            alert('Please fill in fields');
        } else if (currentStep === 1 && !university) {
            alert('Please fill in the university');
        } else {
            setCurrentStep((prevStep) => prevStep + 1);
        }
    };



    return (
        <>
            <SafeAreaProvider>
                <View style={{
                    backgroundColor: COLORS.white,
                    flex: 1,
                    padding: RFPercentage(1)
                }}>
                    <ScrollView>


                        <View
                            style={{
                                flexDirection: 'row',
                                padding: RFPercentage(0.5),
                                marginBottom: RFPercentage(4)
                            }}>
                            <Back_arrow onPress={() => { }} />
                            <Text
                                style={{
                                    textAlign: 'center',
                                    flex: 0.9,
                                    marginVertical: RFPercentage(1),
                                    fontSize: RFPercentage(3.5),
                                    fontFamily: FONT.Quicksand_Bold,
                                    color: COLORS.Top_Flavour_Name,
                                }}>
                                Checkout
                            </Text>
                        </View>


                        <StepIndicator
                            customStyles={customStyles}
                            currentPosition={currentStep}
                            labels={steps.map((step) => step.label)}
                            stepCount={steps.length}
                        />
                        {currentStep === 0 && (
                            // <ScrollView>

                            <View style={styles.stepContentContainer}>
                                <ScrollView>
                                    <Text style={{
                                        fontSize: RFPercentage(3),
                                        marginVertical: RFPercentage(2),
                                        marginTop: RFPercentage(4)
                                    }}>{steps[currentStep].label}</Text>
                                    <TextInput

                                        style={{
                                            height: hp(6.5),
                                            width: w * 0.9,
                                            marginVertical: RFPercentage(2),
                                            borderRadius: RFPercentage(0.5),
                                            backgroundColor: COLORS.TrybackgroundColorIce1,
                                            paddingHorizontal: 15,
                                            fontFamily: FONT.Quicksand_Regular,
                                            fontSize: RFPercentage(2.2),
                                            color: COLORS.TextColorName,
                                        }}
                                        placeholder="Full name"
                                        value={fullname}
                                        onChangeText={value => {
                                            setfullname(value);
                                        }}
                                    />

                                    <TextInput
                                        style={{
                                            height: hp(6.5),
                                            width: w * 0.9,
                                            marginVertical: RFPercentage(2),
                                            borderRadius: RFPercentage(0.5),
                                            backgroundColor: COLORS.TrybackgroundColorIce1,
                                            paddingHorizontal: 15,
                                            fontFamily: FONT.Quicksand_Regular,
                                            fontSize: RFPercentage(2.2),
                                            color: COLORS.TextColorName,
                                        }}
                                        placeholder="First Address"
                                        value={Address1}
                                        onChangeText={value => {
                                            setAddress1(value);
                                        }}
                                    />

                                    <TextInput
                                        style={{
                                            height: hp(6.5),
                                            width: w * 0.9,
                                            marginVertical: RFPercentage(2),
                                            borderRadius: RFPercentage(0.5),
                                            backgroundColor: COLORS.TrybackgroundColorIce1,
                                            paddingHorizontal: 15,
                                            fontFamily: FONT.Quicksand_Regular,
                                            fontSize: RFPercentage(2.2),
                                            color: COLORS.TextColorName,
                                        }}
                                        placeholder="Second Address"
                                        value={Address2}
                                        onChangeText={value => {
                                            setAddress2(value);
                                        }}
                                    />
                                    <View style={{
                                        marginVertical: RFPercentage(2),
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        width: w * 0.9
                                    }}>
                                        <TextInput
                                            style={{
                                                height: hp(6.5),
                                                width: w * 0.43,
                                                borderRadius: RFPercentage(0.5),
                                                backgroundColor: COLORS.TrybackgroundColorIce1,
                                                paddingHorizontal: 15,
                                                fontFamily: FONT.Quicksand_Regular,
                                                fontSize: RFPercentage(2.2),
                                                color: COLORS.TextColorName,
                                            }}
                                            placeholder="city"
                                            value={city}
                                            onChangeText={value => {
                                                setcity(value);
                                            }}
                                        />

                                        <TextInput
                                            style={{
                                                height: hp(6.5),
                                                width: w * 0.43,
                                                borderRadius: RFPercentage(0.5),
                                                backgroundColor: COLORS.TrybackgroundColorIce1,
                                                paddingHorizontal: 15,
                                                fontFamily: FONT.Quicksand_Regular,
                                                fontSize: RFPercentage(2.2),
                                                color: COLORS.TextColorName,
                                            }}
                                            placeholder="zipCode"
                                            value={zipCode}
                                            onChangeText={value => {
                                                setzipCode(value);
                                            }}
                                        />

                                    </View>
                                    <TextInput
                                        style={{
                                            marginTop: RFPercentage(2),
                                            height: hp(6.5),
                                            width: w * 0.43,
                                            borderRadius: RFPercentage(0.5),
                                            backgroundColor: COLORS.TrybackgroundColorIce1,
                                            paddingHorizontal: 15,
                                            fontFamily: FONT.Quicksand_Regular,
                                            fontSize: RFPercentage(2.1),
                                            color: COLORS.TextColorName,
                                        }}
                                        placeholder="state"
                                        value={state}
                                        onChangeText={value => {
                                            setstate(value);
                                        }}
                                    />


                                </ScrollView>

                            </View>

                        )}

                        {/* {currentStep === 1 && (
                            <View style={styles.stepContentContainer}>
                                <ScrollView>
                                    <Text>Name: {name}</Text>
                                    <Text>Number: {number}</Text>
                                    <TextInput
                                        placeholder="University"
                                        value={university}
                                        onChangeText={(text) => setUniversity(text)}
                                    />
                                    <Text>dsfdghadasddasadsda</Text>

                                </ScrollView>
                            </View>
                        )} */}

                        <TouchableOpacity
                            style={styles.nextButton}
                            onPress={onNextStep}
                            disabled={currentStep === steps.length - 1}>
                            <Text style={styles.nextButtonText}>Next</Text>
                        </TouchableOpacity>


                    </ScrollView>

                </View>
            </SafeAreaProvider >

        </>
    )
}

const customStyles = {
    stepIndicatorSize: 25,
    currentStepIndicatorSize: 30,
    separatorStrokeWidth: 2,
    currentStepStrokeWidth: 3,
    stepStrokeWidth: 3,

    stepStrokeFinishedColor: COLORS.TrybackgroundColorIce1, // Change to your completed color
    separatorFinishedColor: COLORS.TrybackgroundColorIce1, // Change to your completed color
    stepIndicatorFinishedColor: COLORS.TrybackgroundColorIce1, // Change to your completed color

    stepStrokeUnFinishedColor: COLORS.ColorofCurrentLabel, // Change to your inactive color
    separatorUnFinishedColor: COLORS.ColorofCurrentLabel, // Change to your inactive color
    stepIndicatorUnFinishedColor: COLORS.ColorofCurrentLabel, // Change to your inactive color


    stepIndicatorCurrentColor: COLORS.TrybackgroundColorIce1, // Change to your active color
    stepStrokeCurrentColor: COLORS.TrybackgroundColorIce1, // Change to your active color




    stepIndicatorLabelFontSize: 13,// number inside circle complete
    currentStepIndicatorLabelFontSize: 13,// number inside current circle complete

    stepIndicatorLabelCurrentColor: "#000",// color number inside current circle complete
    stepIndicatorLabelFinishedColor: "#000",
    stepIndicatorLabelUnFinishedColor: "#000",

};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    stepLabel: {
        fontSize: 12,
        fontWeight: '500',
        color: '#00d',
    },
    stepContentContainer: {
        // alignItems: 'center',
        flex: 0.1,
        justifyContent: "space-around",
        padding: RFPercentage(1.5)

    },
    scrollContainer: {
        flexGrow: 1,
        justifyContent: 'space-between',
    },
    contentContainer: {
        marginTop: 20,
    },
    nextButton: {
        backgroundColor: '#00bcd4', // Change to your button color
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 20,
    },
    nextButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },


});


export default PayedPage;

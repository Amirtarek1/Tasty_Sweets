
import React, { useEffect, useState } from 'react';
import { Dimensions, ImageBackground, StyleSheet, Text, TextInput, ScrollView, TouchableOpacity, View } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import Back_arrow from '../../Components/Back_arrow';
import { COLORS, FONT, images } from '../../constants';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import StepIndicator from 'react-native-step-indicator';
import { Sizes, hp, wp } from '../../constants/themes';
import Arrow from "../../assets/Icons/arrow.svg"
import Right from "../../assets/Icons/Right.svg"
import Left from "../../assets/Icons/Left.svg"

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

    const onPrevStep = () => {
        setCurrentStep((prevStep) => Math.max(prevStep - 1, 0));
    };

    const steps = [
        { label: <Text style={{ color: currentStep >= 0 ? COLORS.color_addtocartButtom : COLORS.ColorofCurrentLabel }}>Billing</Text> },
        { label: <Text style={{ color: currentStep >= 1 ? COLORS.color_addtocartButtom : COLORS.ColorofCurrentLabel }}>Payment</Text> },
        { label: <Text style={{ color: currentStep >= 2 ? COLORS.color_addtocartButtom : COLORS.ColorofCurrentLabel }}>Confirm</Text> },
    ];


    const onNextStep = () => {
        if (currentStep === 0 && (!fullname || !Address1 || !city || !state)) {
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
                    <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>


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
                                <ScrollView

                                    showsHorizontalScrollIndicator={false}
                                    showsVerticalScrollIndicator={false}>
                                    <Text style={{
                                        fontSize: RFPercentage(3),
                                        marginVertical: RFPercentage(1.5),
                                        marginTop: RFPercentage(4)
                                    }}>{steps[currentStep].label}</Text>
                                    <TextInput
                                        style={styles.inputStyle}

                                        placeholder="Full name"
                                        value={fullname}
                                        onChangeText={value => {
                                            setfullname(value);
                                        }}
                                    />
                                    <TextInput
                                        style={styles.inputStyle}

                                        placeholder="First Address"
                                        value={Address1}
                                        onChangeText={value => {
                                            setAddress1(value);
                                        }}
                                    />

                                    <TextInput
                                        style={styles.inputStyle}

                                        placeholder="Second Address"
                                        value={Address2}
                                        onChangeText={value => {
                                            setAddress2(value);
                                        }}
                                    />


                                    <TextInput
                                        style={styles.inputStyle}

                                        placeholder="city"
                                        value={city}
                                        onChangeText={value => {
                                            setcity(value);
                                        }}
                                    />

                                    <TextInput
                                        style={styles.inputStyle}

                                        placeholder="zipCode"
                                        value={zipCode}
                                        onChangeText={value => {
                                            setzipCode(value);
                                        }}
                                    />

                                    <TextInput
                                        style={styles.inputStyle}
                                        placeholder="state"
                                        value={state}
                                        onChangeText={value => {
                                            setstate(value);
                                        }}
                                    />





                                </ScrollView>

                            </View>

                        )}

                        {currentStep === 1 && (
                            <View style={styles.stepContentContainer}>
                                <ScrollView>
                                    {/* <Text>Name: {name}</Text> */}
                                    {/* <Text>Number: {number}</Text> */}
                                    <TextInput
                                        placeholder="University"
                                        value={state}
                                        onChangeText={value => {
                                            setstate(value);
                                        }}                                    />
                                    <Text>dsfdghadasddasadsda</Text>

                                </ScrollView>
                            </View>
                        )}
                        <View style={{ marginTop:RFPercentage(2),flexDirection: "row", justifyContent: "space-around" }}>
                            <TouchableOpacity
                                style={styles.nextButton}
                                onPress={onPrevStep}
                                disabled={currentStep === 0}
                            >
                                <Left height={hp(4)}
                                    width={hp(4)} />
                                <Text style={styles.nextButtonText}>Previous</Text>

                            </TouchableOpacity>

                            <TouchableOpacity
                                style={styles.nextButton}
                                onPress={onNextStep}

                                disabled={currentStep === steps.length - 1}
                            >
                                <Text style={styles.nextButtonText}>Next</Text>
                                <Right height={hp(4)}
                                    width={hp(4)} />
                            </TouchableOpacity>

                        </View>
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
    inputStyle: {
        marginTop: RFPercentage(1.5),
        margin: RFPercentage(0.5),
        width: Sizes.width * 0.9,
        fontSize: RFPercentage(2.5),
        fontFamily: FONT.Quicksand_Regular,
        color: "#635B5B",
        alignSelf: "center",
        backgroundColor: COLORS.TrybackgroundColorIce1,
        borderRadius: RFPercentage(0.5),
        justifyContent: "center",
        paddingHorizontal: hp(1)
    },
    stepContentContainer: {
        justifyContent: "space-around",
        padding: RFPercentage(1.5),
        backgroundColor: COLORS.white

    },
    nextButton: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: COLORS.color_addtocartButtom,
        paddingHorizontal: RFPercentage(2),
        borderRadius: RFPercentage(0.5)

    },
    nextButtonText: {
        fontSize: RFPercentage(2.4),
        fontFamily: FONT.Quicksand_Bold,
        color: COLORS.black,
        paddingVertical: RFPercentage(2.1),

    },


});


export default PayedPage;

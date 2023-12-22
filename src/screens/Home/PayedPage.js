
import React, { useState } from 'react';
import { Dimensions, StyleSheet, Text, TextInput, ScrollView, TouchableOpacity, View } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import Back_arrow from '../../Components/Back_arrow';
import { COLORS, FONT } from '../../constants';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import StepIndicator from 'react-native-step-indicator';
import { Sizes, hp } from '../../constants/themes';
import MasterCard from "../../assets/Icons/MasterCard.svg"
import Visa from "../../assets/Icons/Visa.svg"
import Lottie from 'lottie-react-native';
import lotties from '../../constants/lotties';
import LottieView from 'lottie-react-native';



const h = Dimensions.get('screen').height;
const w = Dimensions.get('screen').width;
const PayedPage = () => {


    const [currentStep, setCurrentStep] = useState(2);
    const [fullname, setfullname] = useState('');
    const [Address1, setAddress1] = useState('');
    const [Address2, setAddress2] = useState('');
    const [city, setcity] = useState('');
    const [zipCode, setzipCode] = useState('');
    const [state, setstate] = useState('');
    const [selectedCard, setSelectedCard] = useState(null);

    const [NameonCard, setNameonCard] = useState('');
    const [CardNumber, setCardNumber] = useState('');
    const [ExpMonth, setExpMonth] = useState('');
    const [ExpDate, setExpDate] = useState('');
    const [CVV, setCVV] = useState('');




    // const onPrevStep = () => {
    //     setCurrentStep((prevStep) => Math.max(prevStep - 1, 0));
    // };

    const steps = [
        { label: <Text style={{ color: currentStep >= 0 ? COLORS.color_addtocartButtom : COLORS.ColorofCurrentLabel }}>Billing</Text> },
        { label: <Text style={{ color: currentStep >= 1 ? COLORS.color_addtocartButtom : COLORS.ColorofCurrentLabel }}>Payment</Text> },
        { label: <Text style={{ color: currentStep >= 2 ? COLORS.color_addtocartButtom : COLORS.ColorofCurrentLabel }}>Confirm</Text> },
    ];


    const onNextStep = () => {
        if (currentStep === 0 && (!fullname || !Address1 || !city || !state)) {
            alert('Please fill in fields');
        } else if (currentStep === 1 && (!NameonCard || !CardNumber || !ExpMonth || !ExpDate || !CVV)) {
            alert('Please fill in all fields');
        } else {
            setCurrentStep((prevStep) => prevStep + 1);
        }
    };

    const handleCardSelection = (cardType) => {
        console.log('Selected Card:', cardType);

        setSelectedCard(cardType);
    };

    const renderButtons = () => {
        if (currentStep === 2) {
            return (
                <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
                    <TouchableOpacity style={styles.TrackorderStyle} onPress={() => {}}>
                        <Text style={styles.TrackOrderandShoppingButtonTextStyle}>Track Order</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.TrackorderStyle} onPress={() => { }}>
                        <Text style={styles.TrackOrderandShoppingButtonTextStyle}>Continue Shopping</Text>
                    </TouchableOpacity>
                </View>
            );
        } else {
            return (

                <View style={{ alignSelf: "center", alignItems: "center" }}>
                    <TouchableOpacity
                    
                        style={styles.nextButton}
                        onPress={onNextStep}
                        disabled={currentStep === steps.length - 1}>
                        <Text style={styles.nextButtonText}>Next</Text>
                        {/* <Right height={hp(4)} width={hp(4)} /> */}

                    </TouchableOpacity>
                </View>
            );
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

                            <View style={styles.stepContentContainer}>
                                <ScrollView

                                    showsHorizontalScrollIndicator={false}
                                    showsVerticalScrollIndicator={false}>
                                    <Text style={{
                                        fontSize: RFPercentage(3),
                                        marginVertical: RFPercentage(1.5),
                                        marginTop: RFPercentage(2)
                                    }}>{steps[currentStep].label}</Text>
                                    <TextInput
                                        style={styles.inputStyle}
                                        placeholderTextColor={COLORS.ColorofCurrentLabel}

                                        placeholder="Full name"
                                        value={fullname}
                                        onChangeText={value => {
                                            setfullname(value);
                                        }}
                                    />
                                    <TextInput
                                        style={styles.inputStyle}
                                        placeholderTextColor={COLORS.ColorofCurrentLabel}

                                        placeholder="First Address"
                                        value={Address1}
                                        onChangeText={value => {
                                            setAddress1(value);
                                        }}
                                    />

                                    <TextInput
                                        style={styles.inputStyle}
                                        placeholderTextColor={COLORS.ColorofCurrentLabel}

                                        placeholder="Second Address"
                                        value={Address2}
                                        onChangeText={value => {
                                            setAddress2(value);
                                        }}
                                    />


                                    <TextInput
                                        style={styles.inputStyle}
                                        placeholderTextColor={COLORS.ColorofCurrentLabel}

                                        placeholder="city"
                                        value={city}
                                        onChangeText={value => {
                                            setcity(value);
                                        }}
                                    />

                                    <TextInput
                                        style={styles.inputStyle}
                                        placeholderTextColor={COLORS.ColorofCurrentLabel}

                                        placeholder="zipCode"
                                        value={zipCode}
                                        onChangeText={value => {
                                            setzipCode(value);
                                        }}
                                    />

                                    <TextInput
                                        style={styles.inputStyle}
                                        placeholderTextColor={COLORS.ColorofCurrentLabel}

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
                                    <Text style={{
                                        fontSize: RFPercentage(3),
                                        marginVertical: RFPercentage(1.5),
                                        marginTop: RFPercentage(2)
                                    }}>{steps[currentStep].label}</Text>
                                    <View style={{ flexDirection: "row", marginBottom: RFPercentage(1) }}>
                                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                                            <TouchableOpacity
                                                onPress={() => handleCardSelection('MasterCard')}
                                                style={{
                                                    alignSelf: "center",
                                                    width: w * 0.65,
                                                    backgroundColor: selectedCard == "MasterCard" ? "#ffe7e5" : COLORS.white,
                                                    borderWidth: 3,
                                                    borderColor: selectedCard == "MasterCard" ? COLORS.TrybackgroundColorIce1 : COLORS.ColorofCurrentLabel,
                                                    borderRadius: RFPercentage(1),
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    alignContent: "center",
                                                    height: hp(23),
                                                    marginRight: RFPercentage(7)
                                                }}>

                                                <MasterCard height={hp(15)}
                                                    width={hp(20)} />

                                                <Text style={{
                                                    marginTop: RFPercentage(-2.5),
                                                    fontSize: RFPercentage(2.7),
                                                    color: COLORS.ColorofCurrentLabel,
                                                    fontFamily: FONT.Quicksand_Medium
                                                }}>MasterCard</Text>
                                            </TouchableOpacity>

                                            <TouchableOpacity
                                                onPress={() => handleCardSelection('Visa')}

                                                style={{
                                                    borderColor: selectedCard == "Visa" ? COLORS.TrybackgroundColorIce1 : COLORS.ColorofCurrentLabel,
                                                    alignSelf: "center",
                                                    width: w * 0.65,
                                                    backgroundColor: selectedCard == "Visa" ? "#ffe7e5" : COLORS.white,
                                                    borderWidth: 3,
                                                    borderRadius: RFPercentage(1),
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    alignContent: "center",
                                                    height: hp(23),
                                                }}>
                                                <Visa height={hp(15)}
                                                    width={hp(20)} />
                                                <Text style={{
                                                    marginTop: RFPercentage(-2.5),
                                                    fontSize: RFPercentage(2.7),
                                                    color: COLORS.ColorofCurrentLabel,
                                                    fontFamily: FONT.Quicksand_Medium
                                                }}>Visa</Text>
                                            </TouchableOpacity>
                                        </ScrollView>
                                    </View>


                                    <TextInput
                                        style={styles.inputStyle}
                                        placeholder="Name on Card"
                                        value={NameonCard}
                                        placeholderTextColor={COLORS.ColorofCurrentLabel}
                                        onChangeText={value => {
                                            setNameonCard(value);
                                        }}
                                    />
                                    <TextInput
                                        style={styles.inputStyle}
                                        placeholder="Card Number"
                                        value={CardNumber}
                                        placeholderTextColor={COLORS.ColorofCurrentLabel}

                                        onChangeText={value => {
                                            setCardNumber(value);
                                        }}
                                    />
                                    <TextInput
                                        style={styles.inputStyle}
                                        placeholder="Exp Month"
                                        value={ExpMonth}
                                        placeholderTextColor={COLORS.ColorofCurrentLabel}

                                        onChangeText={value => {
                                            setExpMonth(value);
                                        }}
                                    />
                                    <TextInput
                                        style={styles.inputStyle}
                                        placeholder="Exp Date"
                                        value={ExpDate}
                                        placeholderTextColor={COLORS.ColorofCurrentLabel}

                                        onChangeText={value => {
                                            setExpDate(value);
                                        }}
                                    />
                                    <TextInput
                                        style={styles.inputStyle}
                                        placeholder="CVV"
                                        value={CVV}
                                        placeholderTextColor={COLORS.ColorofCurrentLabel}

                                        onChangeText={value => {
                                            setCVV(value);
                                        }}
                                    />


                                </ScrollView>
                            </View>
                        )}

                        {currentStep === 2 && (
                            <View style={{
                                justifyContent: "center",
                                alignItems: "center", height: h * 0.5, backgroundColor: COLORS.white
                            }}>

                                <Lottie
                                    // colorFilters={"#00d","#0dd"}
                                    style={{
                                        width: hp(15), height: hp(15),
                                        alignSelf: "center"
                                    }}
                                    source={lotties.Confirmation} autoPlay loop />
                                <Text style={{
                                    fontFamily: FONT.Quicksand_Bold,
                                    color: COLORS.black,
                                    fontSize: RFPercentage(3),
                                    marginVertical: RFPercentage(2)
                                }}>Payment completed</Text>
                                <Text style={{
                                    fontFamily: FONT.Quicksand_Bold,
                                    color: COLORS.ColorofCurrentLabel,
                                    fontSize: RFPercentage(2.5),
                                    textAlign: "center"
                                }}>Order Code is <Text style={{ color: COLORS.black }}>#246 </Text>Please Check The Delivery Status at <Text style={{ color: COLORS.black }}>Order Track </Text>Page</Text>

                            </View>
                        )}



                        {renderButtons()}


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
        // color:"#000",
        alignSelf: "center",
        backgroundColor: COLORS.TrybackgroundColorIce1,
        borderRadius: RFPercentage(1),
        justifyContent: "center",
        paddingHorizontal: hp(1)

    },
    stepContentContainer: {
        justifyContent: "space-around",
        padding: RFPercentage(1.5),
        backgroundColor: COLORS.white,
        marginBottom: RFPercentage(2)
    },
    nextButton: {
        width: w * 0.9,
        backgroundColor: COLORS.TrybackgroundColorIce1,
        borderRadius: RFPercentage(1),
        padding: RFPercentage(2),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',

    },
    nextButtonText: {
        textAlign: 'center',
        fontSize: RFPercentage(2.4),
        fontFamily: FONT.Quicksand_Bold,
        color: COLORS.white,
    },
    TrackOrderandShoppingButtonTextStyle: {
        textAlign: 'center',
        fontSize: RFPercentage(2.2),
        fontFamily: FONT.Quicksand_Bold,
        color: COLORS.white,
    },
    TrackorderStyle: {
        width: w * 0.43,
        backgroundColor: COLORS.TrybackgroundColorIce1,
        borderRadius: RFPercentage(1),
        padding: RFPercentage(2),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',

    },

});


export default PayedPage;



import React, { useState } from 'react';
import { Dimensions, ImageBackground, KeyboardAvoidingView, SafeAreaView, ScrollView, StatusBar, Text, View } from 'react-native';
import { COLORS, FONT, images } from '../../constants';
import { RFPercentage } from 'react-native-responsive-fontsize';
import INPUTtext_password from '../../Components/INPUTtext_password';
import INputbutton from '../../Components/INputbutton';
import StartButton from '../../Components/StartButton';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const h = Dimensions.get("screen").height
const w = Dimensions.get("screen").width

const Signup = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [value, setValue] = useState('');
    const [value2, setValue2] = useState('');
    const [value3, setValue3] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});

    const handleChange = (field, text) => {
        setValue(text);

        const fieldErrors = validateField(field, text);
        setErrors((prevErrors) => ({ ...prevErrors, [field]: fieldErrors }));
        setTouched((prevTouched) => ({ ...prevTouched, [field]: true }));

    };

    const handleChange2 = (field, text) => {
        setValue2(text);

        const fieldErrors = validateField2(field, text);
        setErrors((prevErrors) => ({ ...prevErrors, [field]: fieldErrors }));
        setTouched((prevTouched) => ({ ...prevTouched, [field]: true }));
    };

    const validateField = (field, value) => {
        switch (field) {
            case 'Email':
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                return emailRegex.test(value) ? [] : ['Invalid email address'];

            default:
                return [];
        }
    };

    const handleChange3 = (field, text) => {
        setValue3(text);
        const fieldErrors = validateField3(field, text);
        setErrors((prevErrors) => ({ ...prevErrors, [field]: fieldErrors }));
        setTouched((prevTouched) => ({ ...prevTouched, [field]: true }));
    };


    const validateField2 = (field, value) => {
        switch (field) {
            case 'password':
                return value.length >= 6 ? [] : ['Password must be at least 6 characters'];

            default:
                return [];
        }
    };


    const validateField3 = (field, value) => {
        switch (field) {
            case 'Username':
                return value.length >= 3 ? [] : ['Username must be at least 3 characters'];

            default:
                return [];
        }
    };


    const handleButtonPress = () => {
        const emailErrors = validateField('Email', value);
        const passwordErrors = validateField2('password', value2);
        const usernameErrors = validateField3('Username', value3);

        setErrors({ Email: emailErrors, password: passwordErrors, Username: usernameErrors });
        setTouched({ Email: true, password: true, Username: true });

        if (emailErrors.length === 0 && passwordErrors.length === 0 && usernameErrors.length === 0) {

            console.log('Signup validation successful!');
        } else {
            console.log('Signup validation failed!');
        }
    };

    return (
        <>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={{ flex: 1 }}
            >
                <SafeAreaProvider style={{ alignItems: "center", backgroundColor: COLORS.backgroundColorIceORbuttomcolor, flex: 1 }}>

                    <ImageBackground resizeMode='cover' source={images.ice4}
                        style={{ width: w * 1, height: h * 1 }}>

                        <ScrollView showsHorizontalScrollIndicator ={false} 
                        showsVerticalScrollIndicator={false} >
                            <View style={{ marginLeft: RFPercentage(5), marginVertical: RFPercentage(1) }}>
                                <Text style={{
                                    color: COLORS.TextColor,
                                    fontSize: RFPercentage(5),
                                    marginBottom: RFPercentage(1.2),
                                    fontFamily: FONT.Quicksand_SemiBold
                                }}>Sign up</Text>
                                <Text style={{
                                    color: COLORS.TextColor,
                                    fontFamily: FONT.Quicksand_Medium,
                                    fontSize: RFPercentage(2.4)
                                }}>Enter your credentials to continue</Text>
                            </View>

                            <View style={{
                                alignSelf: "center", justifyContent: "center",
                                alignItems: "center", marginVertical: RFPercentage(10)
                            }} >
                                <INputbutton
                                    label="Username"
                                    value={value3}
                                    onChangeText={(text) => handleChange('Username', text)}
                                    errors={errors.Email}
                                    touched={touched.Email}
                                />
                                <View style={{ marginTop: RFPercentage(5) }}>
                                    <INputbutton
                                        label="Email"
                                        value={value}
                                        onChangeText={(text) => handleChange('Email', text)}
                                        errors={errors.Email}
                                        touched={touched.Email}
                                    />
                                </View>
                                <View style={{ marginTop: RFPercentage(5) }} >
                                    <INPUTtext_password
                                        label="Password"
                                        value={value2}
                                        onChangeText={(text) => handleChange2('password', text)}
                                        errors={errors.password}
                                        touched={touched.password}
                                        password={password}
                                        setPassword={setPassword}
                                        visible={passwordVisible}
                                        setVisible={setPasswordVisible}
                                    />
                                    <Text style={{
                                        width: w * 0.8,
                                        marginTop: RFPercentage(2),
                                        fontSize: RFPercentage(2.3),
                                        color: COLORS.TextColor,
                                        fontFamily: FONT.Quicksand_Medium,
                                    }}>By continuing you agree to our Terms of Services and privacy policy</Text>
                                </View>



                                <View >
                                    <StartButton button_name={"Submit"} Confirm_press={handleButtonPress} />

                                    <Text style={{
                                        textAlign: "center",
                                        marginTop: RFPercentage(2),
                                        fontSize: RFPercentage(2.3),
                                        color: COLORS.TextColor,
                                        fontFamily: FONT.Quicksand_Medium,
                                    }}>Already have an account? <Text lineBreakMode='' onPress={() => { }}>Log in</Text></Text>
                                </View>


                            </View>
                        </ScrollView>

                    </ImageBackground>

                </SafeAreaProvider>
            </KeyboardAvoidingView>

        </>
    );
};

export default Signup;

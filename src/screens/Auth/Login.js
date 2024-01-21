import React, { useState } from 'react';
import {  Dimensions, ImageBackground, KeyboardAvoidingView, SafeAreaView, ScrollView, Text, View } from 'react-native';
import { COLORS, FONT, images } from '../../constants';
import { RFPercentage } from 'react-native-responsive-fontsize';
import INPUTtext_password from '../../Components/INPUTtext_password';
import INputbutton from '../../Components/INputbutton';
import StartButton from '../../Components/StartButton';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import Toast from "react-native-toast-message"


const h = Dimensions.get("screen").height
const w = Dimensions.get("screen").width

const Login = () => {

    const navigation = useNavigation();

    const [passwordVisible, setPasswordVisible] = useState(false);
    const [value, setValue] = useState('');
    const [value2, setValue2] = useState('');
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

    const validateField2 = (field, value) => {
        switch (field) {
            case 'password':
                return value.length >= 6 ? [] : ['Password must be at least 6 characters'];

            default:
                return [];
        }
    };


    const handleButtonPress = () => {
        const emailErrors = validateField('Email', value);
        const passwordErrors = validateField2('password', value2);

        setErrors({ Email: emailErrors, password: passwordErrors });
        setTouched({ Email: true, password: true });

        if (emailErrors.length === 0 && passwordErrors.length === 0) {
            console.log('Validation successful!');
            return true;
        } else {
            console.log('Validation failed!');
            return false;

        }
    };

    const ToLogin = () => {
        if (handleButtonPress()) {
            navigation.navigate("AnimTab2")
        } else {
            Toast.show({
                type: 'error',
                position: 'bottom',
                text1: "Pleace check Email and password",
                visibilityTime: 3000,
                autoHide: true,
                topOffset: 50,
                bottomOffset: 100,
        
              });
        }
    }


    return (
        <>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={{ flex: 1 }}
            >
                <ScrollView>
                    <SafeAreaProvider style={{ alignItems: "center", backgroundColor: COLORS.backgroundColorIceORbuttomcolor, flex: 1 }}>

                        <ImageBackground resizeMode='cover' source={images.ice4}
                            style={{ width: w * 1, height: h * 1 }}>
                            <ScrollView showsHorizontalScrollIndicator={false}
                                showsVerticalScrollIndicator={false} >

                                <View style={{ marginLeft: RFPercentage(5), marginVertical: RFPercentage(5) }}>
                                    <Text style={{
                                        color: COLORS.TextColor,
                                        fontSize: RFPercentage(5),
                                        marginBottom: RFPercentage(1.2),
                                        fontFamily: FONT.Quicksand_SemiBold
                                    }}>Log in</Text>
                                    <Text style={{
                                        color: COLORS.TextColor,
                                        fontFamily: FONT.Quicksand_Medium,
                                        fontSize: RFPercentage(2.4)
                                    }}>Enter your email and password</Text>
                                </View>

                                <View style={{
                                    alignSelf: "center", justifyContent: "center",
                                    alignItems: "center", marginVertical: RFPercentage(10)
                                }} >
                                    <INputbutton
                                        label="Email"
                                        value={value}
                                        onChangeText={(text) => handleChange('Email', text)}
                                        errors={errors.Email}
                                        touched={touched.Email}
                                    />
                                    <View style={{ marginTop: RFPercentage(3) }} >
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
                                    </View>



                                    <View style={{ marginTop: RFPercentage(2) }}>
                                        <StartButton button_name={"Submit"} 
                                        Confirm_press={ToLogin}
                                        // Confirm_press={() => navigation.navigate("AnimTab2")} 
                                        />
                                         {/* Confirm_press={ToLogin} */}
                                        <Text style={{
                                            textAlign: "center",
                                            marginTop: RFPercentage(2),
                                            fontSize: RFPercentage(2.3),
                                            color: COLORS.TextColor,
                                            fontFamily: FONT.Quicksand_Medium,
                                        }}>Don't have an account? <Text style={{ color: COLORS.Text_on_button, textDecorationLine: "underline" }}
                                            onPress={() => navigation.navigate("Signup")} >Signup</Text></Text>
                                    </View>


                                </View>
                            </ScrollView>

                        </ImageBackground>

                    </SafeAreaProvider>
                </ScrollView>
            </KeyboardAvoidingView>

        </>
    );
};

export default Login;

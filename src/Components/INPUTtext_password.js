
import { useState } from 'react'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { StyleSheet, Text, TouchableOpacity, View, Dimensions } from 'react-native';
import { TextInput } from 'react-native-paper';

import { COLORS, FONT, Sizes } from '../constants/index';
import { hp } from '../constants/themes';

const h = Dimensions.get("screen").height
const w = Dimensions.get("screen").width



const INPUTtext_password = ({ value, onChangeText, visible, setVisible,
    label, placeholder, keyboardType, errors, touched,
}) => {

    const [secureTextEntry, setSecureTextEntry] = useState(true);

    const toggleSecureEntry = () => {
        setSecureTextEntry(!secureTextEntry);
        setVisible(!visible);
    };


    return (
        <>

            <TextInput

                style={{
                    margin: RFPercentage(0.5),
                    width:w * 0.82,
                    fontSize: RFPercentage(2.6),
                    fontFamily: FONT.Quicksand_Regular,
                    alignSelf: "center",
                    backgroundColor: COLORS.white,
                    justifyContent: "center",
                    paddingBottom: hp(1),
                    paddingHorizontal: hp(1)
                }}

                label={<Text style={{
                    fontSize: RFPercentage(3),
                    fontFamily: FONT.Quicksand_Regular,
                    color : COLORS.backgroundColorIceORbuttomcolor

                }}
                >{label}</Text>}
                mode='flat'
                activeUnderlineColor='#fff'
                outlineColor={COLORS.TrybackgroundColorIce2}
                activeOutlineColor={COLORS.TrybackgroundColorIce2}
                textColor={COLORS.TrybackgroundColorIce2}
                value={value}
                placeholder={placeholder}
                keyboardType={keyboardType}
                onChangeText={onChangeText}
                secureTextEntry={secureTextEntry}
                right={

                    <TextInput.Icon
                        icon={secureTextEntry ? 'eye-off' : 'eye'}
                        iconColor={COLORS.TrybackgroundColorIce2}
                        onPress={toggleSecureEntry}
                        size={hp(3)}

                    />
                }
            />


            {errors && touched !== undefined ? <Text style={{
                width: Sizes.width * 0.8,textAlign :"left",
                color: COLORS.red_logout, justifyContent: "center",
                fontFamily: FONT.Quicksand_Regular, marginLeft: RFPercentage(1)
            }} >{errors}</Text>
                : <></>}


        </>
    )


}


export default INPUTtext_password;


// Import necessary components and styles
import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { COLORS, FONT } from '../../constants';
import { RFPercentage } from 'react-native-responsive-fontsize';
import Back_arrow from '../../Components/Back_arrow';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';


const GetHelp = () => {
    const navigation = useNavigation();

    const nameAPP = "Tasty Sweets"

    return (
        <SafeAreaProvider>
            <View style={{ flex: 1, backgroundColor: COLORS.white }}>
                <ScrollView style={styles.container}>

                    <View
                        style={{
                            backgroundColor: COLORS.white,
                            flexDirection: 'row',
                            paddingTop: RFPercentage(2),
                            paddingHorizontal: RFPercentage(2),
                        }}>

                        <Back_arrow
                        onPress={() => navigation.navigate("AnimTab2", { screen: "ProfileDetails" })}
                        />
                        <Text
                            style={{
                                textAlign: 'center',
                                flex: 0.9,
                                marginVertical: RFPercentage(1),
                                fontSize: RFPercentage(3.5),
                                fontFamily: FONT.Quicksand_Bold,
                                color: COLORS.Top_Flavour_Name,
                            }}>
                            Get help
                        </Text>
                    </View>


                    <View style={styles.contentContainer}>
                        <Text style={styles.heading}>Get Help</Text>

                        <Text style={styles.paragraph}>
                            At {nameAPP}, we strive to provide excellent customer support to ensure
                            your experience is as delightful as our treats. If you have any questions,
                            concerns, or need assistance, we're here to help!
                        </Text>

                        <Text style={[styles.heading]}>Contact Information</Text>

                        <Text style={styles.paragraph}>
                            Customer Support Email: support@{nameAPP}.com
                        </Text>

                        <Text style={styles.paragraph}>
                            Customer Support Phone: 01689320676
                        </Text>

                        <Text style={styles.heading}>FAQs</Text>

                        <Text style={styles.paragraph}>
                            Check our Frequently Asked Questions (FAQs) section for quick answers to common
                            queries. Visit the FAQ page on our website or app for more information.
                        </Text>

                        {/* Add more content as needed */}
                    </View>
                </ScrollView>
            </View>
        </SafeAreaProvider>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:COLORS.white,
    },
    contentContainer: {
        padding: RFPercentage(3),
        marginTop:RFPercentage(1)
    },
    heading: {
        color: COLORS.plusbottonColor,
        fontSize: RFPercentage(3.5),
        fontFamily: FONT.Quicksand_Bold,
        justifyContent: "center",
        paddingVertical: RFPercentage(0.5),
    },
    subHeading: {
        color: COLORS.black,
        fontSize: RFPercentage(2),
        fontFamily: FONT.Quicksand_Regular,
        justifyContent: "center",
        paddingVertical: RFPercentage(0.5),
    },
    paragraph: {
        color: COLORS.black,
        fontSize: RFPercentage(2),
        fontFamily: FONT.Quicksand_Regular,
        justifyContent: "center",
        paddingVertical: RFPercentage(0.5),
    },
    // Add more styles as needed
});

// Export the GetHelp component
export default GetHelp;

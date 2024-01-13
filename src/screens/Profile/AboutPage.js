import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { COLORS, FONT } from '../../constants';
import Back_arrow from '../../Components/Back_arrow';
import { wp } from '../../constants/themes';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

const AboutPage = () => {
    const navigation = useNavigation();

    const nameAPP = "Tasty Sweets"
    return (
        <SafeAreaProvider>
            <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
                <View style={styles.container}>
                    <View
                        style={{
                            backgroundColor: COLORS.white,
                            flexDirection: 'row',
                            paddingTop: RFPercentage(2),
                            paddingHorizontal: RFPercentage(2),
                            marginBottom: RFPercentage(2)
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
                            About
                        </Text>
                    </View>
                    <View style={{ padding: RFPercentage(2) }} >



                        <Text style={[styles.sectionTitle, { color: COLORS.Top_Flavour_Name }]}>About Us</Text>
                        <Text style={styles.description}>
                            Welcome to {nameAPP} – Your Sweet and Ice Cream Delight!
                        </Text>

                        <Text style={styles.sectionTitle}>1. Our Story</Text>
                        <Text style={styles.description}>
                            At {nameAPP}, we believe in the joy that delightful sweets and ice cream bring.
                            Our journey began with a passion for crafting the most delicious treats and sharing them with you.
                            Whether it's a celebration, a moment of indulgence, or a simple craving,
                            we're here to make those moments extra special.
                        </Text>

                        <Text style={styles.sectionTitle}>2. Our Commitment</Text>
                        <Text style={styles.description}>
                            Quality Ingredients, Delicious Results: We take pride in sourcing the finest
                            ingredients to create mouthwatering sweets and creamy ice cream.
                            Each bite is a celebration of flavors and quality.
                        </Text>


                        <Text style={styles.sectionTitle}>3. Freshness Guaranteed</Text>
                        <Text style={styles.description}>
                            Our commitment to freshness means your order is prepared with care and delivered
                            to your doorstep, ensuring you experience the goodness of our treats at its best.
                        </Text>

                        <Text style={styles.description}>
                            Variety for Every Taste: From classic favorites to unique creations,
                            our menu offers a diverse range of sweets and ice cream flavors.
                            There's something to satisfy every sweet tooth!
                        </Text>



                        <Text style={[styles.sectionTitle, { color: COLORS.Top_Flavour_Name }]}>Why Choose {nameAPP}</Text>
                        <Text style={styles.sectionTitle}>1. Convenient Delivery</Text>
                        <Text style={styles.description}>
                            Enjoy the convenience of having your favorite sweets and ice cream delivered straight to your door.
                            No need to step out – we bring the joy to you.
                        </Text>


                        <Text style={styles.sectionTitle}>2. Exceptional Service</Text>
                        <Text style={styles.description}>
                            Our dedicated team is passionate about providing exceptional service.
                            Your satisfaction is our priority,
                            and we strive to make every order a delightful experience.
                        </Text>


                        <Text style={styles.sectionTitle}>3. Celebrating Special Moments</Text>
                        <Text style={styles.description}>
                            Whether it's a birthday, anniversary, or just a Friday night treat,
                            we're here to add sweetness to your special moments.
                        </Text>



                        <Text style={[styles.sectionTitle, { color: COLORS.Top_Flavour_Name }]}>How It Works</Text>
                        <Text style={styles.sectionTitle}>Browse Our Menu</Text>
                        <Text style={styles.description}>
                            Explore a tempting array of sweets and ice cream flavors on our user-friendly app.
                            Place Your Order: Select your favorites, customize your order, and proceed to checkout.
                            Relax & Enjoy: Sit back and relax as we prepare your order with love and deliver it to your doorstep.
                        </Text>

                        <Text style={[styles.sectionTitle, { color: COLORS.Top_Flavour_Name }]}>Connect With Us</Text>
                        <Text style={styles.description}>Follow us on social media for updates,
                            promotions, and a behind-the-scenes look at our delicious creations.</Text>

                        <Text style={styles.sectionTitle}>Instagram: {nameAPP}</Text>
                        <Text style={styles.sectionTitle}>Facebook: {nameAPP}</Text>
                        <Text style={styles.sectionTitle}>Twitter: {nameAPP}</Text>
                        <Text style={styles.description}>Thank you for choosing {nameAPP}. 
                        We look forward to sweetening your day!</Text>

                    </View>
                </View>
            </ScrollView>
        </SafeAreaProvider>
    );
};



const styles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: COLORS.white,
    },
    sectionTitle: {
        color: COLORS.plusbottonColor,
        fontSize: RFPercentage(3),
        fontFamily: FONT.Quicksand_Bold,
        justifyContent: "center",
        padding: RFPercentage(0.5),

    },
    description: {
        color: COLORS.black,
        fontSize: RFPercentage(2),
        fontFamily: FONT.Quicksand_Regular,
        justifyContent: "center",
        padding: RFPercentage(0.5),
    },
});

export default AboutPage;



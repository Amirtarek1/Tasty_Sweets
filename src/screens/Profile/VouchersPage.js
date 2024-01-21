import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import UsedVouchers from './UsedVouchers';
import ExpiredVouchers from './ExpiredVouchers';
import ActiveVouchers from './ActiveVouchers';
import Header from '../../Components/Header';
import { View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { COLORS, FONT } from '../../constants';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { useNavigation } from '@react-navigation/native';

const Stack = createMaterialTopTabNavigator();

const VouchersPage = () => {
  const navigation = useNavigation();

  
  return (
    <SafeAreaProvider>
      <View style={{ flex: 1, backgroundColor: COLORS.white }}>

        <Header HeaderName={"Vouchers"}
        onPress={() => navigation.navigate("AnimTab2", { screen: "ProfileDetails" })} 
        />

        <Stack.Navigator initialRouteName="UsedVouchers"
        screenOptions={{
          tabBarIndicatorStyle: { backgroundColor: COLORS.plusbottonColor },
          tabBarStyle: { backgroundColor: COLORS.white },

          tabBarLabelStyle: {
            fontSize: RFPercentage(2.2),
            fontFamily: FONT.Quicksand_Bold,
          }

        }}  >
        <Stack.Screen name="Used" component={UsedVouchers}  />
        <Stack.Screen name="Expired" component={ExpiredVouchers} />
        <Stack.Screen name="Active" component={ActiveVouchers} />


      </Stack.Navigator>

      </View>

    </SafeAreaProvider>


  );
};

export default VouchersPage;



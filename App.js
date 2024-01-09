import React from 'react';
import { StatusBar } from 'react-native';
import { COLORS } from './src/constants';
import { NavigationContainer } from '@react-navigation/native';
import MainNaviagtion from './src/Navigation/MainNavigation';
import ProfileDetails from './src/screens/Profile/ProfileDetails';
import PayedPage from './src/screens/Home/PayedPage';
import Refer_Friend from './src/screens/Profile/Refer_Friend';
import CheckoutPage from './src/screens/Home/CheckoutPage';
import Flavours from './src/screens/Home/Flavours';
import OrderPay from './src/screens/Profile/OrderPay';


const App = () => {

  return (
    <>
      <StatusBar animated backgroundColor={COLORS.black} />

      {/* <ProfileDetails/> */}
      {/* <MainNaviagtion /> */}

      {/* <NavigationContainer>
        <MainNaviagtion />
      </NavigationContainer> */}
      {/* <NavigationContainer>
      <ProfileDetails/> 
      </NavigationContainer> */}
      <OrderPay/>
    </>
  );
};

export default App;

import React, {useState} from 'react';
import {StatusBar, Text} from 'react-native';
import {COLORS} from './src/constants';
import Cart from './src/screens/Home/Cart';
import Home_Page from './src/screens/Home/Home_Page';
import CheckoutPage from './src/screens/Home/CheckoutPage';
import {NavigationContainer} from '@react-navigation/native';
import AnimTab2 from './src/screens/Bottomtabs/AnimTab2';
import StartScreen from './src/screens/Splash/StartScreen';

const App = () => {
  return (
    <>
      <StatusBar animated backgroundColor={COLORS.TrybackgroundColorIce1} />
      {/* <Home_Page/> */}
      {/* <StartScreen /> */}
      {/* <NavigationContainer>
      <AnimTab2/>
      </NavigationContainer> */}
      {/* <CheckoutPage /> */}
      <Home_Page/>
    </>
  );
};

export default App;

import React, {useState} from 'react';
import {StatusBar, Text} from 'react-native';
import {COLORS} from './src/constants';
import Cart from './src/screens/Home/Cart';
import Home_Page from './src/screens/Home/Home_Page';
import CheckoutPage from './src/screens/Home/CheckoutPage';
import {NavigationContainer} from '@react-navigation/native';
import AnimTab2 from './src/screens/Bottomtabs/AnimTab2';
import StartScreen from './src/screens/Splash/StartScreen';
import PayedPage from './src/screens/Home/PayedPage';
import TRY from './src/screens/Others/TRY';
import { Top_Flavours } from './src/Utils/Dummy';
import FlatListHorizontal from './src/screens/Home/Component/FlatListHorizontal';

const App = () => {
  const [Top_FlavoursData, setTop_Flavours] = useState(Top_Flavours)

  return (
    <>
      <StatusBar animated backgroundColor={COLORS.TrybackgroundColorIce1} />
      {/* <Home_Page/> */}
      {/* <FlatListHorizontal data={Top_FlavoursData} /> */}

      {/* <StartScreen /> */}
      {/* <NavigationContainer>
      <AnimTab2/>
      </NavigationContainer> */}
      {/* <CheckoutPage /> */}
      <PayedPage/>
      {/* <TRY/> */}
    </>
  );
};

export default App;

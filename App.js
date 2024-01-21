import React from 'react';
import { StatusBar } from 'react-native';
import { COLORS } from './src/constants';
import { NavigationContainer } from '@react-navigation/native';
import MainNaviagtion from './src/Navigation/MainNavigation';
import Toast from 'react-native-toast-message';


const App = () => {

  return (
    <>
      <StatusBar animated backgroundColor={COLORS.black} />
      <NavigationContainer>
        <MainNaviagtion />
        <Toast/>
      </NavigationContainer>
    </>
  );
};

export default App;

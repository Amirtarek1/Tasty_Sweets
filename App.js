import React from 'react';
import { StatusBar } from 'react-native';
import { COLORS } from './src/constants';
import { NavigationContainer } from '@react-navigation/native';
import MainNaviagtion from './src/Navigation/MainNavigation';


const App = () => {

  return (
    <>
      <StatusBar animated backgroundColor={COLORS.black} />
      <NavigationContainer>
        <MainNaviagtion />
      </NavigationContainer>
    </>
  );
};

export default App;

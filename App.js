import React from 'react';
import { StatusBar } from 'react-native';
import { COLORS } from './src/constants';
import { NavigationContainer } from '@react-navigation/native';
import MainNaviagtion from './src/Navigation/MainNavigation';
import ProfileDetails from './src/screens/Profile/ProfileDetails';
import PayedPage from './src/screens/Home/PayedPage';


const App = () => {

  return (
    <>
      <StatusBar animated backgroundColor={COLORS.black} />

     {/* <ProfileDetails/> */}
      <NavigationContainer>
        <MainNaviagtion />
      </NavigationContainer>
    </>
  );
};

export default App;

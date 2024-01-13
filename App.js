import React from 'react';
import { StatusBar } from 'react-native';
import { COLORS } from './src/constants';
import { NavigationContainer } from '@react-navigation/native';
import MainNaviagtion from './src/Navigation/MainNavigation';
import NotificationsPage from './src/screens/Profile/NotificationsPage';
import ProfileDetails from './src/screens/Profile/ProfileDetails';


const App = () => {

  return (
    <>
      <StatusBar animated backgroundColor={COLORS.black} />
      <NavigationContainer>
        <ProfileDetails />
      </NavigationContainer>
    </>
  );
};

export default App;

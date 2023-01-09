/* eslint-disable quotes */
import 'react-native-gesture-handler';
import React, {Component} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {Provider as PaperProvider} from 'react-native-paper';

import {NavigationContainer} from '@react-navigation/native';
import VendorStack from './navigations/VendorStack';

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <VendorStack />
      </NavigationContainer>
    </PaperProvider>
  );
}

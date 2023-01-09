/* eslint-disable prettier/prettier */

import 'react-native-gesture-handler';
import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import ProfileVendor from '../vendor/ProfileVendor';
import WelcomeVendor from '../vendor/WelcomeVendor';
import RegisterVendor from '../vendor/RegisterVendor';
import LoginVendor from '../vendor/LoginVendor';
import ForgotPasswordVendor from '../vendor/ForgotPasswordVendor';
import VerifiedVendor from '../vendor/VerifiedVendor';
import SuccessVendor from '../vendor/SuccessVendor';
import RegisterSuccessVendor from '../vendor/RegisterSuccessVendor';
import ChangePasswordVendor from '../vendor/ChangePasswordVendor';
import SignOutVendor from '../vendor/SignOutVendor';
import ResetCodeVendor from '../vendor/ResetCodeVendor';
import HomeVendor from '../vendor/HomeVendor';
import ShippingDetailsVendor from '../vendor/ShippingDetailsVendor';
import MessagesVendor from '../vendor/MessagesVendor';
import MessageDetailsVendor from '../vendor/MessageDetailsVendor';
import SupermarketVendor from '../vendor/SupermarketVendor';
import StoreDetailsVendor from '../vendor/StoreDetailsVendor';
import PhotosVendor from '../vendor/PhotosVendor';
import ReviewsVendor from '../vendor/ReviewsVendor';
import ShippingVendor from '../vendor/ShippingVendor';
import PickupVendor from '../vendor/PickupVendor';
import ReceiptsVendor from '../vendor/ReceiptsVendor';
import TransactionsVendor from '../vendor/TransactionsVendor';
import AboutVendor from '../vendor/AboutVendor';
import ChatVendor from '../vendor/ChatVendor';
import NotificationsVendor from '../vendor/NotificationsVendor';
import BlockBusinessVendor from '../vendor/BlockBusinessVendor';
import ReportBusinessVendor from '../vendor/ReportBusinessVendor';
import ReviewBusinessVendor from '../vendor/ReviewBusinessVendor';
import ShareBusinessVendor from '../vendor/ShareBusinessVendor';
import MainPageVendor from '../vendor/MainPageVendor';
import OrderVendor from '../vendor/OrderVendor';
import CustomDrawerVendor from './CustomDrawerVendor';
import Onboarding from '../vendor/Onboarding';
import EmailVerify from '../vendor/EmailVerify';
import Rate from '../vendor/RateVendor';
import {ProductDetails} from '../vendor/ProductDetails';
import VendorProducts from '../vendor/VendorProducts';
import {AddProduct} from '../vendor/AddProduct';

const Drawer = createDrawerNavigator();

const VendorStack = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Onboarding"
      drawerContent={props => <CustomDrawerVendor {...props} />}
      screenOptions={{
        headerShown: false,
        DrawerNavigatorBarVisible: false,
      }}>
      <Drawer.Screen name="WelcomeVendor" component={WelcomeVendor} />
      <Drawer.Screen name="Onboarding" component={Onboarding} />
      <Drawer.Screen name="ProfileVendor" component={ProfileVendor} />
      <Drawer.Screen name="RegisterVendor" component={RegisterVendor} />
      <Drawer.Screen name="LoginVendor" component={LoginVendor} />
      <Drawer.Screen name="ForgotVendor" component={ForgotPasswordVendor} />
      <Drawer.Screen name="VerifiedVendor" component={VerifiedVendor} />
      <Drawer.Screen name="SuccessVendor" component={SuccessVendor} />
      <Drawer.Screen name="SignOutVendor" component={SignOutVendor} />
      <Drawer.Screen name="Rate" component={Rate} />
      <Drawer.Screen
        name="RegistersuccessVendor"
        component={RegisterSuccessVendor}
      />
      <Drawer.Screen name="ChangepassVendor" component={ChangePasswordVendor} />
      <Drawer.Screen name="ResetVendor" component={ResetCodeVendor} />
      <Drawer.Screen name="HomeVendor" component={HomeVendor} />
      <Drawer.Screen
        name="MessagedetailsVendor"
        component={MessageDetailsVendor}
      />
      <Drawer.Screen name="SupermarketVendor" component={SupermarketVendor} />
      <Drawer.Screen name="StoreDetailsVendor" component={StoreDetailsVendor} />
      <Drawer.Screen name="PhotosVendor" component={PhotosVendor} />
      <Drawer.Screen name="ReviewsVendor" component={ReviewsVendor} />
      <Drawer.Screen name="ShippingVendor" component={ShippingVendor} />
      <Drawer.Screen
        name="ShippingDetailsVendor"
        component={ShippingDetailsVendor}
      />
      <Drawer.Screen name="PickupVendor" component={PickupVendor} />
      <Drawer.Screen name="ReceiptsVendor" component={ReceiptsVendor} />
      <Drawer.Screen name="TransactionsVendor" component={TransactionsVendor} />
      <Drawer.Screen name="AboutVendor" component={AboutVendor} />
      <Drawer.Screen name="ChatVendor" component={ChatVendor} />
      <Drawer.Screen name="OrderVendor" component={OrderVendor} />
      <Drawer.Screen name="MessagesVendor" component={MessagesVendor} />
      <Drawer.Screen
        name="NotificationsVendor"
        component={NotificationsVendor}
      />
      <Drawer.Screen name="BlockVendor" component={BlockBusinessVendor} />
      <Drawer.Screen name="ReportVendor" component={ReportBusinessVendor} />
      <Drawer.Screen
        name="ReviewBusinessVendor"
        component={ReviewBusinessVendor}
      />
      <Drawer.Screen name="ShareVendor" component={ShareBusinessVendor} />
      <Drawer.Screen name="EmailVerify" component={EmailVerify} />
      <Drawer.Screen name="MainVendor" component={MainPageVendor} />
      <Drawer.Screen name="ProductDetails" component={ProductDetails} />
      <Drawer.Screen name="VendorProducts" component={VendorProducts} />
      <Drawer.Screen name="AddProduct" component={AddProduct} />
    </Drawer.Navigator>
  );
};

export default VendorStack;

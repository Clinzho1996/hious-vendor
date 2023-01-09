/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */

import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import MessagesVendor from './MessagesVendor';
import PaymentVendor from './PaymentVendor';
import SettingsVendor from './SettingsVendor';
import FavoriteVendor from './FavoriteVendor';
import MainPageVendor from './MainPageVendor';

const Tab = createBottomTabNavigator();

const HomeVendor = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        style: {
          height: 60,
          justifyContent: 'space-around',
          border: 0,
        },
      }}>
      <Tab.Screen
        name="MainVendor"
        component={MainPageVendor}
        options={{
          tabBarIcon: ({focused, tintColor}) => {
            return (
              <View style={styles.nav}>
                <Icon
                  name="home"
                  size={focused ? 30 : 30}
                  color={focused ? '#7A86C0' : '#D5D5E1'}
                />
                <Text
                  style={{
                    color: focused ? '#ff3369' : '#777777',
                    fontSize: focused ? 14 : 10,
                  }}></Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="MessagesVendor"
        component={MessagesVendor}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View style={styles.nav}>
                <Icon
                  name="chatbox-ellipses"
                  size={focused ? 30 : 30}
                  color={focused ? '#7A86C0' : '#D5D5E1'}
                />
                <Text
                  style={{
                    color: focused ? '#ff3369' : '#777777',
                    fontSize: 14,
                  }}></Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="FavoriteVendor"
        component={FavoriteVendor}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View style={styles.nav}>
                <Icon
                  name="heart"
                  size={focused ? 30 : 30}
                  color={focused ? '#7A86C0' : '#D5D5E1'}
                />
                <Text
                  style={{
                    color: focused ? '#ff3369' : '#777777',
                    fontSize: 14,
                  }}></Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="PaymentVendor"
        component={PaymentVendor}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View style={styles.nav}>
                <Icon
                  name="wallet"
                  size={focused ? 30 : 30}
                  color={focused ? '#7A86C0' : '#D5D5E1'}
                />
                <Text
                  style={{
                    color: focused ? '#ff3369' : '#777777',
                    fontSize: 14,
                  }}></Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="SettingsVendor"
        component={SettingsVendor}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View style={styles.nav}>
                <Icon
                  name="settings"
                  size={focused ? 30 : 30}
                  color={focused ? '#7A86C0' : '#D5D5E1'}
                />
                <Text
                  style={{
                    color: focused ? '#ff3369' : '#777777',
                    fontSize: 14,
                  }}></Text>
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeVendor;

const styles = StyleSheet.create({
  text: {
    color: '#000',
  },
  nav: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
    border: 0,
  },
});

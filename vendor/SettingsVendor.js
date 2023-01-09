/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
  Dimensions,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {Switch} from 'react-native-paper';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={{backgroundColor: 'white'}}
    style={{backgroundColor: '#7A86C0', borderRadius: 10, marginTop: 30}}
  />
);
const FirstRoute = () => {
  const [switchOn, setSwitchOn] = useState(false);
  const [switchOnTwo, setSwitchOnTwo] = useState(false);
  return (
    <View style={{paddingVertical: 20}}>
      <View
        style={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingVertical: 20,
        }}>
        <Text style={{color: '#545454', fontSize: 15}}>Notification sound</Text>
        <Switch
          value={switchOn}
          onValueChange={() => {
            setSwitchOn(!switchOn);
            Alert.alert('Notifications : ' + !switchOn);
          }}
          color="#7A86C0"
        />
      </View>
      <View
        style={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingVertical: 20,
        }}>
        <Text style={{color: '#545454', fontSize: 15}}>Notification tone</Text>
        <Text style={{color: '#545454', fontSize: 15}}>
          Hacker{' '}
          <Icon name="chevron-down-outline" color={'#B4B3B3'} size={15} />
        </Text>
      </View>
      <View
        style={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingVertical: 20,
        }}>
        <Text style={{color: '#545454', fontSize: 15}}>Adjust Volume</Text>
      </View>
      <View
        style={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingVertical: 20,
        }}>
        <Text style={{color: '#545454', fontSize: 15}}>Vibration</Text>
        <Switch
          value={switchOnTwo}
          onValueChange={() => {
            setSwitchOnTwo(!switchOnTwo);
            Alert.alert('Vibration : ' + !switchOnTwo);
          }}
          color="#7A86C0"
        />
      </View>
    </View>
  );
};

const SecondRoute = () => {
  const [switchOnThree, setSwitchOnThree] = useState(false);
  const [switchOnFour, setSwitchOnFour] = useState(false);
  const [switchOnFive, setSwitchOnFive] = useState(false);
  const [switchOnSix, setSwitchOnSix] = useState(false);
  return (
    <View style={{paddingVertical: 30}}>
      <View
        style={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingVertical: 20,
          borderBottomColor: '#EDEDED',
          borderBottomWidth: 1,
        }}>
        <View>
          <Text style={{color: '#7A86C0', fontSize: 16, fontWeight: '600'}}>
            Email Notification
          </Text>
          <Text style={{fontSize: 13, color: '#A6A4A4'}}>
            Get notifications via your registered {'\n'}gmail address.
          </Text>
        </View>
        <View>
          <Switch
            value={switchOnThree}
            onValueChange={() => {
              setSwitchOnThree(!switchOnThree);
              Alert.alert('Email Notifications : ' + !switchOnThree);
            }}
            color="#7A86C0"
          />
        </View>
      </View>
      <View
        style={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingVertical: 20,
          borderBottomColor: '#EDEDED',
          borderBottomWidth: 1,
        }}>
        <View>
          <Text style={{color: '#7A86C0', fontSize: 16, fontWeight: '600'}}>
            WhatsApp Notification
          </Text>
          <Text style={{fontSize: 13, color: '#A6A4A4'}}>
            Do not miss any update even when {'\n'}your app is closed. Get
            notified on {'\n'}WhatsApp (08165357524)
          </Text>
          <Text style={{color: '#7A86C0'}}>Change phone number</Text>
        </View>
        <View>
          <Switch
            value={switchOnFive}
            onValueChange={() => {
              setSwitchOnFive(!switchOnFive);
              Alert.alert('Message Notifications : ' + !switchOnFive);
            }}
            color="#7A86C0"
          />
        </View>
      </View>
      <View
        style={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingVertical: 20,
          borderBottomColor: '#EDEDED',
          borderBottomWidth: 1,
        }}>
        <View>
          <Text style={{color: '#7A86C0', fontSize: 16, fontWeight: '600'}}>
            SMS Notification
          </Text>
          <Text style={{fontSize: 13, color: '#A6A4A4'}}>
            Get offline notification via SMS.
            {'\n'}(09042761300)
          </Text>
          <Text style={{color: '#7A86C0'}}>Change phone number</Text>
        </View>
        <View>
          <Switch
            value={switchOnFour}
            onValueChange={() => {
              setSwitchOnFour(!switchOnFour);
              Alert.alert('Orders Notifications : ' + !switchOnFour);
            }}
            color="#7A86C0"
          />
        </View>
      </View>
      <View
        style={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingVertical: 20,
          borderBottomColor: '#EDEDED',
          borderBottomWidth: 1,
        }}>
        <View>
          <Text style={{color: '#7A86C0', fontSize: 16, fontWeight: '600'}}>
            Top Vendors near you
          </Text>
          <Text style={{fontSize: 13, color: '#A6A4A4'}}>
            Get update on Vendors around you as {'\n'}you change location.
          </Text>
        </View>
        <View>
          <Switch
            value={switchOnFive}
            onValueChange={() => {
              setSwitchOnFive(!switchOnFive);
              Alert.alert('Message Notifications : ' + !switchOnFive);
            }}
            color="#7A86C0"
          />
        </View>
      </View>
      <View
        style={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingVertical: 20,
          borderBottomColor: '#EDEDED',
          borderBottomWidth: 1,
        }}>
        <View>
          <Text style={{color: '#7A86C0', fontSize: 16, fontWeight: '600'}}>
            New Message
          </Text>
          <Text style={{fontSize: 13, color: '#A6A4A4'}}>
            Get notifications when you receive {'\n'}a new message.
          </Text>
        </View>
        <View>
          <Switch
            value={switchOnFive}
            onValueChange={() => {
              setSwitchOnFive(!switchOnFive);
              Alert.alert('Message Notifications : ' + !switchOnFive);
            }}
            color="#7A86C0"
          />
        </View>
      </View>
      <View
        style={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingVertical: 20,
          borderBottomColor: '#EDEDED',
          borderBottomWidth: 1,
        }}>
        <View>
          <Text style={{color: '#7A86C0', fontSize: 16, fontWeight: '600'}}>
            Popup Notification
          </Text>
          <Text style={{fontSize: 13, color: '#A6A4A4'}}>
            Shows you notification of new {'\n'}activities when your app is
            closed
          </Text>
        </View>
        <View>
          <Switch
            value={switchOnSix}
            onValueChange={() => {
              setSwitchOnSix(!switchOnSix);
              Alert.alert('Popup Notifications : ' + !switchOnSix);
            }}
            color="#7A86C0"
          />
        </View>
      </View>
    </View>
  );
};

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});

const SettingsVendor = ({navigation}) => {
  const [index, setIndex] = React.useState(0);

  const [routes] = React.useState([
    {key: 'first', title: 'Sound'},
    {key: 'second', title: 'Notifications'},
  ]);
  return (
    <ScrollView>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        style={styles.container}>
        <View
          style={{
            paddingHorizontal: 0,
            paddingVertical: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity onPress={() => navigation.navigate('MainVendor')}>
            <Icon name="arrow-back" size={30} color={'#828282'} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Image
              source={require('../assets/user.png')}
              style={{width: 30, height: 30}}
            />
          </TouchableOpacity>
        </View>
        <View style={{paddingTop: 0}}>
          <Text style={{fontSize: 24, color: '#7A86C0', fontWeight: '600'}}>
            Settings
          </Text>
        </View>
        <TabView
          navigationState={{index, routes}}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={{width: windowWidth}}
          renderTabBar={renderTabBar}
        />
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default SettingsVendor;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: windowWidth,
    height: windowHeight,
    paddingHorizontal: 30,
    paddingVertical: 0,
  },
  btnPrimary: {
    paddingHorizontal: 40,
    paddingVertical: 20,
    backgroundColor: '#7A86C0',
    borderRadius: 10,
    marginTop: 270,
  },
  reg: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
});

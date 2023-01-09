/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const windowWidth = Dimensions.get('window').width;

const NotificationsVendor = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <View
        style={{
          paddingHorizontal: 0,
          paddingVertical: 20,
          flexDirection: 'row',
          display: 'flex',
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity onPress={() => navigation.navigate('HomeVendor')}>
          <Icon name="arrow-back" size={30} color={'#828282'} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.openDrawer()}
          style={{paddingLeft: 10}}>
          <Image
            source={require('../assets/user.png')}
            style={{width: 30, height: 30, borderRadius: 50}}
          />
        </TouchableOpacity>
      </View>
      <View style={{paddingVertical: 20}}>
        <Text style={{color: '#7A86C0', fontSize: 24, fontWeight: '600'}}>
          Notifications
        </Text>
      </View>
      <View style={styles.msgCont}>
        <TouchableOpacity
          style={styles.messages}
          onPress={() => navigation.navigate('MessagedetailsVendor')}>
          <View>
            <Image
              source={require('../assets/m.png')}
              style={{width: 40, height: 40}}
            />
          </View>
          <View>
            <Text style={styles.msgHeader}>Hious Supermarket</Text>
            <Text style={styles.msgBody}>
              Hello there, thanks for booking, p...
            </Text>
          </View>
          <View>
            <Text style={styles.time}>11:32am</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.msgCont}>
        <TouchableOpacity
          style={styles.messages}
          onPress={() => navigation.navigate('MessagedetailsVendor')}>
          <View>
            <Image
              source={require('../assets/m.png')}
              style={{width: 40, height: 40}}
            />
          </View>
          <View>
            <Text style={styles.msgHeader}>Hious Supermarket</Text>
            <Text style={styles.msgBody}>
              Hello there, thanks for booking, p...
            </Text>
          </View>
          <View>
            <Text style={styles.time}>11:32am</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.msgCont}>
        <TouchableOpacity
          style={styles.messages}
          onPress={() => navigation.navigate('MessagedetailsVendor')}>
          <View>
            <Image
              source={require('../assets/m.png')}
              style={{width: 40, height: 40}}
            />
          </View>
          <View>
            <Text style={styles.msgHeader}>Hious Supermarket</Text>
            <Text style={styles.msgBody}>
              Hello there, thanks for booking, p...
            </Text>
          </View>
          <View>
            <Text style={styles.time}>11:32am</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.msgCont}>
        <TouchableOpacity style={styles.messages} onClick>
          <View>
            <Image
              source={require('../assets/m.png')}
              style={{width: 40, height: 40}}
            />
          </View>
          <View>
            <Text style={styles.msgHeader}>Hious Supermarket</Text>
            <Text style={styles.msgBody}>
              Hello there, thanks for booking, p...
            </Text>
          </View>
          <View>
            <Text style={styles.time}>11:32am</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.msgCont}>
        <TouchableOpacity style={styles.messages}>
          <View>
            <Image
              source={require('../assets/m.png')}
              style={{width: 40, height: 40}}
            />
          </View>
          <View>
            <Text style={styles.msgHeader}>Hious Supermarket</Text>
            <Text style={styles.msgBody}>
              Hello there, thanks for booking, p...
            </Text>
          </View>
          <View>
            <Text style={styles.time}>11:32am</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.msgCont}>
        <TouchableOpacity style={styles.messages}>
          <View>
            <Image
              source={require('../assets/m.png')}
              style={{width: 40, height: 40}}
            />
          </View>
          <View>
            <Text style={styles.msgHeader}>Hious Supermarket</Text>
            <Text style={styles.msgBody}>
              Hello there, thanks for booking, p...
            </Text>
          </View>
          <View>
            <Text style={styles.time}>11:32am</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default NotificationsVendor;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: windowWidth,
    paddingVertical: 20,
    paddingHorizontal: 30,
  },
  messages: {
    paddingVertical: 20,
    borderRadius: 6,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: '#E5E5E5',
    borderBottomWidth: 1,
  },
  msgHeader: {
    color: '#636363',
    fontSize: 14,
    fontWeight: '500',
  },
  msgBody: {
    fontSize: 12,
    color: '#C4C4C4',
  },
  time: {
    fontSize: 12,
    color: '#c4c4c4',
  },
  msgCont: {
    marginTop: 15,
  },
});

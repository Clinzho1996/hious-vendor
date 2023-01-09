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

const MessagesVendor = ({navigation}) => {
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
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={30} color={'#828282'} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="ellipsis-vertical-outline" size={30} color={'c4c4c4'} />
        </TouchableOpacity>
      </View>
      <View style={{paddingVertical: 20}}>
        <Text style={{color: '#7A86C0', fontSize: 24, fontWeight: '600'}}>
          Messages
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

export default MessagesVendor;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: windowWidth,
    paddingVertical: 20,
    paddingHorizontal: 30,
  },
  messages: {
    padding: 20,
    backgroundColor: '#FCF7F780',
    borderRadius: 6,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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

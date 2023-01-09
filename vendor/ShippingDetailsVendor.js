/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const windowWidth = Dimensions.get('window').width;

const ShippingDetailsVendor = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <View
        style={{
          paddingHorizontal: 0,
          paddingVertical: 0,
          flexDirection: 'row',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" size={30} color={'#828282'} />
          </TouchableOpacity>
        </View>
        <View style={styles.info}>
          <TouchableOpacity>
            <Icon name="notifications-outline" size={30} color={'#828282'} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon
              name="ellipsis-vertical-outline"
              size={30}
              color={'#828282'}
            />
          </TouchableOpacity>
        </View>
      </View>
      <Text
        style={{
          color: '#7A86C0',
          fontSize: 24,
          fontWeight: '600',
          paddingVertical: 20,
        }}>
        Your details
      </Text>
      <Text style={{fontSize: 18, lineHeight: 24, color: '#5C5C5C'}}>
        Confirm your details below. This is how your rider will locate you for
        delivery.
      </Text>
      <View style={{marginTop: 30}}>
        <Text style={{color: '#5C5C5C'}}>Email address</Text>
        <Text
          style={{
            backgroundColor: '#F9F9F9',
            padding: 15,
            borderRadius: 10,
            marginTop: 10,
            color: '#5C5C5C',
            fontSize: 16,
          }}>
          ikenduamaka@gmail.com
        </Text>
      </View>
      <View style={{marginTop: 30}}>
        <Text style={{color: '#5C5C5C'}}>Phone number</Text>
        <Text
          style={{
            backgroundColor: '#F9F9F9',
            padding: 15,
            borderRadius: 10,
            marginTop: 10,
            color: '#5C5C5C',
            fontSize: 16,
          }}>
          08065018738
        </Text>
      </View>
      <View style={{marginTop: 30}}>
        <Text style={{color: '#5C5C5C'}}>Delivery address</Text>
        <Text
          style={{
            backgroundColor: '#F9F9F9',
            padding: 15,
            borderRadius: 10,
            marginTop: 10,
            color: '#5C5C5C',
            fontSize: 16,
          }}>
          32, Library road, Maryland, Lagos
        </Text>
      </View>
      <View style={{marginTop: 30}}>
        <Text style={{color: '#5C5C5C'}}>Description with landmark</Text>
        <Text
          style={{
            backgroundColor: '#F9F9F9',
            padding: 15,
            borderRadius: 10,
            marginTop: 10,
            color: '#5C5C5C',
            fontSize: 16,
          }}>
          Lorem ipsum dolor sit amet, consec tetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis.
        </Text>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: '#7A86C0',
          padding: 15,
          marginTop: 80,
          marginBottom: 70,
          borderRadius: 20,
        }}
        onPress={() => navigation.navigate('PickupVendor')}>
        <Text
          style={{
            color: '#fff',
            fontSize: 18,
            fontWeight: '600',
            textAlign: 'center',
          }}>
          Next
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default ShippingDetailsVendor;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingVertical: 30,
    paddingHorizontal: 30,
    width: windowWidth,
  },
  info: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    color: '#7A86C0',
    fontSize: 18,
    fontWeight: '500',
    marginTop: 20,
  },
  titlePhoto: {
    color: '#7A86C0',
    fontSize: 18,
    fontWeight: '500',
  },
  text: {
    color: '#5C5C5C',
    fontSize: 14,
    lineHeight: 25,
  },
  review: {
    padding: 20,
    backgroundColor: '#F9F9F9',
    borderRadius: 20,
    marginTop: 20,
  },
  reviewEnt: {
    marginLeft: 20,
  },
  Date: {
    color: '#C4C4C4',
    fontSize: 12,
  },
});

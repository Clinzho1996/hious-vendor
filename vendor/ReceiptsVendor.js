/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ReceiptsVendor = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          paddingHorizontal: 0,
          paddingVertical: 20,
          flexDirection: 'row',
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={30} color={'#828282'} />
        </TouchableOpacity>
      </View>
      <View style={{paddingTop: 0}}>
        <Text style={{fontSize: 24, color: '#7A86C0', fontWeight: '600'}}>
          Order Receipt
        </Text>
      </View>
      <View
        style={{
          paddingVertical: 20,
          borderBottomColor: '#EDEDED',
          borderBottomWidth: 1,
        }}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: 10,
          }}>
          <View>
            <Text style={{color: '#5C5C5C', fontSize: 16, fontWeight: '400'}}>
              Adidas White Sneakers
            </Text>
          </View>
          <View>
            <Text
              style={{
                color: '#5C5C5C',
                fontSize: 14,
                textAlign: 'right',
                fontWeight: '600',
              }}>
              ₦4,500
            </Text>
          </View>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: 10,
          }}>
          <View>
            <Text style={{color: '#5C5C5C', fontSize: 14, fontWeight: '400'}}>
              Subtotal
            </Text>
          </View>
          <View>
            <Text
              style={{
                color: '#5C5C5C',
                fontSize: 14,
                textAlign: 'right',
                fontWeight: '600',
              }}>
              ₦4,500
            </Text>
          </View>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: 10,
          }}>
          <View>
            <Text style={{color: '#5C5C5C', fontSize: 14, fontWeight: '400'}}>
              VAT (7.5%)
            </Text>
          </View>
          <View>
            <Text
              style={{
                color: '#5C5C5C',
                fontSize: 14,
                textAlign: 'right',
                fontWeight: '600',
              }}>
              ₦300
            </Text>
          </View>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: 10,
          }}>
          <View>
            <Text style={{color: '#5C5C5C', fontSize: 14, fontWeight: '400'}}>
              Delivery Fee
            </Text>
          </View>
          <View>
            <Text
              style={{
                color: '#5C5C5C',
                fontSize: 14,
                textAlign: 'right',
                fontWeight: '600',
              }}>
              ₦950
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          paddingVertical: 20,
        }}>
        <Text style={{color: '#7A86C0', fontSize: 16, fontWeight: '600'}}>
          Delivery Address
        </Text>
        <Text style={{color: '#5C5C5C', fontSize: 16, fontWeight: '400'}}>
          Suite 38, Sijuade Ln, Ikorodu, Lagos.
        </Text>
      </View>
      <View
        style={{
          paddingVertical: 20,
        }}>
        <Text style={{color: '#7A86C0', fontSize: 16, fontWeight: '600'}}>
          Vendor
        </Text>
        <Text style={{color: '#5C5C5C', fontSize: 16, fontWeight: '400'}}>
          Hious Supermarket
        </Text>
      </View>
      <View
        style={{
          paddingVertical: 20,
        }}>
        <Text style={{color: '#7A86C0', fontSize: 16, fontWeight: '600'}}>
          Order ID
        </Text>
        <Text style={{color: '#5C5C5C', fontSize: 16, fontWeight: '400'}}>
          9147RDSFS43
        </Text>
      </View>
    </View>
  );
};

export default ReceiptsVendor;

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

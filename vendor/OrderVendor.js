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
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const OrderVendor = ({navigation}) => {
  return (
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
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={30} color={'#828282'} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Image
            source={require('../assets/user.png')}
            style={{width: 30, height: 30}}
          />
        </TouchableOpacity>
      </View>
      <View>
        <Text style={{fontSize: 24, color: '#7A86C0', fontWeight: '600'}}>
          Order history
        </Text>
      </View>
      <View style={{paddingVertical: 20}}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 15,
            backgroundColor: '#F9F9F9',
            borderRadius: 6,
            marginVertical: 5,
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('ReceiptsVendor')}>
            <Text style={{color: '#5C5C5C', fontSize: 14, fontWeight: '700'}}>
              Order from Hious Supermark...
            </Text>
          </TouchableOpacity>
          <View>
            <Text style={{color: '#C4C4C4', fontSize: 14}}>2 mins ago</Text>
          </View>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 15,
            backgroundColor: '#F9F9F9',
            borderRadius: 6,
            marginVertical: 5,
          }}>
          <TouchableOpacity onPress={() => navigation.navigate('Receipts')}>
            <Text style={{color: '#5C5C5C', fontSize: 14, fontWeight: '700'}}>
              Order from Hious Supermark...
            </Text>
          </TouchableOpacity>
          <View>
            <Text style={{color: '#C4C4C4', fontSize: 14}}>2 mins ago</Text>
          </View>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 15,
            backgroundColor: '#F9F9F9',
            borderRadius: 6,
            marginVertical: 5,
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('ReceiptsVendor')}>
            <Text style={{color: '#5C5C5C', fontSize: 14, fontWeight: '700'}}>
              Order from Hious Supermark...
            </Text>
          </TouchableOpacity>
          <View>
            <Text style={{color: '#C4C4C4', fontSize: 14}}>2 mins ago</Text>
          </View>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 15,
            backgroundColor: '#F9F9F9',
            borderRadius: 6,
            marginVertical: 5,
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('ReceiptsVendor')}>
            <Text style={{color: '#5C5C5C', fontSize: 14, fontWeight: '700'}}>
              Order from Hious Supermark...
            </Text>
          </TouchableOpacity>
          <View>
            <Text style={{color: '#C4C4C4', fontSize: 14}}>2 mins ago</Text>
          </View>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 15,
            backgroundColor: '#F9F9F9',
            borderRadius: 6,
            marginVertical: 5,
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('ReceiptsVendor')}>
            <Text style={{color: '#5C5C5C', fontSize: 14, fontWeight: '700'}}>
              Order from Hious Supermark...
            </Text>
          </TouchableOpacity>
          <View>
            <Text style={{color: '#C4C4C4', fontSize: 14}}>2 mins ago</Text>
          </View>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 15,
            backgroundColor: '#F9F9F9',
            borderRadius: 6,
            marginVertical: 5,
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('ReceiptsVendor')}>
            <Text style={{color: '#5C5C5C', fontSize: 14, fontWeight: '700'}}>
              Order from Hious Supermark...
            </Text>
          </TouchableOpacity>
          <View>
            <Text style={{color: '#C4C4C4', fontSize: 14}}>2 mins ago</Text>
          </View>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 15,
            backgroundColor: '#F9F9F9',
            borderRadius: 6,
            marginVertical: 5,
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('ReceiptsVendor')}>
            <Text style={{color: '#5C5C5C', fontSize: 14, fontWeight: '700'}}>
              Order from Hious Supermark...
            </Text>
          </TouchableOpacity>
          <View>
            <Text style={{color: '#C4C4C4', fontSize: 14}}>2 mins ago</Text>
          </View>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 15,
            backgroundColor: '#F9F9F9',
            borderRadius: 6,
            marginVertical: 5,
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('ReceiptsVendor')}>
            <Text style={{color: '#5C5C5C', fontSize: 14, fontWeight: '700'}}>
              Order from Hious Supermark...
            </Text>
          </TouchableOpacity>
          <View>
            <Text style={{color: '#C4C4C4', fontSize: 14}}>2 mins ago</Text>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default OrderVendor;

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
  order: {},
});

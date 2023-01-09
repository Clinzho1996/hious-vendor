/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/rules-of-hooks */

import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const windowWidth = Dimensions.get('window').width;

const PhotosVendor = ({navigation}) => {
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
        Photos
      </Text>
      <View style={styles.innerDetails}>
        <View>
          <View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 20,
              }}>
              <Image
                source={require('../assets/p1.png')}
                style={{width: 160, height: 100, borderRadius: 10}}
              />
              <Image
                source={require('../assets/p2.png')}
                style={{width: 160, height: 100, borderRadius: 10}}
              />
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 20,
              }}>
              <Image
                source={require('../assets/p3.png')}
                style={{width: 160, height: 100, borderRadius: 10}}
              />
              <Image
                source={require('../assets/p4.png')}
                style={{width: 160, height: 100, borderRadius: 10}}
              />
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 20,
              }}>
              <Image
                source={require('../assets/p3.png')}
                style={{width: 160, height: 100, borderRadius: 10}}
              />
              <Image
                source={require('../assets/p4.png')}
                style={{width: 160, height: 100, borderRadius: 10}}
              />
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 20,
              }}>
              <Image
                source={require('../assets/p3.png')}
                style={{width: 160, height: 100, borderRadius: 10}}
              />
              <Image
                source={require('../assets/p4.png')}
                style={{width: 160, height: 100, borderRadius: 10}}
              />
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 20,
              }}>
              <Image
                source={require('../assets/p3.png')}
                style={{width: 160, height: 100, borderRadius: 10}}
              />
              <Image
                source={require('../assets/p4.png')}
                style={{width: 160, height: 100, borderRadius: 10}}
              />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default PhotosVendor;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingVertical: 30,
    paddingHorizontal: 30,
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
});

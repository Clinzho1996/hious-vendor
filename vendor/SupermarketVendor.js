/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const SupermarketVendor = ({navigation}) => {
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
            <Icon name="search-outline" size={30} color={'#828282'} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('NotificationsVendor')}
            style={{paddingHorizontal: 10}}>
            <Image
              source={require('../assets/notify.png')}
              style={{width: 30, height: 30}}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Image
              source={require('../assets/user.png')}
              style={{width: 30, height: 30, borderRadius: 50}}
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
        Supermarkets
      </Text>
      <View style={styles.body}>
        <TouchableOpacity
          style={styles.storeCont}
          onPress={() => navigation.navigate('StoreDetailsVendor')}>
          <View style={styles.store}>
            <Text style={styles.title}>Hious Supermarket</Text>
            <Image
              source={require('../assets/super1.png')}
              style={{width: 100, height: 60, borderRadius: 6}}
            />
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 10,
            }}>
            <Text style={styles.cont}>14b Mushin</Text>
            <Text style={styles.cont}>6.1km</Text>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text style={styles.cont}>4.6</Text>
              <Icon name="star" color={'#828282'} />
              <Icon name="star" color={'#828282'} />
              <Icon name="star" color={'#828282'} />
              <Icon name="star" color={'#828282'} />
              <Icon name="star-half-outline" color={'#828282'} />
            </View>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 5,
            }}>
            <Text style={styles.cont}>Open</Text>
            <Text style={styles.cont}>Closes 9pm</Text>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text style={styles.cont}>Like</Text>
              <Icon name="heart-outline" size={20} color={'#828282'} />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.storeCont}>
          <View style={styles.store}>
            <Text style={styles.title}>Traveller's {'\n'} Choice Mart</Text>
            <Image
              source={require('../assets/super2.png')}
              style={{width: 100, height: 60, borderRadius: 6}}
            />
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 10,
            }}>
            <Text style={styles.cont}>14b Mushin</Text>
            <Text style={styles.cont}>6.1km</Text>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text style={styles.cont}>4.6</Text>
              <Icon name="star" color={'#828282'} />
              <Icon name="star" color={'#828282'} />
              <Icon name="star" color={'#828282'} />
              <Icon name="star" color={'#828282'} />
              <Icon name="star-half-outline" color={'#828282'} />
            </View>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 5,
            }}>
            <Text style={styles.cont}>Open</Text>
            <Text style={styles.cont}>Closes 9pm</Text>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text style={styles.cont}>Like</Text>
              <Icon name="heart-outline" size={20} color={'#828282'} />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.storeCont}>
          <View style={styles.store}>
            <Text style={styles.title}>Hannah's {'\n'} Place</Text>
            <Image
              source={require('../assets/super3.png')}
              style={{width: 100, height: 60, borderRadius: 6}}
            />
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 10,
            }}>
            <Text style={styles.cont}>14b Mushin</Text>
            <Text style={styles.cont}>6.1km</Text>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text style={styles.cont}>4.6</Text>
              <Icon name="star" color={'#828282'} />
              <Icon name="star" color={'#828282'} />
              <Icon name="star" color={'#828282'} />
              <Icon name="star" color={'#828282'} />
              <Icon name="star-half-outline" color={'#828282'} />
            </View>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 5,
            }}>
            <Text style={styles.cont}>Open</Text>
            <Text style={styles.cont}>Closes 9pm</Text>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text style={styles.cont}>Like</Text>
              <Icon name="heart-outline" size={20} color={'#828282'} />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.storeCont}>
          <View style={styles.store}>
            <Text style={styles.title}>Hious 'D' Supermarket</Text>
            <Image
              source={require('../assets/super4.png')}
              style={{width: 100, height: 60, borderRadius: 6}}
            />
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 10,
            }}>
            <Text style={styles.cont}>14b Mushin</Text>
            <Text style={styles.cont}>6.1km</Text>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text style={styles.cont}>4.6</Text>
              <Icon name="star" color={'#828282'} />
              <Icon name="star" color={'#828282'} />
              <Icon name="star" color={'#828282'} />
              <Icon name="star" color={'#828282'} />
              <Icon name="star-half-outline" color={'#828282'} />
            </View>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 5,
            }}>
            <Text style={styles.cont}>Open</Text>
            <Text style={styles.cont}>Closes 9pm</Text>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text style={styles.cont}>Like</Text>
              <Icon name="heart-outline" size={20} color={'#828282'} />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.storeCont}>
          <View style={styles.store}>
            <Text style={styles.title}>Smiling {'\n'} Dove Mart</Text>
            <Image
              source={require('../assets/super5.png')}
              style={{width: 100, height: 60, borderRadius: 6}}
            />
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 10,
            }}>
            <Text style={styles.cont}>14b Mushin</Text>
            <Text style={styles.cont}>6.1km</Text>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text style={styles.cont}>4.6</Text>
              <Icon name="star" color={'#828282'} />
              <Icon name="star" color={'#828282'} />
              <Icon name="star" color={'#828282'} />
              <Icon name="star" color={'#828282'} />
              <Icon name="star-half-outline" color={'#828282'} />
            </View>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 5,
            }}>
            <Text style={styles.cont}>Open</Text>
            <Text style={styles.cont}>Closes 9pm</Text>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text style={styles.cont}>Like</Text>
              <Icon name="heart-outline" size={20} color={'#828282'} />
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default SupermarketVendor;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingVertical: 30,
    paddingHorizontal: 30,
  },
  userIcon: {
    width: 35,
    height: 35,
  },
  info: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  store: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    color: '#7A86C0',
    fontSize: 18,
    fontWeight: '500',
    width: 150,
    lineHeight: 28,
  },
  storeCont: {
    padding: 30,
    backgroundColor: '#F9F9F9',
    borderRadius: 20,
    marginTop: 20,
  },
  cont: {
    color: '#5C5C5C',
  },
  body: {
    paddingBottom: 50,
  },
});

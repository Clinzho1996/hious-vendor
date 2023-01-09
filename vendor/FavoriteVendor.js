/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const FavoriteVendor = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <View
        style={{
          paddingHorizontal: 0,
          paddingVertical: 20,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <TouchableOpacity onPress={() => navigation.navigate('MainVendor')}>
          <Icon name="arrow-back" size={30} color={'#828282'} />
        </TouchableOpacity>
        <View
          style={{
            paddingHorizontal: 0,
            paddingVertical: 10,
            flexDirection: 'row',
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Notifications')}>
            <Image
              source={require('../assets/notify.png')}
              style={{width: 30, height: 30}}
            />
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
      </View>
      <View style={{paddingTop: 0}}>
        <Text style={{fontSize: 24, color: '#7A86C0', fontWeight: '600'}}>
          Business Saves
        </Text>
        <Text
          style={{
            fontSize: 16,
            color: '#5C5C5C',
          }}>
          Quisque velit nisi, pretium ut lacinia in, elementum id enim.
        </Text>
      </View>
      <View style={styles.body}>
        <View style={styles.storeCont}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 16,
              color: '#5C5C5C',
            }}>
            Total Saves
          </Text>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 30,
              color: '#7A86C0',
              marginTop: 10,
              fontWeight: '700',
            }}>
            23 users
          </Text>
        </View>
        <View style={styles.storeCont}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 16,
              color: '#5C5C5C',
            }}>
            Removes
          </Text>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 30,
              color: '#7A86C0',
              marginTop: 10,
              fontWeight: '700',
            }}>
            4 users
          </Text>
        </View>
        <View style={{paddingVertical: 20}}>
          <Text style={{color: '#7A86C0', fontSize: 24, fontWeight: '600'}}>
            Recent Saves
          </Text>
        </View>
        <View style={styles.msgCont}>
          <View style={styles.messages}>
            <View>
              <Image
                source={require('../assets/m.png')}
                style={{width: 40, height: 40}}
              />
            </View>
            <View>
              <Text style={styles.msgHeader}>Promise God and me</Text>
              <Text style={styles.msgBody}>
                Hello there, thanks for booking, p...
              </Text>
            </View>
            <View>
              <Text style={styles.time}>11:32am</Text>
            </View>
          </View>
        </View>
        <View style={styles.msgCont}>
          <View style={styles.messages}>
            <View>
              <Image
                source={require('../assets/m.png')}
                style={{width: 40, height: 40}}
              />
            </View>
            <View>
              <Text style={styles.msgHeader}>Kay Grammar</Text>
              <Text style={styles.msgBody}>
                Hello there, thanks for booking, p...
              </Text>
            </View>
            <View>
              <Text style={styles.time}>11:32am</Text>
            </View>
          </View>
        </View>
        <View style={styles.msgCont}>
          <View style={styles.messages}>
            <View>
              <Image
                source={require('../assets/m.png')}
                style={{width: 40, height: 40}}
              />
            </View>
            <View>
              <Text style={styles.msgHeader}>Dev Clinton</Text>
              <Text style={styles.msgBody}>
                Hello there, thanks for booking, p...
              </Text>
            </View>
            <View>
              <Text style={styles.time}>11:32am</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default FavoriteVendor;

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

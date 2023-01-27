/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Dimensions,
  TouchableOpacity,
  RefreshControl,
  ImageBackground,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const windowWidth = Dimensions.get('window').width;

const wait = timeout => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};

const MainPageVendor = ({navigation, uri}) => {
  const [refreshing, setRefreshing] = React.useState();

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getData() {
    const jwt = await AsyncStorage.getItem('AccessToken');
    let item = {jwt};
    console.warn(item);

    return fetch(
      'https://hiousapp.com/api/vendor_auth/fetch_vendor_profile.php',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(item),
      },
    )
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    getData();
  }, []);
  return (
    <View>
      <ScrollView
        style={styles.container}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            enabled={true}
            size="default"
            color="#3E90FC"
          />
        }>
        <View style={styles.user}>
          <TouchableOpacity
            style={styles.userdetails}
            onPress={() => navigation.openDrawer()}>
            <Image
              source={uri ? {uri} : require('../assets/vendor-user.png')}
              style={{width: 40, height: 40, borderRadius: 20}}
            />
            {loading ? (
              <Text
                style={{
                  fontSize: 16,
                  paddingLeft: 10,
                  fontWeight: '400',
                  color: '#5C5C5C',
                }}>
                Loading
              </Text>
            ) : (
              <Text
                style={{
                  fontSize: 16,
                  paddingLeft: 10,
                  fontWeight: '400',
                  color: '#5C5C5C',
                  textTransform: 'capitalize',
                }}>
                Hello, {data.name}
              </Text>
            )}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('NotificationsVendor')}>
            <Image
              source={require('../assets/notify.png')}
              style={{width: 30, height: 30}}
            />
          </TouchableOpacity>
        </View>
        <View style={{paddingVertical: 20}}>
          <Text
            style={{
              color: '#7A86C0',
              fontSize: 24,
              lineHeight: 36,
              fontWeight: '700',
            }}>
            Dashboard
          </Text>
          <View style={{marginTop: 20, borderRadius: 25}}>
            <ImageBackground
              source={require('../assets/chart.png')}
              style={{
                borderRadius: 25,
              }}
              resizeMode={'contain'}>
              <View style={{paddingVertical: 100}}></View>
            </ImageBackground>
          </View>
          <View>
            <View
              style={{
                backgroundColor: '#F9F9F9',
                display: 'flex',
                flexDirection: 'row',
                padding: 20,
                borderRadius: 10,
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: 20,
              }}>
              <View>
                <Text
                  style={{color: '#7A86C0', fontSize: 16, fontWeight: '500'}}>
                  Total Sales
                </Text>
                {loading ? (
                  <Text
                    style={{
                      color: '#c4c4c4',
                      fontSize: 30,
                      fontWeight: '700',
                    }}>
                    Loading
                  </Text>
                ) : (
                  <Text
                    style={{color: '#c4c4c4', fontSize: 30, fontWeight: '700'}}>
                    {data.wallet}
                  </Text>
                )}
              </View>
              <View
                style={{
                  borderWidth: 1,
                  borderColor: '#f9f9f9',
                  borderRadius: 6,
                }}>
                <Image
                  source={require('../assets/naira.png')}
                  style={{
                    width: 30,
                    height: 30,
                    borderWidth: 1,
                    borderColor: '#f9f9f9',
                    borderRadius: 6,
                    padding: 10,
                  }}
                />
              </View>
            </View>
            <View
              style={{
                backgroundColor: '#F9F9F9',
                display: 'flex',
                flexDirection: 'row',
                padding: 20,
                borderRadius: 10,
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: 20,
              }}>
              <View>
                <Text
                  style={{color: '#7A86C0', fontSize: 16, fontWeight: '500'}}>
                  Total Users
                </Text>
                <Text
                  style={{color: '#c4c4c4', fontSize: 30, fontWeight: '700'}}>
                  255
                </Text>
              </View>
              <View
                style={{
                  borderWidth: 1,
                  borderColor: '#f9f9f9',
                  borderRadius: 6,
                }}>
                <Image
                  source={require('../assets/total-users.png')}
                  style={{
                    width: 30,
                    height: 30,
                    borderWidth: 1,
                    borderColor: '#f9f9f9',
                    borderRadius: 6,
                    padding: 10,
                  }}
                />
              </View>
            </View>
            <View
              style={{
                backgroundColor: '#F9F9F9',
                display: 'flex',
                flexDirection: 'row',
                padding: 20,
                borderRadius: 10,
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: 20,
              }}>
              <View>
                <Text
                  style={{color: '#7A86C0', fontSize: 16, fontWeight: '500'}}>
                  New Users
                </Text>
                <Text
                  style={{color: '#c4c4c4', fontSize: 30, fontWeight: '700'}}>
                  14
                </Text>
              </View>
              <View
                style={{
                  borderWidth: 1,
                  borderColor: '#f9f9f9',
                  borderRadius: 6,
                }}>
                <Image
                  source={require('../assets/New-users.png')}
                  style={{
                    width: 30,
                    height: 30,
                    borderWidth: 1,
                    borderColor: '#f9f9f9',
                    borderRadius: 6,
                    padding: 10,
                  }}
                />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default MainPageVendor;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingHorizontal: 30,
    paddingVertical: 30,
    width: windowWidth,
  },
  user: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  userdetails: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  search: {
    backgroundColor: '#F9F9F9',
    padding: 10,
    borderRadius: 6,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  menu: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    textAlign: 'center',
  },
  text: {
    fontSize: 13,
    textAlign: 'center',
    color: '#5c5c5c',
    marginTop: 5,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    margin: 20,
    backgroundColor: '#7A86C0',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: 300,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 20,
    color: '#fff',
    fontWeight: '600',
  },
  filter: {
    marginTop: 50,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  filterprop: {
    backgroundColor: '#fff',
    borderRadius: 6,
    paddingHorizontal: 20,
    paddingVertical: 10,
    margin: 5,
    alignItems: 'center',
  },
});

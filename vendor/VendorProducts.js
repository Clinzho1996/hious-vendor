/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */

import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  Alert,
  Modal,
  Pressable,
  TextInput,
  RefreshControl,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const wait = timeout => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};

const VendorProducts = ({navigation}) => {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [product_id, setProductId] = useState('');
  const [product_name, setProductName] = useState('');
  const [product_price, setProductPrice] = useState('');
  const [product_category, setProductCategory] = useState('');
  const [product_pic, setProductPic] = useState('');
  const [description, setProductDescription] = useState('');
  const [modalVisibleEleven, setModalVisibleEleven] = useState(false);
  const [modalVisibleTwelve, setModalVisibleTwelve] = useState(false);

  const showModal = () => {
    setModalVisibleEleven(true);
  };

  const showModalTwo = () => {
    setModalVisibleTwelve(true);
  };

  async function getData() {
    const jwt = await AsyncStorage.getItem('AccessToken');
    let item = {jwt};
    console.warn(item);

    return fetch('https://hiousapp.com/api/vendor_auth/fetch_product.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(item),
    })
      .then(response => response.json())
      .then(json => setProducts(json.data))
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    getData();
  }, []);

  async function updateName() {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    let item = {product_id, product_name, product_price, product_category};
    console.warn(item);

    fetch('https://hiousapp.com/api/vendor_auth/update_product.php', {
      method: 'PUT',
      body: JSON.stringify(item),
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then(result => {
        let statusCode = result.status,
          success = result.ok;
        result.json().then(result => {
          if (!success) {
            console.log(result.message);
            Alert.alert('Warning', result.message);
            return;
          } else {
            Alert.alert('Success', result.message);
            console.log(result.message);
          }
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  async function deleteProduct() {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    let item = {product_id};

    fetch('https://hiousapp.com/api/vendor_auth/delete_product.php', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(item),
    })
      .then(result => {
        let statusCode = result.status,
          success = result.ok;
        result.json().then(result => {
          if (!success) {
            console.log(result.message);
            Alert.alert('Warning', result.message);
            return;
          } else {
            Alert.alert('Success', result.message);
            console.log(result.message);
          }
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  const Wrapper = () => {
    return (
      <FlatList
        data={products}
        renderItem={({item}) => (
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: 20,
              width: windowWidth - 60,
            }}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text style={{fontSize: 16, color: '#000'}}>
                {item.product_id}
              </Text>
              <Text
                style={{fontSize: 16, color: '#000', paddingHorizontal: 10}}>
                {item.product_name}
              </Text>
              <Text style={{fontSize: 14, color: '#c4c4c4'}}>
                {'\u20A6'} {item.product_price}
              </Text>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-end',
              }}>
              <TouchableOpacity
                style={{
                  backgroundColor: '#7A86C0',
                  padding: 8,
                  borderRadius: 6,
                  marginRight: 10,
                  marginLeft: 20,
                }}
                onPress={showModal}>
                <Icon name="pencil-outline" color={'#fff'} size={20} />
              </TouchableOpacity>
              <TouchableOpacity
                style={{backgroundColor: 'red', padding: 8, borderRadius: 6}}
                onPress={showModalTwo}>
                <Icon name="trash" color={'#fff'} size={20} />
              </TouchableOpacity>
            </View>
          </View>
        )}
        keyExtractor={item => item.id}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            size="default"
            color="#3E90FC"
          />
        }
      />
    );
  };

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisibleEleven}
        onRequestClose={() => {
          setModalVisibleEleven(!modalVisibleEleven);
        }}>
        <ScrollView
          style={styles.centeredView}
          contentContainerStyle={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {loading ? (
            <ActivityIndicator
              size="large"
              color={'blue'}
              style={{
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'center',
              }}
            />
          ) : (
            <View style={styles.modalView}>
              <Pressable
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'flex-end',
                  position: 'absolute',
                  right: 20,
                  top: 20,
                }}
                onPress={() => setModalVisibleEleven(!modalVisibleEleven)}>
                <Icon name="close" size={30} color={'#fff'} />
              </Pressable>
              <Pressable
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'flex-end',
                  position: 'absolute',
                  right: 20,
                  top: 20,
                }}
                onPress={() => setModalVisibleEleven(!modalVisibleEleven)}>
                <Icon name="close" size={30} color={'#fff'} />
              </Pressable>
              <Text style={styles.modalText}>Product ID</Text>
              <TextInput
                style={{
                  backgroundColor: '#727FBE',
                  padding: 10,
                  borderRadius: 6,
                  color: '#fff',
                  fontSize: 16,
                  width: 260,
                }}
                placeholder={'Enter Product ID'}
                placeholderTextColor={'#c4c4c4'}
                value={product_id}
                onChangeText={text => setProductId(text)}
              />
              <Text style={styles.modalText}>Product Name</Text>
              <TextInput
                style={{
                  backgroundColor: '#727FBE',
                  padding: 10,
                  borderRadius: 6,
                  color: '#fff',
                  fontSize: 16,
                  width: 260,
                }}
                placeholder={'Enter Product Name'}
                placeholderTextColor={'#c4c4c4'}
                value={product_name}
                onChangeText={text => setProductName(text)}
              />
              <Text style={styles.modalText}>Product Price</Text>
              <TextInput
                style={{
                  backgroundColor: '#727FBE',
                  padding: 10,
                  borderRadius: 6,
                  color: '#fff',
                  fontSize: 16,
                  width: 260,
                }}
                placeholder={'Update Product Price'}
                placeholderTextColor={'#c4c4c4'}
                value={product_price}
                multiline={true}
                onChangeText={text => setProductPrice(text)}
              />
              <Text style={styles.modalText}>Product Category</Text>
              <TextInput
                style={{
                  backgroundColor: '#727FBE',
                  padding: 10,
                  borderRadius: 6,
                  color: '#fff',
                  fontSize: 16,
                  width: 260,
                  marginBottom: 50,
                }}
                multiline={false}
                placeholder={'Enter Product Category'}
                placeholderTextColor={'#f7f7f7'}
                value={product_category}
                onChangeText={text => setProductCategory(text)}
              />
              <View style={styles.close}>
                <TouchableOpacity
                  onPress={() => setModalVisibleEleven(!modalVisibleEleven)}>
                  <Text
                    style={{color: '#B4BDE4', fontSize: 16, fontWeight: '400'}}>
                    Cancel
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    setModalVisibleEleven(!modalVisibleEleven);
                    navigation.navigate('VendorProducts');
                    updateName();
                  }}>
                  <Text
                    style={{
                      color: '#fff',
                      fontSize: 16,
                      fontWeight: '500',
                      marginLeft: 20,
                    }}>
                    Save
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </ScrollView>
      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisibleTwelve}
        onRequestClose={() => {
          setModalVisibleTwelve(!modalVisibleTwelve);
        }}>
        <ScrollView
          style={styles.centeredView}
          contentContainerStyle={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View style={styles.modalView}>
            <Pressable
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'flex-end',
                position: 'absolute',
                right: 20,
                top: 20,
              }}
              onPress={() => setModalVisibleTwelve(!modalVisibleTwelve)}>
              <Icon name="close" size={30} color={'#fff'} />
            </Pressable>
            <Pressable
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'flex-end',
                position: 'absolute',
                right: 20,
                top: 20,
              }}
              onPress={() => setModalVisibleTwelve(!modalVisibleTwelve)}>
              <Icon name="close" size={30} color={'#fff'} />
            </Pressable>
            <Text style={styles.modalText}>
              Enter product id to confirm deletion of item
            </Text>
            {loading ? (
              <ActivityIndicator
                size="large"
                color={'blue'}
                style={{
                  alignItems: 'center',
                  flexDirection: 'row',
                  justifyContent: 'center',
                }}
              />
            ) : (
              <TextInput
                style={{
                  backgroundColor: '#727FBE',
                  padding: 10,
                  borderRadius: 6,
                  color: '#fff',
                  fontSize: 16,
                  width: 260,
                  marginBottom: 50,
                }}
                multiline={false}
                placeholder={'Product id'}
                placeholderTextColor={'#f7f7f7'}
                value={product_id}
                onChangeText={text => setProductId(text)}
              />
            )}
            <View style={styles.close}>
              <TouchableOpacity
                onPress={() => setModalVisibleTwelve(!modalVisibleTwelve)}>
                <Text
                  style={{color: '#B4BDE4', fontSize: 16, fontWeight: '400'}}>
                  Cancel
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setModalVisibleTwelve(!modalVisibleTwelve);
                  navigation.navigate('VendorProducts');
                  deleteProduct();
                }}>
                <Text
                  style={{
                    color: '#fff',
                    fontSize: 16,
                    fontWeight: '500',
                    marginLeft: 20,
                  }}>
                  Delete
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </Modal>
      <View
        style={{
          paddingHorizontal: 0,
          paddingBottom: 20,
          flexDirection: 'row',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('HomeVendor')}>
            <Icon name="arrow-back" size={30} color={'#828282'} />
          </TouchableOpacity>
        </View>
        <View style={styles.info}>
          <TouchableOpacity onPress={() => navigation.navigate('AddProduct')}>
            <Icon name="add-outline" size={30} color={'#828282'} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('NotificationsVendor')}>
            <Icon name="notifications-outline" size={30} color={'#828282'} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{paddingTop: 0}}>
        <Text style={{fontSize: 24, color: '#7A86C0', fontWeight: '600'}}>
          All Products
        </Text>
        <ScrollView horizontal={true}>
          {loading ? (
            <ActivityIndicator
              size="large"
              color={'blue'}
              style={{
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'center',
              }}
            />
          ) : (
            <Wrapper />
          )}
        </ScrollView>
      </View>
    </View>
  );
};

export default VendorProducts;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingVertical: 30,
    paddingHorizontal: 30,
    height: windowHeight,
  },
  info: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  heart: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingRight: 20,
    Top: 20,
    bottom: 20,
    right: 0,
    position: 'absolute',
  },
  title: {
    color: '#7A86C0',
    fontSize: 18,
    fontWeight: '500',
    marginTop: 20,
    textTransform: 'capitalize',
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
    textTransform: 'capitalize',
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
  btn: {
    backgroundColor: '#7A86C0',
    paddingHorizontal: 20,
    paddingVertical: 13,
    borderRadius: 15,
  },
  btnText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '500',
  },
  centeredView: {
    flex: 1,
    marginTop: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingTop: 50,
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
    width: windowWidth - 60,
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
    marginTop: 30,
    textAlign: 'left',
    fontSize: 20,
    color: '#fff',
    fontWeight: '600',
  },
  filter: {
    marginTop: 0,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    right: 10,
    top: 20,
  },
  filterprop: {
    borderRadius: 6,
    paddingHorizontal: 20,
    paddingVertical: 10,
    margin: 5,
    alignItems: 'center',
  },
  call: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    marginTop: 20,
    width: 300,
    padding: 15,
    borderRadius: 15,
  },
  innerDetails: {
    paddingBottom: 150,
  },

  btnPrimary: {
    paddingHorizontal: 40,
    paddingVertical: 20,
    backgroundColor: '#7A86C0',
    borderRadius: 10,
    marginTop: 30,
    paddingTop: 15,
    paddingBottom: 15,
  },
  reg: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },

  close: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 80,
    alignItems: 'flex-end',
    position: 'absolute',
    bottom: 0,
    right: 0,
    padding: 20,
  },
  productsList: {
    backgroundColor: '#fff',
    marginTop: 0,
  },
  productsListContainer: {
    paddingVertical: 8,
    marginHorizontal: 0,
    borderRadius: 10,
  },
  textInput: {
    height: 20,
    flex: 1,
    minHeight: '7%',
    marginTop: '5%',
    fontSize: 25,
    fontWeight: 'bold',
    color: '#c4c4c4',
    paddingLeft: 10,
  },
  taskWrapper: {
    marginTop: '5%',
    flexDirection: 'row',
    // alignItems: 'baseline',
    borderColor: '#D0D0D0',
    borderBottomWidth: 0.5,
    width: '100%',
    alignItems: 'stretch',
    minHeight: 40,
  },
  task: {
    paddingBottom: 20,
    paddingLeft: 10,
    paddingTop: 6,
    borderColor: 'white',
    borderBottomWidth: 1,
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
  textInputContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    borderColor: 'rgb(222,222,222)',
    borderBottomWidth: 1,
    paddingRight: 10,
    paddingBottom: 5,
  },
});

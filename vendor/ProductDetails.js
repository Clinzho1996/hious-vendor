/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/rules-of-hooks */

import React, {useEffect, useState, useContext} from 'react';
import {
  Text,
  Image,
  View,
  ScrollView,
  SafeAreaView,
  Button,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  TextInput,
  Alert,
  Modal,
  ImageBackground,
} from 'react-native';

import {getProduct} from './ProductService';
import Icon from 'react-native-vector-icons/Ionicons';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {PayWithFlutterwaveV2} from 'flutterwave-react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {SelectList} from 'react-native-dropdown-select-list';
import axios from 'axios';
import {api} from './constants';
import ImagePicker from 'react-native-image-crop-picker';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export function ProductDetails({route, navigation}) {
  const [modalVisible, setModalVisible] = useState(false);
  const {productId} = route.params;
  const [product, setProduct] = useState({});
  const [loadingTwo, setLoadingTwo] = useState(true);
  const [product_name, setProductName] = useState('');
  const [product_price, setProductPrice] = useState('');
  const [product_category, setProductCategory] = useState('');
  const [product_pic, setProductPic] = useState('');

  useEffect(() => {
    setProduct(getProduct(productId));
  });

  const cats = [
    {
      id: 1,
      value: 'Wines',
    },
    {
      id: 2,
      value: 'Provisions',
    },
    {
      id: 3,
      value: 'Cosmetics',
    },
    {
      id: 4,
      value: 'Electronics',
    },
    {
      id: 5,
      value: 'Plastics',
    },
    {
      id: 5,
      value: 'Perishables',
    },
  ];

  const [image, setImage] = useState(
    'https://api.adorable.io/avatars/80/abott@adorable.png',
  );

  const choosePhotoFromLibrary = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
      compressImageQuality: 0.7,
    }).then(image => {
      console.log('selected Image', image);
      setProductPic(image.path);
    });
  };

  async function updateVendorPic1() {
    setLoadingTwo(true);
    setTimeout(() => {
      setLoadingTwo(false);
    }, 2000);
    const imageData = new FormData();
    imageData.append({
      uri: product_pic,
      name: 'image.jpg',
      type: 'image/jpg',
    });
    console.log('form data', imageData);
    const jwt = await AsyncStorage.getItem('AccessToken');
    let item = {imageData, jwt};
    console.warn(item);

    axios({
      method: 'post',
      url: api,
      data: imageData,
    })
      .then(function (response) {
        console.log('image upload successfully', response.data);
      })
      .then(error => {
        console.log('error riased', error);
      });
  }

  const showModal = () => {
    setModalVisible(true);
  };

  async function createProduct() {
    setLoadingTwo(true);
    setTimeout(() => {
      setLoadingTwo(false);
    }, 2000);
    const jwt = await AsyncStorage.getItem('AccessToken');
    let item = {
      product_name,
      product_price,
      product_category,
      product_pic,
      jwt,
    };
    console.warn(item);

    fetch('https://hiousapp.com/api/vendor_auth/create_product.php', {
      method: 'POST',
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
            console.log(result.message);
          }
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <TouchableOpacity
                style={{
                  justifyContent: 'center',
                  display: 'flex',
                  flexDirection: 'row',
                  padding: 20,
                }}
                onPress={choosePhotoFromLibrary}>
                <ImageBackground
                  source={{
                    uri: product_pic,
                  }}
                  style={{
                    height: 100,
                    width: 100,
                    borderWidth: 1,
                    borderColor: '#fff',
                    borderRadius: 15,
                  }}
                  imageStyle={{
                    borderRadius: 15,
                    borderWidth: 1,
                    borderColor: '#fff',
                  }}>
                  <View
                    style={{
                      flex: 1,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Icon
                      name="camera"
                      size={35}
                      color="#fff"
                      style={{
                        opacity: 0.7,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderWidth: 1,
                        borderColor: '#fff',
                        borderRadius: 10,
                      }}
                    />
                  </View>
                </ImageBackground>
              </TouchableOpacity>

              <TextInput
                style={{
                  backgroundColor: '#727FBE',
                  padding: 10,
                  borderRadius: 6,
                  color: '#fff',
                  fontSize: 16,
                  width: 260,
                  marginBottom: 20,
                }}
                placeholder={'Image'}
                placeholderTextColor={'#f7f7f7'}
                value={product_pic}
                onChangeText={text => setProductPic(text)}
              />
              <View style={styles.close}>
                <TouchableOpacity
                  onPress={() => setModalVisible(!modalVisible)}>
                  <Text
                    style={{color: '#B4BDE4', fontSize: 16, fontWeight: '400'}}>
                    Cancel
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    setModalVisible(!modalVisible);
                    Alert.alert('Success', 'Image added successfully');
                    updateVendorPic1();
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
          </View>
        </Modal>
        <View
          style={{
            paddingHorizontal: 0,
            paddingBottom: 0,
            flexDirection: 'row',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View>
            <TouchableOpacity
              onPress={() => navigation.navigate('StoreDetailsVendor')}>
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
        <Text
          style={{
            fontSize: 24,
            color: '#7A86C0',
            paddingVertical: 10,
            fontWeight: '600',
          }}>
          Edit product
        </Text>
        <TouchableOpacity onPress={showModal}>
          <ImageBackground
            style={{
              width: windowWidth - 60,
              height: 250,
              borderRadius: 20,
              borderWidth: 1,
              borderColor: '#c4c4c4',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            imageStyle={{borderRadius: 20}}
            source={{uri: product_pic}}>
            <Text>Click to add Image</Text>
          </ImageBackground>
        </TouchableOpacity>
        <View style={styles.infoContainer}>
          <Text style={{color: '#676767', fontSize: 14, fontWeight: '400'}}>
            item name*
          </Text>
          <TextInput
            style={styles.name}
            placeholder={'Enter product name'}
            placeholderTextColor={'#676767'}
            value={product.name}
            onChangeText={text => setProductName(text)}
          />
          <Text
            style={{
              color: '#676767',
              fontSize: 14,
              fontWeight: '400',
              marginTop: 20,
            }}>
            Price (NGN) *
          </Text>
          <TextInput
            style={styles.name}
            placeholder={'Enter product price'}
            placeholderTextColor={'#676767'}
            value={product.price}
            onChangeText={text => setProductPrice(text)}
          />
          <Text
            style={{
              color: '#676767',
              fontSize: 14,
              fontWeight: '400',
              marginTop: 20,
              marginBottom: 20,
            }}>
            Category *
          </Text>
          <SelectList
            data={cats}
            save="value"
            setSelected={setProductCategory}
            inputStyles={{color: '#000'}}
            boxStyles={{
              backgroundColor: '#F9F9F9',
              borderColor: '#727FBE',
            }}
            dropdownStyles={{backgroundColor: '#F9F9F9', color: '#000'}}
            dropdownTextStyles={{color: '#000'}}
          />
          <Text
            style={{
              color: '#676767',
              fontSize: 14,
              fontWeight: '400',
              marginTop: 20,
            }}>
            Description *
          </Text>
          <TextInput
            style={styles.name}
            placeholderTextColor={'#676767'}
            value={product.description}
            multiline={true}
          />
          <TouchableOpacity
            style={styles.btnPrimary}
            title="Add to cart"
            onPress={createProduct}>
            <Text style={styles.reg}>Save Changes</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnDelete}>
            <Text style={styles.reg}>Delete Product</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingVertical: 30,
    paddingHorizontal: 30,
    width: windowWidth,
    height: windowHeight,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 16,
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowColor: 'black',
    shadowOffset: {
      height: 0,
      width: 0,
    },
    elevation: 1,
    marginVertical: 20,
  },
  image: {
    height: 250,
    width: '100%',
    borderRadius: 20,
  },
  infoContainer: {
    padding: 16,
  },
  info: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: '400',
    backgroundColor: '#F9F9F9',
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 10,
    color: '#676767',
    padding: 10,
  },
  price: {
    fontSize: 16,
    fontWeight: '600',
    backgroundColor: '#F9F9F9',
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 10,
    color: '#676767',
  },
  description: {
    fontSize: 14,
    fontWeight: '400',
    color: '#787878',
    backgroundColor: '#F9F9F9',
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  btnPrimary: {
    paddingHorizontal: 40,
    paddingVertical: 20,
    backgroundColor: '#7A86C0',
    borderRadius: 10,
    marginTop: 20,
    paddingTop: 15,
    paddingBottom: 15,
    marginBottom: 20,
  },
  btnDelete: {
    paddingHorizontal: 40,
    paddingVertical: 20,
    backgroundColor: 'red',
    borderRadius: 10,
    marginTop: 0,
    paddingTop: 15,
    paddingBottom: 15,
    marginBottom: 50,
  },
  reg: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
    textAlign: 'center',
    fontSize: 24,
    color: '#fff',
    fontWeight: '600',
  },
  close: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 50,
    alignItems: 'flex-end',
    position: 'absolute',
    bottom: 0,
    right: 20,
    padding: 20,
  },
});

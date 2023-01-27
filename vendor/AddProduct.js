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
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {SelectList} from 'react-native-dropdown-select-list';
import axios from 'axios';
import {api} from './constants';
import ImagePicker from 'react-native-image-crop-picker';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export function AddProduct({route, navigation}) {
  const [modalVisible, setModalVisible] = useState(false);
  const [product, setProduct] = useState({});
  const [loadingTwo, setLoadingTwo] = useState(true);
  const [product_name, setProductName] = useState('');
  const [product_price, setProductPrice] = useState('');
  const [product_category, setProductCategory] = useState('');
  const [product_pic, setProductPic] = useState('');
  const [description, setProductDescription] = useState('');

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

  const [loading, setLoading] = useState(false);

  const openPicker = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
    }).then(image => {
      setImage(image.path);
    });
  };

  async function createProduct() {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    const formData = new FormData();
    formData.append('image', {
      uri: image,
      name: 'image.jpg',
      type: 'image/jpg',
    });
    formData.append('product name', product_name);
    formData.append('product price', product_price);
    formData.append('product category', product_category);
    if (product_name.length > 0) {
      setProductName('');
    }
    if (image.length > 0) {
      setImage('');
    }
    if (product_price.length > 0) {
      setProductPrice('');
    }
    if (description.length > 0) {
      setProductDescription('');
    }
    if (product_category.length > 0) {
      setProductCategory('');
    }

    formData.append('jwt', await AsyncStorage.getItem('AccessToken'));
    fetch('https://hiousapp.com/api/vendor_auth/create_product.php', {
      method: 'POST',
      body: formData,
    })
      .then(response => response.json())
      .then(imagedata => {
        setImage(imagedata.image);
        console.log(imagedata);
        Alert.alert('Success', imagedata.message);
      })
      .catch(error => {
        console.error(error);
      });
  }

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : null}>
      <ScrollView
        style={{
          backgroundColor: '#fff',
          paddingHorizontal: 30,
          paddingVertical: 20,
        }}>
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
            <TouchableOpacity>
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
          Add New Product
        </Text>
        <View style={{alignItems: 'center', display: 'flex'}}>
          <ImageBackground
            source={{uri: image}}
            defaultSource={require('../assets/placeholder.jpg')}
            style={{
              width: 330,
              height: 200,
              borderWidth: 1,
              borderColor: '#5c5c5c',
              margin: 0,
              borderRadius: 10,
            }}
            imageStyle={{
              width: 330,
              height: 200,
              borderWidth: 1,
              borderColor: '#5c5c5c',
              margin: 0,
              borderRadius: 10,
            }}
            resizeMode={'cover'}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-end',
                alignItems: 'center',
                position: 'absolute',
                bottom: 10,
                right: 0,
                paddingHorizontal: 10,
              }}>
              <TouchableOpacity
                onPress={openPicker}
                style={{
                  marginRight: 10,
                  backgroundColor: '#7A86C0',
                  padding: 10,
                  borderRadius: 10,
                }}>
                <Icon name="pencil-outline" size={30} color={'#fff'} />
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.infoContainer}>
          <Text style={{color: '#676767', fontSize: 14, fontWeight: '400'}}>
            item name*
          </Text>
          <TextInput
            style={styles.name}
            placeholder={'Enter product name'}
            placeholderTextColor={'#676767'}
            value={product_name}
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
            value={product_price}
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
            placeholder={'Enter product description here'}
            placeholderTextColor={'#676767'}
            value={description}
            multiline={true}
            onChangeText={text => setProductDescription(text)}
          />
          <TouchableOpacity style={styles.btnPrimary} onPress={createProduct}>
            <Text style={styles.reg}>Add new product</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingVertical: 30,
    paddingHorizontal: 30,
    width: windowWidth,
    height: windowHeight,
    flexGrow: 1,
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
    marginBottom: 50,
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
  containerTwo: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: '#fff',
    height: 900,
  },
});

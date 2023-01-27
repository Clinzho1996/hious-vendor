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
  Alert,
  Modal,
  RefreshControl,
  TextInput,
  FlatList,
  KeyboardAvoidingView,
  ActivityIndicator,
  Pressable,
  ImageBackground,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ImagePicker from 'react-native-image-crop-picker';

const windowWidth = Dimensions.get('window').width;

const wait = timeout => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};

const StoreDetailsVendor = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [visible, setVisible] = React.useState(false);
  const [image, setImage] = useState();
  const [imageTwo, setImageTwo] = useState();
  const [imageThree, setImageThree] = useState();
  const [imageFour, setImageFour] = useState();

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [product_name, setProductName] = useState('');
  const [product_price, setProductPrice] = useState('');
  const [product_category, setProductCategory] = useState('');
  const [product_id, setProductId] = useState('');
  const [product_pic, setProductPic] = useState('');
  const [description, setProductDescription] = useState('');
  const [modalVisibleEleven, setModalVisibleEleven] = useState(false);

  const [modalVisibleTwelve, setModalVisibleTwelve] = useState(false);

  const showModal = () => {
    setModalVisible(true);
  };

  const showModalTwo = () => {
    setModalVisibleEleven(true);
  };

  const showModalThree = () => {
    setModalVisibleTwelve(true);
  };

  const openPicker = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
    }).then(image => {
      setImage(image.path);
    });
  };

  const openPickerTwo = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
    }).then(imageTwo => {
      setImageTwo(imageTwo.path);
    });
  };

  const openPickerThree = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
    }).then(imageThree => {
      setImageThree(imageThree.path);
    });
  };

  const openPickerFour = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
    }).then(imageFour => {
      setImageFour(imageFour.path);
    });
  };

  async function getUserData() {
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
    getUserData();
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

  async function uploadAvatar() {
    const formData = new FormData();
    formData.append('image', {
      uri: image,
      name: 'image.jpg',
      type: 'image/jpg',
    });
    formData.append('jwt', await AsyncStorage.getItem('AccessToken'));
    fetch('https://hiousapp.com/api/vendor_auth/update_vendor_pic1.php', {
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

  async function uploadAvatarTwo() {
    const formData = new FormData();
    formData.append('image', {
      uri: imageTwo,
      name: 'image.jpg',
      type: 'image/jpg',
    });
    formData.append('jwt', await AsyncStorage.getItem('AccessToken'));
    fetch('https://hiousapp.com/api/vendor_auth/update_vendor_pic2.php', {
      method: 'POST',
      body: formData,
    })
      .then(response => response.json())
      .then(imagedata => {
        setImageTwo(imagedata.imageTwo);
        console.log(imagedata);
        Alert.alert('Success', imagedata.message);
      })
      .catch(error => {
        console.error(error);
      });
  }

  async function uploadAvatarThree() {
    const formData = new FormData();
    formData.append('image', {
      uri: imageThree,
      name: 'image.jpg',
      type: 'image/jpg',
    });
    formData.append('jwt', await AsyncStorage.getItem('AccessToken'));
    fetch('https://hiousapp.com/api/vendor_auth/update_vendor_pic3.php', {
      method: 'POST',
      body: formData,
    })
      .then(response => response.json())
      .then(imagedata => {
        setImageThree(imagedata.imageThree);
        console.log(imagedata);
        Alert.alert('Success', imagedata.message);
      })
      .catch(error => {
        console.error(error);
      });
  }

  async function uploadAvatarFour() {
    const formData = new FormData();
    formData.append('image', {
      uri: imageFour,
      name: 'image.jpg',
      type: 'image/jpg',
    });
    formData.append('jwt', await AsyncStorage.getItem('AccessToken'));
    fetch('https://hiousapp.com/api/vendor_auth/update_vendor_pic4.php', {
      method: 'POST',
      body: formData,
    })
      .then(response => response.json())
      .then(imagedata => {
        setImageFour(imagedata.imageFour);
        console.log(imagedata);
        Alert.alert('Success', imagedata.message);
      })
      .catch(error => {
        console.error(error);
      });
  }

  const [products, setProducts] = useState([]);

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

  const Wrapper = () => {
    if (!products || !products.length) return null;
    // Limit the number of items displayed in the list
    const limitedProducts = products.slice(0, 4);
    return (
      <FlatList
        data={limitedProducts}
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
                justifyContent: 'space-around',
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
              }}>
              <TouchableOpacity
                style={{
                  backgroundColor: '#7A86C0',
                  padding: 8,
                  borderRadius: 6,
                  marginRight: 10,
                  marginLeft: 20,
                }}
                onPress={showModalTwo}>
                <Icon name="pencil-outline" color={'#fff'} size={20} />
              </TouchableOpacity>
              <TouchableOpacity
                style={{backgroundColor: 'red', padding: 8, borderRadius: 6}}
                onPress={showModalThree}>
                <Icon name="trash" color={'#fff'} size={20} />
              </TouchableOpacity>
            </View>
          </View>
        )}
        keyExtractor={item => item.id}
      />
    );
  };

  return (
    <View>
      <ScrollView
        horizontal={false}
        contentContainerStyle={styles.container}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            enabled={true}
            size="default"
            color="#3E90FC"
          />
        }>
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
                    onPress={() => setModalVisibleTwelve(!modalVisibleTwelve)}>
                    <Text
                      style={{
                        color: '#B4BDE4',
                        fontSize: 16,
                        fontWeight: '400',
                      }}>
                      Cancel
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      setModalVisibleTwelve(!modalVisibleTwelve);
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
                      Delete
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
            <TouchableOpacity>
              <Icon name="notifications-outline" size={30} color={'#828282'} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.innerDetails}>
          <View>
            <View style={{alignItems: 'center', display: 'flex'}}>
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
                <ImageBackground
                  source={{
                    uri: image || data.pic_1,
                  }}
                  style={{
                    width: 300,
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
                    <TouchableOpacity
                      onPress={uploadAvatar}
                      style={{
                        marginRight: 20,
                        backgroundColor: '#ffa500',
                        padding: 10,
                        borderRadius: 10,
                      }}>
                      <Icon
                        name="cloud-upload-outline"
                        size={30}
                        color={'#fff'}
                      />
                    </TouchableOpacity>
                  </View>
                </ImageBackground>
              )}
            </View>
            <View
              style={{
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around',
                marginTop: 20,
              }}>
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
                <ImageBackground
                  source={{
                    uri: imageTwo || data.pic_2,
                  }}
                  style={{
                    width: 95,
                    height: 95,
                    borderWidth: 1,
                    borderColor: '#5c5c5c',
                    margin: 0,
                    borderRadius: 10,
                  }}
                  imageStyle={{
                    width: 95,
                    height: 95,
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
                      paddingHorizontal: 0,
                    }}>
                    <TouchableOpacity
                      onPress={openPickerTwo}
                      style={{
                        marginRight: 10,
                        backgroundColor: '#7A86C0',
                        padding: 5,
                        borderRadius: 10,
                      }}>
                      <Icon name="pencil-outline" size={20} color={'#fff'} />
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={uploadAvatarTwo}
                      style={{
                        marginRight: 20,
                        backgroundColor: '#ffa500',
                        padding: 5,
                        borderRadius: 10,
                      }}>
                      <Icon
                        name="cloud-upload-outline"
                        size={20}
                        color={'#fff'}
                      />
                    </TouchableOpacity>
                  </View>
                </ImageBackground>
              )}
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
                <ImageBackground
                  source={{
                    uri: imageThree || data.pic_3,
                  }}
                  style={{
                    width: 95,
                    height: 95,
                    borderWidth: 1,
                    borderColor: '#5c5c5c',
                    margin: 0,
                    borderRadius: 10,
                  }}
                  imageStyle={{
                    width: 95,
                    height: 95,
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
                      paddingHorizontal: 0,
                    }}>
                    <TouchableOpacity
                      onPress={openPickerThree}
                      style={{
                        marginRight: 10,
                        backgroundColor: '#7A86C0',
                        padding: 5,
                        borderRadius: 10,
                      }}>
                      <Icon name="pencil-outline" size={20} color={'#fff'} />
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={uploadAvatarThree}
                      style={{
                        marginRight: 20,
                        backgroundColor: '#ffa500',
                        padding: 5,
                        borderRadius: 10,
                      }}>
                      <Icon
                        name="cloud-upload-outline"
                        size={20}
                        color={'#fff'}
                      />
                    </TouchableOpacity>
                  </View>
                </ImageBackground>
              )}
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
                <ImageBackground
                  source={{
                    uri: imageFour || data.pic_4,
                  }}
                  style={{
                    width: 95,
                    height: 95,
                    borderWidth: 1,
                    borderColor: '#5c5c5c',
                    margin: 0,
                    borderRadius: 10,
                  }}
                  imageStyle={{
                    width: 95,
                    height: 95,
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
                      paddingHorizontal: 0,
                    }}>
                    <TouchableOpacity
                      onPress={openPickerFour}
                      style={{
                        marginRight: 10,
                        backgroundColor: '#7A86C0',
                        padding: 5,
                        borderRadius: 10,
                      }}>
                      <Icon name="pencil-outline" size={20} color={'#fff'} />
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={uploadAvatarFour}
                      style={{
                        marginRight: 20,
                        backgroundColor: '#ffa500',
                        padding: 5,
                        borderRadius: 10,
                      }}>
                      <Icon
                        name="cloud-upload-outline"
                        size={20}
                        color={'#fff'}
                      />
                    </TouchableOpacity>
                  </View>
                </ImageBackground>
              )}
            </View>
            <View
              style={{
                borderBottomColor: '#97979733',
                borderBottomWidth: 1,
                paddingBottom: 20,
              }}>
              <Text style={styles.title}>Business name</Text>
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
                <Text style={styles.text}>{data.name}</Text>
              )}
            </View>

            <View
              style={{
                borderBottomColor: '#97979733',
                borderBottomWidth: 1,
                paddingBottom: 20,
              }}>
              <Text style={styles.title}>About</Text>
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
                <Text style={styles.text}>{data.about}</Text>
              )}
            </View>
            <View
              style={{
                borderBottomColor: '#97979733',
                borderBottomWidth: 1,
                paddingBottom: 20,
              }}>
              <Text style={styles.title}>Address</Text>
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
                <Text style={styles.text}>{data.location}</Text>
              )}
            </View>
            <View style={{backgroundColor: '#fff'}}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 20,
                  justifyContent: 'space-between',
                  borderBottomColor: '#97979733',
                  borderBottomWidth: 1,
                  paddingBottom: 20,
                }}>
                <Text style={styles.titlePhoto}>Registered on</Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate('PhotosVendor')}>
                  <Text style={{color: '#5C5C5C'}}>03/09/2022</Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 20,
                  justifyContent: 'space-between',
                }}>
                <Text style={styles.titlePhoto}>Products</Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate('VendorProducts')}>
                  <Text style={{color: '#5C5C5C'}}>Edit</Text>
                </TouchableOpacity>
              </View>
            </View>
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
            <View>
              <TouchableOpacity
                style={styles.btnPrimary}
                onPress={() => navigation.navigate('VendorProducts')}>
                <Text style={styles.reg}>All Products</Text>
              </TouchableOpacity>
            </View>
            <View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 30,
                  justifyContent: 'space-between',
                }}>
                <Text style={styles.titlePhoto}>Reviews/Ratings</Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate('ReviewsVendor')}>
                  <Text style={{color: '#5C5C5C'}}>See all</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.review}>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Text style={styles.text}>4.6</Text>
                  <Icon name="star" color={'#828282'} />
                  <Icon name="star" color={'#828282'} />
                  <Icon name="star" color={'#828282'} />
                  <Icon name="star" color={'#828282'} />
                  <Icon name="star-half-outline" color={'#828282'} />
                </View>
                <Text style={styles.text}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus
                  in in nulla senectus tincidunt nunc, phasellus.
                </Text>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 20,
                  }}>
                  <Image
                    source={require('../assets/m.png')}
                    style={{width: 50, height: 50}}
                  />
                  <View style={styles.reviewEnt}>
                    <Text
                      style={{
                        color: '#5C5C5C',
                        fontSize: 16,
                        fontWeight: '500',
                      }}>
                      Lorem ipsumalo
                    </Text>
                    <Text style={styles.text}>April 04th, 2022</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default StoreDetailsVendor;

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
    marginBottom: -100,
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
    marginTop: 50,
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
  button: {
    fontSize: 20,
    color: '#fff',
    paddingHorizontal: 40,
    paddingVertical: 20,
    backgroundColor: '#7A86C0',
    borderRadius: 10,
    marginTop: 15,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  cancelButton: {
    backgroundColor: '#fff',
    color: 'blue',
  },
  selectedImage: {
    width: 335,
    height: 200,
    marginTop: 20,
    borderRadius: 10,
  },
});

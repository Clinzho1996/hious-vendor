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
  ImageBackground,
  RefreshControl,
  TextInput,
  FlatList,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {api} from './constants';
import axios from 'axios';
import {Product} from './Product';
import {getProducts} from './ProductService';
import FormData from 'form-data';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import * as ImagePicker from 'react-native-image-picker';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const wait = timeout => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};

const StoreDetailsVendor = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisibleTwo, setModalVisibleTwo] = useState(false);
  const [modalVisibleThree, setModalVisibleThree] = useState(false);
  const [modalVisibleFour, setModalVisibleFour] = useState(false);
  const [liked, setLiked] = useState(false);
  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);
  const [refreshing, setRefreshing] = React.useState(false);

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

  const [image, setImage] = useState(
    'https://api.adorable.io/avatars/80/abott@adorable.png',
  );
  const [imageTwo, setImageTwo] = useState(
    'https://api.adorable.io/avatars/80/abott@adorable.png',
  );
  const [imageThree, setImageThree] = useState(
    'https://api.adorable.io/avatars/80/abott@adorable.png',
  );
  const [imageFour, setImageFour] = useState(
    'https://api.adorable.io/avatars/80/abott@adorable.png',
  );

  const takePhotoFromCamera = () => {
    ImagePicker.openCamera({
      compressImageMaxWidth: 300,
      compressImageMaxHeight: 300,
      cropping: true,
      compressImageQuality: 0.7,
    }).then(image => {
      console.log(image);
      setImage(image.path);
    });
  };

  const choosePhotoFromLibrary = () => {
    ImagePicker.launchImageLibrary({
      mediaType: 'photo',
      includeBase64: true,
      maxHeight: 300,
      maxWidth: 300,
      compressImageQuality: 0.7,
    }).then(image => {
      console.log(image.assets[0].uri);
      setImage(image.assets[0].uri);
    });
  };
  const choosePhotoFromLibraryTwo = () => {
    ImagePicker.launchImageLibrary({
      mediaType: 'photo',
      includeBase64: true,
      maxHeight: 300,
      maxWidth: 300,
    }).then(imageTwo => {
      console.log(imageTwo.assets[0].uri);
      setImageTwo(imageTwo.assets[0].uri);
    });
  };
  const choosePhotoFromLibraryThree = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
      compressImageQuality: 0.7,
    }).then(imageThree => {
      console.log(imageThree);
      setImageThree(imageThree.path);
    });
  };
  const choosePhotoFromLibraryFour = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
      compressImageQuality: 0.7,
    }).then(imageFour => {
      console.log(imageFour);
      setImageFour(imageFour.path);
    });
  };

  const showModal = () => {
    setModalVisible(true);
  };

  const showModalTwo = () => {
    setModalVisibleTwo(true);
  };

  const showModalThree = () => {
    setModalVisibleThree(true);
  };

  const showModalFour = () => {
    setModalVisibleFour(true);
  };

  async function updateVendorPic1() {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    const formData = new FormData();
    data.append('image', {
      name: 'some_name', // also, won't work without this. A name is required
      height: image.height,
      width: image.width,
      type: 'multipart/form-data', // <-- this part here
      uri:
        Platform.OS === 'android' ? image.uri : image.uri.replace('file:/', ''),
    });
    formData.append('jwt', await AsyncStorage.getItem('AccessToken'));
    console.log('form data', image);
    console.warn(formData);

    fetch(
      'https://hiousapp.com/api/vendor_auth/update_vendor_pic1.php',
      formData,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    )
      .then(result => {
        if (result.status == 200) {
          console.log(result.message);
        } else {
          console.log(result.message);
        }
      })
      .catch(error => {
        console.error(error);
      });
  }

  async function updateVendorPic2() {
    var data = new FormData();

    data.append('files', {
      uri: imageTwo.uri,
      name: 'image.jpg',
      type: 'image/jpeg',
    });

    var config = {
      method: 'post',
      url: 'https://hiousapp.com/api/vendor_auth/update_vendor_pic2.php',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
      },
      data: data,
    };

    axios(config)
      .then(response => {
        console.log(JSON.stringify(response.data));
      })
      .catch(error => {
        console.log(error);
      });
  }

  async function updateVendorPic3() {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    const formData = new FormData();
    formData.append('file', imageThree);
    console.log('form data', imageThree);
    const jwt = await AsyncStorage.getItem('AccessToken');
    let item = {imageThree, jwt};
    console.warn(item);

    fetch('https://hiousapp.com/api/vendor_auth/update_vendor_pic3.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
      .then(result => {
        if (result.status == 200) {
          console.log(result.message);
        } else {
          console.log(result.message);
        }
      })
      .catch(error => {
        console.error(error);
      });
  }

  async function updateVendorPic4() {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    const formData = new FormData();
    formData.append('file', imageFour[0]);
    console.log('form data', imageFour);
    const jwt = await AsyncStorage.getItem('AccessToken');
    let item = {imageFour, jwt};
    console.warn(item);

    fetch('https://hiousapp.com/api/vendor_auth/update_vendor_pic4.php', item, {
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
      .then(result => {
        if (result.status == 200) {
          console.log(result.message);
        } else {
          console.log(result.message);
        }
      })
      .catch(error => {
        console.error(error);
      });
  }

  function renderProduct({item: product}) {
    return (
      <Product
        {...product}
        onPress={() => {
          navigation.navigate('ProductDetails', {
            productId: product.id,
          });
        }}
      />
    );
  }

  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(getProducts());
  });

  return (
    <KeyboardAvoidingView>
      <ScrollView
        contentContainerStyle={styles.container}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            size="default"
            color="#3E90FC"
          />
        }>
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
                    uri: image,
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
                placeholder={data.name}
                placeholderTextColor={'#f7f7f7'}
                value={image}
                onChangeText={text => setImage(text)}
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
                    navigation.navigate('StoreDetailsVendor');
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
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisibleTwo}
          onRequestClose={() => {
            setModalVisibleTwo(!modalVisibleTwo);
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
                onPress={choosePhotoFromLibraryTwo}>
                <ImageBackground
                  source={{
                    uri: imageTwo,
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
                placeholder={data.name}
                placeholderTextColor={'#f7f7f7'}
                value={imageTwo}
                onChangeText={text => setImageTwo(text)}
              />
              <View style={styles.close}>
                <TouchableOpacity
                  onPress={() => setModalVisibleTwo(!modalVisibleTwo)}>
                  <Text
                    style={{color: '#B4BDE4', fontSize: 16, fontWeight: '400'}}>
                    Cancel
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    setModalVisibleTwo(!modalVisibleTwo);
                    Alert.alert('Success', 'Image updated successfully');
                    navigation.navigate('StoreDetailsVendor');
                    updateVendorPic2();
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
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisibleThree}
          onRequestClose={() => {
            setModalVisibleThree(!modalVisibleThree);
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
                onPress={choosePhotoFromLibraryThree}>
                <ImageBackground
                  source={{
                    uri: imageThree,
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
                placeholder={data.name}
                placeholderTextColor={'#f7f7f7'}
                value={imageThree}
                onChangeText={text => setImageThree(text)}
              />
              <View style={styles.close}>
                <TouchableOpacity
                  onPress={() => setModalVisibleThree(!modalVisibleThree)}>
                  <Text
                    style={{color: '#B4BDE4', fontSize: 16, fontWeight: '400'}}>
                    Cancel
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    setModalVisibleThree(!modalVisibleThree);
                    Alert.alert('Success', 'Image updated successfully');
                    navigation.navigate('StoreDetailsVendor');
                    updateVendorPic3();
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
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisibleFour}
          onRequestClose={() => {
            setModalVisibleFour(!modalVisibleFour);
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
                onPress={choosePhotoFromLibraryFour}>
                <ImageBackground
                  source={{
                    uri: imageFour,
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
                placeholder={data.name}
                placeholderTextColor={'#f7f7f7'}
                value={imageFour}
                onChangeText={text => setImageFour(text)}
              />
              <View style={styles.close}>
                <TouchableOpacity
                  onPress={() => setModalVisibleFour(!modalVisibleFour)}>
                  <Text
                    style={{color: '#B4BDE4', fontSize: 16, fontWeight: '400'}}>
                    Cancel
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    setModalVisibleFour(!modalVisibleFour);
                    Alert.alert('Success', 'Image updated successfully');
                    navigation.navigate('StoreDetailsVendor');
                    updateVendorPic4();
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
          <View
            style={{
              borderRadius: 20,
              borderWidth: 1,
              borderColor: '#c4c4c4',
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
              <Image
                source={{
                  uri: data.pic_1,
                }}
                style={{
                  width: windowWidth - 60,
                  height: 250,
                  borderRadius: 20,
                  borderWidth: 1,
                  borderColor: '#c4c4c4',
                }}
              />
            )}
            <TouchableOpacity style={styles.heart} onPress={showModal}>
              <Icon
                name={liked ? 'pencil-outline' : 'pencil-outline'}
                size={30}
                color={liked ? '#c4c4c4' : '#c4c4c4'}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 10,
            }}>
            <View
              style={{
                borderRadius: 20,
                borderWidth: 1,
                borderColor: '#c4c4c4',
              }}>
              <Image
                source={{uri: data.pic_2}}
                style={{
                  width: 90,
                  height: 90,
                  borderRadius: 20,
                  borderWidth: 1,
                  borderColor: '#c4c4c4',
                }}
              />
              <TouchableOpacity style={styles.heart} onPress={showModalTwo}>
                <Icon
                  name={liked ? 'pencil-outline' : 'pencil-outline'}
                  size={30}
                  color={liked ? '#c4c4c4' : '#c4c4c4'}
                />
              </TouchableOpacity>
            </View>
            <View
              style={{
                borderRadius: 20,
                borderWidth: 1,
                borderColor: '#c4c4c4',
              }}>
              <Image
                source={{uri: data.pic_3}}
                style={{
                  width: 90,
                  height: 90,
                  borderRadius: 20,
                  borderWidth: 1,
                  borderColor: '#c4c4c4',
                }}
              />
              <TouchableOpacity style={styles.heart} onPress={showModalThree}>
                <Icon
                  name={liked ? 'pencil-outline' : 'pencil-outline'}
                  size={30}
                  color={liked ? '#c4c4c4' : '#c4c4c4'}
                />
              </TouchableOpacity>
            </View>
            <View
              style={{
                borderRadius: 20,
                borderWidth: 1,
                borderColor: '#c4c4c4',
              }}>
              <Image
                source={{uri: data.pic_4}}
                style={{
                  width: 90,
                  height: 90,
                  borderRadius: 20,
                  borderWidth: 1,
                  borderColor: '#c4c4c4',
                }}
              />
              <TouchableOpacity style={styles.heart} onPress={showModalFour}>
                <Icon
                  name={liked ? 'pencil-outline' : 'pencil-outline'}
                  size={30}
                  color={liked ? '#c4c4c4' : '#c4c4c4'}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View>
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
                  onPress={() => navigation.navigate('PhotosVendor')}>
                  <Text style={{color: '#5C5C5C'}}>Edit</Text>
                </TouchableOpacity>
              </View>

              <FlatList
                style={styles.productsList}
                contentContainerStyle={styles.productsListContainer}
                keyExtractor={item => item.id.toString()}
                data={products}
                renderItem={renderProduct}
              />
            </View>
            <View>
              <TouchableOpacity
                style={styles.btnPrimary}
                onPress={() => navigation.navigate('VendorProducts')}>
                <Text style={styles.reg}>Edit Services</Text>
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
    </KeyboardAvoidingView>
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
});

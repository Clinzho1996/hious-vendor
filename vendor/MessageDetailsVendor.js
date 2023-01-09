/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Modal,
  ImageBackground,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {Menu} from 'react-native-paper';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const MessageDetailsVendor = ({navigation}) => {
  const [visible, setVisible] = React.useState(false);
  const [modalVisibleTwo, setModalVisibleTwo] = useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);
  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisibleTwo}
        onRequestClose={() => {
          setModalVisibleTwo(!modalVisibleTwo);
        }}>
        <View>
          <Image
            source={require('../assets/caller.png')}
            style={{width: windowWidth, height: windowHeight}}
          />
          <View style={{marginTop: -220}}>
            <TouchableOpacity
              onPress={() => setModalVisibleTwo(!modalVisibleTwo)}
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'row',
                marginBottom: -70,
                marginTop: 70,
                zIndex: 50,
              }}>
              <Image
                source={require('../assets/cancel.png')}
                style={{alignItems: 'center', width: 70, height: 70}}
              />
            </TouchableOpacity>
            <ImageBackground
              source={require('../assets/Subtract.png')}
              resizeMode={'cover'}
              style={{
                paddingVertical: 40,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingHorizontal: 30,
              }}>
              <View style={{paddingTop: 40}}>
                <TouchableOpacity>
                  <Image
                    source={require('../assets/mic.png')}
                    style={{alignItems: 'center', width: 30, height: 30}}
                  />
                </TouchableOpacity>
              </View>
              <View style={{paddingTop: 40}}>
                <Text
                  style={{color: '#FFFFFF', fontSize: 18, fontWeight: '600'}}>
                  Hious Supermarket
                </Text>
                <Text
                  style={{
                    color: '#FFFFFF',
                    fontSize: 14,
                    fontWeight: '400',
                    textAlign: 'center',
                  }}>
                  00:53
                </Text>
              </View>
              <View style={{paddingTop: 40}}>
                <TouchableOpacity>
                  <Image
                    source={require('../assets/volume.png')}
                    style={{alignItems: 'center', width: 30, height: 30}}
                  />
                </TouchableOpacity>
              </View>
            </ImageBackground>
          </View>
        </View>
      </Modal>
      <View
        style={{
          paddingHorizontal: 0,
          paddingVertical: 20,
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
        <View style={styles.user}>
          <Image source={require('../assets/m.png')} style={styles.userIcon} />
          <Text style={styles.username}>Hious Supermarket</Text>
        </View>
        <View style={styles.info}>
          <TouchableOpacity
            onPress={() => setModalVisibleTwo(!modalVisibleTwo)}>
            <Icon name="call-outline" size={30} color={'#828282'} />
          </TouchableOpacity>
          <View>
            <Menu
              visible={visible}
              onDismiss={closeMenu}
              onPress={openMenu}
              transparent={true}
              anchor={
                <TouchableOpacity onPress={openMenu}>
                  <Icon
                    name="ellipsis-vertical-outline"
                    size={30}
                    color={'#828282'}
                  />
                </TouchableOpacity>
              }
              style={{paddingTop: 40}}>
              <Menu.Item
                title="Clear history"
                style={{fontSize: 14, color: '#5C5C5C'}}
              />
              <Menu.Item
                title="Search"
                style={{fontSize: 14, color: '#5C5C5C'}}
              />
              <Menu.Item
                title="Delete chat"
                style={{fontSize: 14, color: '#5C5C5C'}}
              />
            </Menu>
          </View>
        </View>
      </View>
      <KeyboardAvoidingView
        style={styles.chat}
        behavior={Platform.OS === 'ios' ? 'padding' : null}>
        <View style={styles.input}>
          <View>
            <TouchableOpacity>
              <Image
                source={require('../assets/emoji.png')}
                style={{width: 25, height: 25}}
              />
            </TouchableOpacity>
          </View>
          <View>
            <TextInput
              placeholder="Your Message"
              placeholderTextColor={'#B4BDE4'}
              style={styles.chatText}
            />
          </View>
          <View>
            <TouchableOpacity>
              <Image
                source={require('../assets/attach.png')}
                style={{width: 25, height: 25}}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.record}>
          <TouchableOpacity>
            <Image
              source={require('../assets/mic.png')}
              style={{width: 25, height: 25}}
            />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default MessageDetailsVendor;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: windowWidth,
    height: windowHeight,
    paddingHorizontal: 30,
  },
  user: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    left: 40,
    position: 'absolute',
  },
  userIcon: {
    width: 30,
    height: 30,
  },
  username: {
    marginLeft: 10,
    color: '#828282',
  },
  info: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  chat: {
    position: 'absolute',
    bottom: 10,
    paddingHorizontal: 30,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    backgroundColor: '#7A86C0',
    padding: 5,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
    width: 260,
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  record: {
    backgroundColor: '#7A86C0',
    paddingHorizontal: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
    marginLeft: 10,
  },
  chatText: {
    fontSize: 16,
  },

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingTop: 450,
  },
  modalView: {
    margin: 20,
    backgroundColor: '#7A86C0',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
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
    width: windowWidth,
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
});

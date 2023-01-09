/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  Modal,
  ImageBackground,
  Platform,
} from 'react-native';
import React, {useCallback, useState, useLayoutEffect} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {Menu} from 'react-native-paper';
import {auth, db} from './firebase';
import {signOut} from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {InputToolbar} from 'react-native-gifted-chat/lib/InputToolbar';
import {Send} from 'react-native-gifted-chat/lib/Send';
import {
  collection,
  addDoc,
  getDocs,
  query,
  orderBy,
  onSnapshot,
} from 'firebase/firestore';
import {GiftedChat} from 'react-native-gifted-chat';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ChatVendor = ({navigation}) => {
  const [visible, setVisible] = React.useState(false);
  const [modalVisibleTwo, setModalVisibleTwo] = useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);
  const [messages, setMessages] = useState([]);
  const signOutNow = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigation.replace('Login');
      })
      .catch(error => {
        // An error happened.
      });
  };
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <View style={{marginLeft: 20}}>
          <Avatar
            rounded
            source={{
              uri: auth?.currentUser?.photoURL,
            }}
          />
        </View>
      ),
      headerRight: () => (
        <TouchableOpacity
          style={{
            marginRight: 10,
          }}
          onPress={signOutNow}>
          <Text>logout</Text>
        </TouchableOpacity>
      ),
    });

    const q = query(collection(db, 'chats'), orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, snapshot =>
      setMessages(
        snapshot.docs.map(doc => ({
          _id: doc.data()._id,
          createdAt: doc.data().createdAt.toDate(),
          text: doc.data().text,
          user: doc.data().user,
        })),
      ),
    );

    return () => {
      unsubscribe();
    };
  });

  const onSend = useCallback((messages = []) => {
    const {_id, createdAt, text, user} = messages[0];

    addDoc(collection(db, 'chats'), {_id, createdAt, text, user});
  }, []);

  function renderSend(props) {
    return (
      <Send {...props}>
        <Icon name="send" style={styles.sendIcon} />
      </Send>
    );
  }
  function renderInputToolbar(props) {
    return <InputToolbar {...props} containerStyle={styles.inputToolbar} />;
  }
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
          <TouchableOpacity onPress={() => navigation.navigate('HomeVendor')}>
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

      <View style={{flex: 1}}>
        <GiftedChat
          messages={messages}
          showAvatarForEveryMessage={true}
          onSend={messages => onSend(messages)}
          user={{
            _id: auth?.currentUser?.email,
            name: auth?.currentUser?.displayName,
          }}
          placeholder="Write a message"
          alwaysShowSend
          showUserAvatar={true}
          isTyping={true}
          renderSend={renderSend}
          renderInputToolbar={renderInputToolbar}
        />
        {Platform.OS === 'android' && (
          <KeyboardAvoidingView behavior="padding" />
        )}
      </View>
    </View>
  );
};

export default ChatVendor;

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
  inputToolbar: {
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    borderRadius: 25,
    backgroundColor: '#f3f3f3',
    color: '#c4c4c4',
  },
  sendIcon: {
    fontSize: 25,
    color: '#3A97F9',
  },
});

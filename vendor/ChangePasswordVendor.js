/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable quotes */

import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
  Dimensions,
  TouchableOpacity,
  TextInput,
  Alert,
  ActivityIndicator,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ChangePasswordVendor = ({navigation}) => {
  const [password, setPassword] = useState('');
  const [confirm_password, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);

  async function changePassword() {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);

    const jwt = await AsyncStorage.getItem('ResetToken');
    let item = {password, confirm_password, jwt};
    console.warn(item);

    fetch('https://hiousapp.com/api/vendor_auth/reset.php', {
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
            console.log(result);
            Alert.alert('Success', result.message);
            navigation.navigate('LoginVendor');
          }
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      style={styles.container}>
      <View style={styles.containerTwo}>
        {loading ? (
          <ActivityIndicator
            //visibility of Overlay Loading Spinner
            visible={loading}
            //Text with the Spinner
            textContent={'Loading...'}
            //Text style of the Spinner Text
            textStyle={styles.spinnerTextStyle}
          />
        ) : (
          <>
            <View
              style={{
                paddingHorizontal: 0,
                paddingVertical: 20,
                flexDirection: 'row',
              }}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icon name="arrow-back" size={30} color={'#828282'} />
              </TouchableOpacity>
            </View>
            <View>
              <Text style={{fontSize: 28, color: '#7A86C0', fontWeight: '600'}}>
                New password
              </Text>
              <Text
                style={{
                  paddingTop: 20,
                  fontSize: 16,
                  lineHeight: 24,
                  color: '#828282',
                }}>
                Your new password must be different {'\n'} from the old one
              </Text>
              <View>
                <View
                  style={{
                    backgroundColor: '#F9F9F9',
                    paddingHorizontal: 0,
                    paddingVertical: 0,
                    paddingBottom: 10,
                    borderRadius: 10,
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingTop: 10,
                    paddingLeft: 20,
                    marginTop: 30,
                  }}>
                  <TextInput
                    style={{
                      paddingTop: 5,
                      paddingBottom: 5,
                      fontSize: 16,
                      paddingLeft: 10,
                      color: '#C4C4C4',
                    }}
                    placeholder="Enter new password"
                    placeholderTextColor={'#C4C4C4'}
                    secureTextEntry={true}
                    value={password}
                    onChangeText={text => setPassword(text)}
                  />
                </View>
                <View
                  style={{
                    backgroundColor: '#F9F9F9',
                    paddingHorizontal: 0,
                    paddingVertical: 0,
                    paddingBottom: 10,
                    borderRadius: 10,
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingTop: 10,
                    paddingLeft: 20,
                    marginTop: 20,
                  }}>
                  <TextInput
                    style={{
                      paddingTop: 5,
                      paddingBottom: 5,
                      fontSize: 16,
                      paddingLeft: 10,
                      color: '#C4C4C4',
                    }}
                    placeholder="Confirm new password"
                    placeholderTextColor={'#C4C4C4'}
                    secureTextEntry={true}
                    value={confirm_password}
                    onChangeText={text => setConfirmPassword(text)}
                  />
                </View>
                <View>
                  <View>
                    <TouchableOpacity
                      style={styles.btnPrimary}
                      onPress={changePassword}>
                      <Text style={styles.reg}>Update Password</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </>
        )}
      </View>
    </KeyboardAvoidingView>
  );
};

export default ChangePasswordVendor;

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
  containerTwo: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    paddingTop: 0,
    padding: 8,
  },
  spinnerTextStyle: {
    color: '#FFF',
  },
});

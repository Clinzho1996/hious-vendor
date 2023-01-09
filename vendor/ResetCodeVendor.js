/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

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
import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {user_reset} from '../api/FetchUsersReset';
import AsyncStorage from '@react-native-async-storage/async-storage';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ResetCodeVendor = ({navigation}) => {
  const [ref_code, setRefCode] = useState('');
  const [loading, setLoading] = useState(false);

  async function resetCode() {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
    let item = {ref_code};
    console.warn(item);

    if (resetCode) {
      user_reset({
        ref_code: ref_code,
      })
        .then(result => {
          if (result.status == 200) {
            AsyncStorage.setItem('ResetToken', result.data.jwt);
            console.log(result);
            navigation.navigate('ChangepassVendor');
          } else {
            console.log(result.message);
            Alert.alert('Warning', result.data.message);
          }
        })
        .catch(error => {
          console.error(error);
        });
    }
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
                Reset Code
              </Text>
              <Text
                style={{
                  paddingTop: 20,
                  fontSize: 16,
                  lineHeight: 24,
                  color: '#828282',
                }}>
                Kindly enter the reset code sent to {'\n'} your email.
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
                    placeholder="Enter reset code"
                    placeholderTextColor={'#C4C4C4'}
                    value={ref_code}
                    onChangeText={text => setRefCode(text)}
                  />
                </View>
                <View>
                  <View>
                    <TouchableOpacity
                      style={styles.btnPrimary}
                      onPress={resetCode}>
                      <Text style={styles.reg}>Reset Password</Text>
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

export default ResetCodeVendor;

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
    marginTop: 330,
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

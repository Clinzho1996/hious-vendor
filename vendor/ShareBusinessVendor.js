/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {Menu} from 'react-native-paper';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ShareBusinessVendor = ({navigation}) => {
  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);
  return (
    <View style={styles.container}>
      <View
        style={{
          paddingHorizontal: 0,
          paddingVertical: 0,
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
        <View style={styles.info}>
          <TouchableOpacity
            onPress={() => navigation.navigate('NotificationsVendor')}>
            <Icon name="notifications-outline" size={30} color={'#828282'} />
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
                onPress={() => navigation.navigate('ReviewBusinessVendor')}
                title="Review Business"
                style={{fontSize: 14, color: '#5C5C5C'}}
              />
              <Menu.Item
                onPress={() => navigation.navigate('ReportVendor')}
                title="Report"
                style={{fontSize: 14, color: '#5C5C5C'}}
              />
              <Menu.Item
                onPress={() => navigation.navigate('BlockVendor')}
                title="Block vendor"
                style={{fontSize: 14, color: '#5C5C5C'}}
              />
              <Menu.Item
                onPress={() => navigation.navigate('ShareVendor')}
                title="Share"
                style={{fontSize: 14, color: '#5C5C5C'}}
              />
              <TouchableOpacity
                style={{
                  backgroundColor: '#7A86C0',
                  padding: 10,
                  margin: 10,
                  borderRadius: 10,
                }}>
                <Text
                  style={{fontSize: 14, color: '#fff', textAlign: 'center'}}>
                  Make Payment
                </Text>
              </TouchableOpacity>
            </Menu>
          </View>
        </View>
      </View>
      <Text
        style={{
          color: '#7A86C0',
          fontSize: 24,
          fontWeight: '600',
          paddingVertical: 20,
        }}>
        Share
      </Text>
      <Text
        style={{
          paddingTop: 0,
          fontSize: 16,
          lineHeight: 24,
          color: '#828282',
          paddingRight: 50,
        }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis quam non
        sem.
      </Text>
      <View style={{paddingTop: 20, paddingBottom: 50}}>
        <View style={styles.menu}>
          <TouchableOpacity
            onPress={() => navigation.navigate('SupermarketVendor')}>
            <View
              style={{
                backgroundColor: '#F9F9F9',
                padding: 20,
                borderRadius: 10,
              }}>
              <Image
                source={require('../assets/copy.png')}
                style={{width: 30, height: 30}}
              />
            </View>
            <Text style={styles.text}>Copy link</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={{
                backgroundColor: '#F9F9F9',
                padding: 20,
                borderRadius: 10,
              }}>
              <Image
                source={require('../assets/Google.png')}
                style={{width: 30, height: 30}}
              />
            </View>
            <Text style={styles.text}>Gmail</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={{
                backgroundColor: '#F9F9F9',
                padding: 20,
                borderRadius: 10,
              }}>
              <Image
                source={require('../assets/Bluetooth.png')}
                style={{width: 30, height: 30}}
              />
            </View>
            <Text style={styles.text}>Bluetooth</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={{
                backgroundColor: '#F9F9F9',
                padding: 20,
                borderRadius: 10,
              }}>
              <Image
                source={require('../assets/Skye.png')}
                style={{width: 30, height: 30}}
              />
            </View>
            <Text style={styles.text}>Skype</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.menu}>
          <TouchableOpacity
            onPress={() => navigation.navigate('SupermarketVendor')}>
            <View
              style={{
                backgroundColor: '#F9F9F9',
                padding: 20,
                borderRadius: 10,
              }}>
              <Image
                source={require('../assets/Twitter.png')}
                style={{width: 30, height: 30}}
              />
            </View>
            <Text style={styles.text}>Twitter</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={{
                backgroundColor: '#F9F9F9',
                padding: 20,
                borderRadius: 10,
              }}>
              <Image
                source={require('../assets/Discord.png')}
                style={{width: 30, height: 30}}
              />
            </View>
            <Text style={styles.text}>Discord</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={{
                backgroundColor: '#F9F9F9',
                padding: 20,
                borderRadius: 10,
              }}>
              <Image
                source={require('../assets/Tiktok.png')}
                style={{width: 30, height: 30}}
              />
            </View>
            <Text style={styles.text}>Tiktok</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={{
                backgroundColor: '#F9F9F9',
                padding: 20,
                borderRadius: 10,
              }}>
              <Icon name="logo-instagram" size={30} color={'#EA4156'} />
            </View>
            <Text style={styles.text}>Instagram</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.menu}>
          <TouchableOpacity>
            <View
              style={{
                backgroundColor: '#F9F9F9',
                padding: 20,
                borderRadius: 10,
              }}>
              <Image
                source={require('../assets/Whatsapp.png')}
                style={{width: 30, height: 30}}
              />
            </View>
            <Text style={styles.text}>WhatsApp</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={{
                backgroundColor: '#F9F9F9',
                padding: 20,
                borderRadius: 10,
              }}>
              <Image
                source={require('../assets/Telegram.png')}
                style={{width: 30, height: 30}}
              />
            </View>
            <Text style={styles.text}>Telegram</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={{
                backgroundColor: '#F9F9F9',
                padding: 20,
                borderRadius: 10,
              }}>
              <Image
                source={require('../assets/YouTube.png')}
                style={{width: 30, height: 30, borderRadius: 10}}
              />
            </View>
            <Text style={styles.text}>Youtube</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={{
                backgroundColor: '#F9F9F9',
                padding: 20,
                borderRadius: 10,
              }}>
              <Image
                source={require('../assets/Facebook.png')}
                style={{width: 30, height: 30}}
              />
            </View>
            <Text style={styles.text}>Facebook</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ShareBusinessVendor;

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
});

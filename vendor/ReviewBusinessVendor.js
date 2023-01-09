/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  TextInput,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {Menu} from 'react-native-paper';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ReviewBusinessVendor = ({navigation}) => {
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
        Review this Business
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
      <TextInput
        placeholder="Type your review here"
        style={{
          backgroundColor: '#F9F9F9',
          padding: 20,
          borderRadius: 10,
          marginTop: 30,
        }}
        multiline={true}
        numberOfLines={8}
      />

      <View>
        <Text
          style={{
            color: '#7A86C0',
            fontSize: 24,
            fontWeight: '600',
            paddingVertical: 20,
          }}>
          Rate Business
        </Text>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View>
            <Icon name="star" color={'#B4BDE4'} size={30} />
            <Text
              style={{
                color: '#5C5C5C',
                fontSize: 12,
                textAlign: 'center',
                marginTop: 10,
              }}>
              Poor
            </Text>
          </View>
          <View>
            <Icon name="star" color={'#B4BDE4'} size={30} />
            <Text
              style={{
                color: '#5C5C5C',
                fontSize: 12,
                textAlign: 'center',
                marginTop: 10,
              }}>
              Fair
            </Text>
          </View>
          <View>
            <Icon name="star" color={'#B4BDE4'} size={30} />
            <Text
              style={{
                color: '#5C5C5C',
                fontSize: 12,
                textAlign: 'center',
                marginTop: 10,
              }}>
              Good
            </Text>
          </View>
          <View>
            <Icon name="star-outline" color={'#B4BDE4'} size={30} />
            <Text
              style={{
                color: '#5C5C5C',
                fontSize: 12,
                textAlign: 'center',
                marginTop: 10,
              }}>
              Better
            </Text>
          </View>
          <View>
            <Icon name="star-outline" color={'#B4BDE4'} size={30} />
            <Text
              style={{
                color: '#5C5C5C',
                fontSize: 12,
                textAlign: 'center',
                marginTop: 10,
              }}>
              Excellent
            </Text>
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.btnPrimary}>
        <Text style={styles.reg}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ReviewBusinessVendor;

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
  btnPrimary: {
    paddingHorizontal: 40,
    paddingVertical: 20,
    backgroundColor: '#7A86C0',
    borderRadius: 10,
    marginTop: 100,
    paddingTop: 15,
    paddingBottom: 15,
  },
  reg: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
});

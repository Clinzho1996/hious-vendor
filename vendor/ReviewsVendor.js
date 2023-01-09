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
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const windowWidth = Dimensions.get('window').width;

const ReviewsVendor = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
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
          <TouchableOpacity>
            <Icon
              name="ellipsis-vertical-outline"
              size={30}
              color={'#828282'}
            />
          </TouchableOpacity>
        </View>
      </View>
      <Text
        style={{
          color: '#7A86C0',
          fontSize: 24,
          fontWeight: '600',
          paddingVertical: 20,
        }}>
        Reviews
      </Text>
      <View style={styles.innerDetails}>
        <View>
          <View style={{paddingBottom: 50}}>
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
                    style={{color: '#5C5C5C', fontSize: 16, fontWeight: '500'}}>
                    Lorem ipsumalo
                  </Text>
                  <Text style={styles.Date}>April 04th, 2022</Text>
                </View>
              </View>
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
                    style={{color: '#5C5C5C', fontSize: 16, fontWeight: '500'}}>
                    Lorem ipsumalo
                  </Text>
                  <Text style={styles.Date}>April 04th, 2022</Text>
                </View>
              </View>
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
                    style={{color: '#5C5C5C', fontSize: 16, fontWeight: '500'}}>
                    Lorem ipsumalo
                  </Text>
                  <Text style={styles.Date}>April 04th, 2022</Text>
                </View>
              </View>
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
                    style={{color: '#5C5C5C', fontSize: 16, fontWeight: '500'}}>
                    Lorem ipsumalo
                  </Text>
                  <Text style={styles.Date}>April 04th, 2022</Text>
                </View>
              </View>
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
                    style={{color: '#5C5C5C', fontSize: 16, fontWeight: '500'}}>
                    Lorem ipsumalo
                  </Text>
                  <Text style={styles.Date}>April 04th, 2022</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default ReviewsVendor;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingVertical: 30,
    paddingHorizontal: 30,
    width: windowWidth,
  },
  info: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    color: '#7A86C0',
    fontSize: 18,
    fontWeight: '500',
    marginTop: 20,
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
  },
  review: {
    padding: 20,
    backgroundColor: '#F9F9F9',
    borderRadius: 20,
    marginTop: 20,
  },
  reviewEnt: {
    marginLeft: 20,
  },
  Date: {
    color: '#C4C4C4',
    fontSize: 12,
  },
});

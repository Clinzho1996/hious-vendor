/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/rules-of-hooks */

import React, {useEffect, useState} from 'react';
import {Text, Image, View, StyleSheet, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function Product({name, price, image, onPress}) {
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
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image style={styles.thumb} source={image} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.price}>₦ {price}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#F9F8F8',
    paddingVertical: 10,
    borderRadius: 10,
    paddingHorizontal: 15,
  },
  thumb: {
    height: 60,
    borderRadius: 10,
    width: 60,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#b7b7b7',
  },
  price: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
    color: '#b7b7b7',
  },
});

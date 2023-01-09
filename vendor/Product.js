/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/rules-of-hooks */

import React from 'react';
import {Text, Image, View, StyleSheet, TouchableOpacity} from 'react-native';

export function Product({name, price, image, onPress}) {
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

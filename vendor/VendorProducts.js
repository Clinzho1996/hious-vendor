/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import {
  StyleSheet,
  View,
  Dimensions,
  FlatList,
  TouchableOpacity,
  Text,
  Platform,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Product} from './Product';
import {getProducts} from './ProductService';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';

import Icon from 'react-native-vector-icons/Ionicons';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const renderTabBar = props => (
  <TabBar
    {...props}
    inactiveColor={{backgroundColor: '#fff'}}
    tabStyle={{backgroundColor: '#fff', width: 'auto'}}
    indicatorStyle={{backgroundColor: '#7A86C0'}}
    activeColor={{color: '#7A86C0', backgroundColor: '#7A86C0'}}
  />
);

const FirstRoute = () => {
  return (
    <View style={{marginTop: 20}}>
      <Text style={{color: '#000'}}>Wines</Text>
    </View>
  );
};

const SecondRoute = () => {
  return (
    <View style={{marginTop: 20}}>
      <Text style={{color: '#000'}}>Provision</Text>
    </View>
  );
};

const ThirdRoute = () => {
  return (
    <View style={{marginTop: 20}}>
      <Text style={{color: '#000'}}>Cosmetics</Text>
    </View>
  );
};

const FourthRoute = () => {
  return (
    <View style={{marginTop: 20}}>
      <Text style={{color: '#000'}}>Electronics</Text>
    </View>
  );
};

const FifthRoute = () => {
  return (
    <View style={{marginTop: 20}}>
      <Text style={{color: '#000'}}>Fifth View</Text>
    </View>
  );
};

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  third: ThirdRoute,
  fourth: FourthRoute,
  fifth: FifthRoute,
});

const VendorProducts = ({navigation}) => {
  const [index, setIndex] = React.useState(0);

  const [routes] = React.useState([
    {key: 'first', title: 'Wine'},
    {key: 'second', title: 'Provision'},
    {key: 'third', title: 'Cosmetics'},
    {key: 'fourth', title: 'Electronics'},
    {key: 'fifth', title: 'Plastics'},
  ]);
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
    <View style={styles.container}>
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
      <View style={{paddingTop: 0}}>
        <Text style={{fontSize: 24, color: '#7A86C0', fontWeight: '600'}}>
          Products
        </Text>
      </View>
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{width: windowWidth}}
        renderTabBar={renderTabBar}
      />
      {/* <FlatList
        style={styles.productsList}
        contentContainerStyle={styles.productsListContainer}
        keyExtractor={item => item.id.toString()}
        data={products}
        renderItem={renderProduct}
      /> */}
    </View>
  );
};

export default VendorProducts;

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

import 'react-native-gesture-handler';
import React from 'react';
import {View, Text, TextInput, Image, Alert} from 'react-native';

import STYLES from '../../styles';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';

const Buysell = ({navigation}) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{marginTop: -100}}>
        <Text
          style={{
            fontSize: 27,
            fontWeight: 'bold',
            marginTop: 250,
            marginLeft: 20,
            padding: 30,
          }}>
          Do you want to Sell scrap
        </Text>
        <Text
          style={{
            fontSize: 27,
            fontWeight: 'bold',
            marginTop: -60,
            marginLeft: 100,
            padding: 30,
          }}>
          or Buy scrap?
        </Text>
      </View>

      <View style={{marginTop: 5}}>
        <TouchableOpacity onPress={() => Alert.alert(' Submitted')}>
          <View
            style={{
              backgroundColor: '#FB9902',
              height: 50,
              width: '70%',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 50,
              borderRadius: 25,
              marginLeft: 65,
              margin: 20,
            }}>
            <Text
              style={{
                color: 'black',
                fontSize: 18,
                fontFamily: 'roboto',
                marginLeft: -10,
                marginRight: 10,
                marginBottom: 8,
              }}>
              <Image source={require('../../assests/dollar.png')} />
              SELL SCRAP
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Alert.alert(' Submitted')}>
          <View
            style={{
              backgroundColor: 'black',
              height: 50,
              width: '70%',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 15,
              borderRadius: 25,
              marginLeft: 65,
              margin: 20,
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: 18,
                fontFamily: 'roboto',
                marginLeft: -20,
                marginBottom: 10,
              }}>
              <Image source={require('../../assests/cart.png')} /> BUY SCRAP
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Alert.alert(' Submitted')}>
          <View
            style={{
              backgroundColor: '#2EAE3B',
              height: 50,
              width: '90%',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 15,
              borderRadius: 25,
              marginLeft: 22,
            }}>
            <Text
              style={{
                color: 'black',
                fontSize: 18,
                fontFamily: 'roboto',
                marginBottom: 10,
                marginLeft: -10,
              }}>
              <Image source={require('../../assests/stock.png')} />
              SCRAPS IN STOCK
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Buysell;

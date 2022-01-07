import 'react-native-gesture-handler';
import React from 'react';
import {View, Text, TextInput, Image, Alert} from 'react-native';

import STYLES from '../../styles';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';

const Forgot = ({navigation}) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{marginTop: -100}}>
        <Text
          style={{
            fontSize: 27,
            fontWeight: 'bold',
            marginTop: 130,
            marginLeft: -15,
            padding: 30,
          }}>
          Password Reset
        </Text>
      </View>

      <Text
        style={{
          fontSize: 18,
          color: 'gray',
          marginLeft: 15,
          marginTop: -20,
        }}>
        Enter your phone number and we'll send you instructions on how to reset
        your password
      </Text>

      <Text
        style={{
          fontSize: 18,
          color: 'black',
          marginLeft: 20,
          marginTop: 50,
        }}>
        Phone Number
      </Text>
      <View style={{marginTop: 5}}>
        <View
          style={{
            flexDirection: 'row',
            marginTop: -5,
            marginBottom: -10,
            padding: 10,
          }}>
          <TextInput
            placeholder="Enter your phone number"
            style={{
              flex: 1,
              fontSize: 18,
              backgroundColor: 'white',
              borderRadius: 10,
              padding: 15,
            }}
          />
        </View>
        <TouchableOpacity onPress={() => Alert.alert(' Submitted')}>
          <View
            style={{
              backgroundColor: '#FB9902',
              height: 50,
              width: '95%',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 15,
              borderRadius: 7,
              marginLeft: 12,
            }}>
            <Text style={{color: 'white', fontSize: 18, fontFamily: 'roboto'}}>
              SUBMIT
            </Text>
          </View>
        </TouchableOpacity>

        <View
          style={{
            height: 50,
            width: '90%',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 15,
            borderRadius: 7,
            marginLeft: 20,
          }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text
              style={{
                color: 'gray',
                fontWeight: '500',
                fontSize: 18,
                fontFamily: 'roboto',
              }}>
              CANCEL
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Forgot;

import React from 'react';
import {
  View,
  Image,
  Button,
  TouchableOpacity,
  Text,
  ImageBackground,
} from 'react-native';
import Slider from './Slider';

const Front = ({navigation}) => {
  return (
    <>
      <ImageBackground
        source={require('../../assests/background-01.jpg')}
        style={{
          flex: 1,
          paddingHorizontal: 20,
          width: undefined,
          height: '100%',
          flexDirection: 'column',
          backgroundColor: 'transparent',
          justifyContent: 'center',
        }}>
        <View style={{flex: 1, marginTop: -80}}>
          <Image
            source={require('../../assests/ferro.png')}
            style={{
              width: '90%',
              height: 370,
              justifyContent: 'center',
              alignItems: 'flex-start',
              marginLeft: 15,
              marginTop: -20,
            }}
          />
        </View>

        <Slider />

        <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
          <View
            style={{
              backgroundColor: 'red',
              width: '90%',
              height: 45,
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: 50,
              borderRadius: 38,
              margin: 20,
              marginLeft: 18,
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,

              elevation: 4,
            }}>
            <Text style={{fontSize: 20, color: 'white', fontFamily: 'roboto'}}>
              LOGIN
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <View
            style={{
              backgroundColor: '#9FA09F',
              width: '90%',
              height: 45,
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: 50,
              borderRadius: 38,
              marginLeft: 20,
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,

              elevation: 4,
            }}>
            <Text style={{fontSize: 19, color: 'black', fontFamily: 'roboto'}}>
              SIGNUP
            </Text>
          </View>
        </TouchableOpacity>
      </ImageBackground>
    </>
  );
};

export default Front;

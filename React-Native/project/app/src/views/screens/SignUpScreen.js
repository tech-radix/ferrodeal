import 'react-native-gesture-handler';
import React from 'react';
import {View, Text, Alert, TextInput, ImageBackground} from 'react-native';

import Check from './Checkbox';
import STYLES from '../../styles';
import Drop from './Dropdown';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';

const SignUpScreen = ({navigation}) => {
  return (
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
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{marginTop: 50, marginLeft: 130}}>
          <Text style={{fontSize: 27, fontWeight: 'bold', color: '#000'}}>
            Signup
          </Text>
        </View>

        <View style={{marginTop: 50}}>
          <Text style={{fontSize: 18, color: '#C40011', marginLeft: 3}}>
            Phone Number
          </Text>
          <View style={STYLES.inputContainer}>
            <TextInput
              placeholder={'Enter your number'}
              autoCapitalize="none"
              placeholderTextColor="gray"
              style={STYLES.input}
            />
          </View>

          <View style={{marginTop: 0}}>
            <Text style={{fontSize: 18, color: '#C40011', marginLeft: 3}}>
              Email
            </Text>
          </View>
          <View style={STYLES.inputContainer}>
            <TextInput
              placeholder={'Enter email'}
              autoCapitalize="none"
              placeholderTextColor="gray"
              style={STYLES.input}
            />
          </View>

          <Text style={{fontSize: 18, color: '#C40011', marginLeft: 3}}>
            Full Name
          </Text>
          <View style={STYLES.inputContainer}>
            <TextInput
              placeholder={'Enter your full name'}
              autoCapitalize="none"
              placeholderTextColor="gray"
              style={STYLES.input}
            />
          </View>

          <Text style={{fontSize: 18, color: '#C40011', marginLeft: 3}}>
            Company Name
          </Text>
          <View style={STYLES.inputContainer}>
            <TextInput
              placeholder={'Enter firm name'}
              autoCapitalize="none"
              placeholderTextColor="gray"
              style={STYLES.input}
            />
          </View>

          <Text style={{fontSize: 18, color: '#C40011', marginLeft: 3}}>
            GST number
          </Text>
          <View style={STYLES.inputContainer}>
            <TextInput
              placeholder={'Enter GST number'}
              autoCapitalize="none"
              placeholderTextColor="gray"
              style={STYLES.input}
            />
          </View>

          <Drop />

          <Text style={{fontSize: 18, color: '#C40011', marginLeft: 3}}>
            Password
          </Text>
          <View style={STYLES.inputContainer}>
            <TextInput
              placeholder="Password"
              style={STYLES.input}
              secureTextEntry
            />
          </View>

          <Text style={{fontSize: 18, color: '#C40011', marginLeft: 3}}>
            Confirm Password
          </Text>
          <View style={STYLES.inputContainer}>
            <TextInput
              placeholder="Confirm Password"
              style={STYLES.input}
              secureTextEntry
            />
          </View>

          <Check />

          <Text
            onPress={() =>
              Alert.alert(
                '1. Last 2 years Financials and current year provisional balance sheets \n2.last 6 months all bank statement. \n3. Propprietor KYC (Pan and Aadhar). \n4. Post dated Cheque (PDC) with out date as security.',
              )
            }
            style={{
              color: 'black',
              fontSize: 14,
              marginLeft: 60,
              marginTop: -10,
              textDecorationLine: 'underline',
            }}>
            Terms and Conditions
          </Text>
          <TouchableOpacity onPress={() => Alert.alert('You are Signin')}>
            <View style={STYLES.btnPrimary}>
              <Text style={{color: '#fff', fontSize: 17}}>SIGNUP</Text>
            </View>
          </TouchableOpacity>
          <Text
            style={{
              color: 'black',
              fontSize: 14,
              marginLeft: 20,
              marginTop: 20,
              fontFamily: 'roboto',
            }}>
            By clicking the "Signup button, I agree to the FerroDeal
          </Text>
          <Text style={{color: 'black', fontSize: 14, marginLeft: 120}}>
            Terms and Conditions
          </Text>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View style={{width: 10}}></View>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'flex-end',
            justifyContent: 'center',
            marginTop: 40,
            marginBottom: 20,
          }}>
          <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
            <Text style={{color: 'white', fontSize: 18}}>
              ALREADY HAVE AN ACCOUNT?
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default SignUpScreen;

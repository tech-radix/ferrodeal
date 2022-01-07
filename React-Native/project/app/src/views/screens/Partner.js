import 'react-native-gesture-handler';
import React from 'react';
import {View, Text, TextInput, Image, Alert} from 'react-native';

import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';

const Partner = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{backgroundColor: 'white'}}>
        <View style={{marginTop: -100}}>
          <Text
            style={{
              fontSize: 24,
              fontWeight: 'bold',
              marginTop: 130,
              marginLeft: -19,
              padding: 30,
              color: 'black',
            }}>
            Contact number: +91 9685642619
          </Text>
          <Text
            style={{
              fontSize: 29,
              fontWeight: 'bold',
              marginTop: -10,
              marginLeft: 20,
              padding: 30,
              color: 'black',
            }}>
            ✨Benifits of being a
          </Text>
          <Text
            style={{
              fontSize: 29,
              fontWeight: 'bold',
              marginTop: -60,
              marginLeft: 120,
              padding: 30,
              color: 'black',
            }}>
            partner✨
          </Text>
          <Text
            style={{
              fontSize: 20,
              textAlign: 'justify',
              marginTop: -25,
              marginLeft: -20,
              padding: 30,
              color: 'black',
            }}>
            We, FerroDeal is a pioneer and leading e-commerce business to
            business online trading platform in M.P.
          </Text>
          <Text
            style={{
              fontSize: 20,
              textAlign: 'justify',
              marginTop: -40,
              marginLeft: -20,
              padding: 30,
              color: 'black',
            }}>
            We are happy to joining you with more than 1000 Steel consumers and
            retailers accross Madhya Pradesh and it's all manufacturing and
            trading hubs like Pithampur, Sawver road, Dewas, Govindpura etc.
          </Text>
          <Text
            style={{
              fontSize: 20,
              textAlign: 'justify',
              marginTop: -40,
              marginLeft: -20,
              padding: 30,
              color: 'black',
            }}>
            We are looking for our association with you to cater to all
            customers in this on line platform by tendering your materials and
            services like products and transportation across India.
          </Text>
          <Text
            style={{
              fontSize: 20,
              textAlign: 'justify',
              marginTop: -40,
              marginLeft: -20,
              padding: 30,
              color: 'black',
            }}>
            Please contact with us for further information and details.
          </Text>
          <Text
            style={{
              fontSize: 20,
              textAlign: 'justify',
              marginTop: -40,
              marginLeft: -20,
              padding: 30,
              color: 'black',
            }}>
            Tell us about yourself (Optional)
          </Text>

          <View style={{marginTop: 5}}>
            <View
              style={{flexDirection: 'row', marginTop: 5, marginBottom: 30}}>
              <TextInput
                placeholder="Short description about you"
                style={{
                  color: 'black',
                  marginTop: -30,
                  borderColor: 'darkgray',
                  borderWidth: 1,
                  margin: 25,
                  marginLeft: 10,
                  height: '100%',
                  flex: 1,

                  fontSize: 20,
                  backgroundColor: 'white',
                  borderRadius: 10,
                  padding: 15,
                }}
              />
            </View>
          </View>
        </View>
        <Text
          style={{
            fontSize: 25,
            alignItems: 'center',
            marginTop: -60,

            padding: 30,
            color: 'black',
            textAlign: 'center',
            fontWeight: 'bold',
          }}>
          Interested?
        </Text>
        <Text
          style={{
            fontSize: 15,
            alignItems: 'center',
            marginTop: -60,

            padding: 30,
            color: 'black',
            textAlign: 'center',
          }}>
          Become a partner and avail exclusive benifits
        </Text>
        {/* <TouchableOpacity onPress={() => navigation.navigate('SignIn')}> */}
        <View
          style={{
            backgroundColor: '#FB9902',
            width: '70%',
            height: 45,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: -10,
            marginBottom: 50,
            borderRadius: 38,
            margin: 20,
            marginLeft: 60,
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
            YES TAKE ME IN
          </Text>
        </View>
        {/* </TouchableOpacity> */}
      </View>
    </ScrollView>
  );
};

export default Partner;

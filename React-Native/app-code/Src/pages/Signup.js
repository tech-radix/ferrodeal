// import React from 'react'
// import {View,Text} from 'react-native'

// class Signup extends React.Component{
//     render() {
//         return(
//             <View>
//                 <Text style={{color:"black", fontWeight: "500", fontSize: 25, alignItems:"center", justifyContent:"center", marginLeft: "40%", marginTop: "15%"}}>Signup</Text>
//             </View>
//         )
//         }
// }

// export default Signup;

import React from 'react';
import {
  View,
  Button,
  TextInput,
  StyleSheet,
  Text,
  ScrollView,
} from 'react-native';
import Check from './Checkbox';
import Drop from './Dropdown';

export default class SignUp extends React.Component {
  state = {
    phone_number: '',
    email: '',
    full_name: '',
    company_name: '',
    GST_number: '',
    customer_type: '',
    password: '',
  };
  onChangeText = (key, val) => {
    this.setState({[key]: val});
  };

  render() {
    return (
      <ScrollView>
        <View>
          <Text
            style={{
              color: 'black',
              fontSize: 25,
              marginLeft: 150,
              marginTop: 50,
            }}>
            Signup
          </Text>

          <View style={styles.container}>
            <Text style={{color: 'red', marginRight: 250}}>Phone number</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your Number"
              autoCapitalize="none"
              placeholderTextColor="gray"
              onChangeText={val => this.onChangeText('phone_number', val)}
            />
            <Text style={{color: 'red', marginRight: 310}}>Email</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Email"
              autoCapitalize="none"
              placeholderTextColor="gray"
              onChangeText={val => this.onChangeText('email', val)}
            />
            <Text style={{color: 'red', marginRight: 280}}>Full Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your full name"
              autoCapitalize="none"
              placeholderTextColor="gray"
              onChangeText={val => this.onChangeText('username', val)}
            />
            <Text style={{color: 'red', marginRight: 245}}>Company Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter firm name"
              autoCapitalize="none"
              placeholderTextColor="gray"
              onChangeText={val => this.onChangeText('firm_name', val)}
            />

            <Text style={{color: 'red', marginRight: 270}}>GST Number</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter gst number"
              autoCapitalize="none"
              placeholderTextColor="gray"
              onChangeText={val => this.onChangeText('GST_number', val)}
            />

            <Text style={{color: 'red', marginRight: 250}}>Customer Type</Text>

            {/* <TextInput
              style={styles.input}
              placeholder="Select customer type"
              autoCapitalize="none"
              placeholderTextColor="gray"
              onChangeText={val => this.onChangeText('GST_number', val)}

            /> */}
            <Drop />

            <Text style={{color: 'red', marginRight: 245}}>
              Enter 4 digit pin
            </Text>
            <TextInput
              style={styles.input}
              placeholder="Enter 4 digit pin"
              secureTextEntry={true}
              autoCapitalize="none"
              placeholderTextColor="gray"
              onChangeText={val => this.onChangeText('password', val)}
            />

            <Check />
          </View>
          <View>
            <Button
              style={{borderRadius: 40}}
              title="Sign Up"
              color={'red'}
              onPress={this.signUp}
            />
          </View>

          <Text
            style={{
              margin: 30,
              alignItems: 'center',
              justifyContent: 'center',
              color: 'black',
            }}>
            By clicking the ""Signup" button, I agree to the FerroDeal Terms And
            conditions
          </Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    width: 350,
    height: 40,
    backgroundColor: 'white',
    margin: 20,
    padding: 8,
    color: 'white',
    borderRadius: 14,
    fontSize: 18,
    fontWeight: '500',
    marginTop: 10,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
});

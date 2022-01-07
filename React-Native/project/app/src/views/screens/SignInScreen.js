// import 'react-native-gesture-handler';
// import React from 'react';
// import {
//   SafeAreaView,
//   View,
//   Text,
//   TextInput,
//   Image,
//   ImageBackground,
// } from 'react-native';

// import STYLES from '../../styles';
// import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';

// const SignInScreen = ({navigation}) => {
//   return (
//     <ImageBackground
//       source={require('../../assests/background-01.jpg')}
//       style={{
//         flex: 1,
//         paddingHorizontal: 20,
//         width: undefined,
//         height: '100%',
//         flexDirection: 'column',
//         backgroundColor: 'transparent',
//         justifyContent: 'center',
//       }}>
//       <ScrollView showsVerticalScrollIndicator={false}>
//         <View style={{flex: 1, marginTop: -80}}>
//           <Image
//             source={require('../../assests/ferro.png')}
//             style={{
//               width: '90%',
//               height: 370,
//               justifyContent: 'center',
//               alignItems: 'flex-start',
//               marginLeft: 15,
//               marginTop: -20,
//             }}
//           />
//         </View>

//         <View style={{marginTop: -100}}>
//           <Text
//             style={{
//               fontSize: 27,
//               fontWeight: 'bold',

//               marginLeft: 120,
//               padding: 30,
//             }}>
//             Login
//           </Text>
//         </View>

//         <Text style={{fontSize: 18, color: '#C40011', marginLeft: 3}}>
//           Phone Number
//         </Text>
//         <View style={{marginTop: 5}}>
//           <View style={STYLES.inputContainer}>
//             <TextInput
//               placeholder="Enter registered mobile number"
//               style={STYLES.input}
//             />
//           </View>

//           <Text
//             style={{
//               fontSize: 18,
//               color: '#C40011',
//               marginLeft: 3,
//             }}>
//             Password
//           </Text>
//           <View style={STYLES.inputContainer}>
//             <TextInput
//               placeholder="Password"
//               style={STYLES.input}
//               secureTextEntry
//             />
//           </View>

//           <TouchableOpacity onPress={() => navigation.navigate('Home')}>
//             <View style={STYLES.btnPrimary}>
//               <Text style={{color: '#fff', fontSize: 18, fontFamily: 'roboto'}}>
//                 LOGIN
//               </Text>
//             </View>
//           </TouchableOpacity>
//         </View>

//         <TouchableOpacity onPress={() => navigation.navigate('Forgot')}>
//           <Text
//             style={{
//               fontSize: 20,
//               color: 'white',
//               fontFamily: 'roboto',
//               marginLeft: 90,
//               marginTop: 20,
//             }}>
//             FORGOT PASSWORD?
//           </Text>
//         </TouchableOpacity>

//         <View
//           style={{
//             flexDirection: 'row',
//             alignItems: 'flex-end',
//             justifyContent: 'center',
//             marginTop: 40,
//             marginBottom: 20,
//           }}>
//           <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
//             <Text style={{fontSize: 20, color: 'white', fontFamily: 'roboto'}}>
//               SIGNUP
//             </Text>
//           </TouchableOpacity>
//         </View>
//       </ScrollView>
//     </ImageBackground>
//   );
// };

// export default SignInScreen;

//*********************************************************************************** */

//******************************************************************************************* */

import React from 'react';
import {
  View,
  TouchableOpacity,
  TextInput,
  Text,
  ImageBackground,
  Image,
  ScrollView,
} from 'react-native';

class SignInScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phone: '',
      password: '',
      error: '',
    };
  }

  handlePhone = value => {
    this.setState({
      phone: value,
    });
  };

  handlePwd = value => {
    this.setState({
      password: value,
    });
  };

  validate = () => {
    this.setState({
      error: '',
    });

    const expression =
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

    if (!expression.test(this.state.phone)) {
      this.setState({
        error: 'Invalid Phone',
      });
      return false;
    } else if (this.state.password.length === 0) {
      this.setState({
        error: 'Password cannot be empty',
      });

      return false;
    } else if (this.state.password.length < 4) {
      this.setState({
        error: 'Password is too short',
      });
    }

    return true;
  };

  login = () => {
    if (this.validate()) {
      this.props.navigation.navigate('Home');
    }
  };

  forgot = () => {
    this.validate();
    this.props.navigation.navigate('Forgot');
  };

  signup = () => {
    this.validate();
    this.props.navigation.navigate('SignUp');
  };

  render() {
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
          <View style={{marginTop: -100}}>
            <Text
              style={{
                fontSize: 27,
                fontWeight: 'bold',
                marginLeft: 120,
                padding: 30,
              }}>
              Login
            </Text>
          </View>
          <View
            style={{
              alignItems: 'center',
              marginTop: 10,
              marginBottom: 50,
            }}>
            <Text
              style={{
                fontSize: 18,
                color: '#C40011',
                marginLeft: -250,
                padding: 10,
                fontWeight: '700',
              }}>
              Phone number
            </Text>
            <TextInput
              onChangeText={this.handlePhone}
              placeholder="Enter registered mobile number"
              keyboardType="numeric"
              maxLength={10}
              style={{
                fontSize: 20,
                height: 50,
                width: 370,
                backgroundColor: 'white',
                borderRadius: 10,
                paddingLeft: 20,
                margin: 20,
                marginTop: -5,
                color: 'black',
              }}
            />

            <Text
              style={{
                fontSize: 18,
                color: '#C40011',
                marginLeft: -280,
                padding: 10,
                fontWeight: '700',
              }}>
              Password
            </Text>
            <TextInput
              onChangeText={this.handlePwd}
              placeholder="Enter 4 digit pin"
              keyboardType="numeric"
              maxLength={4}
              secureTextEntry={true}
              style={{
                height: 50,
                width: 370,
                backgroundColor: 'white',

                fontSize: 20,
                borderRadius: 10,
                paddingLeft: 20,
                marginTop: 1,
                color: 'black',
              }}
            />

            {this.state.error.length === 0 ? null : (
              <Text style={{color: 'red', fontSize: 20, marginTop: 10}}>
                {this.state.error}
              </Text>
            )}
          </View>
          <TouchableOpacity onPress={this.login}>
            <View
              style={{
                backgroundColor: 'red',
                height: 45,
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 5,
                borderRadius: 38,
              }}>
              <Text style={{color: '#fff', fontSize: 18, fontFamily: 'roboto'}}>
                LOGIN
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.forgot}>
            <Text
              style={{
                fontSize: 20,
                color: 'white',
                fontFamily: 'roboto',
                marginLeft: 90,
                marginTop: 20,
              }}>
              FORGOT PASSWORD?
            </Text>
          </TouchableOpacity>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'flex-end',
              justifyContent: 'center',
              marginTop: 40,
              marginBottom: 20,
            }}>
            <TouchableOpacity onPress={this.signup}>
              <Text
                style={{fontSize: 20, color: 'white', fontFamily: 'roboto'}}>
                SIGNUP
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
}

export default SignInScreen;

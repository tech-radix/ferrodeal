// import React, {Component} from 'react';
// import {
//   Platform,
//   StyleSheet,
//   View,
//   Text,
//   Image,
//   TouchableOpacity,
//   Alert,
// } from 'react-native';
// import Front from './Front';
// import {withNavigation} from 'react-navigation';
// class Splash extends Component {
//   constructor() {
//     super();
//     this.state = {
//       isVisible: true,
//     };
//   }
//   Hide_Splash_Screen = () => {
//     this.setState({
//       isVisible: false,
//     });
//   };
//   componentDidMount() {
//     var that = this;
//     setTimeout(function () {
//       that.Hide_Splash_Screen();
//     }, 1500);
//   }
//   render() {
//     let Splash_Screen = (
//       <View style={styles.SplashScreen_RootView}>
//         <View style={styles.SplashScreen_ChildView}>
//           <TouchableOpacity
//             onPress={() => {
//               this.props.navigation('Front');
//             }}>
//             ;
//             <Image
//               source={require('../../assests/png-01.png')}
//               style={{width: '50%', height: '50%', resizeMode: 'contain'}}
//             />{' '}
//           </TouchableOpacity>
//         </View>
//       </View>
//     );
//     return (
//       <View style={styles.MainContainer}>
//         <Front />
//         {this.state.isVisible === true ? Splash_Screen : null}
//       </View>
//     );
//   }
// }

// export default withNavigation(Splash);

// const styles = StyleSheet.create({
//   MainContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingTop: Platform.OS === 'ios' ? 20 : 0,
//   },
//   SplashScreen_RootView: {
//     justifyContent: 'center',
//     flex: 1,
//     margin: 10,
//     position: 'absolute',
//     width: '100%',
//     height: '100%',
//   },
//   SplashScreen_ChildView: {
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'white',
//     flex: 1,
//   },
// });

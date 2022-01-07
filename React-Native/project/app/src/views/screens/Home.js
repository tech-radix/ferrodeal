// import React, {Component} from 'react';
// import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
// import {
//   AppRegistry,
//   FlatList,
//   StyleSheet,
//   Text,
//   View,
//   Image,
// } from 'react-native';
// import Slider2 from './slider2';

// import Slider3 from './slider3';

// const Home = ({navigation}) => {
//   return (
//     <ScrollView
//       style={{backgroundColor: 'white'}}
//       showsVerticalScrollIndicator={false}>
//       <View
//         style={{
//           backgroundColor: 'red',
//           width: '300%',
//           height: 80,
//           justifyContent: 'center',
//           alignItems: 'center',
//           marginLeft: -20,
//           shadowColor: '#000',
//           shadowOffset: {
//             width: 0,
//             height: 2,
//           },
//           shadowOpacity: 0.25,
//           shadowRadius: 3.84,

//           elevation: 4,
//         }}>
//         <Text
//           style={{
//             fontSize: 20,
//             color: 'white',
//             fontFamily: 'roboto',
//             textAlign: 'center',
//             marginLeft: -700,
//           }}>
//           HELLO! ASHUTOSH WAGH
//         </Text>
//       </View>

//       <Slider2 />

//       <View
//         style={{
//           flex: 'wrap',
//           flex: 1,
//           flexDirection: 'row',
//         }}>
//         <View
//           style={{
//             flexDirection: 'row',
//           }}>
//           <TouchableOpacity onPress={() => navigation.navigate('Getquote')}>
//             <Image
//               source={require('../../assests/Get-quote.png')}
//               style={{
//                 width: 120,
//                 height: 130,
//                 marginLeft: 1,
//                 marginTop: -5,
//               }}></Image>
//           </TouchableOpacity>

//           <Text
//             style={{
//               fontSize: 18,
//               color: 'black',
//               marginLeft: -110,
//               marginTop: 130,
//               fontWeight: 'bold',
//               fontFamily: 'Roboto',
//             }}>
//             GET QUOTE
//           </Text>
//         </View>

//         <View
//           style={{
//             flexDirection: 'row',
//           }}>
//           <TouchableOpacity onPress={() => navigation.navigate('Buysell')}>
//             <Image
//               source={require('../../assests/buy-sell.png')}
//               style={{
//                 width: 120,
//                 height: 130,
//                 marginLeft: 178,
//                 marginTop: -5,
//               }}></Image>
//           </TouchableOpacity>
//           <Text
//             style={{
//               fontSize: 18,
//               color: 'black',
//               marginLeft: -130,
//               marginTop: 130,
//               fontWeight: 'bold',
//               fontFamily: 'Roboto',
//             }}>
//             BUY/SELL SCRAP
//           </Text>
//         </View>

//         <View
//           style={{
//             flex: 1,
//             flexDirection: 'row',
//           }}>
//           <TouchableOpacity>
//             <Image
//               source={require('../../assests/upload-stock.png')}
//               style={{
//                 width: 120,
//                 height: 130,
//                 marginLeft: -130,
//                 marginTop: 170,
//               }}></Image>
//           </TouchableOpacity>
//           <Text
//             style={{
//               fontSize: 18,
//               color: 'black',
//               marginLeft: -120,
//               marginTop: 300,
//               fontWeight: 'bold',
//               fontFamily: 'Roboto',
//             }}>
//             UPLOAD STOCK
//           </Text>
//         </View>

//         <View
//           style={{
//             flex: 1,
//             flexDirection: 'row',
//           }}>
//           <Image
//             source={require('../../assests/clearance-04.png')}
//             style={{
//               width: 120,
//               height: 130,
//               marginLeft: 15,
//               marginTop: 170,
//             }}></Image>
//           <Text
//             style={{
//               fontSize: 18,
//               color: 'black',
//               marginLeft: -125,
//               marginTop: 300,
//               fontWeight: 'bold',
//               fontFamily: 'Roboto',
//             }}>
//             UPDATED STOCK
//           </Text>
//         </View>

//         <View
//           style={{
//             flex: 1,
//             flexDirection: 'row',
//           }}>
//           <Image
//             source={require('../../assests/Bepartner.png')}
//             style={{
//               width: 120,
//               height: 130,
//               marginLeft: -250,
//               marginTop: 350,
//             }}></Image>

//           <Text
//             style={{
//               fontSize: 18,
//               color: 'black',
//               marginLeft: -120,
//               marginTop: 480,
//               fontWeight: 'bold',
//               fontFamily: 'Roboto',
//             }}>
//             BE A PARTNER
//           </Text>
//         </View>
//       </View>

//       <Slider3 />
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   flatListItem: {
//     color: 'white',
//     padding: 10,
//     fontSize: 16,
//   },
// });

// export default Home;

// class BasicFlatList extends Component {
//   render() {
//     return (
//       <View style={{flex: 1, marginTop: 22}}>
//         <FlatList
//           data={flatListData}
//           renderItem={({item, index}) => {
//             //console.log(`Item = ${JSON.stringify(item)}, index = ${index}`);
//             return <FlatListItem item={item} index={index}></FlatListItem>;
//           }}></FlatList>
//       </View>
//     );
//   }
// }

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from 'react-native';
import Slider2 from './slider2';
import Slides from './Slides';
import Bottombar from './Bottombar';

const Home = ({navigation}) => {
  return (
    <ScrollView
      style={{backgroundColor: 'white'}}
      showsVerticalScrollIndicator={false}>
      <View
        style={{
          backgroundColor: 'red',
          width: '300%',
          height: 80,
          justifyContent: 'center',
          alignItems: 'center',
          marginLeft: -20,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,

          elevation: 4,
        }}>
        <Text
          style={{
            fontSize: 20,
            color: 'white',
            fontFamily: 'roboto',
            textAlign: 'center',
            marginLeft: -700,
          }}>
          HELLO! ASHUTOSH WAGH
        </Text>
      </View>

      <Slider2 />
      <ImageBackground
        source={require('../../assests/back.png')}
        style={{
          flex: 1,
          paddingHorizontal: 20,
          width: 450,
          height: 450,
          flexDirection: 'column',
          backgroundColor: 'transparent',
          justifyContent: 'center',
          marginLeft: -18,
          marginTop: -5,
        }}>
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
          }}>
          <TouchableOpacity onPress={() => navigation.navigate('Getquote')}>
            <Image
              source={require('../../assests/Get-quote.png')}
              style={{
                width: 120,
                height: 130,
                marginLeft: 30,
                marginTop: -10,
              }}></Image>
          </TouchableOpacity>

          <Text
            style={{
              fontSize: 18,
              color: 'black',
              marginLeft: 45,
              marginTop: 10,
              fontWeight: 'bold',
              fontFamily: 'Roboto',
            }}>
            GET QUOTE
          </Text>

          <TouchableOpacity onPress={() => navigation.navigate('Buysell')}>
            <Image
              source={require('../../assests/buy-sell.png')}
              style={{
                width: 120,
                height: 130,
                marginLeft: 260,
                marginTop: -165,
              }}></Image>
          </TouchableOpacity>

          <Text
            style={{
              fontSize: 18,
              color: 'black',
              marginLeft: 280,
              marginTop: -25,
              fontWeight: 'bold',
              fontFamily: 'Roboto',
            }}>
            BUY/SELL
          </Text>

          <TouchableOpacity onPress={() => navigation.navigate('Buysell')}>
            <Image
              source={require('../../assests/upload-stock.png')}
              style={{
                width: 120,
                height: 130,
                marginLeft: 30,
                marginTop: 35,
              }}></Image>
          </TouchableOpacity>

          <Text
            style={{
              fontSize: 18,
              color: 'black',
              marginLeft: 30,
              marginTop: 5,
              fontWeight: 'bold',
              fontFamily: 'Roboto',
            }}>
            UPLOAD STOCK
          </Text>

          <TouchableOpacity onPress={() => navigation.navigate('Buysell')}>
            <Image
              source={require('../../assests/clearance-04.png')}
              style={{
                width: 120,
                height: 130,
                marginLeft: 260,
                marginTop: -155,
              }}></Image>
          </TouchableOpacity>

          <Text
            style={{
              fontSize: 18,
              color: 'black',
              marginLeft: 250,
              marginTop: -25,
              fontWeight: 'bold',
              fontFamily: 'Roboto',
            }}>
            UPDATED STOCK
          </Text>

          <TouchableOpacity onPress={() => navigation.navigate('Partner')}>
            <Image
              source={require('../../assests/Bepartner.png')}
              style={{
                width: 120,
                height: 130,
                marginLeft: 150,
                marginTop: 30,
              }}></Image>
          </TouchableOpacity>

          <Text
            style={{
              fontSize: 18,
              color: 'black',
              marginLeft: 150,
              marginTop: -5,
              fontWeight: 'bold',
              fontFamily: 'Roboto',
            }}>
            BE A PARTNER
          </Text>
        </View>
      </ImageBackground>
      <Slides />
      <Bottombar />
    </ScrollView>
  );
};
export default Home;

const styles = StyleSheet.create({
  flatListItem: {
    color: 'white',
    padding: 10,
    fontSize: 16,
  },
});

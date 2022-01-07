import React, {Component} from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

const CRproduct = () => {
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
            marginLeft: -750,
          }}>
          HR Product type
        </Text>
      </View>

      <View
        style={{
          padding: 10,
          backgroundColor: '#EDEDEC',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 15,
          borderRadius: 20,
          height: 45,
        }}>
        <Text
          style={{
            color: 'black',
            fontWeight: 'bold',
            fontSize: 20,
            marginTop: -5,
            textAlign: 'center',
          }}>
          Please select material type
        </Text>
      </View>

      <View
        style={{
          flex: 1,
          flexDirection: 'row',
        }}>
        <View
          style={{
            padding: 10,
            backgroundColor: '#EDEDEC',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
            marginLeft: 20,
            height: 170,
            width: 170,
          }}>
          <Image
            source={require('../../assests/roll.jpg')}
            style={{
              width: 130,
              height: 130,
              marginLeft: 20,
              marginRight: 20,
              marginTop: 60,
              borderRadius: 200 / 2,
            }}></Image>

          <Text
            style={{
              fontSize: 19,
              color: 'gray',
              marginLeft: -5,
              marginTop: 30,
              fontWeight: 'bold',
              fontFamily: 'Roboto',
            }}>
            CRCA Coil
          </Text>
        </View>
      </View>

      <View
        style={{
          flex: 1,
          flexDirection: 'row',
        }}>
        <View
          style={{
            padding: 10,
            backgroundColor: '#EDEDEC',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: -170,
            marginLeft: 220,
            height: 170,
            width: 170,
          }}>
          <Image
            source={require('../../assests/sheetplate.jpg')}
            style={{
              width: 130,
              height: 130,
              marginLeft: 30,
              marginRight: 20,
              marginTop: 60,
              borderRadius: 200 / 2,
            }}></Image>

          <Text
            style={{
              fontSize: 19,
              color: 'gray',
              marginLeft: -5,
              marginTop: 30,
              fontWeight: 'bold',
              fontFamily: 'Roboto',
            }}>
            Sheet/Plate
          </Text>
        </View>
      </View>

      <View
        style={{
          flex: 1,
          flexDirection: 'row',
        }}>
        <View
          style={{
            padding: 10,
            backgroundColor: '#EDEDEC',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 70,
            marginLeft: 20,
            height: 170,
            width: 170,
          }}>
          <Image
            source={require('../../assests/slitted.jpg')}
            style={{
              width: 130,
              height: 130,
              marginLeft: 20,
              marginRight: 20,
              marginTop: 60,
              borderRadius: 200 / 2,
            }}></Image>

          <Text
            style={{
              fontSize: 19,
              color: 'gray',
              marginLeft: -5,
              marginTop: 30,
              fontWeight: 'bold',
              fontFamily: 'Roboto',
            }}>
            CRCA Slitted Coil
          </Text>
        </View>
      </View>

      <View
        style={{
          flex: 1,
          flexDirection: 'row',
        }}>
        <View
          style={{
            padding: 10,
            backgroundColor: '#EDEDEC',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: -170,
            marginLeft: 220,
            height: 170,
            width: 170,
          }}>
          <Image
            source={require('../../assests/cuttosize.jpg')}
            style={{
              width: 130,
              height: 130,
              marginLeft: 30,
              marginRight: 20,
              marginTop: 60,
              borderRadius: 200 / 2,
            }}></Image>

          <Text
            style={{
              fontSize: 19,
              color: 'gray',
              marginLeft: -5,
              marginTop: 30,
              fontWeight: 'bold',
              fontFamily: 'Roboto',
            }}>
            CRCA Cut to Size
          </Text>
        </View>
      </View>

      <Text
        style={{
          marginBottom: 100,
        }}></Text>
    </ScrollView>
  );
};

export default CRproduct;

// export default class BasicFlatList extends Component {
//   render() {
//     return (
//       <View style={{flex: 1, marginTop: 22}}>
//         <FlatList
//           data={flatListData}
//           renderItem={({item, index}) => {
//             //console.log(`Item = ${JSON.stringify(item)}, index = ${index}`);
//             return <Getquote item={item} index={index}></Getquote>;
//           }}></FlatList>
//       </View>
//     );
//   }
// }

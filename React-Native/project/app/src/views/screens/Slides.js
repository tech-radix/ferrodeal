import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  View,
  ScrollView,
  Dimensions,
} from 'react-native';

class Slides extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 0,
    };
  }

  change(nativeEvent) {
    // console.log("nativeEvent:", nativeEvent)
    if (nativeEvent) {
      const slide = Math.ceil(
        nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
      );
      if (slide !== this.state.active) {
        this.setState({
          active: slide,
        });
      }
    }
  }

  render() {
    const {active} = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <View
          style={{
            padding: 20,

            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: 'black',
              fontWeight: 'bold',
              fontSize: 20,
              marginTop: 90,
            }}>
            🔥Market News🔥
          </Text>
        </View>
        <View style={styles.wrap}>
          <ScrollView
            onScroll={({nativeEvent}) => this.change(nativeEvent)}
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            horizontal
            style={styles.wrap}>
            <Image
              source={require('../../assests/steel.jpg')}
              resizeMode="contain"
              style={styles.wrap}
            />
            <Text
              style={{
                color: 'white',

                fontSize: 20,
                marginTop: 60,
                marginLeft: -250,
                fontWeight: '500',
              }}>
              Steel price further slashed
            </Text>

            <Image
              source={require('../../assests/scrap2.jpg')}
              resizeMode="contain"
              style={{
                height: 170,
                marginRight: -70,
                borderRadius: 10,
                marginLeft: 10,
                width: 400,
                marginHorizontal: 20,
                paddingHorizontal: 50,
              }}
            />
            <Text
              style={{
                color: 'white',

                fontSize: 20,
                marginTop: 60,
                marginLeft: -200,
                fontWeight: '500',
                paddingHorizontal: 20,
              }}>
              Scrap Prices
            </Text>
            <Image
              source={require('../../assests/jsw2.jpg')}
              resizeMode="contain"
              style={{
                height: 170,
                marginRight: 300,
                borderRadius: 10,
                marginLeft: 40,
                width: 400,
                marginHorizontal: 20,
                paddingHorizontal: 50,
              }}
            />
            <Text
              style={{
                color: 'white',

                fontSize: 20,
                marginTop: 60,
                marginLeft: -550,
                fontWeight: '500',
                paddingHorizontal: 20,
              }}>
              TATA Steel Price
            </Text>
          </ScrollView>
        </View>
        <Text
          style={{
            marginBottom: 70,
          }}></Text>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  wrap: {
    // width: Dimensions.get('window').width * 0.7,
    width: 400,
    //  height: Dimensions.get('window').height * 0.19, // 25% window
    height: 170,
    marginRight: -70,
    borderRadius: 10,
    marginLeft: -10,
  },
});

export default Slides;

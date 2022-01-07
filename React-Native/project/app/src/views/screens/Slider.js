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

const images = [
  'https://raw.githubusercontent.com/sakshimawar117/img/master/Avalibality.png',
  'https://raw.githubusercontent.com/sakshimawar117/img/master/Quality.png',
  'https://raw.githubusercontent.com/sakshimawar117/img/master/Allmaterial2.png',
  'https://raw.githubusercontent.com/sakshimawar117/img/master/Flexible.png',
  'https://raw.githubusercontent.com/sakshimawar117/img/master/TRACK_ORDER%20final.png',
  'https://raw.githubusercontent.com/sakshimawar117/img/master/lowestfinal.png',
  'https://raw.githubusercontent.com/sakshimawar117/img/master/Nominquantity.png',
  'https://raw.githubusercontent.com/sakshimawar117/img/master/Transporter3.png',
  'https://raw.githubusercontent.com/sakshimawar117/img/master/Nojoining2.png',
];

class Slider extends Component {
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
        <View style={styles.wrap}>
          <ScrollView
            onScroll={({nativeEvent}) => this.change(nativeEvent)}
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            horizontal
            style={styles.wrap}>
            {images.map((e, index) => (
              <Image
                key={e}
                resizeMode="stretch"
                style={styles.wrap}
                source={{uri: e}}
              />
            ))}
          </ScrollView>
          <View style={styles.wrapDot}>
            {images.map((e, index) => (
              <Text
                key={e}
                style={active === index ? styles.dotActive : styles.dot}>
                ●
              </Text>
            ))}
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: -20,
  },
  wrap: {
    marginTop: -30,
    marginLeft: -2,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height * 0.5, // 25% window
  },
  wrapDot: {
    position: 'absolute',
    bottom: 40,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  dot: {
    margin: 3,
    color: 'darkgray',
  },
  dotActive: {
    margin: 3,
    color: 'red',
  },
});

export default Slider;

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
  'https://raw.githubusercontent.com/sakshimawar117/img/master/availability2.jpg',
  'https://raw.githubusercontent.com/sakshimawar117/img/master/qualityland2.jpg',
  'https://raw.githubusercontent.com/sakshimawar117/img/master/materialland2.jpg',
  'https://raw.githubusercontent.com/sakshimawar117/img/master/flexible.jpg',
  'https://raw.githubusercontent.com/sakshimawar117/img/master/orderland.jpg',
  'https://raw.githubusercontent.com/sakshimawar117/img/master/lowestland.jpg',
  'https://raw.githubusercontent.com/sakshimawar117/img/master/nominland2.jpg',
  'https://raw.githubusercontent.com/sakshimawar117/img/master/transporterland.jpg',
  'https://raw.githubusercontent.com/sakshimawar117/img/master/nojoiningland.jpg',
];

class Slider2 extends Component {
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
            padding: 10,

            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: 'black',
              fontWeight: 'bold',
              fontSize: 20,
              marginTop: 20,
            }}>
            🎉Ferocious Deals🎉
          </Text>
        </View>
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
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height * 0.3, // 25% window
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

export default Slider2;

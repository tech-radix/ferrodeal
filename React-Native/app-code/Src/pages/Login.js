import React from 'react';
import {StyleSheet, View, ImageBackground, Image} from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require('./images/ferrobac.jpg')}
          style={{width: '100%', height: '100%'}}>
          <View>
            <Image
              source={require('./images/ferro.png')}
              style={{
                width: '80%',
                height: 350,
                justifyContent: 'center',
                alignItems: 'flex-start',
                marginLeft: 40,
              }}
            />
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  ferro: {
    flex: 1,
  },
});

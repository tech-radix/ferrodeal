import React from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import SignUp from './Src/pages/Signup';

export default class App extends React.Component {
  render() {
    return (
      <LinearGradient
        colors={['#ffffff', '#ccd1dd', '#da6978']}
        style={styles.body}>
        <SignUp />

        <TouchableOpacity style={styles.button}>
          <LinearGradient
            start={{x: 0.0, y: 0.0}}
            end={{x: 0.0, y: 0.0}}
            locations={[0.0, 0.74]}
            colors={['#a40606', '#d98324']}
            style={styles.button}
            useAngle={true}
            angle={315}
            angleCenter={{x: 0.5, y: 0.5}}></LinearGradient>
        </TouchableOpacity>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2193b0',
  },
});

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
const Cart = () => {
  return (
    <View style={styles.container}>
      <Text>Cart</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'grey',
  },
});
export default Cart;

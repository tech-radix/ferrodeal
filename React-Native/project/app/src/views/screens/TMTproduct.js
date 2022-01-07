import 'react-native-gesture-handler';
import React from 'react';
import {View, Text} from 'react-native';

import {ScrollView} from 'react-native-gesture-handler';

const TMTproduct = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{marginTop: -100}}>
        <Text
          style={{
            fontSize: 27,
            fontWeight: 'bold',
            marginTop: 350,
            marginLeft: 80,
            padding: 30,
          }}>
          Coming Soon...
        </Text>
      </View>
      <View>
        <Text
          style={{
            fontSize: 27,
            fontWeight: 'bold',
            marginTop: -50,
            marginLeft: 40,
            padding: 30,
          }}>
          We are working on it🛠
        </Text>
      </View>
    </ScrollView>
  );
};

export default TMTproduct;

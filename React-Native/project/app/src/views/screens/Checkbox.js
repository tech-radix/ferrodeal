import React, {useState} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

const Check = () => {
  const [isSelected, setSelection] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.checkboxContainer}>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
        />
        <Text style={styles.label}>Do you want Credit facilities? </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    marginLeft: -40,
  },
  checkbox: {
    // alignSelf: 'center',
    marginRight: 5,
  },
  label: {
    margin: 4,
    color: '#C40011',
    fontSize: 17,
    marginRight: 50,
    marginBottom: 0,
  },
});

export default Check;

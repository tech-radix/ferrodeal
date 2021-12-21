import React from 'react';
import {View, StyleSheet} from 'react-native';
import {useState} from 'react';
import {Picker} from '@react-native-picker/picker';
import {render} from 'react-native/Libraries/Renderer/implementations/ReactNativeRenderer-prod';
import styles from 'react-native-material-dropdown/src/components/dropdown/styles';

const Drop = () => {
  const [pickerValue, setPickerValue] = useState('Javascript');

  return (
    <View style={down.container}>
      <Picker
        //    <TextInput
        //    style={styles.input}
        //    placeholder="Select customer type"
        //    autoCapitalize="none"
        //    placeholderTextColor="gray"
        //    onChangeText={val => this.onChangeText('GST_number', val)}

        //  />
        style={down.picker}
        selectedValue={pickerValue}
        onValueChange={itemValue => setPickerValue(itemValue)}>
        <Picker.Item
          label="Select customer type"
          value="Select customer type"
        />
        <Picker.Item
          label="Project/ Manufacturer/ Consumer"
          value="Project/ Manufacturer/ Consumer"
        />
        <Picker.Item label="Dealer/ Trader" value="Dealer/ Trader" />
      </Picker>
    </View>
  );
};

const down = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  picker: {
    width: 350,
    height: 30,
    backgroundColor: 'white',
    margin: 20,
    padding: 8,
    borderRadius: 14,
    fontSize: 18,
    fontWeight: '500',
    marginTop: 10,
  },
});

export default Drop;

import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {useState} from 'react';
import {Picker} from '@react-native-picker/picker';

const Drop = () => {
  const [pickerValue, setPickerValue] = useState('Javascript');

  return (
    <View style={down.container}>
      <Text style={{fontSize: 18, color: '#C40011', marginLeft: -245}}>
        Customer type
      </Text>
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
    borderRadius: 20,
    fontSize: 20,
  },
  picker: {
    width: '100%',
    height: 25,
    backgroundColor: 'white',
    padding: 24,
    color: 'gray',
    flexDirection: 'row',
    marginTop: 5,
    marginBottom: 30,
  },
});

export default Drop;

// import DropdownMenu from 'react-native-dropdown-menu';

// class Drop extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       text: '',
//     };
//   }

//   render() {
//     var data = [
//       ['C', 'Java', 'JavaScript', 'PHP'],
//       ['Python', 'Ruby'],
//       ['Swift', 'Objective-C'],
//     ];
//     return (
//       <View style={{flex: 1}}>
//         <View style={{height: 64}} />
//         <DropdownMenu
//           style={{flex: 1}}
//           bgColor={'white'}
//           tintColor={'#666666'}
//           activityTintColor={'green'}
//           // arrowImg={}
//           // checkImage={}
//           // optionTextStyle={{color: '#333333'}}
//           // titleStyle={{color: '#333333'}}
//           // maxHeight={300}
//           handler={(selection, row) =>
//             this.setState({text: data[selection][row]})
//           }
//           data={data}>
//           <View style={{flex: 1}}>
//             <Text>{this.state.text} is the best language in the world</Text>
//           </View>
//         </DropdownMenu>
//       </View>
//     );
//   }
// }

// export default Drop;

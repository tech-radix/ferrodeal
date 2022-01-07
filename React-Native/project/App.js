import 'react-native-gesture-handler';
import React from 'react';

import Front from './app/src/views/screens/Front';
import SignInScreen from './app/src/views/screens/SignInScreen';
import Home from './app/src/views/screens/Home';
import Getquote from './app/src/views/screens/Getquote';
import HRproduct from './app/src/views/screens/HRproduct';
import CRproduct from './app/src/views/screens/CRproduct';
import GALproduct from './app/src/views/screens/GALproduct';
import Colorproduct from './app/src/views/screens/Colorproduct';
import HRPOproduct from './app/src/views/screens/HRPOproduct';
import TMTproduct from './app/src/views/screens/TMTproduct';
import MSstructure from './app/src/views/screens/MSstructure';
import Buysell from './app/src/views/screens/Buysell';
import Partner from './app/src/views/screens/Partner';
import Forgot from './app/src/views/screens/Forgot';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SignUpScreen from './app/src/views/screens/SignUpScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      <NavigationContainer>
        {/* <Stack.Navigator screenOptions={{header: () => null}}> */}
        <Stack.Navigator>
          <Stack.Screen name="Front" component={Front} />

          <Stack.Screen name="SignIn" component={SignInScreen} />
          <Stack.Screen name="Home" component={Home} />

          <Stack.Screen name="Getquote" component={Getquote} />
          <Stack.Screen name="HRproduct" component={HRproduct} />
          <Stack.Screen name="CRproduct" component={CRproduct} />
          <Stack.Screen name="GALproduct" component={GALproduct} />
          <Stack.Screen name="HRPOproduct" component={HRPOproduct} />
          <Stack.Screen name="Colorproduct" component={Colorproduct} />
          <Stack.Screen name="Partner" component={Partner} />
          <Stack.Screen name="TMTproduct" component={TMTproduct} />
          <Stack.Screen name="MSstructure" component={MSstructure} />
          <Stack.Screen name="Buysell" component={Buysell} />

          <Stack.Screen name="Forgot" component={Forgot} />
          <Stack.Screen name="SignUp" component={SignUpScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;

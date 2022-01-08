import {GestureHandlerRootView} from 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView} from 'react-native';

const App = () => {
  return (
    <GestureHandlerRootView>
      <SafeAreaView></SafeAreaView>
    </GestureHandlerRootView>
  );
};
export default App;

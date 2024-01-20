import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Home from './src/Screen/Home';
import {Provider} from 'react-redux';
import { Store } from './src/Redux/MyStore';

function App() {
  return (
    <Provider store={Store}>
      <View style={styles.Container}>
        <Home />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  Container: {},
});
export default App;

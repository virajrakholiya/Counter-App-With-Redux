import * as React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {increment, decrement, reset} from '../Redux/Action';

function Home() {
  const dispatch = useDispatch();
  const count = useSelector((state: any) => state.counter);
  return (
      <View style={styles.View}>
        <View
          style={{
            padding: 40,
            backgroundColor: '#9ED2BE',
            height: 150,
            width: 150,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 20,
          }}>
          <Text style={{fontSize: 50,}}>{count}</Text>
        </View>
        <View style={styles.row}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => dispatch(increment())}>
          <Text style={styles.btnText}>INCREMENT</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => dispatch(decrement())}>
          <Text style={styles.btnText}>DECREMENT</Text>
        </TouchableOpacity></View>
        <TouchableOpacity style={styles.btn} onPress={() => dispatch(reset())}>
          <Text style={styles.btnText}>RESET</Text>
        </TouchableOpacity>
      </View>
  );
}

const styles = StyleSheet.create({
  View: {
    marginTop: 100,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  btn: {
    padding: 10,
    backgroundColor: '#FF6868',
    width: 110,
    marginTop: 10,
    marginLeft:10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:15
    
  },
  row:{
    flexDirection:'row',
    
  },
  btnText:{
    color:'#ffffff'
  }
});
export default Home;

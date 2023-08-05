import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View,Alert } from 'react-native';
import test from './home/Test';

export default function App() {
  return (
    <View style={styles.container} accessibilityLabel='App root'>
      <View style={styles.header} accessibilityLabel='Header'>
          <Text style={styles.textInfo}>Header</Text> 
      </View>
      <View style={styles.container} accessibilityLabel='Body'>
        <Text >Nguyễn Vĩ Khang</Text>
      </View>

      <View style={styles.footer} accessibilityLabel='Footer'>
        <Text style={styles.footer.text}>Copyright © Nguyễn Vĩ Khang</Text>
      </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header:{
    width: '100%',
    height: 60,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center'
  },
  body:{
    width: '100%',
    flex: '1',
    backgroundColor:'gray',
    alignItems: 'center',
    justifyContent: 'center'
  },
  footer:{
    width:'100%',
    height: 40,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    text:{
      color: 'black',
      fontSize: 12
    },
   
  },
  text:{
    color: 'black',
    fontSize: 20
  },
  textInfo:{
    fontWeight:'bold'
  }
});

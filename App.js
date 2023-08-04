import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View,Alert } from 'react-native';
import test from './home/Test';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.bigBlue}>Open up App.js to start working on your app!</Text>
      <Text style={styles.red}>Tuấn Ken Official</Text>
      <Text style={styles.row}>Tuấn Ken</Text>
      <Button style={styles.label} 
        onPress={() => Alert.alert('Simple Button pressed')}
        title="Click"/>
      <StatusBar style="auto" />
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
  bigBlue:{
    // color: 'blue',
    // frontWeight: 'bold',
    // frontSize: 20,
    justifyContent: 'flex-end'
  },
  red:{
    width: '10',
    height: '50',
    alignItems: 'center',
      flex: 0.2,
      color: 'red'
  },
  box: {
    width: 50,
    height: 50,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  button: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: 'oldlace',
    alignSelf: 'flex-start',
    marginHorizontal: '1%',
    marginBottom: 6,
    minWidth: '48%',
    textAlign: 'center',
  },
  selected: {
    backgroundColor: 'coral',
    borderWidth: 0,
  },
  buttonLabel: {
    fontSize: 12,
    fontWeight: '500',
    color: 'coral',
  },
  selectedLabel: {
    color: 'white',
  },
  label: {
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 24,
  }
});

import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View,Alert, ScrollView } from 'react-native';

const data =[
  {
    name: 'Concept of React',
    completed: true
  },
  {
    name: 'Basic components',
    completed: true
  },
  {
    name: 'Flatlist components',
    completed: false
  },
  {
    name: 'View components',
    completed: true
  },
  {
    name: 'Image components',
    completed: true
  },
  {
    name: 'Icon components',
    completed: true
  },
  {
    name: 'Navigator components',
    completed: true
  },
  {
    name: 'Screen',
    completed: true
  },
  {
    name: 'Redux components',
    completed: true
  },
];

export default function App() {
  return (
    <View style={styles.container} accessibilityLabel='App root'>
      <View style={styles.header} accessibilityLabel='Header'>
          <Text style={styles.textInfo}>Header</Text> 
      </View>
      <View style={styles.body} accessibilityLabel='Body'>
        <Text style={styles.text}>
          Data list:
        </Text>
        <ScrollView>
        {
          data.map((task, index) =>{
            return <View style={styles.item} key={index}><Text>#{index + 1}: {task.name}</Text></View>
          })
        }
         <Text style={styles.text}>
          Total: ({data.length}):
        </Text>
         </ScrollView>
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
    flex: 1,
    width: '100%',
    backgroundColor:'gray'
    
  },
  footer:{
    width:'100%',
    height: 30,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'flex-end',
    text:{
      color: 'black',
      fontSize: 12,
      fontWeight:'bold'
    },
   
  },
  text:{
    color: 'black',
    padding: 10,
    fontWeight:'bold'
  },
  textInfo:{
    fontWeight:'bold'
  },
  item:{
    height: 100,
    backgroundColor: 'white',
    borderBottomColor:'green',
    borderBottomWidth: 5,
    justifyContent:'center'

  }
});

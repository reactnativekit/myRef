import React, { useRef, useState } from "react";
import { View, Button, Text } from "react-native";
const App = () => {
 const [counter, setCounter] = useState(0);
 const counterRef = useRef(counter);
 const incrementCounter = () => {
   setCounter(counter => counter + 1);
   counterRef.current = counter;
 }
 const decrementCounter = () => {
   setCounter(counter => counter - 1);
   counterRef.current = counter;
 }

 return (
 <View style={{flex:1, justifyContent:"center", alignItems:"center", backgroundColor:"#D7A86E"}}>
   <Text style={{color:"#8E3200", fontSize:26}}>React Native ~ useRef{'\n'}</Text>
   <Text style={{color:"#FFFFFF", fontSize:20}}>Counter STATE: {counter}</Text>
   <Text style={{color:"#FFFFFF", fontSize:20}}>Counter REF: {counter}{'\n'}</Text>
   <Button color="#8E3200" title="PLUS" onPress={() => incrementCounter()}/>
   <Text>{'\n'}</Text>
   <Button color="#A64B2A" title="MINUS" onPress={() => decrementCounter()}/>
 </View>
 );
};

export default App;
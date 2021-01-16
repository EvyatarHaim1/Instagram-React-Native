import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Landing from './components/auth/Landing';
import Register from './components/auth/Register';
import { auth } from './firebase';
import { View, Text } from 'react-native';

const Stack = createStackNavigator();
export default function App() {

  const [loaded, setLoaded ] = useState(true);
  const [loggedIn, setLoggedIn ] = useState(false);

  useEffect(() => {
    auth.onAuthStateChanged(( user ) =>{
      if(!user){
        setLoggedIn(false)
        setLoaded(true)
      }else{
        setLoggedIn(true)
        setLoaded(false)
      }
    })
  },[])

  if(!loaded ){
    return (
      <View style={{ flex:1, justifyContent: 'center'}}>
        <Text> Loading </Text>
      </View>
    )
  }
  if(!loggedIn){
    return (
      <NavigationContainer>
          <Stack.Navigator initialRouteName="Landing">
              <Stack.Screen name="Landing" 
                            component={Landing}
                            options={{ headerShown: false }}
              />
              <Stack.Screen name="Register" 
                            component={Register}
                            options={{ headerShown: false }}
              />
          </Stack.Navigator>
      </NavigationContainer>
    );
  }

  return (
    <View style={{ flex:1, justifyContent: 'center'}}>
      <Text> User Is Logged In </Text>
    </View>
  )
}



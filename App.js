import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Landing from './components/auth/Landing';
import Register from './components/auth/Register';
import { auth } from './firebase';
import { Provider } from 'react-redux';
import Main from './components/Main';
import store from './redux/store/index';

const Stack = createStackNavigator();
export default function App() {

  const [loggedIn, setLoggedIn ] = useState(false);

  useEffect(() => {
    auth.onAuthStateChanged(( user ) => {
      if(user){
        setLoggedIn(true)
      }
    
    })
  },[])

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
    <Provider store={store}>
        <Main />
    </Provider>
  )
}



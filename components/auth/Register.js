import React, { useState } from 'react'
import { View, TextInput, Button } from 'react-native'
import { auth } from '../../firebase';

export default function Register() {

   const [ email, setEmail ] = useState('');
   const [ password, setPassword ] = useState('');
   const [ name, setName ] = useState('');


   const onSignUp = () => {
      auth.createUserWithEmailAndPassword(email,password)
        .then((result) => {
            console.log(result)
        })
        .catch((error) => {
            console.log(error.message)
        });
   };

    return (
        <View>
            <TextInput
                placeholder="Name"
                onChangeText={(name) => setName(name)}
            />
            <TextInput
                placeholder="Email"
                onChangeText={(email) => setEmail(email)}
            />
            <TextInput
                placeholder="Password"
                secureTextEntry={true}
                onChangeText={(password) => setPassword(password)}
            />
            <Button 
                onPress={onSignUp}
                title="Sign Up"
            />
        </View>
    )
}

import React from 'react'
import { View, TextInput, Button } from 'react-native'

export default function Register() {

   const [ email, setEmail ] = useState('');
   const [ password, setPassword ] = useState('');
   const [ name, setName ] = useState('');


   const onSignUp = () => {
       
   }

    return (
        <View>
            <TextInput
                placeholder="name"
                onChangeText={(name) => setName(name)}
            />
            <TextInput
                placeholder="email"
                onChangeText={(email) => setName(email)}
            />
            <TextInput
                placeholder="password"
                secureTextEntry={true}
                onChangeText={(password) => setName(password)}
            />
            <Button 
                onPress={() => onSignUp()}
                title="Sign Up"
            />
        </View>
    )
}

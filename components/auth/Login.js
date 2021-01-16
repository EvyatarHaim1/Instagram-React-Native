import React from 'react'
import { View, Text } from 'react-native'
import { auth } from '../../firebase';

export default function Login() {

    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    const onSignIn = () => {
        auth.signInWithEmailAndPassword(email,password)
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
                placeholder="Email"
                onChangeText={(email) => setEmail(email)}
            />
            <TextInput
                placeholder="Password"
                secureTextEntry={true}
                onChangeText={(password) => setPassword(password)}
            />
            <Button 
                onPress={onSignIn}
                title="Sign In"
            />
        </View>
    )
}

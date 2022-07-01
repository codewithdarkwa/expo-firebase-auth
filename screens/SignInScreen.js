import React,{useState} from 'react';
import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Button } from 'react-native-elements';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const auth = getAuth();

const SignInScreen = ({ navigation}) => {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [validationMessage,setvalidationMessage] = useState('');
  
  async function login() {
    if (email === '' || password === '') {
      setvalidationMessage('required filled missing')
      return;
    }

    try {
      await signInWithEmailAndPassword(auth,email, password);
    } catch (error) {
     setvalidationMessage(error.message);
    }
  }

  return (
    <View style={styles.container}>
      <View>
        <Image source={require('../assets/logo.png')} style={{width:150,height:150,alignSelf:'center'}}/>
        <Input
          placeholder='Email'
          containerStyle={{marginTop: 10}}
          value={email}
          onChangeText={(text) => setEmail(text)}
          leftIcon={<Icon name='envelope' size={16}/>}
            />

        <Input
          placeholder='Password'
          containerStyle={{marginTop: 10}}
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
          leftIcon={<Icon name='key' size={16}/>}
            />
       {<Text style={styles.error}>{validationMessage}</Text>}

        <Button title="Sign in" buttonStyle={{marginTop:10}} onPress={login} />
        <Text style={{marginTop:5,fontSize:17}}> Don't have an account yet ? 
        <TouchableOpacity onPress={()=>navigation.navigate('Sign Up')} style={{color:'blue',marginLeft:10}}>
                <Text>Sign up here</Text> 
          </TouchableOpacity>
          </Text>
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
    bottom:50
  },
  error: {
    marginTop: 10,
    color: 'red',
  }
});

export default SignInScreen;
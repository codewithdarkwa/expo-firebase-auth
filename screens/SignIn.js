import React,{useState} from 'react';
import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Button } from 'react-native-elements';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const auth = getAuth();

const SignIn = ({ navigation}) => {
  const [value, setValue] = useState({ email: '', password: '', error: ''})
  async function login() {
    if (value.email === '' || value.password === '') {
      setValue({
        ...value,
        error: 'Email and password are mandatory.'
      })
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, value.email, value.password);
    } catch (error) {
      setValue({
        ...value,
        error: error.message,
      })
    }
  }

  return (
    <View style={styles.container}>
      <View style={{}}>
        <Image source={require('../assets/logo.png')} style={{width:150,height:150,alignSelf:'center'}}/>
        <Input
          placeholder='Email'
          containerStyle={{marginTop: 10}}
          value={value.email}
          onChangeText={(text) => setValue({ ...value, email: text })}
          leftIcon={<Icon
            name='envelope'
            size={16}
            />}
            />

        <Input
          placeholder='Password'
          containerStyle={{marginTop: 10}}
          value={value.password}
          onChangeText={(text) => setValue({ ...value, password: text })}
          secureTextEntry={true}
          leftIcon={<Icon
            name='key'
            size={16}
            />}
            />
       {!!value.error && <View><Text style={styles.error}>{value.error}</Text></View>}
        <Button title="Sign in" buttonStyle={{marginTop:10}} onPress={login} />
        <Text style={{marginTop:5,fontSize:17}}> Don't have an account yet ? 
        <TouchableOpacity onPress={()=>navigation.navigate('Sign Up')} style={{color:'blue',marginLeft:10}}>
                Sign up here 
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

export default SignIn;
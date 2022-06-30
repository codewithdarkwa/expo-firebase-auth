import {useState} from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Button } from 'react-native-elements';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { TouchableOpacity } from 'react-native-web';

const auth = getAuth()
const SignUpScreen  = ({ navigation }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [validationMessage, setValidationMessage] = useState('')


  let validateAndSet = (value, valueToCompare, setValue) => {
  value !== valueToCompare ? setValidationMessage('Password do not match') : setValidationMessage('')
   setValue(value);  
}
  async function createAccount() {
    if (email === '' || password === '') {
      // setValue({
      //   error: 'Require fields are missing'
      // })
      return;
    }
  
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigation.navigate('Sign In');
    } catch (error) {
      console.log(error);
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
          containerStyle={{marginTop:10}}
          value={password}
          onChangeText={(value) => validateAndSet(value,confirmPassword,setPassword)}
          secureTextEntry
          leftIcon={<Icon name='key' size={16}/>}
            />
        <Input
          placeholder='confirm password'
          containerStyle={{marginTop:10}}
          value={confirmPassword}
          onChangeText={(value) => validateAndSet(value,password,setConfirmPassword)}
          secureTextEntry
          leftIcon={<Icon name='key' size={16}/>}
            />
            {!!value.error &&<Text style={styles.error}>{value.error}</Text>}
        <Button title="Sign up" buttonStyle={{marginTop:10}} onPress={createAccount} />
          <Text style={{marginTop:5,fontSize:17}}>Already have an account?
          <TouchableOpacity onPress={()=>navigation.navigate('Sign In')} style={{color:'blue',marginLeft:10}}>
                Login here 
          </TouchableOpacity>
          </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    bottom:50,
  },
  error: {
    marginTop: 10,
    color: 'red',
  }
});

export default SignUpScreen;
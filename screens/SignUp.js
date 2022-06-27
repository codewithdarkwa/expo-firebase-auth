import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Button } from 'react-native-elements';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { TouchableOpacity } from 'react-native-web';

const auth = getAuth()
const SignUp  = ({ navigation }) => {
  const [value, setValue] = React.useState({
    email: '',
    password: '',
    error: ''
  })

  async function createAccount() {
    if (value.email === '' || value.password === '') {
      setValue({
        ...value,
        error: 'Email and password are mandatory.'
      })
      return;
    }
  
    try {
      await createUserWithEmailAndPassword(auth, value.email, value.password);
      navigation.navigate('Sign In');
    } catch (error) {
      setValue({
        ...value,
        error: error.message,
      })
    }
  }

  return (
    <View style={styles.container}>
      {!!value.error && <View style={styles.error}><Text>{value.error}</Text></View>}
      <View style={{flex: 1}}>
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
          containerStyle={{marginTop:10}}
          value={value.password}
          onChangeText={(text) => setValue({ ...value, password: text })}
          secureTextEntry
          leftIcon={<Icon
            name='key'
            size={16}
          />}
        />
        <Input
          placeholder='confirm password'
          containerStyle={{marginTop:10}}
          value={value.password}
          onChangeText={(text) => setValue({ ...value, password: text })}
          secureTextEntry
          leftIcon={<Icon
            name='key'
            size={16}
          />}
        />
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
  },
  error: {
    marginTop: 10,
    padding: 10,
    color: '#fff',
    backgroundColor: '#D54826FF',
  }
});

export default SignUp;
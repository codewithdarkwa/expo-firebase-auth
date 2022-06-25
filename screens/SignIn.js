import { StyleSheet,View,Text } from "react-native"

export default function SignIn(){
    return(
     <View style={styles.container}>
        <Text>SignIn Screen </Text>
     </View>
    )
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
}
});
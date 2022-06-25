import { StyleSheet,View,Text } from "react-native"

export default function Welcome(){
    return(
     <View style={styles.container}>
        <Text>Welcome Screen </Text>
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
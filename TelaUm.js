import { StyleSheet, View, Text, Button } from "react-native";


export default function TelaUm({ navigation }){

    const irParaTelaDois = () => {
        navigation.navigate('teladois')
    }
    

    return(
        <View style={styles.container}>
            <Text style={styles.text}>Tela Um</Text>
            <Button title="IR PARA A TELA DOIS" onPress={irParaTelaDois}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#e8fbe1'
    },
    text: {
        fontSize:30
    }
})

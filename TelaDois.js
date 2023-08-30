import { StyleSheet, View, Text } from "react-native";

export default function TelaDois(){
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Tela Dois</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#faf8fd'
    },
    text: {
        fontSize:30
    }
})
import { useState } from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import axios from 'axios'

export default function ExcluirUsuario({ navigation }) {
    const [idUsuario, setIdUsuario] = useState('')

    const excluirUsuario = async () => {
        id = idUsuario
        axios.delete(`https://reqres.in/api/users/${idUsuario}`)
            .then(response => {
                // Sugestão: usar if-else para tratar os status das requisições
                // nessa parte aqui
                console.log("Usuário removido com sucesso")
                navigation.navigate("listausuarios")
            })
            .catch(erro => {
                console.error("Falha ao remover o usuário: ", erro)
            })
    }

    return (<View style={styles.container}>
        <Text style={styles.tituloTela}>Excluir usuário</Text>
        <View>
            <TextInput
                style={styles.textinput}
                placeholder="ID do usuário"
                value={idUsuario}
                onChangeText={setIdUsuario}
            />
            <Button title="EXCLUIR" onPress={excluirUsuario} />
        </View>
    </View>)
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    tituloTela: {
        fontSize: 25,
        fontWeight: 'bold'
    },
    textinput: {
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'black',
        height: 40,
        marginVertical: 10,
        paddingLeft: 10,
        fontSize: 20
    }
})
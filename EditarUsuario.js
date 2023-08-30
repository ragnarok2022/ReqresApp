import { useState } from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import axios from 'axios'

export default function EditarUsuario({ navigation }) {
    const [idUsuario, setIdUsuario] = useState('')
    const [nome, setNome] = useState('')
    const [funcao, setFuncao] = useState('')

    const editarUsuario = async () => {
        id = idUsuario
        name = nome
        job = funcao
        axios.put(`https://reqres.in/api/users/${idUsuario}`)
            .then(response => {
                // Sugestão: usar if-else para tratar os status das requisições
                // nessa parte aqui
                console.log("Usuário alterado com sucesso")
                console.log(response.data.name)
                console.log(response.data.job)
                console.log(response.data.updatedAt)
                navigation.navigate("listausuarios")
            })
            .catch(erro => {
                console.error("Falha ao alterar o usuário: ", erro)
            })
    }

    return (<View style={styles.container}>
        <Text style={styles.tituloTela}>Editar usuário</Text>
        <View>
            <TextInput
                style={styles.textinput}
                placeholder="ID do usuário"
                value={idUsuario}
                onChangeText={setIdUsuario}
            />
            <TextInput
                style={styles.textinput}
                placeholder="Seu nome"
                value={nome}
                onChangeText={setNome}
            />
            <TextInput
                style={styles.textinput}
                placeholder="Sua profissão"
                value={funcao}
                onChangeText={setFuncao}
            />
            <Button title="ALTERAR" onPress={editarUsuario} />
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
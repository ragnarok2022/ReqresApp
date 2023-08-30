import { useState, useEffect } from "react"
import { StyleSheet, View, Text, TextInput, Button } from "react-native"
import axios from "axios"

export default function CriarUsuario({ navigation }){
    const [nome, setNome] = useState('')
    const [funcao, setFuncao] = useState('')
    
    const criarUsuario = async () => {
        name = nome
        job = funcao
        axios.post('https://reqres.in/api/users')
            .then(response => {
                // Sugestão: usar if-else para tratar os status das requisições
                // nessa parte aqui
                console.log("Usuário criado com sucesso")
                console.log(response.data.id)
                console.log(response.data.createdAt)
                navigation.navigate("listausuarios")
            })
            .catch(erro => {
                console.error("Falha ao criar o usuário: ", erro)
            })
    }
    
    return(
        <View style={styles.container}>
            <Text style={styles.tituloTela}>Criar novo usuário</Text>
            <View>
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
                <Button title="CRIAR" onPress={criarUsuario}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
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
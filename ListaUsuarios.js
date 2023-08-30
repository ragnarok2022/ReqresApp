import { StyleSheet, View, Text, FlatList, Button, Pressable, Touchable, TouchableOpacity } from "react-native"
import axios from "axios"
import { useEffect, useState } from "react"

export default function ListaUsuarios({ navigation }) {
    const [usuarios, setUsuarios] = useState([])

    useEffect(() => {
        axios.get('https://reqres.in/api/users')
            .then(response => {
                // Sugestão: usar if-else para tratar os status das requisições
                // nessa parte aqui
                setUsuarios(response.data.data)
            })
            .catch(erro => {
                console.error("Falha ao exibir os usuários: ", erro)
            })
    })

    const telaCriarUsuario = () => {
        navigation.navigate("criarusuario")
    }

    const telaEditarUsuario = () => {
        navigation.navigate("editarusuario")
    }

    const telaExcluirUsuario = () => {
        navigation.navigate("excluirusuario")
    }

    const telaDetalhesUsuario = (usuario) => {
        navigation.navigate("detalhesusuario", { usuario })
    }

    return (
        <View style={styles.container}>
            <Text style={styles.tituloApp}>Lista de Usuários</Text>
            <FlatList
                data={usuarios}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.usuario}>
                        <TouchableOpacity onPress={() => telaDetalhesUsuario(item)}>
                            <Text style={styles.usuarioNome}>{item.first_name} {item.last_name}</Text>
                        </TouchableOpacity>     
                        {/*<Pressale onPress={}>
                            <Text style={styles.usuarioNome}>{item.first_name} {item.last_name}</Text>
                </Pressale>*/}                   
                    </View>

                )}
            />
            <Button title="CRIAR USUÁRIO" onPress={telaCriarUsuario}/>
            <View style={styles.spacer}></View>
            <Button title="EDITAR USUÁRIO" onPress={telaEditarUsuario}/>
            <View style={styles.spacer}></View>
            <Button title="EXCLUIR USUÁRIO" onPress={telaExcluirUsuario}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    tituloApp: {
        fontSize: 25,
        fontWeight: 'bold'
    },
    usuario: {
        marginVertical:  10
    },
    usuarioNome: {
        fontSize: 20
    },
    spacer: {
        marginVertical: 10
    }
})
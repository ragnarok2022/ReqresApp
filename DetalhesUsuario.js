
import { StyleSheet, View, Text, Image, Button } from "react-native"
import { Feather } from '@expo/vector-icons'
export default function DetalhesUsuario({ route }) {
    const { usuario } = route.params

    return (
        <View style={styles.container}>
            <Text style={styles.textName}>George Bluth</Text>
            <Text style={styles.tituloTela}>Tela de detalhes</Text>
            <Text>ID do usuário: {usuario.id}</Text>
            <Text>Nome: {usuario.first_name}</Text>
            <Text>Sobrenome: {usuario.last_name}</Text>
            <Text>E-mail: {usuario.email}</Text>
            <Feather name="clipboard" size={25} color={'black'}/>
            <Image source={{ uri: usuario.avatar }} style={styles.imagem} />
            {/*<Image source={{ uri: "https://reqres.in/img/faces/12-image.jpg"}} style={styles.imagem}/>
            {/* <Button title="VOLTAR" onPress={}/> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    tituloTela: {
        fontSize: 25,
        fontWeight: 'bold'
    },
    imagem: {
        width: 150,
        height: 150
    },
    imagem: {
        margin: 30
    },
    textName: {
        fontSize: 50,


    }

})
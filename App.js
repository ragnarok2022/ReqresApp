import { createNativeStackNavigator } from "@react-navigation/native-stack"

const Stack = createNativeStackNavigator()

import { NavigationContainer } from "@react-navigation/native";
import ListaUsuarios from "./ListaUsuarios";
import CriarUsuario from "./CriarUsuario";
import EditarUsuario from "./EditarUsuario";
import ExcluirUsuario from "./ExcluirUsuario";
import DetalhesUsuario from "./DetalhesUsuario";

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="listausuarios" screenOptions={{headerShown: false}}>
        <Stack.Screen name="listausuarios" component={ListaUsuarios} />
        <Stack.Screen name="criarusuario" component={CriarUsuario} />
        <Stack.Screen name="editarusuario" component={EditarUsuario} />
        <Stack.Screen name="excluirusuario" component={ExcluirUsuario} />
        <Stack.Screen name="detalhesusuario" component={DetalhesUsuario} />

      </Stack.Navigator>
    </NavigationContainer>

  );
}
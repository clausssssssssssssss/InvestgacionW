import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import PantallaInicio from './screens/Inicio';
import PantallaPerfil from './screens/Perfil';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Inicio" component={PantallaInicio} />
        <Stack.Screen name="Perfil" component={PantallaPerfil} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

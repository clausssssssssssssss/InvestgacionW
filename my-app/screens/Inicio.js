import { View, Text, Button, StyleSheet } from 'react-native';

export default function PantallaInicio({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Desarrollo de Componentes</Text>
      <Text style={styles.descripcion}>Módulo 3.5: Dispositivos Móviles</Text>
      <Button title="Ver Perfil" onPress={() => navigation.navigate('Perfil')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  titulo: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
  descripcion: { fontSize: 16, marginBottom: 20 },
});

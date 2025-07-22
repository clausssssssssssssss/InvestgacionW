import { View, Button, StyleSheet } from 'react-native';
import CardPersonalizada from '../components/CardPersonalizada';

export default function PantallaPerfil({ navigation }) {
  return (
    <View style={styles.container}>
      <CardPersonalizada
        nombre="Claudia Marìa Hernàndez Ortega"
        edad="18"
        imagen="c:\Users\Estudiante\Desktop\iamgen.jpg"
      />
      <Button title="Regresar" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});

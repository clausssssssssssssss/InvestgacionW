import { View, Text, Image, StyleSheet } from 'react-native';

export default function CardPersonalizada({ nombre, edad, imagen }) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: imagen }} style={styles.imagen} />
      <Text style={styles.texto}>Nombre: {nombre}</Text>
      <Text style={styles.texto}>Edad: {edad}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#e0eafa',
    padding: 20,
    margin: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  imagen: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
  },
  texto: {
    fontSize: 16,
  },
});

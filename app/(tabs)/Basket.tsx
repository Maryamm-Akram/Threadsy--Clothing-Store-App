import { useRouter } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function BasketScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Your Basket</Text>
      <Text style={styles.message}>You must be signed in to view your basket.</Text>

      <TouchableOpacity style={styles.button} onPress={() => router.push('/My Account')}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF3E0',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  heading: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#BF360C',
    marginBottom: 16,
  },
  message: {
    fontSize: 16,
    color: '#6A1B9A',
    textAlign: 'center',
    marginBottom: 24,
  },
  button: {
    backgroundColor: '#BF360C',
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 10,
  },
  buttonText: {
    color: '#FFF3E0',
    fontWeight: '600',
    fontSize: 16,
  },
});

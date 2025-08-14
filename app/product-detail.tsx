import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React from 'react';
import {
    Alert,
    Dimensions,
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

export default function ProductDetailScreen() {
  const { name, price, desc, img } = useLocalSearchParams();
  const router = useRouter();

  const handleAddToCart = () => {
    Alert.alert('Added to Cart', `${name} has been added to your cart.`);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={20} color="#BF360C" />
        <Text style={styles.backText}>Back</Text>
      </TouchableOpacity>

      <View style={styles.card}>
        <Image
          style={styles.image}
          source={{ uri: img || 'https://via.placeholder.com/200' }}
        />
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.price}>{price}</Text>
        <Text style={styles.description}>{desc}</Text>

        <TouchableOpacity style={styles.cartButton} onPress={handleAddToCart}>
          <Ionicons name="cart-outline" size={20} color="#FFF3E0" />
          <Text style={styles.cartText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const { width } = Dimensions.get('window');
const CARD_WIDTH = width * 0.9;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#FFF3E0',
    alignItems: 'center',
    paddingVertical: 20,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    alignSelf: 'flex-start',
    marginLeft: 20,
  },
  backText: {
    marginLeft: 6,
    color: '#BF360C',
    fontWeight: '600',
    fontSize: 16,
  },
  card: {
    width: CARD_WIDTH,
    backgroundColor: '#FFE0C2',
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    shadowColor: '#BF360C',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
  },
  image: {
    width: CARD_WIDTH - 32,
    height: CARD_WIDTH - 32,
    borderRadius: 12,
    marginBottom: 20,
    backgroundColor: '#FFF3E0',
  },
  name: {
    fontSize: 24,
    fontWeight: '700',
    color: '#4E2A05',
    marginBottom: 8,
    textAlign: 'center',
  },
  price: {
    fontSize: 20,
    fontWeight: '600',
    color: '#BF360C',
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    color: '#6A1B9A',
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 20,
  },
  cartButton: {
    flexDirection: 'row',
    backgroundColor: '#BF360C',
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 10,
    alignItems: 'center',
  },
  cartText: {
    color: '#FFF3E0',
    marginLeft: 8,
    fontSize: 16,
    fontWeight: '600',
  },
});
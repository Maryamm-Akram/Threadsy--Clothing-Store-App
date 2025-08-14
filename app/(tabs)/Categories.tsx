import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

const CATEGORIES = {
  Women: ['Dresses', 'Jewellery', 'Shoes'],
  Men: ['Shirts', 'Shoes', 'Watches'],
  Kids: ['T-Shirts', 'Shoes', 'Toys'],
};

export default function CategoriesScreen() {
  const router = useRouter();
  const [search, setSearch] = useState('');

  const filteredCategories = Object.entries(CATEGORIES).map(([gender, items]) => {
    const filteredItems = items.filter((item) =>
      item.toLowerCase().includes(search.toLowerCase())
    );
    return [gender, filteredItems] as [string, string[]];
  }).filter(([, items]) => items.length > 0); 

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="#888" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search categories..."
          placeholderTextColor="#888"
          value={search}
          onChangeText={setSearch}
        />
      </View>

      <Text style={styles.title}>Categories</Text>

      {filteredCategories.length === 0 ? (
        <Text style={styles.noResults}>No categories found.</Text>
      ) : (
        filteredCategories.map(([gender, items]) => (
          <View key={gender} style={styles.section}>
            <Text style={styles.heading}>{gender}</Text>
            {items.map((item) => (
              <TouchableOpacity
                key={item}
                style={styles.button}
                onPress={() =>
                  router.push({
                    pathname: '/product-list',
                    params: { gender, category: item },
                  })
                }
              >
                <Text style={styles.buttonText}>{item}</Text>
              </TouchableOpacity>
            ))}
          </View>
        ))
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#FFF3E0',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#FFCC80',
    paddingHorizontal: 12,
    marginBottom: 20,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#2D2D2D',
    paddingVertical: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#BF360C',
    textAlign: 'center',
    marginBottom: 20,
  },
  noResults: {
    fontSize: 18,
    color: '#6A1B9A',
    textAlign: 'center',
    marginTop: 20,
  },
  section: {
    marginBottom: 24,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4E2A05',
    marginBottom: 12,
  },
  button: {
    backgroundColor: '#FFE0C2',
    padding: 14,
    borderRadius: 12,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#BF360C',
  },
  buttonText: {
    fontSize: 16,
    color: '#4E2A05',
    fontWeight: '600',
    textAlign: 'center',
  },
});
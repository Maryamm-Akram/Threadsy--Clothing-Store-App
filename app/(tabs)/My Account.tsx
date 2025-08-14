import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const MENU_ITEMS = [
  { label: 'Settings', color: '#FFE0C2' },      
  { label: 'My Reviews', color: '#FFD1A1' },    
  { label: 'Addresses', color: '#FFF2E2' },     
  { label: 'Gift Cards', color: '#FFE5CC' },    
  { label: 'Help & Support', color: '#FFCC99' } 
];

export default function AccountScreen() {
  const handleSignIn = () => {
    //null
  };

  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>Hi, Guest!</Text>

      <TouchableOpacity style={styles.signInButton} onPress={handleSignIn}>
        <Text style={styles.signInText}>Sign In</Text>
      </TouchableOpacity>

      <Text style={styles.menuTitle}>Account Options</Text>

      <FlatList
        data={MENU_ITEMS}
        keyExtractor={(item) => item.label}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.menuItem, { backgroundColor: item.color }]}
            activeOpacity={0.7}
          >
            <Text style={styles.menuText}>{item.label}</Text>
          </TouchableOpacity>
        )}
        style={styles.menuList}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF3E0',
    padding: 20,
  },
  greeting: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 24,
    color: '#BF360C',
    alignSelf: 'center',
  },
  signInButton: {
    backgroundColor: '#BF360C',
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 30,
    shadowColor: '#BF360C',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 3,
  },
  signInText: {
    color: '#FFF3E0',
    fontSize: 18,
    fontWeight: '600',
  },
  menuTitle: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 12,
    color: '#6A1B9A',
  },
  menuList: {
    borderRadius: 12,
  },
  menuItem: {
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 12,
    marginBottom: 12,
    justifyContent: 'center',
    shadowColor: '#BF360C',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 2,
  },
  menuText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#4E2A05',
  },
});
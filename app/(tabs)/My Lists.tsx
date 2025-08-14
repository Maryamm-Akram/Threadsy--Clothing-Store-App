import { useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function ListsScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.message}>Sign in to view your lists</Text>

      <TouchableOpacity
        style={styles.signInButton}
        onPress={() => router.push('/My Account')}
      >
        <Text style={styles.signInText}>Sign In</Text>
      </TouchableOpacity>

      <Text style={styles.signupText}>
        Don't have an account?{' '}
        <Text
          style={styles.signupLink}
          onPress={() => alert('Sign up functionality coming soon!')}
        >
          Sign Up
        </Text>
      </Text>
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
  message: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 30,
    color: '#BF360C',
    textAlign: 'center',
  },
  signInButton: {
    backgroundColor: '#BF360C',
    paddingVertical: 14,
    paddingHorizontal: 60,
    borderRadius: 30,
    marginBottom: 20,
  },
  signInText: {
    color: '#FFF3E0',
    fontSize: 18,
    fontWeight: '700',
  },
  signupText: {
    fontSize: 16,
    color: '#6A1B9A',
  },
  signupLink: {
    color: '#BF360C',
    fontWeight: '700',
  },
});
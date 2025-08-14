import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { useEffect, useState } from 'react';
import { Image, StyleSheet, View } from 'react-native';

const Layout = () => {
  const [isSplashVisible, setIsSplashVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSplashVisible(false);
    }, 1000); 

    return () => clearTimeout(timer);
  }, []);

  if (isSplashVisible) {
    return (
      <View style={styles.splash}>
        <Image
          style={styles.image}
          source={{ uri: 'https://www.coupons.com/images/260x136/images/t/threadsy-LOGO.png' }}
        />
      </View>
    );
  }

  return (
    <Tabs
      screenOptions={({ route }) => {
        let iconName;

        if (route.name === 'index') iconName = 'home';
        else if (route.name === 'Categories') iconName = 'grid';
        else if (route.name === 'My Account') iconName = 'person-circle';
        else if (route.name === 'My Lists') iconName = 'heart';
        else if (route.name === 'Basket') iconName = 'basket';
        else iconName = 'ellipse';

        return {
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name={iconName} size={size} color={color} />
          ),
          tabBarActiveTintColor: '#E65100', 
          tabBarInactiveTintColor: '#888',   
          tabBarStyle: {
            backgroundColor: '#fff',
            borderTopWidth: 0.5,
            borderTopColor: '#ccc',
            height: 60,
            paddingBottom: 6,
          },
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: '600',
          },
        };
      }}
    />
  );
};

export default Layout;

const styles = StyleSheet.create({
  splash: {
    flex: 1,
    backgroundColor: '#E65100', 
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 130,
    height: 130,
    resizeMode: 'contain',
  },
});

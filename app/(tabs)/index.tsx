import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, } from 'react-native';

const windowWidth = Dimensions.get('window').width;

const categories = [
  {
    label: 'Women',
    img: 'https://cdn.shopify.com/s/files/1/0611/8585/1568/files/W.SS25.070.T-1_533x.jpg?v=1741931074',
    color: '#FFE0C2',
  },
  {
    label: 'Men',
    img: 'https://imgix.bustle.com/uploads/image/2025/1/31/1f6244e7/gettyimages-2196467089.jpg?w=414&h=621&fit=crop&crop=focalpoint&dpr=2&fp-x=0.5048&fp-y=0.1996',
    color: '#FFD1A1',
  },
  {
    label: 'Kids',
    img: 'https://www.peacocks.co.uk/dw/image/v2/BKQD_PRD/on/demandware.static/-/Sites-pck-uk-master-catalog/default/dwf763a38f/Assets/gallery/4804921_A01_gallery_01/5c9dab528e6072ce396a455dfe600f8a1c8408a7_4804921_A01_gallery_01.jpg?sw=334&sh=444&sm=fit',
    color: '#FFF2E2',
  },
];

const featured = [
  {
    name: 'Summer Lawn 3pc',
    price: '$40',
    img: 'https://www.crossstitch.pk/cdn/shop/files/cambric_lawn_0000_E_4_-Photoroom.jpg?v=1738657756',
  },
  {
    name: 'Men Denim Jacket',
    price: '$59',
    img: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
  },
  {
    name: 'Kids Cotton Frock',
    price: '$22',
    img: 'https://thebest.pk/cdn/shop/products/PhotoRoom-20220529_070513_16_6a674a11-64d9-4f8d-8852-3dd27952f479.png?v=1658047715',
  },
  {
    name: 'Gold Earrings',
    price: '$15',
    img: 'https://pinkvelvetboutique.com.au/cdn/shop/files/6654_20-_20HI-RES_533x_dd92f873-6079-4887-8b7c-beaca3070fb7.webp?v=1709852577',
  },
  {
    name: 'Casual Sneakers',
    price: '$30',
    img: 'https://martinvalen.com/22128-large_default/mens-casual-sneakers-breathable-shoes-gray.jpg',
  },
];

export default function HomeScreen() {
  const router = useRouter();

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.brandRow}>
        <Image
          source={{ uri: 'https://www.coupons.com/images/260x136/images/t/threadsy-LOGO.png' }}
          style={styles.logo}
        />
        <Text style={styles.brandText}>Threadsy</Text>
      </View>

      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="#888" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search products..."
          placeholderTextColor="#888"
        />
      </View>

      <Text style={styles.sectionTitle}>Shop by Category</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.horizontalScroll}
      >
        {categories.map((cat) => (
          <TouchableOpacity
            key={cat.label}
            style={[styles.categoryCard, { backgroundColor: cat.color }]}
            onPress={() => router.push(`/Categories`)}
          >
            <Image source={{ uri: cat.img }} style={styles.categoryImage} />
            <Text style={styles.catText}>{cat.label}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <Text style={styles.sectionTitle}>Featured Products</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.horizontalScroll}
      >
        {featured.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.featureCard}
            onPress={() =>
              router.push({
                pathname: '/product-list',
                params: {
                  gender: item.name.includes('Men')
                    ? 'Men'
                    : item.name.includes('Kids')
                    ? 'Kids'
                    : 'Women',
                  category: '',
                },
              })
            }
          >
            <Image source={{ uri: item.img }} style={styles.image} />
            <Text style={styles.name} numberOfLines={1}>
              {item.name}
            </Text>
            <Text style={styles.price}>{item.price}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF3E0',
  },
  contentContainer: {
    paddingVertical: 30,
    paddingBottom: 60,
  },
  brandRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  logo: {
    width: 32,
    height: 32,
    resizeMode: 'contain',
    marginRight: 8,
  },
  brandText: {
    fontSize: 28,
    fontStyle: 'italic',
    fontWeight: 'bold',
    color: '#1C1C1C',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 12,
    marginHorizontal: 16,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: '#FFCC80',
    paddingHorizontal: 12,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 10,
    fontSize: 16,
    color: '#2D2D2D',
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '600',
    marginLeft: 16,
    marginBottom: 20,
    color: '#BF360C',
  },
  horizontalScroll: {
    paddingLeft: 16,
    paddingRight: 12,
    marginBottom: 40,
  },
  categoryCard: {
    width: windowWidth * 0.5,
    height: windowWidth * 0.6,
    borderRadius: 16,
    marginRight: 18,
    justifyContent: 'flex-end',
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 5,
    elevation: 6,
  },
  categoryImage: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 16,
    resizeMode: 'cover',
  },
  catText: {
    fontSize: 22,
    fontWeight: '700',
    color: '#BF360C',
    backgroundColor: 'rgba(255,255,255,0.9)',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  featureCard: {
    width: windowWidth * 0.4,
    backgroundColor: '#ffffff',
    borderRadius: 16,
    marginRight: 20,
    padding: 14,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 4,
  },
  image: {
    width: '100%',
    height: windowWidth * 0.4,
    borderRadius: 12,
    marginBottom: 10,
    backgroundColor: '#FFE0C2',
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    color: '#2D2D2D',
  },
  price: {
    fontSize: 14,
    color: '#FF6F00',
    marginTop: 4,
  },
});

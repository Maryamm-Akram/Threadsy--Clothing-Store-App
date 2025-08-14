import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View, } from 'react-native';
  
   
  const PRODUCTS = [
    // Women - Dresses
    {
      name: 'Embroidered Lawn Dress',
      price: '$20',
      gender: 'Women',
      category: 'Dresses',
      img: 'https://www.crossstitch.pk/cdn/shop/files/cambric_lawn_0000_E_4_-Photoroom.jpg?v=1738657756'
    },
    {
      name: 'Silk Maxi',
      price: '$35',
      gender: 'Women',
      category: 'Dresses',
      img: 'https://bridalcollection.pk/wp-content/uploads/2025/01/a-33.jpg'
    },
    {
      name: 'Chiffon Frock',
      price: '$30',
      gender: 'Women',
      category: 'Dresses',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdTFv733dJ0H4uE4ewT8NFregBX7ibORiUCA&s'
    },
  
    // Women - Jewellery
    {
      name: 'Gold Earrings',
      price: '$15',
      gender: 'Women',
      category: 'Jewellery',
      img: 'https://pinkvelvetboutique.com.au/cdn/shop/files/6654_20-_20HI-RES_533x_dd92f873-6079-4887-8b7c-beaca3070fb7.webp?v=1709852577'
    },
    {
      name: 'Pearl Necklace',
      price: '$22',
      gender: 'Women',
      category: 'Jewellery',
      img: 'https://www.kessaris.gr/sites/default/files/styles/product_zoom/public/import/one_drive/T.GOR.1386/M.4938-Kessaris%20Five%20Layered%20Pearl%20Necklace_DSC_8101.jpg?itok=u-mdTJcr'
    },
    {
      name: 'Silver Bangles',
      price: '$18',
      gender: 'Women',
      category: 'Jewellery',
      img: 'https://afghanaccessories.com/wp-content/uploads/2024/02/CYMERA_20240203_170310_wm.jpg'
    },
  
    // Women - Shoes
    {
      name: 'Heeled Sandals',
      price: '$25',
      gender: 'Women',
      category: 'Shoes',
      img: 'https://static-01.daraz.lk/p/dbd18bf8e73e1d2f4449e38ca8054e55.jpg'
    },
    {
      name: 'Floral Flats',
      price: '$18',
      gender: 'Women',
      category: 'Shoes',
      img: 'https://crozawear.com/cdn/shop/files/347-new.jpg?v=1747816756'
    },
    {
      name: 'Block Heels',
      price: '$30',
      gender: 'Women',
      category: 'Shoes',
      img: 'https://static.zara.net/assets/public/557a/39c8/3beb4e429e59/d6d9e4479718/12315510107-ult21/12315510107-ult21.jpg?ts=1740731490837&w=352&f=auto'
    },
  
    // Men - Shirts
    {
      name: 'Formal Shirt',
      price: '$22',
      gender: 'Men',
      category: 'Shirts',
      img: 'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg'
    },
    {
      name: 'Denim Shirt',
      price: '$18',
      gender: 'Men',
      category: 'Shirts',
      img: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg'
    },
    {
      name: 'Casual Polo',
      price: '$16',
      gender: 'Men',
      category: 'Shirts',
      img: 'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg'
    },
  
    // Men - Shoes
    {
      name: 'Casual Sneakers',
      price: '$30',
      gender: 'Men',
      category: 'Shoes',
      img: 'https://martinvalen.com/22128-large_default/mens-casual-sneakers-breathable-shoes-gray.jpg'
    },
    {
      name: 'Black Loafers',
      price: '$28',
      gender: 'Men',
      category: 'Shoes',
      img: 'https://sloshoes.com/cdn/shop/products/GenuineLeathershoe.jpg?v=1739347231&width=1000'
    },
    {
      name: 'Brown Oxfords',
      price: '$35',
      gender: 'Men',
      category: 'Shoes',
      img: 'https://www.samuel-windsor.co.uk/cdn/shop/files/CC7FCBB5-1374-4D67-BA73-A6D62A312B64.jpg?v=1700483681&width=1000'
    },
  
    // Men - Watches
    {
      name: 'Sport Watch',
      price: '$40',
      gender: 'Men',
      category: 'Watches',
      img: 'https://tomiwatches.pk/cdn/shop/files/rn-image_picker_lib_temp_efa682a7-f256-462d-aee5-ba2aa9a83986.jpg?v=1748076641'
    },
    {
      name: 'Leather Strap Watch',
      price: '$45',
      gender: 'Men',
      category: 'Watches',
      img: 'https://www.zuludiver.com/cdn/shop/articles/ZD-HKS-NATO-CH-LEATHER-WS-Social_1200x.jpg?v=1697533360'
    },
    {
      name: 'Digital Watch',
      price: '$38',
      gender: 'Men',
      category: 'Watches',
      img: 'https://rukminim3.flixcart.com/image/850/1000/xif0q/watch/0/b/i/-original-imagrdzfpxz8fkzj.jpeg?q=90&crop=false'
    },
  
    // Kids - T-Shirts
    {
      name: 'Spiderman Tee',
      price: '$10',
      gender: 'Kids',
      category: 'T-Shirts',
      img: 'https://thebest.pk/cdn/shop/products/PhotoRoom-20220529_070513_16_6a674a11-64d9-4f8d-8852-3dd27952f479.png?v=1658047715'
    },
    {
      name: 'Frozen Tee',
      price: '$9',
      gender: 'Kids',
      category: 'T-Shirts',
      img: 'https://www.ubuy.cm/productimg/?image=aHR0cHM6Ly9pNS53YWxtYXJ0aW1hZ2VzLmNvbS9hc3IvNDRmN2M5MTItMDEzYy00Mjg3LWI1YTAtYmJmMWI4MWJhMTBhLmQzZWQ1YTUwMDhiZDZmMTY5OTE0MDA1ZTgzNTUwOWUwLmpwZWc.jpg'
    },
    {
      name: 'Minions Tee',
      price: '$11',
      gender: 'Kids',
      category: 'T-Shirts',
      img: 'https://m.media-amazon.com/images/I/A1e+j+PaYAL._CLa%7C2140%2C2000%7C91LxqMWFvaL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_UY1000_.png'
    },
  
    // Kids - Shoes
    {
      name: 'Light-up Shoes',
      price: '$15',
      gender: 'Kids',
      category: 'Shoes',
      img: 'https://static-01.daraz.pk/p/1b3c80bc06914ba95322ad2e4cb47c1e.jpg'
    },
    {
      name: 'Velcro Sneakers',
      price: '$14',
      gender: 'Kids',
      category: 'Shoes',
      img: 'https://i.pinimg.com/736x/41/19/39/411939f1327645e0ae4bea5e94d901f4.jpg'
    },
    {
      name: 'Colorful Sandals',
      price: '$13',
      gender: 'Kids',
      category: 'Shoes',
      img: 'https://static.independent.co.uk/2022/06/08/16/Bobux.jpg'
    },
  
    // Kids - Toys
    {
      name: 'Stuffed Bear',
      price: '$12',
      gender: 'Kids',
      category: 'Toys',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaaUR88Qfk3-_07hvEyzaIeQ7ggSCjhlXlLC82QS0hxPneu06fcvZMxRWQoDy3sLSgFpw&usqp=CAU'
    },
    {
      name: 'LEGO Set',
      price: '$20',
      gender: 'Kids',
      category: 'Toys',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyKlV5dAnzWBwBkY7f3-9en-cxJV8FBq8Jsg&s'
    },
    {
      name: 'Toy Car',
      price: '$8',
      gender: 'Kids',
      category: 'Toys',
      img: 'https://isakaabengaluru.s3.ap-south-1.amazonaws.com/wp-content/uploads/2022/04/29125018/71dEWXwH0cL._SL1500_.jpg'
    }
];
  
  export default function ProductListScreen() {
    const router = useRouter();
    const { gender, category } = useLocalSearchParams();
  
    const filteredProducts = PRODUCTS.filter(
      (p) => p.gender === gender && p.category === category
    );
  
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={20} color="#E65100" />
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>
  
        <Text style={styles.heading}>
          {gender} - {category}
        </Text>
  
        {filteredProducts.map((product, index) => (
          <TouchableOpacity
            key={index}
            style={styles.card}
            onPress={() =>
              router.push({
                pathname: '/product-detail',
                params: {
                  name: product.name,
                  price: product.price,
                  desc: `${product.name} in ${category} (${gender})`,
                  img: product.img,
                },
              })
            }
          >
            <Image
              source={{ uri: product.img || 'https://via.placeholder.com/150' }}
              style={styles.image}
            />
            <View style={styles.cardInfo}>
              <Text style={styles.name}>{product.name}</Text>
              <Text style={styles.price}>{product.price}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      padding: 16,
      backgroundColor: '#FFF3E0',
    },
    backButton: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 12,
    },
    backText: {
      marginLeft: 4,
      color: '#E65100',
      fontWeight: '600',
    },
    heading: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 16,
      textAlign: 'center',
      color: '#E65100',
    },
    card: {
      backgroundColor: '#FFFFFF',
      borderRadius: 8,
      padding: 12,
      marginBottom: 16,
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: '#ddd',
    },
    image: {
      width: 80,
      height: 80,
      borderRadius: 8,
      marginRight: 12,
    },
    cardInfo: {
      flex: 1,
    },
    name: {
      fontSize: 16,
      fontWeight: '600',
      color: '#333',
      marginBottom: 4,
    },
    price: {
      fontSize: 14,
      color: '#777',
    },
  });
  
import { LinearGradient } from "expo-linear-gradient";
import { useLocalSearchParams } from "expo-router";
import {
    ActivityIndicator,
    FlatList,
    Image,
    StyleSheet,
    Text,
    View,
} from "react-native";
import { CATEGORIES, PRODUCTS } from "../../data/menuData";

// Import the exact same fonts used in the menu
import {
    CormorantGaramond_400Regular_Italic,
    CormorantGaramond_500Medium_Italic,
    CormorantGaramond_700Bold,
    useFonts,
} from "@expo-google-fonts/cormorant-garamond";

const blurredBg = require("../../assets/images/background2.jpg");

export default function ProductsScreen() {
  const { id } = useLocalSearchParams();

  // Load fonts just like in menu.tsx
  let [fontsLoaded] = useFonts({
    RoyalBold: CormorantGaramond_700Bold,
    RoyalItalic: CormorantGaramond_400Regular_Italic,
    RoyalMediumItalic: CormorantGaramond_500Medium_Italic,
  });

  const filteredProducts = PRODUCTS.filter(
    (product) => product.categoryId === id,
  );
  const categoryInfo = CATEGORIES.find((cat) => cat.id === id);

  // Show loading indicator while fonts load
  if (!fontsLoaded) {
    return (
      <View style={[styles.container, styles.loadingContainer]}>
        <ActivityIndicator size="large" color="#C5A059" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image
        source={blurredBg}
        style={styles.absoluteBackground}
        resizeMode="cover"
      />

      <LinearGradient
        colors={["rgba(1, 3, 2, 0.85)", "rgba(10, 28, 20, 0.95)"]}
        style={StyleSheet.absoluteFillObject}
      />

      {/* Main Content */}
      <View style={styles.contentContainer}>
        {/* Styled Header matching menu.tsx */}
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>{categoryInfo?.title}</Text>
          <View style={styles.headerDivider} />
          <Text style={styles.subtext}>Explore our authentic selection</Text>
        </View>

        <FlatList
          data={filteredProducts}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ paddingBottom: 40 }}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <View style={styles.itemRow}>
              <Text style={styles.itemTitle}>{item.title}</Text>
              <Text style={styles.itemPrice}>₹{item.price}</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#010302",
  },
  loadingContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  absoluteBackground: {
    ...StyleSheet.absoluteFillObject,
    width: "100%",
    height: "100%",
  },
  contentContainer: {
    flex: 1,
    paddingTop: 80,
    zIndex: 1,
    width: "100%",
    maxWidth: 800,
    alignSelf: "center",
  },
  // Replicating the header styles from menu.tsx
  headerContainer: {
    alignItems: "center",
    marginBottom: 30,
    paddingHorizontal: 20,
  },
  headerText: {
    color: "#C5A059",
    fontSize: 32,
    textAlign: "center",
    fontFamily: "RoyalBold", // Applied custom font
    letterSpacing: 2,
    textTransform: "uppercase",
  },
  headerDivider: {
    width: 80,
    height: 3,
    backgroundColor: "#C5A059",
    marginTop: 12,
    marginBottom: 12,
    borderRadius: 2,
  },
  subtext: {
    color: "rgba(255, 255, 255, 0.6)",
    fontSize: 14,
    fontFamily: "RoyalMediumItalic", // Applied custom font
    textAlign: "center",
  },
  // List Item Styles
  itemRow: {
    padding: 16,
    borderBottomWidth: 1,
    borderColor: "rgba(197, 160, 89, 0.2)",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 16, // Adds a little breathing room on the sides
  },
  itemTitle: {
    color: "#FFF",
    fontSize: 20,
    flex: 1,
    paddingRight: 10,
    fontFamily: "RoyalMediumItalic", // Applied custom font
    letterSpacing: 0.5,
  },
  itemPrice: {
    color: "#C5A059",
    fontSize: 20,
    fontFamily: "RoyalBold", // Applied custom font
    letterSpacing: 1,
  },
});

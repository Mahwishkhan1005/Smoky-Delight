// app/menu.tsx
import { LinearGradient } from "expo-linear-gradient";
import {
  ActivityIndicator,
  FlatList,
  Image,
  ImageBackground,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

// Import the Google Fonts setup
import {
  CormorantGaramond_400Regular_Italic,
  CormorantGaramond_500Medium_Italic,
  CormorantGaramond_700Bold,
  useFonts,
} from "@expo-google-fonts/cormorant-garamond";

const CATEGORIES = [
  { id: "1", title: "Biryanis", image: require("../assets/images/mandi.png") },
  { id: "2", title: "Mandis", image: require("../assets/images/mandi.png") },
  {
    id: "3",
    title: "Full Courses",
    image: require("../assets/images/mandi.png"),
  },
  { id: "4", title: "Breads", image: require("../assets/images/kabab.png") },
  { id: "5", title: "Desserts", image: require("../assets/images/kabab.png") },
  { id: "6", title: "Beverages", image: require("../assets/images/mandi.png") },
];

const isWeb = Platform.OS === "web";
const numColumns = isWeb ? 5 : 2;
const EXACT_CIRCLE_SIZE = 130;
const blurredBg = require("../assets/images/background2.jpg");

export default function MenuScreen() {
  let [fontsLoaded] = useFonts({
    RoyalBold: CormorantGaramond_700Bold,
    RoyalItalic: CormorantGaramond_400Regular_Italic,
    RoyalMediumItalic: CormorantGaramond_500Medium_Italic,
  });

  if (!fontsLoaded) {
    return (
      <View style={[styles.container, styles.loadingContainer]}>
        <ActivityIndicator size="large" color="#C5A059" />
      </View>
    );
  }

  return (
    // Replaced flat view with premium background image
    <ImageBackground
      source={blurredBg}
      style={styles.container}
      resizeMode="cover"
    >
      {/* Dark luxury overlay to keep content highly legible */}
      <LinearGradient
        colors={["rgba(1, 3, 2, 0.85)", "rgba(10, 28, 20, 0.95)"]}
        style={StyleSheet.absoluteFillObject}
      />

      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Our Menu</Text>
        <View style={styles.headerDivider} />
        <Text style={styles.subtext}>
          Select a category to explore our authentic flavours
        </Text>
      </View>

      <View style={styles.listWrapper}>
        <FlatList
          data={CATEGORIES}
          key={numColumns}
          numColumns={numColumns}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContainer}
          columnWrapperStyle={styles.row}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.categoryItem} activeOpacity={0.85}>
              {/* Outer Golden Glow Circle Rim */}
              <View style={styles.glowCircle}>
                {/* The Main Golden Circle */}
                <View style={styles.circle}>
                  <Image
                    source={item.image}
                    style={styles.circleImage}
                    resizeMode="cover"
                  />
                </View>
              </View>

              {/* Title Below with Premium Brand Font */}
              <Text style={styles.categoryTitle} numberOfLines={1}>
                {item.title}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#010302",
    paddingTop: 80,
  },
  loadingContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  headerContainer: {
    alignItems: "center",
    marginBottom: 40,
    paddingHorizontal: 20,
  },
  headerText: {
    color: "#C5A059",
    fontSize: 32,
    textAlign: "center",
    fontFamily: "RoyalBold",
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
    fontFamily: "RoyalMediumItalic",
    textAlign: "center",
  },
  listWrapper: {
    flex: 1,
    alignItems: "center",
    width: "100%",
  },
  listContainer: {
    paddingHorizontal: 20,
    paddingBottom: 60,
    alignItems: "center",
  },
  row: {
    justifyContent: "center",
    marginBottom: 40,
    gap: isWeb ? 32 : 30, // Relaxed gaps for a grander aesthetic
  },
  categoryItem: {
    alignItems: "center",
    width: EXACT_CIRCLE_SIZE + 30,
  },
  glowCircle: {
    width: EXACT_CIRCLE_SIZE + 8,
    height: EXACT_CIRCLE_SIZE + 8,
    borderRadius: (EXACT_CIRCLE_SIZE + 8) / 2,
    backgroundColor: "rgba(197, 160, 89, 0.08)", // Premium gold shadow aura effect
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 14,
    ...Platform.select({
      ios: {
        shadowColor: "#C5A059",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 10,
      },
      android: {
        elevation: 6,
      },
    }),
  },
  circle: {
    width: EXACT_CIRCLE_SIZE,
    height: EXACT_CIRCLE_SIZE,
    borderRadius: EXACT_CIRCLE_SIZE / 2,
    borderWidth: 2,
    borderColor: "#C5A059",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0d0f0e",
    overflow: "hidden",
  },
  circleImage: {
    width: "100%",
    height: "100%",
  },
  categoryTitle: {
    color: "#FFF",
    fontSize: isWeb ? 18 : 16,
    textAlign: "center",
    width: "100%",
    fontFamily: "RoyalMediumItalic",
    letterSpacing: 0.5,
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 4,
  },
});

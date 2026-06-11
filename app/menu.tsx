// app/menu.tsx
import { LinearGradient } from "expo-linear-gradient";
import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  Image,
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
import { useRouter } from "expo-router";
import { CATEGORIES } from "../data/menuData"; // Import from your new file

const router = useRouter();

const { width: screenWidth } = Dimensions.get("window");
const isDesktopWeb = Platform.OS === "web" && screenWidth > 768;

const numColumns = isDesktopWeb ? 5 : 2;
const EXACT_CIRCLE_SIZE = 130;
const blurredBg = require("../assets/images/background2.jpg");

export default function MenuScreen() {
  const router = useRouter();
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

  // FIXED: Removed the .slice(0, 4) filter so all 6 items render everywhere
  const displayData = CATEGORIES;

  return (
    <View style={styles.container}>
      {/* Static, Non-Scrolling Background Image */}
      <Image
        source={blurredBg}
        style={styles.absoluteBackground}
        resizeMode="cover"
      />

      {/* Dark luxury overlay locked to the screen background */}
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
          data={displayData}
          key={numColumns}
          numColumns={numColumns}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContainer}
          columnWrapperStyle={styles.row}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.categoryItem}
              activeOpacity={0.85}
              onPress={() => router.push(`../products/${item.id}`)} // Redirect to product list
            >
              <View style={styles.glowCircle}>
                <View style={styles.circle}>
                  <Image
                    source={item.image}
                    style={styles.circleImage}
                    resizeMode="cover"
                  />
                </View>
              </View>

              <Text style={styles.categoryTitle} numberOfLines={1}>
                {item.title}
              </Text>
            </TouchableOpacity>
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
    paddingTop: 80,
  },
  absoluteBackground: {
    ...StyleSheet.absoluteFillObject,
    width: "100%",
    height: "100%",
  },
  loadingContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  headerContainer: {
    alignItems: "center",
    marginBottom: 40,
    paddingHorizontal: 20,
    zIndex: 1,
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
    zIndex: 1,
  },
  listContainer: {
    paddingBottom: 60,
    width: "100%",
    paddingHorizontal: isDesktopWeb ? 20 : 0,
  },
  row: {
    marginBottom: 40,
    justifyContent: isDesktopWeb ? "center" : "space-around",
    paddingHorizontal: isDesktopWeb ? 0 : 16,
    gap: isDesktopWeb ? 32 : 0,
  },
  categoryItem: {
    alignItems: "center",
    width: isDesktopWeb ? EXACT_CIRCLE_SIZE + 30 : "45%",
  },
  glowCircle: {
    width: EXACT_CIRCLE_SIZE + 8,
    height: EXACT_CIRCLE_SIZE + 8,
    borderRadius: (EXACT_CIRCLE_SIZE + 8) / 2,
    backgroundColor: "rgba(197, 160, 89, 0.08)",
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
    fontSize: isDesktopWeb ? 18 : 16,
    textAlign: "center",
    width: "100%",
    fontFamily: "RoyalMediumItalic",
    letterSpacing: 0.5,
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 4,
  },
});

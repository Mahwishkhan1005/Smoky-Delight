// app/gallery.tsx
import { ResizeMode, Video } from "expo-av"; // Import Expo Video
import { LinearGradient } from "expo-linear-gradient";
import {
    ActivityIndicator,
    FlatList,
    Image,
    StyleSheet,
    Text,
    View,
} from "react-native";

import {
    CormorantGaramond_400Regular_Italic,
    CormorantGaramond_500Medium_Italic,
    CormorantGaramond_700Bold,
    useFonts,
} from "@expo-google-fonts/cormorant-garamond";

// 1. Local Media Array supporting both Images and Videos
const GALLERY_MEDIA = [
  {
    id: "g1",
    type: "image",
    title: "Authentic Charcoal Smoked Mandi",
    source: require("../assets/images/image4.jpg"),
  },
  {
    id: "g2",
    type: "image",
    title: "Premium Saffron Kolkata Biryani",
    source: require("../assets/images/image5.jpg"),
  },
  // Example Video Entry (Ensure you have a video at this path, or comment it out for now)
  {
    id: "g3",
    type: "video",
    title: "Sizzling Tandoor Action",
    source: require("../assets/video/video1.mp4"),
  },
  {
    id: "g4",
    type: "image",
    title: "Juicy Arabian Seekh Kababs",
    source: require("../assets/images/image2.jpg"),
  },
  {
    id: "g5",
    type: "image",
    title: "Royal Murgh Musallam Feast",
    source: require("../assets/images/image3.jpg"),
  },
  {
    id: "g6",
    type: "image",
    title: "Royal Murgh Musallam Feast",
    source: require("../assets/images/image1.jpg"),
  },
  ,
];

const blurredBg = require("../assets/images/background2.jpg");

export default function GalleryScreen() {
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
    <View style={styles.container}>
      {/* Background */}
      <Image
        source={blurredBg}
        style={styles.absoluteBackground}
        resizeMode="cover"
      />
      <LinearGradient
        colors={["rgba(1, 3, 2, 0.85)", "rgba(10, 28, 20, 0.95)"]}
        style={StyleSheet.absoluteFillObject}
      />

      <View style={styles.contentContainer}>
        {/* Header Section */}
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Our Gallery</Text>
          <View style={styles.headerDivider} />
          <Text style={styles.subtext}>
            A visual taste of our signature culinary creations
          </Text>
        </View>

        {/* Vertically Scrollable Cards */}
        <FlatList
          data={GALLERY_MEDIA}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContainer}
          renderItem={({ item }) => (
            <View style={styles.cardContainer}>
              {/* Conditionally render Video or Image */}
              {item.type === "video" ? (
                <Video
                  source={item.source}
                  style={styles.cardMedia}
                  resizeMode={ResizeMode.COVER}
                  shouldPlay
                  isLooping
                  isMuted // Autoplaying video usually needs to be muted
                />
              ) : (
                <Image
                  source={item.source}
                  style={styles.cardMedia}
                  resizeMode="cover"
                />
              )}

              {/* Gradient overlay for text */}
              <LinearGradient
                colors={["transparent", "rgba(0,0,0,0.8)", "rgba(0,0,0,1)"]}
                style={styles.cardTextOverlay}
              >
                <Text style={styles.cardTitle}>{item.title}</Text>
              </LinearGradient>
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
    paddingTop: 50, // Reduced from 80 to make the header start higher
    zIndex: 1,
    width: "100%",
    maxWidth: 800,
    alignSelf: "center",
  },
  headerContainer: {
    alignItems: "center",
    marginBottom: 20, // Reduced from 30 to tighten the gap between header and cards
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
    marginTop: 8, // Slightly tightened
    marginBottom: 8, // Slightly tightened
    borderRadius: 2,
  },
  subtext: {
    color: "rgba(255, 255, 255, 0.6)",
    fontSize: 14,
    fontFamily: "RoyalMediumItalic",
    textAlign: "center",
  },
  listContainer: {
    paddingHorizontal: 16,
    paddingBottom: 60,
  },
  cardContainer: {
    width: "100%",
    height: 320, // Increased from 250 to make cards taller
    marginBottom: 24,
    borderRadius: 16,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "rgba(197, 160, 89, 0.3)",
    backgroundColor: "#0d0f0e",
  },
  cardMedia: {
    // Renamed from cardImage to cardMedia so it applies to Video too
    width: "100%",
    height: "100%",
  },
  cardTextOverlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    paddingTop: 40,
    paddingBottom: 20,
    paddingHorizontal: 16,
  },
  cardTitle: {
    color: "#FFF",
    fontSize: 22,
    fontFamily: "RoyalBold",
    letterSpacing: 1,
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 4,
  },
});

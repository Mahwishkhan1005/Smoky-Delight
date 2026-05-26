// app/(tabs)/index.tsx

import { LinearGradient } from "expo-linear-gradient";
import {
  ActivityIndicator,
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import {
  CormorantGaramond_400Regular_Italic,
  CormorantGaramond_500Medium_Italic,
  CormorantGaramond_700Bold,
  useFonts,
} from "@expo-google-fonts/cormorant-garamond";
import RoyalFooter from "../../component/RoyalFooter";
import RoyalSpecialtyCard from "../../component/RoyalSpecialtyCard";

const { width, height } = Dimensions.get("window");
const blurredBg = require("../../assets/images/background2.jpg");
const logoImg = require("../../assets/images/background.png");

const App = () => {
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
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />

      {/* Enhanced Navigation Bar */}
      <LinearGradient
        colors={["rgba(0,0,0,0.95)", "rgba(0,0,0,0.98)"]}
        style={styles.navWrapper}
      >
        <SafeAreaView style={styles.navSafeArea}>
          <View style={styles.navBar}>
            <View style={styles.logoSection}>
              <View style={styles.logoWrapper}>
                <Image
                  source={logoImg}
                  style={styles.navLogo}
                  resizeMode="contain"
                />
              </View>
              <View style={styles.brandTexts}>
                <Text style={styles.navBrandName}>Smoky Delight</Text>
                <Text style={styles.navTagline}>
                  Authentic Indo-Arabic Cuisine
                </Text>
              </View>
            </View>

            <View style={styles.centerLinks}>
              <TouchableOpacity>
                <Text style={styles.linkText}>Home</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.linkText}>About</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.linkText}>Menu</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.linkText}>Contact</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.actionSection}>
              <TouchableOpacity style={styles.callNowBtn}>
                <Text style={styles.callIcon}>📞</Text>
                <Text style={styles.callText}>Call Now</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.directionsBtn}>
                <Text style={styles.directionsText}>Get Directions</Text>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </LinearGradient>

      <ScrollView
        bounces={false} // Prevents over-scrolling beyond the footer
        showsVerticalScrollIndicator={false}
        style={styles.scrollContainer}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Hero Section */}
        <View style={styles.imageContainer}>
          <Image
            source={blurredBg}
            style={styles.heroImage}
            resizeMode="cover"
          />
          <LinearGradient
            colors={["rgba(0,0,0,0.3)", "rgba(0,0,0,0.7)"]}
            style={styles.imageOverlay}
          />
          <View style={styles.heroContent}>
            <View style={styles.welcomeBadge}>
              <Text style={styles.welcomeLabel}>WELCOME TO</Text>
            </View>
            <Text style={styles.mainHeadingUpper}>Authentic Indian</Text>
            <Text style={styles.ampersand}>&</Text>
            <Text style={styles.mainHeadingLower}>Arabian Flavours</Text>
            <View style={styles.divider} />
            <Text style={styles.locationText}>in the Heart of Hazaribagh</Text>
            <Text style={styles.taglineDesc}>
              Serving families, office-goers, and travellers with freshly
              prepared food, consistent taste, and warm hospitality.
            </Text>
            <View style={styles.heroButtons}>
              <TouchableOpacity style={styles.heroOrderBtn}>
                <Text style={styles.heroOrderText}>Order Online</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.heroExploreBtn}>
                <Text style={styles.heroExploreText}>Explore Menu</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Lower Body */}
        <View style={styles.lowerBody}>
          <View style={styles.specialityHeaderContainer}>
            <Text style={styles.specialityHeaderText}>Our Speciality</Text>
            <View style={styles.headerDivider} />
            <Text style={styles.specialitySubtext}>
              Discover our signature dishes crafted with love
            </Text>
          </View>

          <View style={styles.staticCardsContainer}>
            <RoyalSpecialtyCard
              title="Smoky Mandi"
              description="Charcoal-smoked mutton or chicken served over a bed of rice."
              dishImage={require("../../assets/images/mandi.png")}
              cardBgImage={logoImg}
            />
            <RoyalSpecialtyCard
              title="Kolkata Biryani"
              description="Premium basmati rice cooked with hand-picked saffron."
              dishImage={require("../../assets/images/biryani.png")}
              cardBgImage={logoImg}
            />
            <RoyalSpecialtyCard
              title="Arabic Kababs"
              description="Traditional mixed rice dish from the Arabian Peninsula."
              dishImage={require("../../assets/images/kabab.png")}
              cardBgImage={logoImg}
            />
            <RoyalSpecialtyCard
              title="Mutton Madhbi"
              description="Tender mutton traditionally grilled on lava stones."
              dishImage={require("../../assets/images/mandi.png")}
              cardBgImage={logoImg}
            />
            <RoyalSpecialtyCard
              title="Murg Musallam"
              description="Arabian-style charcoal grilled chicken with spices."
              dishImage={require("../../assets/images/musallam.png")}
              cardBgImage={logoImg}
            />
          </View>
        </View>

        {/* Footer */}
        <RoyalFooter logoImg={logoImg} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#010302", // Changed to match Footer background for a seamless look
  },
  loadingContainer: { justifyContent: "center", alignItems: "center" },
  scrollContainer: { flex: 1 },
  scrollContent: {
    flexGrow: 1, // CRITICAL: Stop the container from expanding beyond its content on web
  },

  // Navigation Bar Styles
  navWrapper: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(197, 160, 89, 0.2)",
  },
  navSafeArea: { backgroundColor: "transparent" },
  navBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  logoSection: { flexDirection: "row", alignItems: "center" },
  logoWrapper: {
    width: 45,
    height: 45,
    borderRadius: 25,
    backgroundColor: "rgba(197, 160, 89, 0.1)",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  navLogo: { width: 35, height: 35 },
  brandTexts: { justifyContent: "center" },
  navBrandName: {
    color: "#FFF",
    fontSize: 20,
    fontFamily: "RoyalBold",
    letterSpacing: 0.5,
  },
  navTagline: {
    color: "rgba(197, 160, 89, 0.8)",
    fontSize: 9,
    textTransform: "uppercase",
    letterSpacing: 1,
    marginTop: 2,
  },
  centerLinks: {
    flexDirection: "row",
    gap: 32,
    display: width < 768 ? "none" : "flex",
  },
  linkText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "500",
    opacity: 0.8,
    letterSpacing: 0.5,
  },
  actionSection: { flexDirection: "row", gap: 12 },
  callNowBtn: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "rgba(197, 160, 89, 0.5)",
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 25,
    backgroundColor: "rgba(197, 160, 89, 0.1)",
  },
  callIcon: { color: "#C5A059", fontSize: 14, marginRight: 6 },
  callText: { color: "#FFF", fontSize: 12, fontWeight: "600" },
  directionsBtn: {
    backgroundColor: "#C5A059",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 25,
  },
  directionsText: {
    color: "#000",
    fontSize: 12,
    fontWeight: "bold",
    textTransform: "uppercase",
  },

  // Hero Section
  imageContainer: { width: width, height: height, backgroundColor: "#000" },
  heroImage: { width: "100%", height: "100%" },
  imageOverlay: { ...StyleSheet.absoluteFillObject },
  heroContent: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 30,
    paddingTop: 80,
  },
  welcomeBadge: {
    backgroundColor: "rgba(197, 160, 89, 0.15)",
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 30,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "rgba(197, 160, 89, 0.3)",
  },
  welcomeLabel: {
    color: "#C5A059",
    letterSpacing: 4,
    fontSize: 14,
    fontFamily: "RoyalBold",
  },
  mainHeadingUpper: {
    color: "#FFF",
    fontSize: 52,
    fontFamily: "RoyalBold",
    textAlign: "center",
    lineHeight: 58,
  },
  ampersand: {
    color: "#C5A059",
    fontSize: 48,
    fontFamily: "RoyalItalic",
    marginVertical: -10,
  },
  mainHeadingLower: {
    color: "#FFF",
    fontSize: 52,
    fontFamily: "RoyalBold",
    textAlign: "center",
    lineHeight: 58,
    marginBottom: 15,
  },
  divider: {
    width: 80,
    height: 2,
    backgroundColor: "#C5A059",
    marginVertical: 20,
  },
  locationText: {
    color: "rgba(255,255,255,0.9)",
    fontSize: 18,
    fontFamily: "RoyalMediumItalic",
    marginBottom: 20,
  },
  taglineDesc: {
    color: "#FFF",
    fontSize: 15,
    textAlign: "center",
    lineHeight: 24,
    opacity: 0.9,
    fontFamily: "RoyalMediumItalic",
    maxWidth: 500,
    marginBottom: 40,
  },
  heroButtons: { flexDirection: "row", gap: 15, marginTop: 20 },
  heroOrderBtn: {
    backgroundColor: "#C5A059",
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 30,
  },
  heroOrderText: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 14,
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  heroExploreBtn: {
    borderWidth: 2,
    borderColor: "#C5A059",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 30,
    backgroundColor: "rgba(197, 160, 89, 0.1)",
  },
  heroExploreText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 14,
    textTransform: "uppercase",
    letterSpacing: 1,
  },

  // Lower Body
  lowerBody: {
    paddingHorizontal: 20,
    paddingTop: 30,
    paddingBottom: 40, // Reduced from previous versions to tighten space
    backgroundColor: "#0A1C14",
    transform: [{ translateY: -30 }],
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  specialityHeaderContainer: { alignItems: "center", marginBottom: 30 },
  specialityHeaderText: {
    color: "#C5A059",
    fontSize: 32,
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
  specialitySubtext: {
    color: "rgba(255,255,255,0.6)",
    fontSize: 14,
    textAlign: "center",
    fontFamily: "RoyalMediumItalic",
  },
  staticCardsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start",
    flexWrap: "nowrap",
    paddingHorizontal: 20,
    gap: 10,
    width: "100%",
  },
});

export default App;

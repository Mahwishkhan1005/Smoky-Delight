// app/(tabs)/index.tsx

import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import {
  ActivityIndicator,
  Dimensions,
  Image,
  Linking,
  Platform,
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
import RoyalFooter from "../component/RoyalFooter";
import RoyalSpecialtyCard from "../component/RoyalSpecialtyCard";

const { width, height } = Dimensions.get("window");
const blurredBg = require("../assets/images/background2.jpg");
const logoImg = require("../assets/images/background.png");

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

  // Function to handle Google Maps redirection
  const handleGetDirections = () => {
    // Uses the official Google Maps search intent API
    const url =
      "https://www.google.com/maps/search/?api=1&query=Smoky+Delight,+Kallu+Chawk,+Pugmil,+Hazaribagh";
    Linking.openURL(url).catch((err) =>
      console.error("An error occurred", err),
    );
  };

  const handleCallNow = () => {
    const phoneNumber = "tel:+919142668648";
    Linking.openURL(phoneNumber).catch((err) =>
      console.error("An error occurred", err),
    );
  };

  const handleBookVenue = () => {
    // Add your routing or booking logic here
    router.push("/book-venue");
  };

  const handleOrderOnline = () => {
    router.push("/gallery"); // Navigate to the menu screen
  };

  const handleExploreMenu = () => {
    router.push("/menu"); // This replaces the need for "new router"
  };

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
              {/* <TouchableOpacity>
                <Text style={styles.linkText}>Home</Text>
              </TouchableOpacity> */}
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
              <TouchableOpacity
                style={styles.callNowBtn}
                onPress={handleCallNow}
              >
                <Text style={styles.callIcon}>📞</Text>
                <Text style={styles.callText}>Call Now</Text>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </LinearGradient>

      <ScrollView
        bounces={false}
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

            {/* Updated Hero Buttons */}
            <View
              style={[
                styles.heroButtons,
                { flexWrap: "wrap", justifyContent: "center" },
              ]}
            >
              {/* <TouchableOpacity
                style={styles.heroOrderBtn}
                onPress={handleOrderOnline}
              >
                <Text style={styles.heroOrderText}>Our Gallery</Text>
              </TouchableOpacity> */}
              <TouchableOpacity
                style={styles.heroExploreBtn}
                onPress={handleExploreMenu}
              >
                <Text style={styles.heroExploreText}>Explore Menu</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.heroOrderBtn}
                onPress={handleOrderOnline}
              >
                <Text style={styles.heroOrderText}>Our Gallery</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.heroExploreBtn}
                onPress={handleBookVenue}
              >
                <Text style={styles.heroExploreText}>Book Venue</Text>
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
              title="Kolkata Biryani"
              description="Premium basmati rice cooked with hand-picked saffron."
              dishImage={require("../assets/images/biryani.png")}
              cardBgImage={logoImg}
            />
            <RoyalSpecialtyCard
              title="Arabic Kababs"
              description="Traditional mixed rice dish from the Arabian Peninsula."
              dishImage={require("../assets/images/kabab.png")}
              cardBgImage={logoImg}
            />
            <RoyalSpecialtyCard
              title="Mutton Madhbi"
              description="Tender mutton traditionally grilled on lava stones."
              dishImage={require("../assets/images/mandi.png")}
              cardBgImage={logoImg}
            />
            <RoyalSpecialtyCard
              title="Murg Musallam"
              description="Arabian-style charcoal grilled chicken with spices."
              dishImage={require("../assets/images/musallam.png")}
              cardBgImage={logoImg}
            />
          </View>

          {/* Section Header for Offers */}
          <View style={[styles.specialityHeaderContainer, { marginTop: 40 }]}>
            <Text style={styles.specialityHeaderText}>Exclusive Offers</Text>
            <View style={styles.headerDivider} />
            <Text style={styles.specialitySubtext}>
              Swipe to explore our premium curated bundles
            </Text>
          </View>

          {/* Horizontally Scrollable Promotional Cards */}
          <View style={styles.promoBannerContainer}>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.promoScrollContent}
              style={styles.promoScrollView}
              decelerationRate="fast"
              snapToInterval={296} // Width + Gap for smooth scrolling on mobile
            >
              {/* Card 1: Mandi */}
              <LinearGradient
                colors={[
                  "rgba(197, 160, 89, 0.15)",
                  "rgba(197, 160, 89, 0.05)",
                ]}
                style={styles.promoCard}
              >
                <View style={styles.promoContent}>
                  <Text style={styles.promoBadge}>MANDI BUNDLE</Text>
                  <Text style={styles.promoTitle}>Sultan Mandi Deal</Text>
                  <Text style={styles.promoDescription}>
                    Gather the family! Get a complimentary side of traditional
                    Arabic salad and fresh Laban with every full charcoal-smoked
                    Arabian Mandi platter.
                  </Text>

                  <View style={styles.promoImageContainer}>
                    <Image
                      source={require("../assets/images/mandi.png")}
                      style={styles.promoImage}
                      resizeMode="cover"
                    />
                  </View>

                  <TouchableOpacity style={styles.promoButton}>
                    <Text style={styles.promoButtonText}>Order Mandi</Text>
                  </TouchableOpacity>
                </View>
              </LinearGradient>

              {/* Card 2: Kolkata Biryani */}
              <LinearGradient
                colors={[
                  "rgba(197, 160, 89, 0.15)",
                  "rgba(197, 160, 89, 0.05)",
                ]}
                style={styles.promoCard}
              >
                <View style={styles.promoContent}>
                  <Text style={styles.promoBadge}>KOLKATA SPECIAL</Text>
                  <Text style={styles.promoTitle}>Royal Saffron Combo</Text>
                  <Text style={styles.promoDescription}>
                    Enjoy the classic aroma of pure hand-picked saffron basmati.
                    Order two plates of premium Kolkata Biryani and unlock an
                    automatic 15% discount today!
                  </Text>

                  <View style={styles.promoImageContainer}>
                    <Image
                      source={require("../assets/images/biryani.png")}
                      style={styles.promoImage}
                      resizeMode="cover"
                    />
                  </View>

                  <TouchableOpacity style={styles.promoButton}>
                    <Text style={styles.promoButtonText}>Get Offer</Text>
                  </TouchableOpacity>
                </View>
              </LinearGradient>

              {/* Card 3: Hyderabadi Biryani */}
              <LinearGradient
                colors={[
                  "rgba(197, 160, 89, 0.15)",
                  "rgba(197, 160, 89, 0.05)",
                ]}
                style={styles.promoCard}
              >
                <View style={styles.promoContent}>
                  <Text style={styles.promoBadge}>HYDERABADI DUM</Text>
                  <Text style={styles.promoTitle}>Nizami Spicy Feast</Text>
                  <Text style={styles.promoDescription}>
                    Experience traditional slow-cooked Nizami layers of richly
                    textured spices. Get a free portion of classic chicken seekh
                    kabab with every large bucket.
                  </Text>

                  <View style={styles.promoImageContainer}>
                    <Image
                      source={require("../assets/images/kabab.png")}
                      style={styles.promoImage}
                      resizeMode="cover"
                    />
                  </View>

                  <TouchableOpacity style={styles.promoButton}>
                    <Text style={styles.promoButtonText}>Claim Feast</Text>
                  </TouchableOpacity>
                </View>
              </LinearGradient>
            </ScrollView>
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
    backgroundColor: "#010302",
  },
  loadingContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  scrollContainer: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
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
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  logoSection: { flexDirection: "row", alignItems: "center" },
  logoWrapper: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(197, 160, 89, 0.1)",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  navLogo: { width: 30, height: 30 },
  brandTexts: { justifyContent: "center" },
  navBrandName: {
    color: "#FFF",
    fontSize: 18,
    fontFamily: "RoyalBold",
    letterSpacing: 0.5,
  },
  navTagline: {
    color: "rgba(197, 160, 89, 0.8)",
    fontSize: 8,
    textTransform: "uppercase",
    letterSpacing: 1,
    marginTop: 2,
  },
  centerLinks: {
    flexDirection: "row",
    gap: 32,
    display: Dimensions.get("window").width < 768 ? "none" : "flex",
  },
  linkText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "500",
    opacity: 0.8,
    letterSpacing: 0.5,
  },
  actionSection: {
    flexDirection: "row",
    gap: 8,
    marginTop: Platform.OS === "web" ? 12 : 60,
  },
  callNowBtn: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "rgba(197, 160, 89, 0.5)",
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 25,
    backgroundColor: "rgba(197, 160, 89, 0.1)",
  },
  callIcon: { color: "#C5A059", fontSize: 12, marginRight: 4 },
  callText: { color: "#FFF", fontSize: 11, fontWeight: "600" },
  directionsBtn: {
    backgroundColor: "#C5A059",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 25,
  },
  directionsText: {
    color: "#000",
    fontSize: 11,
    fontWeight: "bold",
    textTransform: "uppercase",
  },

  // Hero Section
  imageContainer: {
    width: "100%",
    height: Dimensions.get("window").width < 768 ? 600 : 800,
    backgroundColor: "#000",
  },
  heroImage: { width: "100%", height: "100%" },
  imageOverlay: { ...StyleSheet.absoluteFillObject },
  heroContent: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: Dimensions.get("window").width < 768 ? 84 : 60,
  },
  welcomeBadge: {
    backgroundColor: "rgba(197, 160, 89, 0.15)",
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 30,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "rgba(197, 160, 89, 0.3)",
  },
  welcomeLabel: {
    color: "#C5A059",
    letterSpacing: 3,
    fontSize: 12,
    fontFamily: "RoyalBold",
  },
  mainHeadingUpper: {
    color: "#FFF",
    fontSize: Dimensions.get("window").width < 400 ? 34 : 44,
    fontFamily: "RoyalBold",
    textAlign: "center",
    lineHeight: Dimensions.get("window").width < 400 ? 40 : 50,
  },
  ampersand: {
    color: "#C5A059",
    fontSize: 36,
    fontFamily: "RoyalItalic",
    marginVertical: -6,
  },
  mainHeadingLower: {
    color: "#FFF",
    fontSize: Dimensions.get("window").width < 400 ? 34 : 44,
    fontFamily: "RoyalBold",
    textAlign: "center",
    lineHeight: Dimensions.get("window").width < 400 ? 40 : 50,
    marginBottom: 10,
  },
  divider: {
    width: 60,
    height: 2,
    backgroundColor: "#C5A059",
    marginVertical: 15,
  },
  locationText: {
    color: "rgba(255,255,255,0.9)",
    fontSize: 16,
    fontFamily: "RoyalMediumItalic",
    marginBottom: 15,
  },
  taglineDesc: {
    color: "#FFF",
    fontSize: 14,
    textAlign: "center",
    lineHeight: 22,
    opacity: 0.9,
    fontFamily: "RoyalMediumItalic",
    maxWidth: 450,
    marginBottom: 30,
  },
  heroButtons: { flexDirection: "row", gap: 12, marginTop: 10 },
  heroOrderBtn: {
    backgroundColor: "#C5A059",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 30,
  },
  heroOrderText: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 13,
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  heroExploreBtn: {
    borderWidth: 2,
    borderColor: "#C5A059",
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 30,
    backgroundColor: "rgba(197, 160, 89, 0.1)",
  },
  heroExploreText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 13,
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },

  // Lower Body
  lowerBody: {
    paddingHorizontal: 16,
    paddingTop: 30,
    paddingBottom: 40,
    backgroundColor: "#0A1C14",
    transform: [{ translateY: -30 }],
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  specialityHeaderContainer: { alignItems: "center", marginBottom: 24 },
  specialityHeaderText: {
    color: "#C5A059",
    fontSize: 26,
    fontFamily: "RoyalBold",
    letterSpacing: 1.5,
    textTransform: "uppercase",
  },
  headerDivider: {
    width: 60,
    height: 3,
    backgroundColor: "#C5A059",
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 2,
  },
  specialitySubtext: {
    color: "rgba(255,255,255,0.6)",
    fontSize: 13,
    textAlign: "center",
    fontFamily: "RoyalMediumItalic",
  },
  staticCardsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start",
    flexWrap: "wrap",
    paddingHorizontal: 10,
    gap: 20,
    width: "100%",
  },

  // Promotional Banner Styles
  promoBannerContainer: {
    marginTop: 20,
    width: "100%",
  },
  promoScrollView: {
    width: "100%",
  },
  promoScrollContent: {
    paddingHorizontal: 16,
    gap: 16,
    paddingBottom: 20,
    justifyContent:
      Platform.OS === "web" && width > 768 ? "center" : "flex-start",
    flexGrow: 1,
  },
  promoCard: {
    width: 280,
    borderRadius: 20,
    padding: 24,
    borderWidth: 1,
    borderColor: "rgba(197, 160, 89, 0.3)",
    alignItems: "center",
    marginHorizontal: Platform.OS === "web" && width > 768 ? 10 : 0,
  },
  promoContent: {
    flex: 1,
    alignItems: "center",
  },
  promoBadge: {
    color: "#FFF",
    backgroundColor: "#C5A059",
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
    fontSize: 10,
    fontFamily: "RoyalBold",
    letterSpacing: 1,
    marginBottom: 12,
    overflow: "hidden",
  },
  promoTitle: {
    color: "#C5A059",
    fontSize: 20,
    fontFamily: "RoyalBold",
    marginBottom: 8,
    textAlign: "center",
  },
  promoDescription: {
    color: "rgba(255,255,255,0.8)",
    fontSize: 13,
    fontFamily: "RoyalMediumItalic",
    lineHeight: 20,
    marginBottom: 20,
    textAlign: "center",
  },
  promoImageContainer: {
    width: 180,
    height: 120,
    marginBottom: 24,
    borderRadius: 12,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "rgba(197, 160, 89, 0.4)",
  },
  promoImage: {
    width: "100%",
    height: "100%",
  },
  promoButton: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#C5A059",
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 25,
    marginTop: "auto",
  },
  promoButtonText: {
    color: "#C5A059",
    fontSize: 12,
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
});

export default App;

import React from "react";
import {
  Dimensions,
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const { width } = Dimensions.get("window");

const RoyalFooter = ({ logoImg }) => {
  const currentYear = new Date().getFullYear();

  // Redirects directly to the Google maps page for the restaurant using a universal search query
  const openGooglePage = () => {
    const url =
      "https://www.google.com/maps/search/?api=1&query=Smoky+Delight+Hazaribagh";
    Linking.openURL(url).catch((err) =>
      console.error("An error occurred", err),
    );
  };

  return (
    <View style={styles.footerContainer}>
      <View style={styles.mainContent}>
        {/* Left Section: Information */}
        <View style={styles.infoSection}>
          <View style={styles.brandRow}>
            <Image
              source={logoImg}
              style={styles.footerLogo}
              resizeMode="contain"
            />
            <View>
              <Text style={styles.footerBrandName}>Smoky Delight</Text>
              <Text style={styles.footerTagline}>
                Authentic Indo-Arabic Cuisine
              </Text>
            </View>
          </View>

          <View style={styles.contactItem}>
            <Text style={styles.iconGold}>📍</Text>
            <View style={styles.textStack}>
              <Text style={styles.label}>Address</Text>
              <Text style={styles.detail}>
                Kallu Chawk, Pugmil, Near Bank of India,{"\n"}
                Hazaribagh, Jharkhand 825301
              </Text>
            </View>
          </View>

          <View style={styles.contactItem}>
            <Text style={styles.iconGold}>📞</Text>
            <View style={styles.textStack}>
              <Text style={styles.label}>Phone</Text>
              <Text style={styles.detail}>+91 9142668648</Text>
            </View>
          </View>

          <View style={styles.contactItem}>
            <Text style={styles.iconGold}>⏰</Text>
            <View style={styles.textStack}>
              <Text style={styles.label}>Opening Hours</Text>
              <Text style={styles.detail}>11:30 AM – 11:30 PM (Dine-In)</Text>
              <Text style={styles.subDetail}>Open all days</Text>
            </View>
          </View>
        </View>

        {/* Right Section: Find Us / Interactive Clickable Map Card */}
        <View style={styles.mapSection}>
          <Text style={styles.findUs}>Find Us</Text>

          <TouchableOpacity
            onPress={openGooglePage}
            activeOpacity={0.85}
            style={styles.mapFrame}
          >
            <View style={styles.osmContainer}>
              <Image
                source={{
                  uri: `https://a.basemaps.cartocdn.com/dark_all/13/5811/3431.png`,
                }}
                style={styles.mapImage}
                resizeMode="cover"
              />
              {/* Custom UI Marker overlay showing restaurant location context */}
              <View style={styles.markerContainer}>
                <Text style={styles.markerPin}>📍</Text>
                <View style={styles.markerLabel}>
                  <Text style={styles.markerText}>Smoky Delight</Text>
                  <Text style={styles.markerSubText}>Hazaribagh</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>

          <Text style={styles.osmCredit}>Click map to view on Google</Text>
        </View>
      </View>

      <View style={styles.copyrightBar}>
        <Text style={styles.copyrightText}>
          &copy; {currentYear} Smoky Delight. All Rights Reserved.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    backgroundColor: "#010302",
    paddingTop: 40,
    marginTop: 20,
  },
  mainContent: {
    flexDirection: width > 700 ? "row" : "column",
    paddingHorizontal: 25,
    justifyContent: "space-between",
  },
  infoSection: { flex: 1, marginBottom: 30, marginLeft: width > 700 ? 60 : 0 },
  brandRow: { flexDirection: "row", alignItems: "center", marginBottom: 25 },
  footerLogo: { width: 45, height: 45, marginRight: 12 },
  footerBrandName: { color: "#FFF", fontSize: 24, fontFamily: "RoyalBold" },
  footerTagline: {
    color: "rgba(255,255,255,0.5)",
    fontSize: 12,
    textTransform: "uppercase",
  },
  contactItem: { flexDirection: "row", marginBottom: 20 },
  iconGold: { fontSize: 20, marginRight: 15 },
  textStack: { flex: 1 },
  label: {
    color: "#ffbf47",
    fontSize: 24,
    fontFamily: "RoyalBold",
    marginBottom: 4,
  },
  detail: { color: "rgba(255,255,255,0.7)", fontSize: 14, fontFamily: "serif" },
  mapSection: { flex: 1, alignItems: width > 700 ? "flex-end" : "flex-start" },
  findUs: {
    color: "#ffbf47",
    fontSize: 18,
    fontFamily: "RoyalBold",
    marginBottom: 15,
  },
  mapFrame: {
    width: "100%",
    height: 220,
    maxWidth: 450,
    borderRadius: 12,
    overflow: "hidden",
    borderWidth: 2,
    borderColor: "rgba(255, 191, 71, 0.3)",
  },
  osmContainer: {
    flex: 1,
    backgroundColor: "#1A1A1A",
    justifyContent: "center",
    alignItems: "center",
  },
  mapImage: { width: "100%", height: "100%", opacity: 0.85 },
  markerContainer: { position: "absolute", alignItems: "center" },
  markerPin: { fontSize: 30 },
  markerLabel: {
    backgroundColor: "rgba(11, 43, 31, 0.95)",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
    marginTop: 4,
    borderWidth: 1,
    borderColor: "#ffbf47",
    alignItems: "center",
  },
  markerText: { color: "#FFF", fontSize: 10, fontWeight: "bold" },
  markerSubText: { color: "#ffbf47", fontSize: 8, marginTop: 1 },
  osmCredit: {
    color: "rgba(255,255,255,0.3)",
    fontSize: 9,
    marginTop: 6,
    textAlign: "right",
    fontStyle: "italic",
  },
  copyrightBar: {
    borderTopWidth: 1,
    borderTopColor: "rgba(255,191,71,0.1)",
    marginTop: 40,
    paddingVertical: 20,
    alignItems: "center",
  },
  copyrightText: { color: "rgba(255,255,255,0.3)", fontSize: 10 },
});

export default RoyalFooter;

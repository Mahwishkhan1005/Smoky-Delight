import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const RoyalSpecialtyCard = ({ title, description, dishImage, cardBgImage }) => {
  return (
    <TouchableOpacity activeOpacity={0.9} style={styles.cardContainer}>
      <ImageBackground
        source={cardBgImage}
        style={styles.cardBg}
        imageStyle={{ borderRadius: 15, opacity: 0.15 }} // Reduced opacity slightly for class
      >
        <View style={styles.cardOverlay}>
          <Image
            source={dishImage}
            style={styles.dishImage}
            resizeMode="cover"
          />

          <View style={styles.textContainer}>
            <Text style={styles.specialtyTitle}>{title}</Text>
            <View style={styles.goldDivider} />
            <Text style={styles.specialityDesc}>{description}</Text>

            <View style={styles.footer}>
              <Text style={styles.footerText}>Authentic Indo-Arabic</Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: 280, // Fixed width
    height: 420, // Fixed height
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "rgba(255, 191, 71, 0.3)",
    backgroundColor: "#0B2B1F",
    overflow: "hidden", // CRITICAL: Clips the background image to the card borders
    elevation: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 5,
  },
  cardBg: { flex: 1 },
  cardOverlay: { flex: 1, padding: 15, backgroundColor: "rgba(0,0,0,0.4)" },
  dishImage: { width: "100%", height: "55%", borderRadius: 10 },
  textContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 15,
  },
  specialtyTitle: {
    color: "#ffbf47",
    fontSize: 22,
    fontFamily: "RoyalBold",
    textAlign: "center",
  },
  goldDivider: {
    width: 40,
    height: 1.5,
    backgroundColor: "#ffbf47",
    marginVertical: 12,
  },
  specialityDesc: {
    color: "#FDF5E6",
    fontSize: 13,
    fontFamily: "RoyalMediumItalic",
    textAlign: "center",
    opacity: 0.8,
  },
  footer: {
    marginTop: "auto",
    borderTopWidth: 0.5,
    borderTopColor: "rgba(255, 191, 71, 0.2)",
    paddingTop: 10,
    width: "100%",
  },
  footerText: {
    color: "#ffbf47",
    fontSize: 8,
    textAlign: "center",
    letterSpacing: 2,
    textTransform: "uppercase",
  },
});

export default RoyalSpecialtyCard;

// app/book-venue.tsx

import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
    ActivityIndicator,
    Image,
    KeyboardAvoidingView,
    Linking,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

import {
    CormorantGaramond_400Regular_Italic,
    CormorantGaramond_500Medium_Italic,
    CormorantGaramond_700Bold,
    useFonts,
} from "@expo-google-fonts/cormorant-garamond";

const blurredBg = require("../assets/images/background2.jpg");

export default function BookVenueScreen() {
  const router = useRouter();
  const [date, setDate] = useState("");
  const [contact, setContact] = useState("");
  const [amount, setAmount] = useState("");
  const [details, setDetails] = useState(""); // New state for event details

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

  const handleSubmit = () => {
    // Basic validation updated to include details
    if (!date || !contact || !amount || !details) {
      alert("Please fill in all details.");
      return;
    }

    const targetPhoneNumber = "919142668648"; // Your provided phone number
    const message = `*New Venue Booking * \n\n*Date Required:* ${date}\n*Contact Details:* ${contact}\n*Expected Amount/Budget:* ${amount}\n*Event Details:* ${details}\n\nPlease let me know the availability!`;

    const whatsappUrl = `https://wa.me/${targetPhoneNumber}?text=${encodeURIComponent(
      message,
    )}`;

    Linking.openURL(whatsappUrl).catch(() => {
      alert("Make sure WhatsApp is installed on your device.");
    });
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
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

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.contentContainer}>
          {/* Back Button */}
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => router.back()}
          >
            <Text style={styles.backButtonText}>← Back</Text>
          </TouchableOpacity>

          {/* Header Section */}
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>Book Venue</Text>
            <View style={styles.headerDivider} />
            <Text style={styles.subtext}>
              Reserve our space for your special occasions
            </Text>
          </View>

          {/* Form Section */}
          <View style={styles.formContainer}>
            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Date Requirement</Text>
              <TextInput
                style={styles.input}
                placeholder="e.g. 25th Dec 2026 or Next Friday"
                placeholderTextColor="rgba(255,255,255,0.4)"
                value={date}
                onChangeText={setDate}
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Contact Details</Text>
              <TextInput
                style={styles.input}
                placeholder="Name & Phone Number"
                placeholderTextColor="rgba(255,255,255,0.4)"
                value={contact}
                onChangeText={setContact}
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Expected Amount / Budget</Text>
              <TextInput
                style={styles.input}
                placeholder="e.g. ₹15,000 or 50 Guests"
                placeholderTextColor="rgba(255,255,255,0.4)"
                value={amount}
                onChangeText={setAmount}
                keyboardType="default"
              />
            </View>

            {/* New Event Details Input */}
            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Event Details</Text>
              <TextInput
                style={[styles.input, styles.textArea]}
                placeholder="e.g. Birthday party, corporate meeting, anniversary..."
                placeholderTextColor="rgba(255,255,255,0.4)"
                value={details}
                onChangeText={setDetails}
                multiline={true}
                numberOfLines={4}
              />
            </View>

            <TouchableOpacity style={styles.submitBtn} onPress={handleSubmit}>
              <Text style={styles.submitBtnText}>Submit via WhatsApp</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
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
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 40, // Added padding to ensure bottom spacing when scrolling
  },
  contentContainer: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 20,
    zIndex: 1,
    width: "100%",
    maxWidth: 600,
    alignSelf: "center",
  },
  backButton: {
    marginBottom: 20,
    alignSelf: "flex-start",
  },
  backButtonText: {
    color: "#C5A059",
    fontSize: 16,
    fontFamily: "RoyalBold",
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  headerContainer: {
    alignItems: "center",
    marginBottom: 40,
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
  formContainer: {
    backgroundColor: "rgba(10, 28, 20, 0.6)",
    padding: 24,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "rgba(197, 160, 89, 0.3)",
  },
  inputGroup: {
    marginBottom: 20,
  },
  inputLabel: {
    color: "#C5A059",
    fontFamily: "RoyalBold",
    fontSize: 16,
    marginBottom: 8,
    letterSpacing: 0.5,
  },
  input: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderWidth: 1,
    borderColor: "rgba(197, 160, 89, 0.5)",
    borderRadius: 12,
    color: "#FFF",
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    fontFamily: "RoyalMediumItalic",
  },
  textArea: {
    minHeight: 100,
    textAlignVertical: "top", // Ensures text starts at the top on Android
  },
  submitBtn: {
    backgroundColor: "#C5A059",
    paddingVertical: 16,
    borderRadius: 30,
    alignItems: "center",
    marginTop: 10,
  },
  submitBtnText: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 14,
    textTransform: "uppercase",
    letterSpacing: 1,
  },
});

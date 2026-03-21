import {
  StyleSheet,
  View,
  Text,
  Image,
  Pressable,
  Platform,
  useWindowDimensions,
} from "react-native";
import { router } from "expo-router";
import { useAuth } from "../context/AuthContext";
import { logout } from "../firebase/auth.js";

import Logo from "../assets/Logo/logo2.pdf";

const Header = () => {
  const { userProfile, firebaseUser, loading } = useAuth();
  const { width } = useWindowDimensions();

  const isTablet = width >= 768;

  const handleLogout = async () => {
    try {
      await logout();
      router.replace("/");
    } catch (error) {
      console.log("Logout error:", error.message);
    }
  };

  return (
    <View
      style={[
        styles.container,
        isTablet ? styles.containerTablet : styles.containerPhone,
      ]}
    >
      <Image style={styles.logo} source={Logo} />

      <View
        style={[
          styles.buttonContainer,
          isTablet ? styles.buttonContainerTablet : styles.buttonContainerPhone,
        ]}
      >
        {loading ? (
          <Text style={styles.buttonText}>Loading...</Text>
        ) : firebaseUser && userProfile ? (
          <>
            <Text style={styles.buttonText}>Hi, {userProfile.firstName}</Text>

            <Pressable onPress={handleLogout}>
              <Text style={styles.buttonText}>Logout</Text>
            </Pressable>
          </>
        ) : (
          <>
            <Pressable onPress={() => router.push("/login")}>
              <Text style={styles.buttonText}>Login</Text>
            </Pressable>

            <Pressable onPress={() => router.push("/signup")}>
              <Text style={styles.buttonText}>Sign Up</Text>
            </Pressable>
          </>
        )}
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingTop: Platform.OS === "ios" ? 50 : 25,
    paddingHorizontal: 16,
    paddingBottom: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  containerPhone: {
    minHeight: 110,
  },

  containerTablet: {
    minHeight: 120,
  },

  logo: {
    marginTop: 10,
    height: 50,
    width: 50,
    resizeMode: "contain",
  },

  buttonContainer: {
    position: "absolute",
    alignItems: "flex-end",
  },

  buttonContainerPhone: {
    right: 16,
    top: 58,
  },

  buttonContainerTablet: {
    right: 24,
    top: 55,
  },

  buttonText: {
    fontSize: 16,
    marginVertical: 5,
    color: "#3B82F6",
    fontWeight: "600",
  },
});

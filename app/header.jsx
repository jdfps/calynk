import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { router } from "expo-router";
import { useAuth } from "../context/AuthContext";
import { logout } from "../firebase/auth.js";

import Logo from "../assets/Logo/logo2.pdf";

const Header = () => {
  const { userProfile, firebaseUser, loading } = useAuth();
  const handleLogout = async () => {
    try {
      await logout();
      router.replace("/");
    } catch (error) {
      console.log("Logout error:", error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={Logo} />

      <View style={styles.buttonContainer}>
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
    marginTop: 20,
    flex: 1,
    alignItems: "center",
    paddingTop: 10,
  },

  logo: {
    height: 50,
    width: 50,
    resizeMode: "contain",
  },

  buttonContainer: {
    position: "absolute",
    right: 20,
    alignItems: "flex-end",
  },

  buttonText: {
    fontSize: 16,
    marginVertical: 5,
    color: "#3B82F6",
    fontWeight: "600",
  },
});

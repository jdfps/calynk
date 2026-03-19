import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { router } from "expo-router";
import Logo from "../assets/Logo/logo2.pdf";

const Header = () => {
  return (
    <View style={styles.container}>
      {/* Logo (Top Center) */}
      <Image style={styles.logo} source={Logo} />

      {/*Buttons on right*/}
      <View style={styles.buttonContainer}>
        <Pressable onPress={() => router.push("/login")}>
          <Text style={styles.buttonText}>Login</Text>
        </Pressable>

        <Pressable onPress={() => router.push("/signup")}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center", // center logo horizontally
    paddingTop: 5,
  },

  logo: {
    height: 50,
    width: 50,
    resizeMode: "contain",
  },

  buttonContainer: {
    position: "absolute",
    right: 20,
    // top: 5,
    alignItems: "flex-end",
  },

  buttonText: {
    fontSize: 16,
    marginVertical: 5,
    color: "#3B82F6",
    fontWeight: "600",
  },
});

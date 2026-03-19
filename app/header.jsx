import { StyleSheet, View, Text, Image } from "react-native";
import Logo from '../assets/Logo/logo2.pdf';



const Header = () => {
  return (
    <View style={styles.Header}>
      {/* <Text>Welcome to Calynk</Text> */}
      <Image style={styles.img} source={Logo} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  Header: {
    // display: 'flex',
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    // backgroundColor: "#60A5FA",
    color: "white",
  },
  img: {
    backgroundColor: "#60A5FA",
    height:  50,
    width: 50
  },
});

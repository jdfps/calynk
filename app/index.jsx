import { StyleSheet, Text, View } from "react-native";
import Header from "./header";
import Calander from "./calander_ui";

const Home = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Calander />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
});

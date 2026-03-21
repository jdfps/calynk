import { StyleSheet, View, ScrollView } from "react-native";
import Header from "./header";
import Calander from "./calander_ui";

const Home = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Header />
      <Calander />
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
});

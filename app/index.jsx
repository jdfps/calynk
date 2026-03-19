import { StyleSheet, Text, View } from 'react-native';
import Header from "./header";

const Home = () => {
  return (
    <View style={styles.container}>
      <Header />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    }
});
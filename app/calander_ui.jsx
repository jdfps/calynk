import { StyleSheet, View, Text, Pressable } from "react-native";

const CalendarUI = () => {
  const monthYear = new Date().toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  return (
    <View style={styles.container}>
      <Pressable>
        <Text style={styles.month}>{monthYear}</Text>
      </Pressable>

      <View style={styles.calendarBox}>
        <Text style={styles.placeholderText}>
          This is where the days of the month will go
        </Text>
      </View>
    </View>
  );
};

export default CalendarUI;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    paddingHorizontal: 16,
    paddingTop: 10,
  },

  month: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 12,
    color: "black",
    textDecorationLine: "underline",
  },

  calendarBox: {
    flex: 1,
    backgroundColor: "#F3F4F6",
    borderRadius: 12,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },

  placeholderText: {
    fontSize: 16,
    color: "#6B7280",
  },
});

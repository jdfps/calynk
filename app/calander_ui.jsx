import { useState } from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";

const CalendarUI = () => {
  const today = new Date();

  const [selectedMonth, setSelectedMonth] = useState(today.getMonth());
  const [selectedYear, setSelectedYear] = useState(today.getFullYear());
  const [selectedDay, setSelectedDay] = useState(today.getDate());

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const monthYear = `${months[selectedMonth]} ${selectedYear}`;

  const handlePrevYear = () => {
    setSelectedYear((prevYear) => prevYear - 1);
    setSelectedDay(null);
  };

  const handleNextYear = () => {
    setSelectedYear((prevYear) => prevYear + 1);
    setSelectedDay(null);
  };

  const handleMonthSelect = (monthIndex) => {
    setSelectedMonth(monthIndex);
    setSelectedDay(null);
  };

  const handleDaySelect = (day) => {
    setSelectedDay(day);
  };

  const daysInMonth = new Date(selectedYear, selectedMonth + 1, 0).getDate();

  const daysArray = Array.from(
    { length: daysInMonth },
    (_, index) => index + 1,
  );

  const firstDayOfMonth = new Date(selectedYear, selectedMonth, 1).getDay();

  const leadingBlankDays = Array.from({ length: firstDayOfMonth });

  const calendarCells = [
    ...leadingBlankDays.map((_, index) => ({
      key: `blank-${index}`,
      value: null,
    })),
    ...daysArray.map((day) => ({
      key: `day-${day}`,
      value: day,
    })),
  ];

  const timeSlots = [
    "12:00 AM",
    "1:00 AM",
    "2:00 AM",
    "3:00 AM",
    "4:00 AM",
    "5:00 AM",
    "6:00 AM",
    "7:00 AM",
    "8:00 AM",
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
    "6:00 PM",
    "7:00 PM",
    "8:00 PM",
    "9:00 PM",
    "10:00 PM",
    "11:00 PM",
  ];

  const isToday = (day) => {
    return (
      day === today.getDate() &&
      selectedMonth === today.getMonth() &&
      selectedYear === today.getFullYear()
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.date}>{monthYear}</Text>

      <View style={styles.dropdown}>
        <View style={styles.yearSelector}>
          <Pressable onPress={handlePrevYear} style={styles.arrowButton}>
            <Text style={styles.arrowText}>{"<"}</Text>
          </Pressable>

          <Text style={styles.yearText}>{selectedYear}</Text>

          <Pressable onPress={handleNextYear} style={styles.arrowButton}>
            <Text style={styles.arrowText}>{">"}</Text>
          </Pressable>
        </View>

        <View style={styles.monthGrid}>
          {months.map((month, index) => {
            const isSelected = index === selectedMonth;

            return (
              <Pressable
                key={month}
                style={[
                  styles.monthButton,
                  isSelected && styles.selectedMonthButton,
                ]}
                onPress={() => handleMonthSelect(index)}
              >
                <Text
                  style={[
                    styles.monthButtonText,
                    isSelected && styles.selectedMonthButtonText,
                  ]}
                >
                  {month}
                </Text>
              </Pressable>
            );
          })}
        </View>
      </View>

      <View style={styles.calendarBox}>
        <View style={styles.weekdayHeader}>
          {weekdays.map((weekday) => (
            <View key={weekday} style={styles.weekdayCell}>
              <Text style={styles.weekdayText}>{weekday}</Text>
            </View>
          ))}
        </View>

        <View style={styles.daysGrid}>
          {calendarCells.map((cell) =>
            cell.value === null ? (
              <View key={cell.key} style={styles.blankDayBox} />
            ) : (
              <Pressable
                key={cell.key}
                style={[
                  styles.dayBox,
                  selectedDay === cell.value && styles.selectedDayBox,
                  isToday(cell.value) && styles.todayBox,
                ]}
                onPress={() => handleDaySelect(cell.value)}
              >
                <Text
                  style={[
                    styles.dayText,
                    selectedDay === cell.value && styles.selectedDayText,
                  ]}
                >
                  {cell.value}
                </Text>
              </Pressable>
            ),
          )}
        </View>
      </View>

      {selectedDay && (
        <View style={styles.scheduleBox}>
          <Text style={styles.scheduleTitle}>
            {months[selectedMonth]} {selectedDay}, {selectedYear}
          </Text>

          <View style={styles.timeList}>
            {timeSlots.map((time) => (
              <Pressable key={time} style={styles.timeSlot}>
                <Text style={styles.timeText}>{time}</Text>
              </Pressable>
            ))}
          </View>
        </View>
      )}
    </View>
  );
};

export default CalendarUI;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 16,
    paddingTop: 10,
    paddingBottom: 20,
  },

  date: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 12,
    color: "black",
  },

  dropdown: {
    backgroundColor: "#E5E7EB",
    borderRadius: 10,
    padding: 12,
    marginBottom: 12,
  },

  yearSelector: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },

  arrowButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },

  arrowText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "black",
  },

  yearText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
  },

  monthGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  monthButton: {
    width: "23%",
    backgroundColor: "white",
    paddingVertical: 10,
    marginBottom: 10,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },

  selectedMonthButton: {
    backgroundColor: "#60A5FA",
  },

  monthButtonText: {
    fontSize: 14,
    color: "black",
    textAlign: "center",
  },

  selectedMonthButtonText: {
    color: "white",
    fontWeight: "bold",
  },

  calendarBox: {
    backgroundColor: "#F3F4F6",
    borderRadius: 12,
    overflow: "hidden",
    marginBottom: 16,
  },

  weekdayHeader: {
    flexDirection: "row",
    width: "100%",
    backgroundColor: "#E5E7EB",
  },

  weekdayCell: {
    width: "14.2857%",
    paddingVertical: 10,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#D1D5DB",
  },

  weekdayText: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#374151",
  },

  daysGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
  },

  dayBox: {
    width: "14.2857%",
    height: 100,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#E5E7EB",
    paddingTop: 6,
    paddingLeft: 6,
  },

  selectedDayBox: {
    backgroundColor: "#60A5FA",
  },

  todayBox: {
    borderColor: "#2563EB",
    borderWidth: 2,
  },

  blankDayBox: {
    width: "14.2857%",
    height: 100,
    backgroundColor: "#F9FAFB",
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },

  dayText: {
    fontSize: 16,
    fontWeight: "600",
    color: "black",
  },

  selectedDayText: {
    color: "white",
    fontWeight: "bold",
  },

  scheduleBox: {
    backgroundColor: "#F3F4F6",
    borderRadius: 12,
    padding: 12,
  },

  scheduleTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
    marginBottom: 12,
  },

  timeList: {
    gap: 8,
  },

  timeSlot: {
    backgroundColor: "white",
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },

  timeText: {
    fontSize: 16,
    color: "black",
  },
});

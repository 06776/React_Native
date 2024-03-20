import React from "react";
import { useState } from "react";
import { StyleSheet, Text, View, Pressable, ScrollView } from "react-native";

export default function HackerScreen() {
  let host = "http://localhost:8000/";
  let endpoint = "hackers";
  let url = host + endpoint;

  const [hackers, setHackers] = useState([]);
  const [showHackers, setShowHackers] = useState(false);

  function getHackers() {
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setHackers(res);
        setShowHackers(true);
      });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Hackerek adatai</Text>
      <Pressable onPress={getHackers} style={styles.button}>
        <Text style={styles.buttonText}>Adatok lekérése</Text>
      </Pressable>
      {showHackers && (
        <ScrollView style={styles.tableContainer}>
          {hackers.map((hacker, index) => (
            <View key={index} style={styles.hackerContainer}>
              <Text style={styles.hackerName}>Hacker neve: {hacker.name}</Text>
              <View style={styles.dataRow}>
                <Text style={styles.label}>Alias:</Text>
                <Text style={styles.data}>{hacker.alias}</Text>
              </View>
              <View style={styles.dataRow}>
                <Text style={styles.label}>Szül. dátum:</Text>
                <Text style={styles.data}>{hacker.birthdate}</Text>
              </View>
              <View style={styles.dataRow}>
                <Text style={styles.label}>Főváros:</Text>
                <Text style={styles.data}>{hacker.nationality}</Text>
              </View>
            </View>
          ))}
        </ScrollView>
      )}
      <View style={styles.footer}>
        <Text style={styles.footerText}><b>&copy; 2024 | Hajdara Patrik</b></Text>
        <Text style={styles.footerText}><b>BZSH Külkereskedelmi Technikum</b></Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5DADE2",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#27AE60",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
  tableContainer: {
    backgroundColor: "#1F5CC0",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    maxHeight: 400,
    padding: 10,
  },
  hackerContainer: {
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    backgroundColor: "#f9f9f9",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  hackerName: {
    fontWeight: "bold",
    marginBottom: 5,
    color: "#333",
    fontSize: 16,
  },
  dataRow: {
    flexDirection: "row",
    marginBottom: 5,
  },
  label: {
    fontWeight: "bold",
    marginRight: 5,
    color: "#555",
  },
  data: {
    color: "#333",
  },
  footer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "#F0F3F4",
    paddingVertical: 10,
    alignItems: "center",
  },
  footerText: {
    color: "#17202A",
    fontFamily: "Georgia",
    fontSize: 15,
  },
});

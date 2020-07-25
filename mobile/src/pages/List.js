import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  ScrollView,
  Image,
  AsyncStorage,
  StyleSheet,
} from "react-native";

import SpotList from "../components/SpotList";

import logo from "../assets/logo.png";

export default function List() {
  const [techs, setTechs] = useState([]);

  useEffect(() => {
    AsyncStorage.getItem("techs").then((storageTechs) => {
      const techsArray = storageTechs.split(",").map((tech) => tech.trim());

      setTechs(techsArray);
      console.log(techsArray);
    });
  }, []);

  return (
    <SafeAreaView style={styles.containter}>
      <Image style={styles.logo} source={logo} />
      <ScrollView>
        {techs.map((tech) => (
          <SpotList tech={tech} key={tech} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  containter: {
    flex: 1,
  },
  logo: {
    height: 32,
    resizeMode: "contain",
    alignSelf: "center",
    marginTop: 10,
  },
  button: {
    height: 42,
    backgroundColor: "#f05a5b",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 2,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});

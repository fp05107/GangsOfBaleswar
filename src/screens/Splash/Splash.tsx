import { ImageBackground } from "react-native";
import React, { useEffect } from "react";

const Splash = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("SignUp");
    }, 0);
  });
  return (
    <ImageBackground
      style={{ flex: 1 }}
      source={require("../../../assets/BackgroundImages/splashbg.png")}
    ></ImageBackground>
  );
};

export default Splash;

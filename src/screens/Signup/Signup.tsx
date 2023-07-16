import {
  View,
  Text,
  ImageBackground,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import styles from "../../styles/Signup.styles";
import Globals from "../../config/constants.config";
import { LinearGradient } from "expo-linear-gradient";
import RadioButtonGroup, { RadioButtonItem } from "expo-radio-button";

const Signup = ({ navigation }) => {
  return (
    <ScrollView style={{ flex: 1 }}>
      <ImageBackground
        style={{ flex: 1, height: Globals.windowHeight }}
        source={require("../../../assets/BackgroundImages/allscreenbg.png")}
      >
        <View style={styles.header}>
          <Text style={styles.headerText}>Sign Up</Text>
        </View>

        <View style={styles.signupTextsBox}>
          <Text style={styles.signupTexts}>
            VHA is an innovated, automated system and the very first blockchain
            based Virtual Health Assistant that will provide immediate medical
            assistance to the patients 24/7.
          </Text>
        </View>

        <View style={styles.inputsBox}>
          <TextInput style={styles.input} placeholder="Name" />
          <TextInput style={styles.input} placeholder="Email" />
          <TextInput style={styles.input} placeholder="Password" />
          <RadioButtonGroup
            containerStyle={styles.radioBtn}
            // selected={current}
            // onSelected={(value) => setCurrent(value)}
            radioBackground="green"
            size={20}
          >
            <RadioButtonItem
        
              value="test"
              label={
                <Text style={{ color: Globals.PrimaryTextColor }}>
                  Example passing React Element
                </Text>
              }
            />
          </RadioButtonGroup>
        </View>

        <LinearGradient
          colors={["#46AA72", "#2DA0A4"]}
          style={styles.signupBtnLinerGradient}
        >
          <TouchableOpacity style={styles.signupBtn}>
            <Text style={styles.signupBtnText}>Sign Up</Text>
          </TouchableOpacity>
        </LinearGradient>
      </ImageBackground>
    </ScrollView>
  );
};

export default Signup;

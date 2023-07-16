import { StyleSheet } from "react-native";
import Globals from "../config/constants.config";

const styles = StyleSheet.create({
  header: {
    width: Globals.windowWidth * 0.3,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    marginTop: Globals.windowHeight * 0.1,
  },
  headerText: {
    color: Globals.PrimaryTextColor,
    fontWeight: "500",
    fontSize: 28,
  },
  signupTextsBox: {
    width: Globals.windowWidth * 0.8,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    marginTop: Globals.windowHeight * 0.02,
  },
  signupTexts: {
    color: Globals.PrimaryTextColor,
    textAlign: "center",
  },
  inputsBox: {
    width: "90%",
    alignSelf: "center",
    height: Globals.windowHeight * 0.25,
    marginTop: 15,
  },
  input: {
    backgroundColor: "#222338",
    marginTop: 10,
    borderRadius: 10,
    paddingHorizontal: 15,
    height: Globals.windowHeight * 0.06,
    color: "#E2E5EA",
  },
  radioBtn: {
    marginTop: 5,
  },
  signupBtnLinerGradient: {
    width: "85%",
    alignSelf: "center",
    height: Globals.windowHeight * 0.05,
    borderRadius: 10,
    marginTop: 15,
  },
  signupBtn: {
    width: "85%",
    alignSelf: "center",
    height: Globals.windowHeight * 0.05,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  signupBtnText: {
    color: Globals.PrimaryTextColor,
    fontWeight: "500",
    fontSize: 18,
  },
});

export default styles;

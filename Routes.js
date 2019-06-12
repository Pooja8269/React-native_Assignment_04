import React from "react";
import { View } from "react-native";
import Login from './src/screens/Login';
import TabRoutes from "./src/screens/TabRoutes";
import SignUp from './src/screens/SignUp';
import Splash from './src/screens/Splash'
import { createStackNavigator  } from "react-navigation";

// All screens navigation component
const Routes = createStackNavigator(
  {
    // Splash screen navigation
    Splash: {
      screen: Splash,
      navigationOptions: {
      header: null
      }
    },
    // Login screen navigation
    Login: {
      screen: Login,
      navigationOptions: {
      header: null
      }
    },
    // TabRoutes screen navigation
    TabRoutes: {
      screen: TabRoutes,
      navigationOptions: {
      header: null
      }
    },
    // SignUp screen navigation
    SignUp: {
      screen: SignUp,
      navigationOptions: {
      header: null
      }
    },
  },
  // Splash screen as initial screen
  {
    initialRouteName: "Splash",
  }
);

export default Routes;
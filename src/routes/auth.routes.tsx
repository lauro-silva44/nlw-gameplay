import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Home } from "../screens/Home";
import { SignIn } from "../screens/SignIn";
import { AppointmmetDetails } from "../screens/AppoitmmentDetails";
import { AppointmmetCreate } from "../screens/AppoitmmentCreate";

const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes() {
  return (
    <Navigator
      screenOptions={{
        cardStyle: {
          backgroundColor: "transparent",
        },
        headerShown: false,
      }}
    >
      <Screen name="SignIn" component={SignIn} key={"SignIn"} />
      <Screen name="Home" component={Home} key={"Home"} />
      <Screen
        name="AppoitmmentsDetails"
        component={AppointmmetDetails}
        key={"Appoitmmets"}
      />
      <Screen
        name="AppointmmetCreate"
        component={AppointmmetCreate}
        key={"AppoitmmetsCreate"}
      />
    </Navigator>
  );
}

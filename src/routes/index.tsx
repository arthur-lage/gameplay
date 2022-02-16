import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { DefaultTheme } from "@react-navigation/native";

import { AuthRoutes } from "./auth.routes";

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent",
  },
};

export function Routes() {
  return (
    <NavigationContainer theme={MyTheme}>
        <AuthRoutes />
    </NavigationContainer>
  );
}

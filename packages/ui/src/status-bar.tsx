import { StatusBar as RNStatusBar } from "react-native";
import React from "react";

export const StatusBar = (props: React.ComponentProps<typeof RNStatusBar>) => {
  return <RNStatusBar {...props} />;
};

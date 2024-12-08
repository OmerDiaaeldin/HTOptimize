import React from "react";
import { AntDesign} from "@expo/vector-icons";
import FontAwesome from '@expo/vector-icons/FontAwesome';

export type RouteName = "Home" | "Myfixtures" | "Billing" | "AccountInfo";

export const icons: Record<RouteName, (props: { color?: string; size?: number }) => JSX.Element> = {
  Home: (props) => <AntDesign name="home" size={26} {...props} />,
  Myfixtures: (props) => <FontAwesome name="shower" size={26} {...props} />,
  Billing: (props) => <FontAwesome name="dollar" size={26} {...props} />,
  AccountInfo: (props) => <AntDesign name="user" size={26} {...props} />,
};

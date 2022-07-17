import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantsScreens } from "./src/features/restaurants/screens/restaurants.screens";

export default function App() {
  return <RestaurantsScreens />;
}

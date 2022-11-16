import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "../screens/HomeScreen";
import { ProvinceScreen } from "../screens/ProvinceScreen";

const { Screen, Navigator } = createNativeStackNavigator();

export const MainStackNavigator = () => {
  return (
    <Navigator>
      <Screen
        name={"homeScreen"}
        component={HomeScreen}
        options={{
          headerTitle: "Liste des régions",
        }}
      />
      <Screen
        name={"provinceScreen"}
        component={ProvinceScreen}
        options={{
          headerBackTitleVisible: false,
          headerTitle: "Liste des provinces",
        }}
      />
    </Navigator>
  );
};

import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export const RegionListItem = ({ region }) => {
  const { navigate } = useNavigation();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        navigate("provinceScreen", {
          regionCode: region.code_region,
        })
      }
    >
      <Text style={styles.name}>{region.nom_region}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  name: {
    fontSize: 18,
    fontWeight: "500",
  },
});

import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export const ProvincesListItem = ({ province }) => {
  const { navigate } = useNavigation();

  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.name}>{province.nom_province}</Text>
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

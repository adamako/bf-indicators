import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { BASE_URL } from "../utils/api";
import { useEffect, useState } from "react";
import { RegionsList } from "../components/molecules/regions/RegionsList";
import { LoadingIndicator } from "../components/molecules/LoadingIndicator";

export const HomeScreen = () => {
  const [regions, setRegions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchRegions();
  }, []);

  const fetchRegions = async () => {
    try {
      setIsLoading(true);
      const promise = await fetch(`${BASE_URL}/liste_region`);
      const response = await promise.json();
      if (response.statut === "success") {
        setRegions(response.recordSet);
      }
      setIsLoading(false);
    } catch (e) {
      console.log(e);
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <LoadingIndicator />;
  }

  return (
    <View style={styles.container}>
      <RegionsList regions={regions} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

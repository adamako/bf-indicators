import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { useEffect, useState } from "react";
import { BASE_URL } from "../utils/api";
import { ProvincesList } from "../components/molecules/provinces/ProvincesList";
import { useRoute } from "@react-navigation/native";
import { LoadingIndicator } from "../components/molecules/LoadingIndicator";

export const ProvinceScreen = () => {
  const [provinces, setProvinces] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { params } = useRoute();

  useEffect(() => {
    fetchProvinces();
  }, []);

  const fetchProvinces = async () => {
    try {
      setIsLoading(true);
      const promise = await fetch(
        `${BASE_URL}/liste_province?code_region=${params.regionCode}`
      );
      const response = await promise.json();
      console.log(response);
      if (response.statut === "success") {
        setProvinces(response.recordSet);
      }
      setIsLoading(false);
    } catch (e) {
      console.log(e);
    }
  };

  if (isLoading) {
    return <LoadingIndicator />;
  }

  return (
    <View style={styles.container}>
      <ProvincesList provinces={provinces} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

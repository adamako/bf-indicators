import { FlatList } from "react-native";
import { ProvincesListItem } from "./ProvincesListItem";
import { Divider } from "../../atoms/Divider";

export const ProvincesList = ({ provinces }) => {
  return (
    <FlatList
      data={provinces}
      renderItem={({ item }) => <ProvincesListItem province={item} />}
      ItemSeparatorComponent={Divider}
    />
  );
};

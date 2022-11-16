import { FlatList } from "react-native";
import { RegionListItem } from "./RegionListItem";
import { Divider } from "../../atoms/Divider";

export const RegionsList = ({ regions }) => {
  return (
    <FlatList
      data={regions}
      renderItem={({ item }) => <RegionListItem region={item} />}
      ItemSeparatorComponent={Divider}
    />
  );
};

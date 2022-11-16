import {StyleSheet} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {MainStackNavigator} from "./src/navigations/MainStackNavigator";


export default function App() {
    return (
        <NavigationContainer>
            <MainStackNavigator/>
        </NavigationContainer>
    );
}

import { View, Text } from "react-native";
import { LiquidGuage } from "../../components/LiquidGuage";

export default function HomeScreen() {
  return (
    <View className="flex-1">
      <LiquidGuage />
    </View>
  );
}

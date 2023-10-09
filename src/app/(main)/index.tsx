import { View, Text } from "react-native";
import { LiquidGuage } from "../../components/LiquidGuage";

export default function HomeScreen() {
  return (
    <View className="flex-1">
      <LiquidGuage value={55} />
      <LiquidGuage
        config={{
          circleColor: "#FF7777",
          textColor: "#FF4444",
          waveTextColor: "#FFAAAA",
          waveColor: "#FFDDDD",
          circleThickness: 0.2,
          textVertPosition: 0.2,
          waveAnimateTime: 1000,
        }}
        value={28}
      />
      <LiquidGuage
        config={{
          circleColor: "#D4AB6A",
          textColor: "#553300",
          waveTextColor: "#805615",
          waveColor: "#AA7D39",
          circleThickness: 0.1,
          circleFillGap: 0.2,
          textVertPosition: 0.8,
          waveAnimateTime: 2000,
          waveHeight: 0.3,
          waveCount: 1,
        }}
        value={60}
      />
    </View>
  );
}

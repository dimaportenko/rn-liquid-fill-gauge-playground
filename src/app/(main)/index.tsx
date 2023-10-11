import { View, Text, Button } from "react-native";
import { LiquidGuage } from "../../components/LiquidGuage";
import { useState } from "react";

function generateValue() {
  // if (Math.random() > 0.5) {
    return Math.round(Math.random() * 100);
  // } else {
  //   return (Math.random() * 100).toFixed(1) as number;
  // }
}

export default function HomeScreen() {
  const [values, setValues] = useState([55, 28, 60, 50, 60.44, 70])
  // const [values, setValues] = useState([1, 1, 1, 99, 99.44, 97])

  const updateValues = () => {
    setValues([
      generateValue(),
      generateValue(),
      generateValue(),
      generateValue(),
      generateValue(),
      generateValue(),
    ])
  }

  return (
    <View className="flex-1 flex-row flex-wrap justify-around pt-20">
      <LiquidGuage value={values[0]} />
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
        value={values[1]}
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
        value={values[2]}
      />

      <LiquidGuage
        value={values[3]}
        config={{
          textVertPosition: 0.8,
          waveAnimateTime: 5000,
          waveHeight: 0.15,
          waveAnimate: false,
          waveOffset: 0.25,
          valueCountUp: false,
          displayPercent: false,
        }}
      />

      <LiquidGuage
        value={values[4]}
        config={{
          circleThickness: 0.15,
          circleColor: "#808015",
          textColor: "#555500",
          waveTextColor: "#FFFFAA",
          waveColor: "#AAAA39",
          textVertPosition: 0.8,
          waveAnimateTime: 1000,
          waveHeight: 0.05,
          waveAnimate: true,
          waveRise: false,
          waveHeightScaling: false,
          waveOffset: 0.25,
          textSize: 0.75,
          waveCount: 3,
        }}
      />

      <LiquidGuage
        // value={120}
        value={values[5]}
        config={{
          circleThickness: 0.4,
          circleColor: "#6DA398",
          textColor: "#0E5144",
          waveTextColor: "#6DA398",
          waveColor: "#246D5F",
          textVertPosition: 0.52,
          waveAnimateTime: 5000,
          // waveHeight: 0,
          waveAnimate: false,
          waveCount: 2,
          waveOffset: 0.25,
          textSize: 1.2,
          // minValue: 30,
          // maxValue: 150,
          displayPercent: false,
        }}
      />

      <Button title="Update" onPress={updateValues} />
    </View>
  );
}

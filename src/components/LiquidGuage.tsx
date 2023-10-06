import { Canvas, Group, Path, Skia } from "@shopify/react-native-skia";
import { arc, scaleLinear } from "d3";
import { View, Text } from "react-native";

export type GaugeConfig = {
  minValue: number;
  maxValue: number;
  circleThickness: number;
  circleFillGap: number;
  circleColor: string;
  waveHeight: number;
  waveCount: number;
  waveRiseTime: number;
  waveAnimateTime: number;
  waveRise: boolean;
  waveHeightScaling: boolean;
  waveAnimate: boolean;
  waveColor: string;
  waveOffset: number;
  textVertPosition: number;
  textSize: number;
  valueCountUp: boolean;
  displayPercent: boolean;
  textColor: string;
  waveTextColor: string;
};

function liquidFillGaugeDefaultSettings(): GaugeConfig {
  return {
    minValue: 0, // The gauge minimum value.
    maxValue: 100, // The gauge maximum value.
    circleThickness: 0.05, // The outer circle thickness as a percentage of it's radius.
    circleFillGap: 0.05, // The size of the gap between the outer circle and wave circle as a percentage of the outer circles radius.
    circleColor: "#178BCA", // The color of the outer circle.
    waveHeight: 0.05, // The wave height as a percentage of the radius of the wave circle.
    waveCount: 1, // The number of full waves per width of the wave circle.
    waveRiseTime: 1000, // The amount of time in milliseconds for the wave to rise from 0 to it's final height.
    waveAnimateTime: 18000, // The amount of time in milliseconds for a full wave to enter the wave circle.
    waveRise: true, // Control if the wave should rise from 0 to it's full height, or start at it's full height.
    waveHeightScaling: true, // Controls wave size scaling at low and high fill percentages. When true, wave height reaches it's maximum at 50% fill, and minimum at 0% and 100% fill. This helps to prevent the wave from making the wave circle from appear totally full or empty when near it's minimum or maximum fill.
    waveAnimate: true, // Controls if the wave scrolls or is static.
    waveColor: "#178BCA", // The color of the fill wave.
    waveOffset: 0, // The amount to initially offset the wave. 0 = no offset. 1 = offset of one full wave.
    textVertPosition: 0.5, // The height at which to display the percentage text withing the wave circle. 0 = bottom, 1 = top.
    textSize: 1, // The relative height of the text to display in the wave circle. 1 = 50%
    valueCountUp: true, // If true, the displayed value counts up from 0 to it's final value upon loading. If false, the final value is displayed.
    displayPercent: true, // If true, a % symbol is displayed after the value.
    textColor: "#045681", // The color of the value text when the wave does not overlap it.
    waveTextColor: "#A4DBf8", // The color of the value text when the wave overlaps it.
  };
}

type Props = { config?: Partial<GaugeConfig>; width?: number; height?: number };
//
// var gaugeGroup = gauge.append("g")
//     .attr('transform','translate('+locationX+','+locationY+')');
//
// // Draw the outer circle.
// var gaugeCircleArc = d3.svg.arc()
//     .startAngle(gaugeCircleX(0))
//     .endAngle(gaugeCircleX(1))
//     .outerRadius(gaugeCircleY(radius))
//     .innerRadius(gaugeCircleY(radius-circleThickness));
// gaugeGroup.append("path")
//     .attr("d", gaugeCircleArc)
//     .style("fill", config.circleColor)
//     .attr('transform','translate('+radius+','+radius+')');
//

// const start = Skia.Path.MakeFromSVGString(createAnimatedPath(current))!;
// const lineGenerator = line().curve(curveBasis);
// const wavePath = lineGenerator(d3Points);
// return `${wavePath} L ${size}, ${size} 0, ${size} Z`;

export const LiquidGuage = ({ config, width = 200, height = 200 }: Props) => {
  const defaultConfig = liquidFillGaugeDefaultSettings();
  const mergedConfig = { ...defaultConfig, ...config };

  var radius = Math.min(width, height) / 2;
  var circleThickness = mergedConfig.circleThickness * radius;

  const gaugeCircleX = scaleLinear()
    .range([0, 2 * Math.PI])
    .domain([0, 1]);
  const gaugeCircleY = scaleLinear().range([0, radius]).domain([0, radius]);
  const gaugeCircleArc = arc()
    .startAngle(gaugeCircleX(0))
    .endAngle(gaugeCircleX(1))
    .outerRadius(gaugeCircleY(radius))
    .innerRadius(gaugeCircleY(radius - circleThickness));

  // console.log("arc", gaugeCircleArc());
  const gaugeCircleArcPath = Skia.Path.MakeFromSVGString(gaugeCircleArc())!;

  return (
    <View className="flex-1 items-center justify-center bg-red-300">
      <Canvas style={{ width, height }}>
        <Group>
          <Path 
            path={gaugeCircleArcPath} 
            color={mergedConfig.circleColor}
            transform={[{translateX: radius}, {translateY: radius}]}
          />
        </Group>
      </Canvas>
    </View>
  );
};

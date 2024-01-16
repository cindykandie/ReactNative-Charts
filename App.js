import { StatusBar } from "expo-status-bar";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";

export default function App() {
  const data = [
    {
      name: "Seoul",
      population: 21500000,
      color: "rgba(131, 167, 234, 1)",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      name: "Toronto",
      population: 2800000,
      color: "#F00",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      name: "Beijing",
      population: 527612,
      color: "yellow",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      name: "New York",
      population: 8538000,
      color: "#ffffff",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      name: "Moscow",
      population: 11920000,
      color: "rgb(0, 0, 255)",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
  ];
  return (
    <View style={styles.container}>
      <View>
        <Text>Bezier Line Chart</Text>
        <LineChart
          data={{
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                ],
              },
            ],
          }}
          width={Dimensions.get("window").width - 20}
          height={300}
          yAxisLabel="$"
          yAxisSuffix="k"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: "#000",
            backgroundGradientFrom: "#010",
            backgroundGradientTo: "red",
            decimalPlaces: 0, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: "6",
              strokeWidth: "2",
              stroke: "#ff9",
            },
          }}
          bezier
          style={{
            marginVertical: 8,
            marginBottom: 20,
            borderRadius: 16,
          }}
        />
      </View>
      <View>
        <Text>Pie Chart</Text>
        <PieChart
          data={data}
          width={Dimensions.get("window").width - 40}
          height={200}
          chartConfig={{
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            strokeWidth: 2,
            useShadowColorFromDataset: false,
          }}
          accessor={"population"}
          backgroundColor={"#ecd"}
          padding={"10"}
          center={[30, 10]}
          absolute
          style={{
            marginVertical: 8,
            marginBottom: 20,
            borderRadius: 16,
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 50,
    marginHorizontal: 3,
    alignItems: "center",
  },
});

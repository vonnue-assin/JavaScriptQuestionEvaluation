// 1. Write a function AnalyzeHeatmap(heatmap) that takes a 2D array of temperature readings and returns an object with:
// - maxTemp, minTemp, averageTemp
// - coordinates of the hottest and coldest points.

// Input: [[30,32,35],[28,40,33],[31,36,38]]
// Output: { maxTemp: 40, minTemp: 28, averageTemp: 33.7, hottestPoint: [1,1], coldestPoint: [1,0] }

export const AnalyzeHeatmap = (temp: string) => {
  let temperature = {};
  let input: number[] = [];

  for (let i = 0; i <= temp.length; i++) {
    let newArray = input.flatMap(Number);
    let newObj = newArray.entries();

    console.log(newObj);
  }
};

/**
 * 막대그래프 (div)
 */

// 데이터
var data = [
  10, 20, 30, 40, 50, 60, 70, 80, 90, 100
];

// 그래프
d3.select("body").selectAll("div")
  .data(data)
  .enter()
  .append("div")
  .style("height", function (d) { // 높이 설정
    return d + "px";
  })
  .style("width", function (d) { // 너비 설정
    return "20px";
  })
  .attr("class", "barchart");

/**
 * 가상 DOM 테스트
 */

// 가상 텍스트 DOM 생성
d3.select("body").append("div").text("새로운 문장");

// 가상 그래프 DOM 생성
var data = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
d3.select("body").selectAll("div")
  .data(data)
  .enter()
  .append("div");

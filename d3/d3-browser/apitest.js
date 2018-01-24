/**
 * API 테스트
 */

// 데이터
var numbers = [ 5, 4, 10, 1 ];
var data = [
      { date: '2014-01-01', amount: 10 },
      { date: '2014-02-01', amount: 20 },
      { date: '2014-03-01', amount: 40 },
      { date: '2014-04-01', amount: 80 }
    ];


// 숫자 함수
d3.min(numbers); // 1
d3.max(data, function(d, i) { // 80
   return d.amount
 });
d3.extent(numbers); // [1, 10]


// 스케일 함수
var scaleY = d3.scaleLinear()
    .domain([0, 80])
    .range([200, 0]);
scaleY(0);   // in: 0, out: 200px
scaleY(80);  // in: 80, out: 0px

var scaleX =  d3.scaleTime()
    .domain([
      new Date(Date.parse('2014-01-01')),
      new Date(Date.parse('2014-04-01'))
    ])
    .range([0, 300]);
scaleX(new Date(Date.parse('2014-01-01'))); // 0
scaleX(new Date(Date.parse('2014-02-01'))); // 103.3811949976841
scaleX(new Date(Date.parse('2014-04-01'))); // 300


// 축 함수
var xAxis = d3.axisBottom(scaleX)
  .ticks(4); // specify the number of ticks

var svg = d3.select('body')
  .append('svg')        // create an <svg> element
    .attr('width', 300) // set its dimentions
    .attr('height', 150);

svg.append('g')            // create a <g> element
  .attr('class', 'x axis') // specify classes
  .call(xAxis);            // let the axis do its thing

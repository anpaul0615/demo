/**
 * 원형그래프
 */

// 데이터
var data = [
  { product: 'Hoodie',  count: 12 },
  { product: 'Jacket',  count: 7 },
  { product: 'Snuggie', count: 6 },
];

// 그래프
var pie = d3.pie()
  .value(function(d){
    return d.count;
  });

var slices = pie(data);

var arc = d3.arc()
  .innerRadius(0)
  .outerRadius(50);

var color = d3.scaleOrdinal(d3.schemeCategory10);

var svg = d3.select('body')
  .append('svg')
  .attr('class', 'pie')
  .attr('width', 300)
  .attr('height', 100);

svg.append('g')
  .attr('transform', 'translate(200,50)')
  .selectAll('path.slice')
  .data(slices)
    .enter()
      .append('path')
        .attr('class','slice')
        .attr('d', arc)
        .attr('fill', function(d){
          return color(d.data.product);
        });

svg.append('g')
  .attr('class', 'legend')
    .selectAll('text')
    .data(slices)
      .enter()
        .append('text')
          .text(function(d){
            return '• ' + d.data.product;
          })
          .attr('fill', function(d){
            return color(d.data.product);
          })
          .attr('y', function(d, i){
            return 20 * (i + 1);
          });

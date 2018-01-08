import * as d3 from 'd3';

var data = [{
    "sale": "202",
    "year": "2000"
}, {
    "sale": "215",
    "year": "2001"
}, {
    "sale": "179",
    "year": "2002"
}, {
    "sale": "199",
    "year": "2003"
}, {
    "sale": "134",
    "year": "2003"
}, {
    "sale": "176",
    "year": "2010"
}];


var vis = d3.select("#visualisation"),
    WIDTH = 1000,
    HEIGHT = 500,
    MARGINS = {
        top: 20,
        right: 20,
        bottom: 20,
        left: 50
    };
var xScale = d3.scaleLinear().range([MARGINS.left, WIDTH - MARGINS.right]).domain([2000,2010]);

var yScale = d3.scaleLinear().range([HEIGHT - MARGINS.top, MARGINS.bottom]).domain([134,215]);

var xAxis =d3.axisBottom()
    .scale(xScale);

var yAxis = d3.axisLeft()
        .scale(yScale).orient("left");

vis.append("svg:g")
  .call(xAxis);

vis.append("svg:g")
    .attr("transform", "translate(0," + (HEIGHT - MARGINS.bottom) + ")")
    .call(xAxis);

vis.append("svg:g")
    .attr("transform", "translate(" + (MARGINS.left) + ",0)")
    .call(yAxis);

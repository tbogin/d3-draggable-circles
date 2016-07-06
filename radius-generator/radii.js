var data = [26,18,41,64,78]

var container = d3.select(".circle-maker");
var circles = container.selectAll("circle").data(data).enter().append("circle")
circles.attr("r", function(d){return d + "px";})
circles.attr("cx", function(d){return d * 10})
circles.attr("cy", function(d){return d * 10})



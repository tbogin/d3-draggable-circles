var svg = d3.select('body').append('svg')
            .attr("width", 960)
            .attr("height", 480);

var circle = svg.append('circle')
            .attr('cx', 300)
            .attr('cy', 100)
            .attr('r', 20)
            .attr('fill','red');



function transition() {
    circle.transition()
        .duration(1000)
        .ease("linear")
        .attr('cx',  300 * (1 + Math.random()/2))
        .attr('cy',  100 * (1 + Math.random()/2))
        .each("end", transition);
};

transition();
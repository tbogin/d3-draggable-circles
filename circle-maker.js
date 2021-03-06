var drag = d3.behavior.drag()
        .on("drag", function(d,i) {
            d.x += d3.event.dx
            d.y += d3.event.dy
            d3.select(this).attr("transform", function(d,i){
                return "translate(" + [ d.x,d.y ] + ")"
            })
        });

    function bubbles(classname, data, x, y, r){ 
       
        var face = d3.select("#charts")
            .append("svg:g")
                .data([ {"x":x, "y":y} ])
                .attr("class", classname)
                .attr("transform", "translate(" + x + "," + y + ")")
                .call(drag);
        console.log("make head");
        var head_color = d3.scale.linear()
            .domain([0, 1])
            .interpolate(d3.interpolateRgb)
            .range(["#ff0000", "#0000ff"]);
        var head = face.append("svg:circle")
                .attr("class", "head")
                .attr("fill", function(d){ return head_color(data.x); })
                .attr("fill-opacity", .8)
                .attr("stroke", "#000")
                .attr("stroke-width", 2)
                .attr("r", r);
    }

    var w = 700;
    var h = 400;
    //setup svg canvas
    d3.select("body")
        .append("svg:svg")
            .attr("width", w)
            .attr("height", h)
            .attr("id", "charts")
            .append("svg:rect")
                .attr("width", "100%")
                .attr("height", "100%")
                .attr("stroke", "#000")
                .attr("stroke-width", 3)
                .attr("fill", "none")
    
    for(i = 0; i < 40; i++)
    {
        var r = 20 + Math.random() * 50;
        var data = { "x":Math.random(), "y":Math.random(), "z":Math.random(), "w":Math.random() };
        x = Math.random() * w
        y = Math.random() * h
        bubbles("face"+i, data, x, y, r);
    }
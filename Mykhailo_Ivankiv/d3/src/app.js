import  {getRandom} from "./utils";
import * as d3 from "d3";

const data = new Array (getRandom(2, 15)).fill().map( () => getRandom(0, 100));

setInterval( () => {
    const data = new Array (getRandom(2, 15)).fill().map( () => getRandom(0, 100));
    const bars = container
        .selectAll("div")
        .data(data);

    bars
        .transition()
        .duration(1000)
        .style("width", scale);

    bars
        .enter()
        .append("div")
        .style("height", "20px")
        .attr("class", "Chart__bar")
        .style("width", scale)

        .style("opacity", 0)
        .transition()
        .duration(1000)
        .style("opacity", 1)
        ;

    bars
        .exit()
        .style("opacity", 1)
        .transition()
        .duration(1000)
        .style("opacity", 0)
        .remove()

}
, 1500);

const scale = d3.scaleLinear()
    .domain( [0, 100] )
    .range ( [ "20px", "1100px" ])

const container = d3
    .select("#root")
    .append("div")
        // .style("height", "300px")
        .style("width", "1200px")
        .attr("class", "Chart");

const bars = container
    .selectAll("div")
    .data(data);
bars
    .enter()
    .append("div")
        .style("width", scale)
        .style("height", "20px")
        .attr("class", "Chart__bar")

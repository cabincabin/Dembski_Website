d3.select(".show").transition(600).attr("style", "height:0px;");

d3.select(".jewel").on("mouseover", function(d){
    d3.select(".jewel").style("color", "#6D6D6D");
    open();
    d3.select(".show").append("div");
    d3.select(".show").append("div").append("img").attr("src", "resources/jewl1.jpg").attr("style","padding-top: 50px;\n" +
        "    padding-bottom: 50px;\n" +
        "    border-radius: 50%;\n" +
        "    max-width:1px;\n").transition(500).attr("style","padding-top: 50px;\n" +
        "    padding-bottom: 50px;\n" +
        "    border-radius: 50%;\n" +
        "    max-width:300px;");
    d3.select(".show").append("div").append("img").attr("src", "resources/jewl2.jpg").attr("style","padding-top: 50px;\n" +
        "    padding-bottom: 50px;\n" +
        "    border-radius: 50%;\n" +
        "    max-width:1px;\n" +
        "    margin-left:200px;\n" +
        "    margin-right:auto;\n" +
        "    width: 50%;").transition(500).attr("style","padding-top: 50px;\n" +
        "    padding-bottom: 50px;\n" +
        "    border-radius: 50%;\n" +
        "    max-width:300px;\n" +
        "    margin-left:225px;\n" +
        "    margin-right:auto;\n" +
        "    width: 50%;");
    d3.select(".show").append("div").append("img").attr("src", "resources/jewl3.jpg").attr("style","padding-top: 50px;\n" +
        "    padding-bottom: 50px;\n" +
        "    border-radius: 50%;\n" +
        "    max-width:1px;\n" +
        "    margin-left:225px;\n" +
        "    margin-right:auto;\n" +
        "    width: 50%;").transition(500).attr("style","padding-top: 50px;\n" +
        "    padding-bottom: 50px;\n" +
        "    border-radius: 50%;\n" +
        "    max-width:300px;\n" +
        "    margin-left:225px;\n" +
        "    margin-right:auto;\n" +
        "    width: 50%;");

}).on("mouseout", function(d){
    d3.select(".jewel").style("color", "#000000");
    closed();
    d3.select(".show").selectAll("div").remove();
});

d3.select(".mando").on("mouseover", function(d){
    d3.select(".mando").style("color", "#6D6D6D");
    open();

}).on("mouseout", function(d){
    d3.select(".mando").style("color", "#000000");
    closed();
});
d3.select(".fence").on("mouseover", function(d){
    d3.select(".fence").style("color", "#6D6D6D");
    open();

}).on("mouseout", function(d){
    d3.select(".fence").style("color", "#000000");
    closed();
});
d3.select(".sculpt").on("mouseover", function(d){
    d3.select(".sculpt").style("color", "#6D6D6D");
    open();

}).on("mouseout", function(d){
    d3.select(".sculpt").style("color", "#000000");
    closed();
});

function open() {
    d3.select(".show").transition(600).attr("style", "height:540px;");
}
function closed() {
    d3.select(".show").transition(600).attr("style", "height:0px;");
    // d3.select(".show").attr("style", "height:0px;display:none;")
}
//
// d3.onmouseenter(d3.select(".jewel"), function (d) {
//     d3.select(".jewel").attr("color", "white");
// });
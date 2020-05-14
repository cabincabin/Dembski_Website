d3.select(".show").attr("style", "height:0px;");
let widthflag = false;

const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
};

sleep(1).then(() => {
    d3.select(".show").transition(1).attr("style", "height:"+(document.documentElement.clientHeight-d3.select(".show").node().offsetTop )+"px;");
    d3.select(".setGrey").transition(1).attr("style",  "height:0px; background-color:Gainsboro;");
    sleep(3).then(() => {
        d3.select(".show").transition(1).attr("style", "height:0px;");
        d3.select(".setGrey").transition(1).attr("style",  "height:"+(document.documentElement.clientHeight-d3.select(".show").node().offsetTop )+"px; background-color:Gainsboro;");
        widthflag = true;
    });
    //do stuff
});

function redraw(){
    if (widthflag === false){
        d3.select(".show").attr("style", "height:"+(document.documentElement.clientHeight-d3.select(".show").node().offsetTop )+"px;");
    }
    if (widthflag === true){
        d3.select(".setGrey").attr("style",  "height:"+(document.documentElement.clientHeight-d3.select(".show").node().offsetTop )+"px; background-color:Gainsboro;");
    }
}

window.addEventListener("resize", redraw);


d3.select(".jewel").on("mouseover", function(d){
    d3.select(".jewel").style("color", "#6D6D6D");
    open();
    d3.select(".show").append("div");
    d3.select(".show").append("div").append("img").attr("src", "resources/jewl1.jpg").attr("style","padding-top: 60px;\n" +
        "    padding-bottom: 54px;\n" +
        "    border-radius: 50%;\n" +
        "    max-width:1px;\n").transition(500).attr("style","padding-top: 60px;\n" +
        "    padding-bottom: 54px;\n" +
        "    border-radius: 50%;\n" +
        "    max-width:300px;");
    d3.select(".show").append("div").append("img").attr("src", "resources/jewl2.jpg").attr("style","padding-top: 60px;\n" +
        "    padding-bottom: 54px;\n" +
        "    border-radius: 50%;\n" +
        "    max-width:1px;\n" +
        "    margin-left:200px;\n" +
        "    margin-right:auto;\n").transition(500).attr("style","padding-top: 60px;\n" +
        "    padding-bottom: 54px;\n" +
        "    border-radius: 50%;\n" +
        "    max-width:300px;\n" +
        "    margin-left:225px;\n" +
        "    margin-right:auto;\n");
    d3.select(".show").append("div").append("img").attr("src", "resources/jewl3.jpg").attr("style","padding-top: 60px;\n" +
        "    padding-bottom: 54px;\n" +
        "    border-radius: 50%;\n" +
        "    max-width:1px;\n" +
        "    margin-left:225px;\n" +
        "    margin-right:auto;\n").transition(500).attr("style","padding-top: 60px;\n" +
        "    padding-bottom: 54px;\n" +
        "    border-radius: 50%;\n" +
        "    max-width:300px;\n" +
        "    margin-left:225px;\n" +
        "    margin-right:auto;\n");

}).on("mouseout", function(d){
    d3.select(".jewel").style("color", "#000000");
    closed();

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
    d3.select(".show").append("div").append("img").attr("src", "resources/fence1.gif").attr("style","padding-top: 75px;\n" +
        "    box-shadow: 0 8px 10px -10px white;\n"+
        "    padding-bottom: 54px;\n" +
        "    padding-left: 50%;\n" +
        "    max-width:50px;\n").transition(500).attr("style","padding-top: 75px;\n" +
        "    padding-left: "+ (document.documentElement.clientWidth/2-480/2)+"px;\n" +
        "    max-width:480px;");
    open();
    //https://media.giphy.com/media/QaARNA50Kt2fnxiNVW/giphy.gif

}).on("mouseout", function(d){
    d3.select(".fence").style("color", "#000000");
    closed();
});

d3.select(".sculpt").on("mouseover", function(d){
    d3.select(".sculpt").style("color", "#6D6D6D");
    open();
    d3.select(".show").append("div");
    d3.select(".show").append("div").append("img").attr("src", "resources/sculpt2.gif").attr("style","padding-top: 60px;\n" +
        "    padding-bottom: 54px;\n" +
        "    border-radius: 50%;\n" +
        "    max-width:1px;\n").transition(500).attr("style","padding-top: 60px;\n" +
        "    padding-bottom: 54px;\n" +
        "    border-radius: 50%;\n" +
        "    max-width:300px;");
    d3.select(".show").append("div").append("img").attr("src", "resources/sculpt1.gif").attr("style","padding-top: 60px;\n" +
        "    padding-bottom: 54px;\n" +
        "    border-radius: 50%;\n" +
        "    max-width:1px;\n").transition(500).attr("style","padding-top: 60px;\n" +
        "    padding-bottom: 54px;\n" +
        "    border-radius: 50%;\n" +
        "    max-width:300px;");
    d3.select(".show").append("div").append("img").attr("src", "resources/sculpt3.gif").attr("style","padding-top: 60px;\n" +
        "    padding-bottom: 54px;\n" +
        "    border-radius: 50%;\n" +
        "    max-width:1px;\n").transition(500).attr("style","padding-top: 60px;\n" +
        "    padding-bottom: 54px;\n" +
        "    border-radius: 50%;\n" +
        "    max-width:300px;");


}).on("mouseout", function(d){
    d3.select(".sculpt").style("color", "#000000");
    closed();
});

function open() {
    widthflag = false;
    // var num = (screen.height-d3.select(".show").node().offsetTop);
    d3.select(".show").transition(600).attr("style", "height:"+(document.documentElement.clientHeight-d3.select(".show").node().offsetTop )+"px;");
    d3.select(".setGrey").transition(600).attr("style",  "height:0px; background-color:Gainsboro;");
}
function closed() {
    widthflag = true;
    d3.select(".show").transition(600).attr("style", "height:0px;");
    d3.select(".show").selectAll("div").remove();
    d3.select(".setGrey").transition(600).attr("style",  "height:"+(document.documentElement.clientHeight-d3.select(".show").node().offsetTop )+"px; background-color:Gainsboro;");//
    // d3.select(".show").attr("style", "height:0px;display:none;")
}
//
// d3.onmouseenter(d3.select(".jewel"), function (d) {
//     d3.select(".jewel").attr("color", "white");
// });
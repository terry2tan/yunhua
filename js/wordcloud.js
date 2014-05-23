// JavaScript Document
  var fill = d3.scale.category20();
  var text = ["分众传媒","传播","广告","商业","企业家","传媒","品牌","领袖"];

  d3.layout.cloud().size([300, 300])
       /*.words([{text:"你好", size:50},{text:"世界",size:60},{text:"我们",size:30}])*/
	   .words(text.map(function(d){return {text:d,size:Math.random()*70};}
	   	))
      .padding(5)
      .rotate(function() { return ~~(Math.random() * 2) * 90; })
      .font("Microsoft YaHei UI")
      .fontSize(function(d) { return d.size; })
      .on("end", draw)
      .start();

  function draw(words) {
    d3.select("#wordcloud").append("svg")
        .attr("width", 300)
        .attr("height", 300)
      .append("g")
        .attr("transform", "translate(130,150)")
      .selectAll("text")
        .data(words)
      .enter().append("text")
        .style("font-size", function(d) { return d.size + "px"; })
        .style("font-family", "Microsoft YaHei UI")
        .style("fill", function(d, i) { return fill(i); })
        .attr("text-anchor", "middle")
        .attr("transform", function(d) {
          return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
        })
        .text(function(d) { return d.text; });
  }

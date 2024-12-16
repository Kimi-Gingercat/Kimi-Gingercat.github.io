//Vis 1a: Global Sales by Platform
async function renderFirstVis1() {
    const data = await d3.csv("data/videogames_wide.csv");
    console.log(data);
    const vlSpec = vl
      .markBar()
      .data(data)
      .title("Global Sales by Platform and Genre in Ascending Order")
      .encode(
        vl.y().fieldN("Platform").sort("-x"),
        vl.x().fieldQ("Global_Sales").aggregate("sum"),
        vl.order().fieldQ("Global_Sales").aggregate("sum").sort("ascending"),
        vl.tooltip().fieldQ("Global_Sales").aggregate("sum"),
        vl.facet().fieldN('Genre').columns(4).sort({"op":"count","field":"Name","order":"descending"})
      )
      .width(250)
      .height(300)
      .toSpec();
  
    vegaEmbed("#view1a", vlSpec).then((result) => {
      const view = result.view;
      view.run();
    });
}
//Vis 1b: Global Sales by Genre
async function renderFirstVis2() {
    const data = await d3.csv("data/videogames_wide.csv");
    console.log(data);
    const vlSpec = vl
      .markBar()
      .data(data)
      .title("Global Sales by Platform")
      .encode(
        vl.y().fieldN("Platform").sort("-x"),
        vl.x().fieldQ("Global_Sales").aggregate("sum")
      )
      .width('container')
      .height(400)
      .toSpec();
  
    vegaEmbed("#view1b", vlSpec).then((result) => {
      const view = result.view;
      view.run();
    });
}
//Vis 2a: Sales Over Time by Platform 
async function renderSecVis() {
    const data = await d3.csv("data/videogames_wide.csv");
    console.log(data);
    const vlSpec = vl
      .markCircle()
      .data(data)
      .title("Sales Over Time by Platform")
      .encode(
        vl.x().fieldO("Year"),
        vl.y().fieldN('Platform'),
        vl.size().fieldQ("Global_Sales").aggregate("mean"),
        vl.tooltip().fieldQ("Global_Sales").aggregate("mean")
      )
      .width('container')
      .height(600)
      .toSpec();
  
    vegaEmbed("#view2a", vlSpec).then((result) => {
      const view = result.view;
      view.run();
    });
}

//Vis 2b: Sales Over Time by Genre 
async function renderSecVis2() {
    const data = await d3.csv("data/videogames_wide.csv");
    console.log(data);
    const vlSpec = vl
      .markArea()
      .data(data)
      .title("Sales Over Time by Genre")
      .encode(
        vl.x().fieldT("Year"),
        vl.y().fieldQ("Global_Sales").aggregate("sum"),
        vl.color().fieldN('Genre').scale({ scheme: 'category20' }),
        vl.tooltip().fieldN('Genre')
      )
      .width('container')
      .height(600)
      .toSpec();
  
    vegaEmbed("#view2b", vlSpec).then((result) => {
      const view = result.view;
      view.run();
    });
}
//Visualization 3: Regional Sales vs. Platform
async function renderThirdVis() {
    const data = await d3.csv("data/videogames_wide.csv");
    console.log(data);
    const vlSpec = vl
      .markBar()
      .data(data)
      .transform(
        vl.fold(["NA_Sales", "EU_Sales", "JP_Sales", "Other_Sales"]))
      .title("Sales Across Regions by Platform")
      .encode(
        //vl.x().fieldN("Platform"),
        vl.y().fieldQ("value").aggregate("sum").axis({ title: "Sales" }),
        vl.x().fieldN("key"), 
        vl.color().fieldN("key").legend({title:"Region"}),
        vl.tooltip().fieldQ("value").aggregate("sum"),
        vl.facet().fieldN('Platform').columns(6).sort({"op":"count","field":"Name","order":"descending"})
      )
      .width(100)
      .height(150)
      .toSpec();
  
    vegaEmbed("#view3", vlSpec).then((result) => {
      const view = result.view;
      view.run();
    });
}
//Visualization 4: Games Published by Electronic Arts over the Years by Genre
async function renderFourthVis() {
    const data = await d3.csv("data/videogames_wide.csv");
    const eaData = data.filter((item)=>{return item.Publisher === "Electronic Arts"});
    const vlSpec = vl
      .markCircle() 
      .data(eaData)
    
      .encode(
        vl.x().fieldO('Year'), 
        vl.y().fieldN('Genre'),
        vl.size().aggregate('count'), 
        vl.tooltip().aggregate('count'),
      )
      .title('Games Published by Electronic Arts Over the Years by Genre')
      .width('container')
      .height(400)
      .toSpec();

    vegaEmbed("#view4", vlSpec).then((result) => {
      const view = result.view;
      view.run();
    })
}



renderFirstVis1();
renderFirstVis2();
renderSecVis();
renderSecVis2();
renderThirdVis();
renderFourthVis();
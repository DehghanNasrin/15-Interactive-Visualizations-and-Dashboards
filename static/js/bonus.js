function frequencyGauge(wfreq) {
    d3.json("./Data/samples.json").then((data) => {
    
      let trace = [
        {
            type:'indicator',
            mode: 'gauge+number+delta',
            value: wfreq,
            title: {
                text:'<b>Belly Button Washing Frequency</b> <br> Scrubs per Week',
                font: { size: 24 }
              },
            delta: { reference: 9, increasing: { color: "RebeccaPurple" } },  
            gauge:{
                axis:{
                    range:[null,9],
                },
                bar: { color: "lightblue" },
                bgcolor: "white",
                borderwidth: 2,
                bordercolor: "red",
                steps:[
                    {range:[0,.99], color: "rgba(256, 1, 100, 1)"},
                    {range:[.99,1], color:"white"},
                    {range:[1,1.99], color:"rgba(20, 250, 5, 58)"},
                    {range:[1.99,2], color:"white"},
                    {range:[2,2.99], color:"rgba(120, 10, 120, 78)"},
                    {range:[2.99,3], color:"white"},
                    {range:[3,3.99], color:"rgba(8, 180, 89, 7)"},
                    {range:[3.99,4], color:"white"},
                    {range:[4,4.99], color:"rgba(200, 40, 140, 17)"},
                    {range:[4.99,5], color:"white"},
                    {range:[5,5.99], color:"rgba(2, 130, 24, 15)"},
                    {range:[5.99,6], color:"white"},
                    {range:[6,6.99], color:"rgba(260, 13, 24, 85)"},
                    {range:[6.99,7], color:"white"},
                    {range:[7,7.99], color:"rgba(30, 230, 12, 75)"},
                    {range:[7.99,8], color:"white"},
                    {range:[8,8.99], color:"rgba(250, 230, 224, 5)"},
                ],
                threshold: {
                    line: { color: "red", width: 4 },
                    thickness: 0.75,
                    value: 7
                  },
                  labels:[
                    '0-1', '1-2', '2-3', '3-4', '4-5', '5-6', '6-7', '7-8', '8-9'
                  ],
                  datalabels: {
                    anchor: 'center',
                    align: 'center',
                    offset: 50
                },
                valueLabel:wfreq
            }
        }
      ];
  
      let layout = {
        width: 500,
        height: 400,
        margin: { t: 25, r: 25, l: 25, b: 25 },
        font: { color: "darkblue", family: "Arial" }
      };
  
      Plotly.newPlot("gauge", trace, layout);
    });
  }
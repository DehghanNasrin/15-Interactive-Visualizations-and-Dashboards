function frequencyGauge(wfreq) {
  let degrees = Math.min(190 - wfreq * 20, 180), radius = 0.5;
  let radians = degrees * (Math.PI / 180);
  let x = radius * Math.cos(radians);
  let y = radius * Math.sin(radians);

  let data = [
    {
      type: "scatter",
      x: [0],
      y: [0],
      marker: { size: 18, color: "850000" },
      showlegend: false,
      name: "BellyButtonDiversity ",
      text: wfreq,
      hoverinfo: "text+name",
    },
    {
      values: [
        180 / 9,
        180 / 9,
        180 / 9,
        180 / 9,
        180 / 9,
        180 / 9,
        180 / 9,
        180 / 9,
        180 / 9,
        180,
      ],
      rotation: 90,
      labels: wfreq,
      text: ["8-9", "7-8", "6-7", "5-6", "4-5", "3-4", "2-3", "1-2", "0-1", ""],
      textinfo: "text",
      textposition: "inside",
      marker: {
        colors: [
          "#006622",
          "#009933",
          "#33cc33",
          "#99ff99",
          "#ccff99",
          "#bbff33",
          "#ccff66",
          "#ccffcc",
          "#ffffcc",
          "rgba(0, 0, 0, 0)",
        ],
      },
      hole: 0.5,
      type: "pie",
      hoverinfo: "text",
      showlegend: false,
    },
  ];

  let layout = {
    shapes: [
      {
        type: "line",
        x0: 0,
        y0: 0,
        x1: x,
        y1: y,
        fillcolor: "850000",
        line: {
          color: "850000",
        },
      },
    ],
    title: "<b>Belly Button Washing Frequency</b> <br> Scrubs per week.",
    height: 500,
    width: 500,
    xaxis: {
      zeroline: false,
      showticklabels: false,
      showgrid: false,
      range: [-1, 1],
    },
    yaxis: {
      zeroline: false,
      showticklabels: false,
      showgrid: false,
      range: [-1, 1],
    },
  };

  Plotly.newPlot("gauge", data, layout);
}

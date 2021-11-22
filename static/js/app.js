function init() {
  let dropdown = d3.select("#selDataset");
  d3.json("./Data/samples.json").then((sampleData) => {
    sampleData.names.forEach((sample) => {
      dropdown.append("option").text(sample).property("value", sample);
    });

    let sampleId = dropdown.property("value");
    displayMetadata(sampleId);
    createHorizontalBarChart(sampleId);
    createBubbleChart(sampleId);
    });
}

function displayMetadata(sampleId) {
  d3.json("./Data/samples.json").then((data) => {
    let dataPanel = d3.select("#sample-metadata");
    dataPanel.html("");
    let metadata = data.metadata.filter((item) => item.id == sampleId)[0];

    Object.entries(metadata).forEach((key, value) => {
      dataPanel.append("h6").text(`${key[0]}: ${key[1]}`);
    });

    frequencyGauge(metadata.wfreq);
  });
}

function createHorizontalBarChart(sampleId) {
  d3.json("./Data/samples.json").then((data) => {
    let metadata = data.samples.filter((item) => item.id == sampleId)[0];

    let reversedValues = metadata.sample_values.slice(0, 10).reverse();
    let otuIds = metadata.otu_ids.slice(0, 10).reverse();
    let strReversedIds = otuIds.map((row) => "OTU" + row.toString());
    let reversedLabels = metadata.otu_labels.slice(0, 10).reverse();

    let trace = [
      {
        x: reversedValues,
        y: strReversedIds,
        text: reversedLabels,
        type: "bar",
        name: sampleId,
        orientation: "h",
      },
    ];

    let layout = {
      barmode: "group",
      hovermode: "closest",
    };

    Plotly.newPlot("bar", trace, layout);
  });
}

function createBubbleChart(sampleId) {
  d3.json("./Data/samples.json").then((data) => {
    let metadata = data.samples.filter((item) => item.id == sampleId)[0];

    let sampleValues = metadata.sample_values;
    let otuIds = metadata.otu_ids;
    let otuIdsStr = otuIds.map(String);
    let otuLabels = metadata.otu_labels;

    let trace = [
      {
        x: otuIds,
        y: sampleValues,
        mode:'markers',
        marker: {
          size: sampleValues,
          color: otuIdsStr,
          colorscale:'Portland Heatmap'
        },
        type: "bubble",
        text: otuLabels,
      },
    ];

    let layout = {
      hovermode: "closest",
      showlegend: false,
      xaxis: {
        title: "OTU ID"
      }
    };

    Plotly.newPlot("bubble", trace, layout);
  });
}

function optionChanged(sampleId) {
  displayMetadata(sampleId);
  createHorizontalBarChart(sampleId);
  createBubbleChart(sampleId);
}

(function () {
  init();
})();

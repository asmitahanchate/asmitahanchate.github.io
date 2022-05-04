let sPlot;

if (!document.getElementsByTagName("svg").length) {
  d3.csv("data/US Accidents 2016-2019 40 thousand.csv").then((data) => {
    // * TO-DO *

    data.forEach((element) => {
      element.date = new Date(element.Start_Time);
    });
    data = data.sort((a, b) => {
      return a["date"] - b["date"];
    });
    console.log(data);
    var barData = [
      {
        time: "0AM",
        crashes: 154,
      },
      {
        time: "1AM",
        crashes: 245,
      },
      {
        time: "2AM",
        crashes: 375,
      },
      {
        time: "3AM",
        crashes: 285,
      },
      {
        time: "4AM",
        crashes: 205,
      },
      {
        time: "5AM",
        crashes: 353,
      },
      {
        time: "6AM",
        crashes: 265,
      },
      {
        time: "7AM",
        crashes: 185,
      },
      {
        time: "8AM",
        crashes: 302,
      },
      {
        time: "9AM",
        crashes: 257,
      },
      {
        time: "10AM",
        crashes: 193,
      },
      {
        time: "11AM",
        crashes: 102,
      },
      {
        time: "1PM",
        crashes: 235,
      },
      {
        time: "2PM",
        crashes: 190,
      },
      {
        time: "3PM",
        crashes: 170,
      },
      {
        time: "4PM",
        crashes: 188,
      },
      {
        time: "5PM",
        crashes: 167,
      },
      {
        time: "6PM",
        crashes: 122,
      },
      {
        time: "7PM",
        crashes: 233,
      },
      {
        time: "8PM",
        crashes: 264,
      },
      {
        time: "9PM",
        crashes: 345,
      },
      {
        time: "10PM",
        crashes: 367,
      },
      {
        time: "11PM",
        crashes: 305,
      },
    ];
    console.log(barData);

    bplot = new InnovativeBar("InBar", barData);

    sPlot = new ScatterPlot("chart-area", data);
  });

  $("#play-button").on("click", function () {
    var button = $(this);

    console.log("Initail Button text" + String(button.text()).trim(" "));
    button[0].innerHTML = String(button.text()).trim(" ");
    if (button.text() == "Play") {
      button.text("Pause");
      //   interval = setInterval(sPlot.step, 2000);
      sPlot.interval = setInterval(() => {
        sPlot.step(sPlot);
      }, 2000);
    } else {
      button.text("Play");
      clearInterval(sPlot.interval);
    }
  });

  function resetButtonChange() {
    sPlot.resetButtonChange();
  }

  $("#date-slider").slider({
    max: 48,
    min: 1,
    step: 1,
    slide: function (event, ui) {
      console.log("In the slider");
      let index = ui.value;
      sPlot.updateVis(sPlot.masterData, index);
    },
  });
}

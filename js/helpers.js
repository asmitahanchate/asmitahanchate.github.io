/* * * * * * * * * * * * * *
 *      NameConverter       *
 * * * * * * * * * * * * * */

class NameConverter {
  constructor() {
    this.original_states = [
      ["Alabama", "AL"],
      ["Alaska", "AK"],
      ["American Samoa", "AS"],
      ["Arizona", "AZ"],
      ["Arkansas", "AR"],
      ["Armed Forces Americas", "AA"],
      ["Armed Forces Europe", "AE"],
      ["Armed Forces Pacific", "AP"],
      ["California", "CA"],
      ["Colorado", "CO"],
      ["Connecticut", "CT"],
      ["Delaware", ""],
      ["District of Columbia", "DC"],
      ["Florida", "FL"],
      ["Georgia", "GA"],
      ["Guam", "GU"],
      ["Hawaii", "HI"],
      ["Idaho", "ID"],
      ["Illinois", "IL"],
      ["Indiana", "IN"],
      ["Iowa", "IA"],
      ["Kansas", "KS"],
      ["Kentucky", "KY"],
      ["Louisiana", "LA"],
      ["Maine", "ME"],
      ["Marshall Islands", "MH"],
      ["Maryland", "MD"],
      ["Massachusetts", "MA"],
      ["Michigan", "MI"],
      ["Minnesota", "MN"],
      ["Mississippi", "MS"],
      ["Missouri", "MO"],
      ["Montana", "MT"],
      ["Nebraska", "NE"],
      ["Nevada", "NV"],
      ["New Hampshire", ""],
      ["New Jersey", "NJ"],
      ["New Mexico", "NM"],
      ["New York", "NY"],
      ["North Carolina", "NC"],
      ["North Dakota", "ND"],
      ["Northern Mariana Islands", "NP"],
      ["Ohio", "OH"],
      ["Oklahoma", "OK"],
      ["Oregon", "OR"],
      ["Pennsylvania", "PA"],
      ["Puerto Rico", "PR"],
      ["Rhode Island", "RI"],
      ["South Carolina", "SC"],
      ["South Dakota", "SD"],
      ["Tennessee", "TN"],
      ["Texas", "TX"],
      ["US Virgin Islands", "VI"],
      ["Utah", "UT"],
      ["Vermont", "VT"],
      ["Virginia", "VA"],
      ["Washington", "WA"],
      ["West Virginia", "WV"],
      ["Wisconsin", "WI"],
      ["Wyoming", "WY"],
    ];
    this.states = [
      ["Alabama", "AL"],
      ["Alaska", "AK"],
      ["American Samoa", "AS"],
      ["Arizona", "AZ"],
      ["Arkansas", "AR"],
      ["Armed Forces Americas", "AA"],
      ["Armed Forces Europe", "AE"],
      ["Armed Forces Pacific", "AP"],
      ["California", "CA"],
      ["Colorado", "CO"],
      ["Connecticut", "CT"],
      ["Delaware", ""],
      ["District of Columbia", "DC"],
      ["Florida", "FL"],
      ["Georgia", "GA"],
      ["Guam", "GU"],
      ["Hawaii", "HI"],
      ["Idaho", "ID"],
      ["Illinois", "IL"],
      ["Indiana", "IN"],
      ["Iowa", "IA"],
      ["Kansas", "KS"],
      ["Kentucky", "KY"],
      ["Louisiana", "LA"],
      ["Maine", "ME"],
      ["Marshall Islands", "MH"],
      ["Maryland", ""],
      ["Massachusetts", "MA"],
      ["Michigan", "MI"],
      ["Minnesota", "MN"],
      ["Mississippi", "MS"],
      ["Missouri", "MO"],
      ["Montana", "MT"],
      ["Nebraska", "NE"],
      ["Nevada", "NV"],
      ["New Hampshire", ""],
      ["New Jersey", "NJ"],
      ["New Mexico", "NM"],
      ["New York", "NY"],
      ["North Carolina", "NC"],
      ["North Dakota", "ND"],
      ["Northern Mariana Islands", "NP"],
      ["Ohio", "OH"],
      ["Oklahoma", "OK"],
      ["Oregon", "OR"],
      ["Pennsylvania", "PA"],
      ["Puerto Rico", "PR"],
      ["Rhode Island", ""],
      ["South Carolina", "SC"],
      ["South Dakota", "SD"],
      ["Tennessee", "TN"],
      ["Texas", "TX"],
      ["US Virgin Islands", "VI"],
      ["Utah", "UT"],
      ["Vermont", "VT"],
      ["Virginia", "VA"],
      ["Washington", "WA"],
      ["West Virginia", "WV"],
      ["Wisconsin", "WI"],
      ["Wyoming", "WY"],
    ];
  }

  getAbbreviation(input) {
    let that = this;
    let output = "";
    that.states.forEach((state) => {
      if (state[0] === input) {
        output = state[1];
      }
    });
    return output;
  }

  getFullName(input) {
    let that = this;
    let output = "";
    that.states.forEach((state) => {
      if (state[1] === input) {
        output = state[0];
      }
    });
    return output;
  }
}

let nameConverter = new NameConverter();

/* * * * * * * * * * * * * *
 *         Carousel         *
 * * * * * * * * * * * * * */

// Create bootsrap carousel, disabling rotating
let carousel = new bootstrap.Carousel(
  document.getElementById("stateCarousel"),
  { interval: false }
);

// on button click switch view
function switchView() {
  carousel.next();
  carouselIndex++;
  if (carouselIndex == 1 && !myMapVis) {
    myMapVis = new MapVis("mapDiv", globalDataArray[0], globalDataArray[1]);
  }
  if (carouselIndex == 1 && !myBarVisOne) {
    myBarVisOne = new BarVis(
      "scatterDiv",
      globalDataArray[1],
      globalDataArray[2],
      true
    );
  }

  if (carouselIndex == 1 && !myBrushVis) {
    myBrushVis = new BrushVis("brushDiv", globalDataArray[1]);
    myBrushVis.initVis();
  }

  if (carouselIndex == 3 && !myPieChart) {
    myPieChart = new PieChart("pieDivRight", globalDataArray[5]);
  }

  if (carouselIndex == 5 && !mylineViz) {
    mylineViz = new lineViz("line-chart", globalDataArray[3]);
  }
  if (carouselIndex == 7 && !sPlot) {
    sPlot = new ScatterPlot("chart-area", globalDataArray[5]);

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

    console.log($("#play-button"));
    console.log($("#date-slider"));
    function resetButtonChange() {
      sPlot.resetButtonChange();
    }
  }

  if (carouselIndex == 7 && !bplot) {
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
        crashes: 275,
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
        crashes: 253,
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
        crashes: 356,
      },
      {
        time: "9AM",
        crashes: 363,
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
        crashes: 422,
      },
      {
        time: "7PM",
        crashes: 367,
      },
      {
        time: "8PM",
        crashes: 264,
      },
      {
        time: "9PM",
        crashes: 245,
      },
      {
        time: "10PM",
        crashes: 267,
      },
      {
        time: "11PM",
        crashes: 205,
      },
    ];
    console.log(barData);

    bplot = new InnovativeBar("InBar", barData);
  }

  if (carouselIndex == 9 && !bubbleChart) {
    bubbleChart = new BubbleChart("bubbleDiv");
  }
  if (carouselIndex == 9 && !bubbleBar) {
    bubbleBar = new BarChart("bubbleBarDiv", globalDataArray[4]);
  }
  // if (carouselIndex == 1 && !myBrushVis) {
  //   myBrushVis = new BrushVis("brushDiv", globalDataArray[1]);
  // }

  //document.getElementById("switchView").innerHTML === "map view"
  // ? (document.getElementById("switchView").innerHTML = "table view")
  // : (document.getElementById("switchView").innerHTML = "map view");
}

function switchPrev() {
  if (carouselIndex > 0) {
    carousel.prev();
    carouselIndex--;
  }

  //document.getElementById("switchView").innerHTML === "map view"
  // ? (document.getElementById("switchView").innerHTML = "table view")
  // : (document.getElementById("switchView").innerHTML = "map view");
}

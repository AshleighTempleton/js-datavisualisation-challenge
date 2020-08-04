// // THIS IS A TEMP JS UNTIL THE PROPER JS FILE IN WHICH TO ADD THE CODE CAN BE DETERMINED

// let content = document.getElementById("mw-content-text");

// //TABLE 1

// let table1 = document.getElementById("table1");

// //Get JSON values for countries
// let json = [];
// var headers = [];
// for (let i = 0; i < table1.rows[0].cells.length; i++) {
//   headers[i] = table1.rows[0].cells[i].innerHTML
//     .toLowerCase()
//     .replace(/ /gi, "");
// }

// for (let i = 1; i < table1.rows.length; i++) {
//   var table1Row = table1.rows[i];
//   var table1RowData = {};
//   for (var j = 0; j < table1Row.cells.length; j++) {
//     table1RowData[headers[j]] = table1Row.cells[j].innerHTML;
//   }
//   json.push(table1RowData);
// }
// //console.log(json);

// //Get country names
// let countries = json.map(function (e) {
//   return e.country;
// });
// //console.log(countries);

// // create an array to get the yeard
// let yearsTag = document.getElementsByTagName("th");
// let years = [];
// for (let i = 5; i < 16; i++) {
//   years.push(yearsTag[i].innerHTML);
// }
// //console.log(years);

// // create arrays to get the data per country

// // let BelgiumTag = document.getElementsByTagName("TD");
// // let Belgium = [];
// // let temp = [];
// // let result;
// // for (let i = 1; i < 12; i++) {
// //   temp.push(BelgiumTag[i].innerText.replace(",", "."));
// // }
// // console.log(temp);

// // for (let j = 0; j < temp.length; j++) {
// //   result = parseInt(temp[j]);
// //   Belgium.push(result);
// // }
// // console.log(Belgium);

// let countryTag = document.getElementsByTagName("TD");
// let temp = [];
// let result;
// let Belgium = [];
// let Bulgaria = [];
// let Czech = [];

// let i = 1;

// function getData() {
//   temp.push(countryTag[i].innerText.replace(",", "."));
//   for (let j = 0; j < temp.length; j++) {
//     result = parseInt(temp[j]);
//   }
//   //console.log(temp);
// }

// function countryData() {
//   while (i < 12) {
//     getData();
//     Belgium.push(result);
//     i++;
//   }
//   i++;
//   while (i > 12 && i < 24) {
//     getData();
//     Bulgaria.push(result);
//     i++;
//   }
//   while (i > 24 && i < 36) {
//     getData();
//     Czech.push(result);
//     i++;
//   }
// }
// countryData();
// console.log(Belgium);
// console.log(Bulgaria);
// console.log(temp[24]);

// let table2 = document.getElementById("table2");

// function buildGraph(countries) {
//   let div1 = document.createElement("div");
//   let graph1 = document.createElement("canvas");
//   graph1.setAttribute("id", "graph1");
//   //   graph1.setAttribute("width", "400px");
//   //   graph1.setAttribute("height", "400px");
//   console.log(graph1);

//   div1.appendChild(graph1);
//   content.insertBefore(div1, table1);

//   var myLineChart = new Chart(graph1, {
//     type: "line",
//     data: {
//       labels: years,
//       datasets: [
//         {
//           data: Belgium,
//           label: countries[1],
//           borderColor: "#3e95cd",
//           fill: false,
//         },
//         {
//           data: Bulgaria,
//           label: countries[2],
//           borderColor: "#8e5ea2",
//           fill: false,
//         },
//         {
//           data: Czech,
//           label: countries[3],
//           borderColor: "#3cba9f",
//           fill: false,
//         },
//         // {
//         //   data: [40, 20, 10, 16, 24, 38, 74, 167, 508, 784],
//         //   label: countries[4],
//         //   borderColor: "#e8c3b9",
//         //   fill: false,
//         // },
//         // {
//         //   data: [6, 3, 2, 2, 7, 26, 82, 172, 312, 433],
//         //   label: countries[5],
//         //   borderColor: "#c45850",
//         //   fill: false,
//         // },
//       ],
//     },
//     options: {
//       title: {
//         display: true,
//         text: "European Crime statistics",
//       },
//     },
//   });
//   //return myLineChart;
//   //graph1.appendChild(myLineChart);
// }

// buildGraph(countries);

let mwContent = document.getElementById("mw-content-text");
let content = document.getElementById("content");
let table1 = document.getElementById("table1");

// Create the first graph and insert it into HTML
let graph1 = document.createElement("canvas");
graph1.setAttribute("id", "graph1");
graph1.setAttribute("width", "600px");
graph1.setAttribute("height", "400px");
mwContent.insertBefore(graph1, table1);

// Get all table data and put it into an array
function arrayFromTable(table1) {
  tableRows = document.getElementById(table1).rows;
  tableArray = [];
  // Loop for rows
  for (i = 0; i < tableRows.length; i++) {
    tempVar = tableRows[i].children;
    tempArr = [];
    // loop for columns iterating for each row
    for (j = 0; j < tempVar.length; j++) {
      tempArr.push(tempVar[j].innerText.replace(",", "."));
    }
    tableArray.push(tempArr);
  }

  return tableArray;
}

arrayFromTable("table1");
console.log(tableArray);

// Get years from tableArray
let graph1rows = tableArray.slice();
let graph1years = graph1rows[1];
let removedItems = graph1years.splice(0, 2);

// Get values from tableArray and remove first two rows of data
let graph1Values = tableArray.slice();
let removedValues = graph1Values.splice(0, 2);

console.log(graph1Values);

let values = [];
let uniqueValue = [];

// Get countries from graph1values
let countries = [];
for (i = 0; i < graph1Values.length; i++) {
  countries.push(graph1Values[i].splice(1, 1));
}

// Iterating through each value and converting from string to integer
let a = 0;
while (a < graph1Values.length) {
  let removedDiv = graph1Values[a].shift(); //removing first div element (1-37)
  for (i = 0; i < 11; i++) {
    graph1Values[a][i] = parseFloat(graph1Values[a][i]);
  }
  a++;
}

//// Get random display colours for graph1
// function random_rgba() {
//   let x = Math.round;
//   let ran = Math.random;
//   let max = 255;
//   return (
//     "rgba(" +
//     x(ran() * max) +
//     "," +
//     x(ran() * max) +
//     "," +
//     x(ran() * max) +
//     "," +
//     ran().toFixed(1) +
//     ")"
//   );
// }

let coloursArr = [
  "#F44336",
  "#CE93D8",
  "#1565C0",
  "#F48FB1",
  "#FFCA28",
  "#2E7D32",
  "#B71C1C",
  "#9E9E9E",
  "#7B1FA2",
  "#4FC3F7",
  "#81C784",
  "#512DA8",
  "#BF360C",
  "#F57F17",
  "#4DB6AC",
  "#7986CB",
  "#607D8B",
  "#FDD835",
  "#3E2723",
  "#4DD0E1",
  "#26C6DA",
  "#827717",
  "#FFB74D",
  "#039BE5",
  "#D4E157",
  "#004D40",
  "#FFCC80",
  "#64B5F6",
  "#424242",
  "#9CCC65",
  "#FF5722",
  "#8D6E63",
  "#00838F",
  "#1A237E",
];
console.log(coloursArr.length);

// function getColour() {
//   let colours = coloursArr[Math.floor(Math.random() * coloursArr.length)];
//   console.log(colours);
//   return colours;
// }

// Set objects per country to display in graph1
let dataset = [];
let obj;
for (i = 1; i < graph1Values.length; i++) {
  obj = {
    label: countries[i],
    data: graph1Values[i],
    backgroundColor: coloursArr[i],
    borderColor: coloursArr[i],
    borderWidth: 2,
    fill: false,
  };
  dataset.push(obj);
}

// Generate graph1 from chart.js
var context = document.getElementById("graph1").getContext("2d");

var myChart = new Chart(context, {
  type: "line",
  data: {
    labels: graph1years,
    datasets: dataset,
  },
  options: {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  },
});

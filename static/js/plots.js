/* Guns CSV */
// const gun = './data/gun_stats.csv'
// const gun = './static/data/gun2.json'

// Importing variable
import { gunData } from './guns2 _output.js'

// Initialized arrays
let states = [];
let guns = [];
let shootings = [];
let ownership = [];
let population = [];

for (let i = 0; i < gunData.length; i++) {
  let row = gunData[i];
  states.push(row.State);
  guns.push(row.RegisterdGuns);
  shootings.push(row.SchoolShootings);
  ownership.push(row.GunOwnership);
  population.push(row.Population);

};

// Retrieve data in json through d3 and transform into markers for layers
// d3.csv(gun).then(function(data) {
//     console.log(data)
//     // console.log(data[0]['State'])

//     for (let i = 0; i < 50; i++) {
//         states.push(data[i]['State']);
//         guns.push(data[i]['Registerd Guns']);
//         shootings.push(data[i]['School Shootings']);
//         ownership.push(data[i]['Gun Ownership']);
//         population.push(data[i]['Population']);
//     }


    // Data
    console.log(states)
    console.log(guns)
    console.log(shootings)
    console.log(ownership)



    // Pie
    let data_pie = [{
        values: guns,
        labels: states,
        domain: {column: 0},
        // name: 'Reg.',
        // hoverinfo: 'label+percent+name',
        hoverinfo: 'label+percent',
        hole: .35,
        type: 'pie'
      },{
        values: population,
        labels: states,
        text: 'Pop.',
        textposition: 'inside',
        domain: {column: 1},
        //name: 'Pop.',
        hoverinfo: 'label+percent',
        hole: .35,
        type: 'pie'
      }];
      
      let layout = {
        //title: 'Registered Guns and Population per U.S. State',
        annotations: [
          {
            font: {
              size: 21
            },
            showarrow: false,
            text: 'Registered Guns',
            x: 0.17,
            y: 0.5
          },
          {
            font: {
              size: 22
            },
            showarrow: false,
            text: 'Population',
            x: 0.81,
            y: 0.5
          }
        ],
        height: 800,
        width: 1400,
        showlegend: false,
        grid: {rows: 1, columns: 2}
      };
      
      Plotly.newPlot('pie', data_pie, layout);





      // Bar 
      var trace1 = {
        x: states,
        y: ownership,
        type: 'bar',
        text: ownership.map(String),
        textposition: 'auto',
        hoverinfo: 'none',
        opacity: 0.5,
        marker: {
          color: '#7f7f7f',
          line: {
            color: 'rgb(8,48,107)',
            width: 1.5
          }
        }
      };
      
      var trace2 = {
        x: states,
        y: shootings,
        type: 'bar',
        text: shootings.map(String),
        textposition: 'auto',
        hoverinfo: 'none',
        marker: {
          color: 'rgba(58,200,225,.5)',
          line: {
            color: 'rgb(8,48,107)',
            width: 1.5
          }
        }
      };
      
      var data2 = [trace1,trace2];
      
      var layout2 = {
        //title: 'To date Gun Ownership and School Shootings'
      };
      
      Plotly.newPlot('bar', data2, layout2);


      



      // Bubble

// let radius_list = []      

// for (let i = 0; guns.length; i++) {
    
//   // Radius Conditional
//     // let radius = 0;
//       if (guns[i] > 500000) {
//         // radius = 100;
//         radius_list.push(100);
//       }
//       else if (guns[i] > 400000) {
//         // radius = 85;
//         radius_list.push(85);
//       }
//       else if (guns[i] > 300000) {
//         // radius = 60;
//         radius_list.push(60);
//       }
//       else if (guns[i] > 200000) {
//           // radius = 45;
//           radius_list.push(45);
//       }
//       else if (guns[i] > 100000) {
//           // radius = 30;
//           radius_list.push(30);
//       }
//       else {
//           // radius = 20;
//           radius_list.push(20);
//       }
//     };
//     console.log('radius:',radius_list)

//       var trace3 = {
//         x: states,
//         y: guns,
//         mode: 'markers',
//         marker: {
//           color: ['rgb(93, 164, 214)', 'rgb(255, 144, 14)',  'rgb(44, 160, 101)', 'rgb(255, 65, 54)'],
//           opacity: [1, 0.8, 0.6, 0.4],
//           size: radius_list
//           //[40, 60, 80, 100]
//         }
//       };
    
      
//       var data3 = [trace3];
      
//       var layout3 = {
//         title: 'Marker Size and Color',
//         showlegend: false,
//         height: 600,
//         width: 1000
      
//       };
//       Plotly.newPlot('bubble', data3, layout3);
    
//     }
// );
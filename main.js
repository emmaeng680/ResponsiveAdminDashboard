   
var ctx = document.getElementById('chart').getContext('2d');
    
// Define your data and options
  var data = {
        labels:['Jan','Feb','Mar','Apr','May','Jun',
        'Jul','Aug','Sep','Oct','Nov','Dec'],

        datasets :[
            {
            label:'BTC',
            data:[29347, 33657,57756,75575, 75885, 85887,
            75777, 48399, 90389, 90239],
            borderColor:'red',
            borderWidth: 2
            },
            {
                label:'ETH',
                data:[34747, 33887,67845,12175, 58585, 25887,
                    74777, 84399, 21211, 90009],
                borderColor:'blue',
                borderWidth:2
            }
        ]
  };
  
  var options= {
        responsive:true
    };
  
  var myChart = new Chart(ctx, {
    type: 'line', 
    data: data,
    options: options
  });


  const menuButton = document.querySelector('#menu-btn');
  const closeButton = document.querySelector('#close-btn');
  const sidebar = document.querySelector('aside');

menuButton.addEventListener('click', () => {
  sidebar.style.display = 'block';
})

closeButton.addEventListener('click', () => {
  sidebar.style.display = 'none';
})

const themeBtn = document.querySelector('.theme-btn');
themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    themeBtn.querySelector('span:first-child').classList.toggle('active');
    themeBtn.querySelector('span:last-child').classList.toggle('active');
})















  // document.addEventListener('DOMContentLoaded', function () {
//     var ctx = document.getElementById('chart').getContext('2d');
    
//     // Define your data and options
//       var data = {
//             labels:['Jan','Feb','Mar','Apr','May','Jun',
//             'Jul','Aug','Sep','Oct','Nov','Dec'],
    
//             datasets :[
//                 {
//                 label:'BTC',
//                 data:[29347, 33657,57756,75575, 75885, 85887,
//                 75777, 48399, 90389, 90239],
//                 borderColor:'red',
//                 borderWidth: 2
//                 },
//                 {
//                     label:'ETH',
//                     data:[34747, 33887,67845,12175, 58585, 25887,
//                         74777, 84399, 21211, 90009],
//                     borderColor:'blue',
//                     borderWidth:2
//                 }
//             ]
//       };
      
//       var options= {
//             responsive:true
//         };
      
//       var myChart = new Chart(ctx, {
//         type: 'line', 
//         data: data,
//         options: options
//       });
//     });
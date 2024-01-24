 import * as echarts from 'echarts';
import React from 'react'
import ReactEcharts from "echarts-for-react";
import imaAge from '../../Images/background.jpg'
  
  export default function Chart() {
    const barchart = {
  
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', ]
        },
        yAxis: {
          type: 'value',
           min:0,
           max:8,
           axisLabel: {
            interval: 5
          }
        },
        series: [
          {
              itemStyle: {
              borderColor: 'transparent',
              borderRadius:[5,5,0,0],
            },
            label: {
              show: true,
              position: 'tooltip',
              padding:25,
              fontSize:45,
              color:'#fff',
             
            },
            data: [
            {
                value: 5,
                itemStyle: {
                  color: '#9e8d71',
                },
                label:{
                  show:true,
                  fontSize:25,
                  color:'#fff',
                  formatter:'{c}\n\nGeo Near',
                 
                },
            
              },
               {
                value: 8,
                itemStyle: {
                  color: '#968fc3'
                },
                label:{
                  show:true,
                  fontSize:25,
                  color:'#fff',
                  formatter:'{c}\n\nGeo Far',
                 
                },
              }],
            type: 'bar',
           
            barWidth: 200 
          },
          ],
           graphic: [
          {
            type: 'image',
            id: 'logo',
            style: {
              image:`${imaAge}`,
              width: 50,
              height: 50
            },
            left: 400,
            top: 100,
            z: 10
          }
        ]
          
      };
    return (
      <div className='w-[800px] h-[1000px] border'>chart
        <ReactEcharts option={barchart} />
      </div>
      
    )
  }
  // image:`${imaAge}`,


//   import React from 'react';

// import ReactEcharts from 'echarts-for-react';
// import * as echarts from 'echarts';

// export default function App() {
//   const option = {
//     grid: {
//       left: '3%',
//       right: '4%',
//       bottom: '3%',
//       containLabel: true,
//     },
//     xAxis: [
//       {
//         type: 'category',
//         show: false,
//       },
//     ],
//     yAxis: [
//       {
//         type: 'value',
//         show: false,
//         splitLine: {
//           show: false,
//         },
//       },
//     ],
//     graphic: [
//       {
//         type: 'image',
//         left: 165,
//         top: 600,
//         z: 10,
//         bounding: 'raw',
//         style: {
//           image:`${imaAge}`,
//           width: 80,
//           height: 80,
//         },
//       },
//       {
//         type: 'image',
//         left: 237,
//         top: 360,
//         z: 10,
//         bounding: 'raw',
//         style: {
//           image: '/assets/images/iamge (1).png',
//           width: 30,
//           height: 30,
//         },
//       },
//       {
//         type: 'image',
//         left: 375,
//         top: 360,
//         z: 10,
//         bounding: 'raw',
//         style: {
//           image: '/assets/images/iamge (2).png',
//           width: 30,
//           height: 30,
//         },
//       },
//       {
//         type: 'image',
//         left: 516,
//         top: 360,
//         z: 10,
//         bounding: 'raw',
//         style: {
//           image: '/assets/images/iamge (3).png',
//           width: 30,
//           height: 30,
//         },
//       },
//       {
//         type: 'image',
//         left: 653,
//         top: 378,
//         z: 10,
//         bounding: 'raw',
//         style: {
//           image: '/assets/images/iamge (4).png',
//           width: 30,
//           height: 30,
//         },
//       },
//     ],
//     series: [
//       {
//         name: 'xyz',
//         type: 'bar',
//         barWidth: '50%',

//         emphasis: {
//           focus: 'series',
//         },
//         data: [30, 30, 30, 30, 30],
//         itemStyle: {
//           barBorderRadius: [48, 48, 48, 48], 
//         },
//         color: ['#F5F6F7'],
//       },

//       {
//         name: 'abc',
//         type: 'bar',
//         barWidth: '50%',
//         barGap: '-100%',
//         emphasis: {
//           focus: 'series',
//         },
//         data: [25, 20, 10, 9, 5],
//         itemStyle: {
//           barBorderRadius: [50, 50, 50, 50],
//         },
//         color: ['#33CC80'],
//         label: {
//           show: true,
//           position: 'top',
//         },
//       },
//     ],
//   };

//   return (
//     <div>
//       <ReactEcharts option={option} style={{ height: '100vh' }} />
//     </div>
//   );
// }
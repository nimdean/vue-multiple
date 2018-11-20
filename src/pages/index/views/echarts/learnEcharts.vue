<template>
    <div>
        <h4>Echarts在VUE中的使用</h4>
        <p>Echarts没有vue版，但可以通过npm安装。</p>
        <p>通过npm install echarts -s安装echarts，如果想在全局中使用echarts的话，可以在main.js中，可做如下操作：</p>
        <pre>
          import Vue from 'vue';
          import echarts from 'echarts';
          Vue.prototype.$echarts = echarts;
        </pre>
        <p>之后便可以在任意处通过this.$echarts调用echarts方法。</p>
        <p>如果只想局部使用的话，可以在对应组件中import echarts from 'echarts',直接使用echarts变量调用。</p>
        <p>一般性的使用方法在官网都能找到例子和API，但其中有些复杂应用却有些语焉不详。比如说下面的时间x轴的线图。</p>
        <img :src='lineTime'/>
        <div id='container1'></div>
        <p>若是想用echarts的3D功能，需要安装echarts-gl，执行npm install echarts-gl，然后在需要的地方引入import echartsGl from 'echarts-gl'即可。</p>
        <div id='container2'></div>
    </div>
</template>

<script>
import echarts from "echarts";
import echartsGl from 'echarts-gl';
import lineTime from './../../../../assets/img/lineTime.png';
export default {
  data() {
    return {
      lineTime:lineTime,
      renderEcharts:class {
        constructor(){
          
        }
      }
    };
  },
  mounted() {
    var dom = document.getElementById("container1");
    var myChart = echarts.init(dom);
    var option = null;

    function randomData() {
      now = new Date(+now + oneDay);
      value = value + Math.random() * 21 - 10;
      return {
        obj1: {
          name: now.toString(),
          value: [
            [now.getFullYear(), now.getMonth() + 1, now.getDate()].join("/"),
            Math.round(value)
          ]
        },
        obj2: {
          name: now.toString(),
          value: [
            [now.getFullYear(), now.getMonth() + 1, now.getDate()].join("/"),
            Math.round(value) + Math.floor(Math.random()*50) + 500
          ]
        }
      };
    }

    var data1 = [];
    var data2 = [];
    var now = +new Date(1997, 9, 3);
    var oneDay = 24 * 3600 * 1000;
    var value = Math.random() * 1000;
    for (var i = 0; i < 1000; i++) {
      data1.push(randomData().obj1);
      data2.push(randomData().obj2);
    }
    option = {
      title: {
        text: "动态数据 + 时间坐标轴"
      },
      legend: {
        data: ["模拟数据1", "模拟数据2"]
      },
      tooltip: {
        trigger: "axis",
        formatter: function(params) {
          params = params[0];
          var date = new Date(params.name);
          return (
            params.seriesName +
            ":" +
            date.getDate() +
            "/" +
            (date.getMonth() + 1) +
            "/" +
            date.getFullYear() +
            " : " +
            params.value[1]
          );
        },
        axisPointer: {
          animation: false
        }
      },
      xAxis: {
        type: "time",
        splitLine: {
          show: false
        }
      },
      yAxis: {
        type: "value",
        boundaryGap: [0, "100%"],
        splitLine: {
          show: false
        }
      },
      series: [
        {
          name: "模拟数据1",
          type: "line",
          showSymbol: false,
          hoverAnimation: false,
          data: data1
        },
        {
          name: "模拟数据2",
          type: "line",
          showSymbol: false,
          hoverAnimation: false,
          data: data2
        }
      ]
    };

    setInterval(function() {
      for (var i = 0; i < 5; i++) {
        data1.shift();
        data1.push(randomData().obj1);
        data2.shift();
        data2.push(randomData().obj2);
      }
      myChart.setOption({
        series: [
          {
            data: data1
          },
          {
            data: data2
          }
        ]
      });
    }, 1000);
    if (option && typeof option === "object") {
      myChart.setOption(option, true);
    }


    var dom = document.getElementById("container2");
var myChart3D = echarts.init(dom);
option = null;

var hours = ['12a', '1a', '2a', '3a', '4a', '5a', '6a',
        '7a', '8a', '9a','10a','11a',
        '12p', '1p', '2p', '3p', '4p', '5p',
        '6p', '7p', '8p', '9p', '10p', '11p'];
var days = ['Saturday', 'Friday', 'Thursday',
        'Wednesday', 'Tuesday', 'Monday', 'Sunday'];

var data = [[0,0,5],[0,1,1],[0,2,0],[0,3,0],[0,4,0],[0,5,0],[0,6,0],[0,7,0],[0,8,0],[0,9,0],[0,10,0],[0,11,2],[0,12,4],[0,13,1],[0,14,1],[0,15,3],[0,16,4],[0,17,6],[0,18,4],[0,19,4],[0,20,3],[0,21,3],[0,22,2],[0,23,5],[1,0,7],[1,1,0],[1,2,0],[1,3,0],[1,4,0],[1,5,0],[1,6,0],[1,7,0],[1,8,0],[1,9,0],[1,10,5],[1,11,2],[1,12,2],[1,13,6],[1,14,9],[1,15,11],[1,16,6],[1,17,7],[1,18,8],[1,19,12],[1,20,5],[1,21,5],[1,22,7],[1,23,2],[2,0,1],[2,1,1],[2,2,0],[2,3,0],[2,4,0],[2,5,0],[2,6,0],[2,7,0],[2,8,0],[2,9,0],[2,10,3],[2,11,2],[2,12,1],[2,13,9],[2,14,8],[2,15,10],[2,16,6],[2,17,5],[2,18,5],[2,19,5],[2,20,7],[2,21,4],[2,22,2],[2,23,4],[3,0,7],[3,1,3],[3,2,0],[3,3,0],[3,4,0],[3,5,0],[3,6,0],[3,7,0],[3,8,1],[3,9,0],[3,10,5],[3,11,4],[3,12,7],[3,13,14],[3,14,13],[3,15,12],[3,16,9],[3,17,5],[3,18,5],[3,19,10],[3,20,6],[3,21,4],[3,22,4],[3,23,1],[4,0,1],[4,1,3],[4,2,0],[4,3,0],[4,4,0],[4,5,1],[4,6,0],[4,7,0],[4,8,0],[4,9,2],[4,10,4],[4,11,4],[4,12,2],[4,13,4],[4,14,4],[4,15,14],[4,16,12],[4,17,1],[4,18,8],[4,19,5],[4,20,3],[4,21,7],[4,22,3],[4,23,0],[5,0,2],[5,1,1],[5,2,0],[5,3,3],[5,4,0],[5,5,0],[5,6,0],[5,7,0],[5,8,2],[5,9,0],[5,10,4],[5,11,1],[5,12,5],[5,13,10],[5,14,5],[5,15,7],[5,16,11],[5,17,6],[5,18,0],[5,19,5],[5,20,3],[5,21,4],[5,22,2],[5,23,0],[6,0,1],[6,1,0],[6,2,0],[6,3,0],[6,4,0],[6,5,0],[6,6,0],[6,7,0],[6,8,0],[6,9,0],[6,10,1],[6,11,0],[6,12,2],[6,13,1],[6,14,3],[6,15,4],[6,16,0],[6,17,0],[6,18,0],[6,19,0],[6,20,1],[6,21,2],[6,22,2],[6,23,6]];
var option3D = {
    tooltip: {},
    visualMap: {
        max: 20,
        inRange: {
            color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
        }
    },
    xAxis3D: {
        type: 'category',
        data: hours
    },
    yAxis3D: {
        type: 'category',
        data: days
    },
    zAxis3D: {
        type: 'value'
    },
    grid3D: {
        boxWidth: 200,
        boxDepth: 80,
        viewControl: {
            // projection: 'orthographic'
        },
        light: {
            main: {
                intensity: 1.2,
                shadow: true
            },
            ambient: {
                intensity: 0.3
            }
        }
    },
    series: [{
        type: 'bar3D',
        data: data.map(function (item) {
            return {
                value: [item[1], item[0], item[2]],
            }
        }),
        shading: 'lambert',

        label: {
            textStyle: {
                fontSize: 16,
                borderWidth: 1
            }
        },

        emphasis: {
            label: {
                textStyle: {
                    fontSize: 20,
                    color: '#900'
                }
            },
            itemStyle: {
                color: '#900'
            }
        }
    }]
};
if (option3D && typeof option3D === "object") {
    myChart3D.setOption(option3D, true);
}
  }
};
</script>

<style scoped>
#container1 {
  width: 100%;
  height: 600px;
}
pre{
  background:#000;
  color:#fff;
  border-radius:5px;
  padding:10px 0;
}
#container2{
  width:100%;
  height:500PX;
}
</style>



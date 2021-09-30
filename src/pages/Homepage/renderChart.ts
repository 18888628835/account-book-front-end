import * as echarts from 'echarts/core';
import {
  BarChart,
  // 系列类型的定义后缀都为 SeriesOption
  BarSeriesOption,
} from 'echarts/charts';
import {
  // 组件类型的定义后缀都为 ComponentOption
  GridComponent,
  GridComponentOption,
  // 数据集组件
  DatasetComponent,
  DatasetComponentOption,
} from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';

// 通过 ComposeOption 来组合出一个只有必须组件和图表的 Option 类型
type ECOption = echarts.ComposeOption<
  BarSeriesOption | GridComponentOption | DatasetComponentOption
>;

// 注册必须的组件
echarts.use([GridComponent, DatasetComponent, BarChart, CanvasRenderer]);

const renderChart = id => {
  const chartDom = document.getElementById(id);
  if (!chartDom) {
    return null;
  }
  var category = ['4', '5', '6', '7', '8', '9'];
  var barData: number[] = [];
  const colors: string[] = [];
  for (var i = 0; i < 6; i++) {
    var b = Math.random() * 200;
    barData.push(b);
    if (i === 5) {
      colors.push('#FF754E');
      continue;
    }
    colors.push('#7D7F88');
  }
  const option: ECOption = {
    backgroundColor: 'white',
    grid: {
      left: '0%',
      bottom: '20%',
      right: 0,
      top: 10,
    },
    xAxis: {
      type: 'category',
      data: category,
      show: true,
      axisLine: {
        show: false,
      },
      axisLabel: {
        show: true,
        color: 'black',
      },
      axisTick: {
        show: false,
      },
    },
    yAxis: {
      type: 'value',
      splitLine: { show: true, lineStyle: { type: 'dashed' } },
      splitNumber: 2,
      axisLine: {
        show: false,
      },
      axisLabel: {
        show: false,
      },
    },
    series: [
      {
        name: 'bar',
        type: 'bar',
        barWidth: 10,
        itemStyle: {
          borderRadius: 8,
          color: params => {
            return colors[params.dataIndex];
          },
        },
        data: barData,
      },
    ],
  };
  var myChart = echarts.init(chartDom);
  myChart.setOption(option);
  return myChart;
};
export default renderChart;

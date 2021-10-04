import React, { useEffect, useContext } from 'react';
import { Context } from '@/App';
import * as echarts from 'echarts/core';
import {
  PieChart,
  // 系列类型的定义后缀都为 SeriesOption
  PieSeriesOption,
} from 'echarts/charts';
import {
  TitleComponent,
  LegendComponent,
  LegendComponentOption,
  // 组件类型的定义后缀都为 ComponentOption
  TitleComponentOption,
  GridComponent,
  GridComponentOption,
  // 数据集组件
  DatasetComponent,
  DatasetComponentOption,
  // 内置数据转换器组件 (filter, sort)
  TransformComponent,
  TooltipComponent,
} from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';

// 通过 ComposeOption 来组合出一个只有必须组件和图表的 Option 类型
type ECOption = echarts.ComposeOption<
  | PieSeriesOption
  | TitleComponentOption
  | GridComponentOption
  | DatasetComponentOption
  | LegendComponentOption
>;

// 注册必须的组件
echarts.use([
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  PieChart,
  CanvasRenderer,
]);

const TopChart = () => {
  const { store } = useContext(Context);
  const createCharts = (id, data) => {
    const chartDom = document.getElementById(id);
    const myChart = echarts.init(chartDom!);
    const color = [
      {
        type: 'linear',
        x: 1,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [
          {
            offset: 0.02,
            color: 'rgba(255,174,163,0.56)', // 0% 处的颜色
          },
          {
            offset: 1,
            color: '#FF6652', // 100% 处的颜色
          },
        ],
        globalCoord: false, // 缺省为 false
      },
      {
        type: 'linear',
        x: 1,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [
          {
            offset: 0,
            color: 'rgba(81,255,248,0.58)', // 0% 处的颜色
          },
          {
            offset: 1,
            color: 'rgba(8,176,208,0.79)', // 100% 处的颜色
          },
        ],
        globalCoord: false, // 缺省为 false
      },
      {
        type: 'linear',
        x: 1,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [
          {
            offset: 0,
            color: '#FF7BC0', // 0% 处的颜色
          },
          {
            offset: 1,
            color: 'rgba(255,172,215,0.46)', // 100% 处的颜色
          },
        ],
        globalCoord: false, // 缺省为 false
      },
      {
        type: 'linear',
        x: 1,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [
          {
            offset: 0,
            color: 'rgba(7,65,236,0.68)', // 0% 处的颜色
          },
          {
            offset: 1,
            color: 'rgba(115,165,255,0.58) ', // 100% 处的颜色
          },
        ],
        globalCoord: false, // 缺省为 false
      },
      {
        type: 'linear',
        x: 1,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [
          {
            offset: 0,
            color: '#FCBD64', // 0% 处的颜色
          },
          {
            offset: 1,
            color: 'rgba(255,189,104,0.49)', // 100% 处的颜色
          },
        ],
        globalCoord: false, // 缺省为 false
      },
      {
        type: 'linear',
        x: 1,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [
          {
            offset: 0,
            color: 'rgba(184,149,255,0.41)', // 0% 处的颜色
          },
          {
            offset: 1,
            color: '#AD85FE', // 100% 处的颜色
          },
        ],
        globalCoord: false, // 缺省为 false
      },
    ];

    const option: ECOption = {
      color: color,
      tooltip: {
        trigger: 'item',
      },
      legend: {
        bottom: '10%',
        type: 'plain',
        orient: 'horizontal',
        itemWidth: 30,
        itemHeight: 15,
        itemGap: 20,
        textStyle: {
          color: '#A3E2F4',
          overflow: 'truncate',
          fontSize: 12,
          fontWeight: 0,
          width: 50,
        },
        data: data.map(item => item.name),
      },
      series: [
        {
          type: 'pie',
          radius: ['20%', '80%'],
          roseType: 'area',
          center: ['45%', '40%'],
          label: {
            show: true,
            position: 'inside',
            color: 'white',
            formatter: '{c}%',
          },
          emphasis: {
            label: {
              show: true,
            },
          },
          itemStyle: {
            shadowColor: 'rgba(0, 0, 0, 0.2)',
            shadowBlur: 10,
          },
          data: data,
        },
      ],
    };
    myChart && myChart.setOption(option);
    return myChart;
  };
  useEffect(() => {
    if (store.statistics) {
      const myChart = createCharts('top_chart', store.statistics);
      const resize = () => myChart.resize();
      window.addEventListener('resize', resize);
      return () => {
        window.removeEventListener('resize', resize);
      };
    }
  }, [store.statistics]);

  return <div id='top_chart' style={{ width: '100%', height: 'inherit' }} />;
};

export default TopChart;

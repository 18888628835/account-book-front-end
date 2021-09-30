import React, { useRef, useEffect } from 'react';
import * as echarts from 'echarts';

const TopChart = () => {
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

    const option = {
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
    myChart.setOption(option);
    return myChart;
  };
  useEffect(() => {
    const data = [
      { value: 21, name: '汽油' },
      { value: 19, name: '焦炭' },
      { value: 16, name: '煤油' },
      { value: 7, name: '原煤' },
      { value: 3, name: '天然气1' },
      { value: 18, name: '天然气2' },
    ];
    const myChart = createCharts('top_chart', data);
    const resize = () => myChart.resize();
    window.addEventListener('resize', resize);
    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <div id='top_chart' style={{ width: '100%', height: 'inherit' }} />;
};

export default TopChart;

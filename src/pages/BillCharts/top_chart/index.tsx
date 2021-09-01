import React, { useRef, useState, useEffect } from 'react';
import * as echarts from 'echarts';

const TopChart = () => {
  const ref = useRef<any>(null);

  function createChart(data1, data2, data3, chartDom) {
    const option = {
      color: ['#FF515A', '#0090FF'],
      title: {},
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#6a7985',
          },
        },
      },
      legend: {
        data: ['支出', '收入'],
      },
      grid: {
        left: '-5%',
        right: '5%',
        bottom: '10%',
        top: '0%',
        containLabel: true,
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: data1,
      },
      yAxis: {
        type: 'value',
        show: false,
      },
      series: [
        {
          name: '支出',
          type: 'line',
          stack: '总量',
          areaStyle: {},
          emphasis: {
            focus: 'series',
          },
          data: data2,
        },
        {
          name: '收入',
          type: 'line',
          stack: '总量',
          areaStyle: {},
          emphasis: {
            focus: 'series',
          },
          data: data3,
        },
      ],
    };
    const myChart = echarts.init(chartDom);
    myChart.setOption(option);
    return myChart;
  }
  useEffect(() => {
    const data1 = [
      '1月',
      '2月',
      '3月',
      '4月',
      '5月',
      '6月',
      '7月',
      '8月',
      '9月',
      '10月',
      '11月',
      '12月',
    ];
    const data2 = [
      120, 132, 101, 134, 90, 230, 210, 132, 101, 134, 90, 230, 210,
    ];
    const data3 = [220, 182, 191, 234, 290, 330, 310, 132, 101, 134, 90, 830];
    const chart = createChart(data1, data2, data3, ref.current);
    window.addEventListener('resize', () => {
      chart?.resize();
    });
  }, []);
  return <div ref={ref} style={{ height: '200px', width: '100%' }} />;
};

export default TopChart;

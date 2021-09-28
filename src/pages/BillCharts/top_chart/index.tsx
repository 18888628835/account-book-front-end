import React, { useRef, useEffect } from 'react';
import * as echarts from 'echarts';

const TopChart = () => {
  const createCharts = (id, data) => {
    const chartDom = document.getElementById(id);
    const myChart = echarts.init(chartDom!);
    const color = ['#08daaa', '#ffd813', '#fea537', '#1e30ff', '#43e834'];
    const colors: any = [];
    for (let i = 0; i <= data.length - 1; i++) {
      if (i < color.length) {
        colors.push(color[i]);
      } else {
        const a = color.length - 1 - (i % color.length);
        colors.push(color[a]);
      }
    }
    const option = {
      color: colors,
      tooltip: {
        trigger: 'item',
      },
      series: [
        {
          type: 'pie',
          roseType: 'radius',
          radius: '100%',
          center: ['50%', '50%'],
          label: {
            show: false,
          },
          emphasis: {
            label: {
              show: true,
            },
          },
          itemStyle: {
            normal: {
              shadowColor: 'rgba(0, 0, 0, 0.2)',
              shadowBlur: 10,
            },
          },
          data: data,
        },
      ],
    };
    myChart.setOption(option);
  };
  useEffect(() => {
    const data = [
      { value: 88, name: '汽油' },
      { value: 38, name: '焦炭' },
      { value: 54, name: '煤油' },
      { value: 35, name: '原煤' },
      { value: 80, name: '天然气1' },
      { value: 30, name: '天然气2' },
      { value: 20, name: '天然气3' },
      { value: 50, name: '天然气4' },
    ];
    createCharts('top_chart', data);
  }, []);

  return <div id='top_chart' style={{ width: '100%', height: 'inherit' }} />;
};

export default TopChart;

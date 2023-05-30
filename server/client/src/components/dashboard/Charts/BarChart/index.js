import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { ResponsiveContainer } from './style';

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 7300,
    amt: 2100,
  },
  {
    name: 'Page H',
    uv: 3490,
    pv: 8300,
    amt: 2100,
  },
  {
    name: 'Page I',
    uv: 3490,
    pv: 1300,
    amt: 2100,
  },
  {
    name: 'Page J',
    uv: 3490,
    pv: 2300,
    amt: 2100,
  },
  {
    name: 'Page K',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'Page L',
    uv: 3490,
    pv: 6300,
    amt: 2100,
  },
  {
    name: 'Page M',
    uv: 3490,
    pv: 9300,
    amt: 2100,
  },
  {
    name: 'Page N',
    uv: 3490,
    pv: 3300,
    amt: 2100,
  },
  {
    name: 'Page O',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'Page P',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'Page Q',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'Page R',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'Page S',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'Page T',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'Page U',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'Page V',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'Page W',
    uv: 3490,
    pv: 8300,
    amt: 2100,
  },
  {
    name: 'Page X',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'Page Y',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'Page Z',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default class MyBarChart extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/bar-chart-has-no-padding-jphoc';

  render() {
    return (
    <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 10,
            right: 20,
            left: 20,
            bottom: 5,
          }}
          barSize={10}
        >
          <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
          <Tooltip />
          <Bar dataKey="pv" fill="#7b67de" background={{ fill: '#fff' }} />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}

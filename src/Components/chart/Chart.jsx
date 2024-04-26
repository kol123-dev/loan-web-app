import "./chart.scss";
import { AreaChart, Area, XAxis,  CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
const data = [
    {
      name: 'Jan',
      unrecoveredLoans: 4000,
      recoveredLoans: 2400,
      amt: 2400,
    },
    {
      name: 'Feb',
      unrecoveredLoans: 3000,
      recoveredLoans: 1398,
      amt: 2210,
    },
    {
      name: 'March',
      unrecoveredLoans: 2000,
      recoveredLoans: 9800,
      amt: 2290,
    },
    {
      name: 'April',
      unrecoveredLoans: 2780,
      recoveredLoans: 3908,
      amt: 2000,
    },
    {
      name: 'May',
      unrecoveredLoans: 1890,
      recoveredLoans: 4800,
      amt: 2181,
    },
    {
      name: 'June',
      unrecoveredLoans: 2390,
      recoveredLoans: 3800,
      amt: 2500,
    },
    {
      name: 'July',
      unrecoveredLoans: 3490,
      recoveredLoans: 4300,
      amt: 2100,
    },
  ];


const Chart = ({aspect, title}) =>{
    return(
    
        <div className="chart">
            <div className="title" title="Last 6 Months Perfomance">{title}</div>
            <ResponsiveContainer width="100%" aspect={aspect} >
                <AreaChart width={730} height={250} data={data}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                    <linearGradient id="unrecoveredLoans" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#FB3005" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#FB3005" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="recoveredLoans" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
                    </linearGradient>
                </defs>
                <XAxis dataKey="name" stroke="gray"/>
                
                <CartesianGrid strokeDasharray="3 3"  className="chartGrid" />
                <Tooltip />
                <Area type="monotone" dataKey="unrecoveredLoans" stroke="#FB3005" fillOpacity={1} fill="url(#unrecoveredLoans)" />
                <Area type="monotone" dataKey="recoveredLoans" stroke="#82ca9d" fillOpacity={1} fill="url(#recoveredLoans)" />
            </AreaChart>
      </ResponsiveContainer >
        </div>
    )
}

export default Chart
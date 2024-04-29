// import * as React from "react";
// import Stack from "@mui/material/Stack";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Checkbox from "@mui/material/Checkbox";
// import { LineChart } from "@mui/x-charts/LineChart";

// export default function ConnectNulls() {
//   const [connectNulls, setConnectNulls] = React.useState(true);

//   return (
//     <Stack sx={{ width: "100%" }}>
//       <FormControlLabel
//         checked={connectNulls}
//         control={
//           <Checkbox
//             onChange={(event) => setConnectNulls(event.target.checked)}
//           />
//         }
//         label='connectNulls'
//         labelPlacement='end'
//       />
//       <LineChart
//         xAxis={[{ data: [1, 2, 3, 5, 8, 10, 12, 15, 16, 18, 20] }]}
//         series={[
//           {
//             data: [2, 5, 6.5, 3, 8, 10, 9.5, 2.5, 6, 10, 8],
//           },
//           {
//             data: [null, null, 5.5, 2, null, null, 8.5, 1.5, 5],
//             connectNulls,
//             area: true,
//           },
//         ]}
//         height={200}
//         margin={{ top: 10, bottom: 20 }}
//         skipAnimation
//       />
//     </Stack>
//   );
// }

import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "1", sales: 1890 },
  { name: "2", sales: 3000 },
  { name: "3", sales: 2000 },
  { name: "4", sales: 2780 },
  { name: "5", sales: 4000 },
  { name: "6", sales: 2390 },
  { name: "7", sales: 3490 },
  { name: "8", sales: 3490 },
  { name: "9", sales: 4500 },
  { name: "10", sales: 5000 },
  { name: "11", sales: 7200 },
  { name: "14", sales: 1000 },
  // Add more data as needed
];

const LineChartComponent = () => {
  const [selectedOption, setSelectedOption] = useState("daily");

  const handleOptionChange = (option) => {
    setSelectedOption(option);
    // Fetch data according to the selected option from your database
  };

  const totalSales = data.reduce((total, item) => total + item.sales, 0);
  const totalSalesWith20Percent = totalSales * 1.2;

  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <h2>Total Sales: ${totalSalesWith20Percent.toFixed(2)}</h2>
        <select
          value={selectedOption}
          onChange={(e) => handleOptionChange(e.target.value)}>
          <option value='daily'>Daily</option>
          <option value='weekly'>Weekly</option>
          <option value='monthly'>Monthly</option>
          <option value='yearly'>Yearly</option>
        </select>
      </div>
      <ResponsiveContainer width='100%' height={300}>
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}>
          <CartesianGrid strokeDasharray='1 0' />
          <XAxis dataKey='name' />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type='natural'
            dataKey='sales'
            stroke='#3C34B6 '
            dot={false}
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineChartComponent;

import React from "react";
import { Bar } from "react-chartjs-2";

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
    xAxes: [
      {
        barThickness: 60, // Adjust bar width here
      },
    ],
  },
};

const UserActivityChart = ({ activityData }) => {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const chartData = {
    labels: days,
    datasets: [
      {
        label: "User Activity",
        data: activityData, // Replace with actual user activity data
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <h2>User Activity This Week</h2>
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default UserActivityChart;

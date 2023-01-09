import { useState, useEffect } from 'react';
import { Scatter } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

function LineChart(prop) {
    const chartData = {
        datasets: [
          {
            label: "Common",
            data: prop.dataset.commonData,
            pointRadius: 2,
            showLine: true,
            backgroundColor: 'rgba(57, 81, 224, 1)',
            borderColor: 'rgba(57, 81, 224, 1)',
          },
          {
            label: "Series A preferred",
            data: prop.dataset.seriesAData,
            pointRadius: 2,
            showLine: true,
            backgroundColor: 'rgba(255, 123, 84, 1)',
            borderColor: 'rgba(255, 123, 84, 1)',
          }, 
          {
            label: "Series A1 Preferred",
            data: prop.dataset.seriesA1Preferred,
            pointRadius: 2,
            showLine: true,
            backgroundColor: 'rgba(147, 155, 98, 1)',
            borderColor: 'rgba(147, 155, 98, 1)',
          },
        ],
      }

      const chartOptions = {
        responsive: true,
        hover: {
          mode: 'nearest'
        },
        scales: {
          x: {
            beginAtZero: true
          },
          y: {
            beginAtZero: true
          }
        },
        plugins: {
          legend: {
            position: 'bottom'
          },
          tooltip: {
            usePointStyle: true,
            padding: 10,
            callbacks : {
              beforeLabel: function(context) {
                let beforeLabel = context.dataset.label
                return beforeLabel
              },
              label: function(context) {
                let label = `Exit Valuation: $ ${context.parsed.x}` 
                return label
              },
              afterLabel: function (context) {
                let afterLabel = `Price Per Share: $ ${context.parsed.y}M`
                return afterLabel
              }
            }
          }
        }
      }

  return (
    <Scatter data={chartData} options={chartOptions} />
  );
}

export default LineChart;

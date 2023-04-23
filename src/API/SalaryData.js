import React, { useState, useEffect } from 'react';
import Chart from 'chart.js/auto';
import axios from 'axios';

const ChartComponent = () => {
    const [chartData, setChartData] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
        try {
            const response = await axios({
            method: 'GET',
            url: 'https://job-salary-data.p.rapidapi.com/job-salary',
            headers: {
                'content-type': 'application/octet-stream',
                'X-RapidAPI-Key': '05a15e14e2mshd9c35f69cb12fa4p1e23fcjsn218182afecb9',
                'X-RapidAPI-Host': 'job-salary-data.p.rapidapi.com'
            },
            params: {
                job_title: 'nodejs developer',
                location: 'new york, usa',
                radius: '10'
            }
            });

            const salaryData = response.data;
            const chartLabels = salaryData.map(item => item.years_experience);
            const chartValues = salaryData.map(item => item.average_salary);
            setChartData({
            labels: chartLabels,
            datasets: [
                {
                label: 'Salaries for Node.js Developers in New York',
                data: chartValues,
                fill: false,
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: 'rgba(75,192,192,1)',
                borderWidth: 2
                }
            ]
            });
            setLoading(false);
        } catch (error) {
            console.error(error);
        }
        };

        fetchData();
    }, []);

    useEffect(() => {
        if (!loading) {
        const ctx = document.getElementById('myChart');
        const chart = new Chart(ctx, {
            type: 'line',
            data: chartData
        });
        return () => {
            chart.destroy();
        };
        }
    }, [chartData, loading]);

    return (
        <div>
        {loading ? <p>Loading chart...</p> : <canvas id="myChart" width="400" height="400"></canvas>}
        </div>
    );
};

export default ChartComponent;

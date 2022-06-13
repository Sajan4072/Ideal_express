import { GetServerSideProps } from 'next'
import React, { Fragment } from 'react'
import { sidebarData } from '../datas/sidebar.data'
import { Chart as Chartjs } from 'react-chartjs-2';
import Chart from 'chart.js/auto'
import { Chart as C, ArcElement, LinearScale, CategoryScale } from 'chart.js'
C.register(ArcElement, LinearScale, CategoryScale);
const dashboard = () => {
    return (
        <Fragment>
            <Dashboard />
        </Fragment>
    )
}

export default dashboard

const Dashboard = () => {
    return (
        <div className='py-5 animate-slow'>
            <div className='grid-cols-4 grid justify-between gap-2'>
                {
                    sidebarData.map((data, index) => {
                        return (
                            <a key={index} href="#" className="block p-6 max-w-sm odd:bg-gray-600  even:bg-orange-600 first-of-type:bg-purple-500 last-of-type:bg-green-800    rounded-lg border  hover:bg-gray-900 ">
                                <h5 className="mb-2 text-xl font-bold tracking-tight text-white">{data.title}</h5>
                                <p className="font-normal text-white">{data.icon}</p>
                            </a>
                        )
                    })
                }
            </div>
            <div className='mt-5'>
                <div className='grid grid-cols-12 gap-10'>
                    <div className='h-96  col-span-8'>
                        <Bar />
                    </div >
                    <div className='h-96 col-span-4'>
                        <Pie />
                    </div>
                </div>
            </div>
        </div>
    )
}

const Bar = () => {
    Chart.register(ArcElement);

    // const labels = Utils.months({count: 7});
    const data = {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: 'Shipment chart',
            data: [65, 59, 80, 81, 56, 55, 40],
            backgroundColor: [
                'bg-red-500',
                'bg-orange-500',
                'bg-purple-500',
                'bg-slate-600',
                'bg-yellow-600',
            ],
            borderColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
                'rgb(54, 162, 235)',
                'rgb(153, 102, 255)',
                'rgb(201, 203, 207)'
            ],
            borderWidth: 1
        }]
    };

    const options = {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
    const data2 = {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            data: [12, 14, 14, 41]
        }]
    }
    return (
        <div id='myCharts'>
            <Chartjs
                type='bar'
                data={data}
                options={options}
            />
        </div>
    )
}
const Pie = () => {
    Chart.register(ArcElement);

    // const labels = Utils.months({ count: 7 });
    const data = {
        labels: [
            'Red',
            'Blue',
            'Yellow'
        ],
        datasets: [{
            label: 'Sales',
            data: [300, 50, 100],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)'
            ],
            hoverOffset: 4
        }]
    };

    const options = {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
    const data2 = {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            data: [12, 14, 14, 41]
        }]
    }
    return (
        <div id='myChart'>
            <Chartjs
                type='pie'
                data={data}
                options={options}
            />
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    return {
        props: {
            page: 'dashboard'
        }
    }
}
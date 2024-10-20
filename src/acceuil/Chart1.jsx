import React, { Component } from 'react';
import { Line  } from 'react-chartjs-2';
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
  ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

class Linechart extends Component{
    render(){
      const yValues = [0, 40,30, 34, 50,32,60, 60, 80];
      
        const data = {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May','juin','juillet'],
            // labels: xValues,

            datasets: [
              {
                label: 'Evolution des cotisation en fonction du  temps',
                data: [0, 20, 40, 60, 80],
                fill: false, // Remplit sous la ligne (false pour ne pas remplir)
                backgroundColor: "#224957", // Couleur des points
                borderColor: " #20df7f ", // Couleur de la ligne
                tension: 0,//courbure de la ligne
                data: yValues

              },
            ],
          };
          const options = {
            responsive: true,
            plugins: {
            },
          };
        return(
            <div className='container'>
                <div className='row'>
                <div className="card shadow  mx-4  p-2 chart">
                    <div className='card-header fw-semibold color text-nowrap'>
                    Evaluation des cotisations en fonction du temps
                    </div>
                <div className="card-body ">
                <Line data={data} options={options} />
                            </div>
                </div>
                </div>

            </div>
        )
    }
}
export default Linechart
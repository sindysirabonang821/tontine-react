import React, { Component } from 'react';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Doughnut } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);


class Donutchart extends Component{
    render(){
          const data ={
            labels: [ "En cours", "Terminer", "Archiver", "Bloquer"], // Étiquettes
            datasets:[
                {
                    data : [60, 24, 34, 14, ],
                    backgroundColor:[
                        "#224957",
                        "#20df7f",
                        "pink",
                        "#e8c3b9",
                    ],// Couleur des sections
                    borderColor: 'rgba(255, 255, 255, 1)', // Couleur de la bordure
                    borderWidth: 2, // Épaisseur de la bordure
                }
            ]
          }
          ;

          // Options de personnalisation
          const options = {
            responsive: true,
            plugins: {
              legend: {
                position: 'bottom', // Position de la légende
              },
            },
          };
        return(
            <div className='container'>
            <div className='row'>
            <div className="card shadow cart ms-3 chart">
                <div className='card-header fw-semibold color '>
                Statistique
                </div>
            <div className="card-body donut" >
            <Doughnut data={data} />
                        </div>
            </div>
            </div>

        </div>
        )
    }
}
export default Donutchart
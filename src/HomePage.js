import React from "react"
import styles from "./styles/HomePage.css"
import { Line } from 'react-chartjs-2';

const linie1 = {
    labels: ['Luni', 'Marti', 'Miercuri',
        'Joi', 'Vineri', 'Sambata', 'Duminica'],
    datasets: [
        {
            label: 'Cereri nerezolvate',
            fill: true,
            lineTension: 0.5,
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data: [65, 59, 80, 81, 56, 31, 47]
        }
    ]
}

const linie2 = {
    labels: ['Luni', 'Marti', 'Miercuri',
        'Joi', 'Vineri', 'Sambata', 'Duminica'],
    datasets: [
        {
            label: 'Binefacatori disponibili',
            fill: true,
            lineTension: 0.5,
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data: [21, 66, 80, 59, 97, 70, 67]
        }
    ]
}


const HomePage = () => {
    return (
        <div id="overview">

            <div id="beneficiar">

                <div class="graficHome">
                    <Line
                        data={linie1}
                        options={{
                            title: {
                                display: true,
                                text: 'Cereri nerezolvate',
                                fontSize: 20
                            },
                            legend: {
                                display: true,
                                position: 'right'
                            }
                        }}
                    />
                </div>

                <div class="centerx2">
                    <a href="beneficiar.js" className="button"> Beneficiar </a>
                </div>

            </div>

            <div id="binefacator">

                <div class="graficHome">
                    <Line
                        data={linie2}
                        options={{
                            title: {
                                display: true,
                                text: 'Binefacatori disponibili',
                                fontSize: 20
                            },
                            legend: {
                                display: true,
                                position: 'right'
                            }
                        }}
                    />
                </div>

                <div class="centerx2">
                    <a href="binefacator.js" className="button"> Binefacator </a>
                </div>

            </div>

        </div>
    )
}

export default HomePage;
import React from "react";
import styles from "./styles/Profile.css"
import { Bar } from 'react-chartjs-2'

const grafic = {
    labels: ['People you helped', 'People that helped you'],
    datasets: [
        {
            label: 'Number',
            backgroundColor: 'green',
            borderColor: 'violet',
            borderWidth: 2,
            data: [65, 59]
        }
    ]
}

const Profile = () => {
    return (
        <div id="paginaProfile">

            <div id="date">
                <div class="detalii">
                    <div></div>
                    <div> Nume: </div>
                    <div> Nume </div>
                    <div></div>
                </div>
                <div class="detalii">
                    <div></div>
                    <div> Prenume: </div>
                    <div> Prenume </div>
                    <div></div>
                </div>
                <div class="detalii">
                    <div></div>
                    <div> Varsta: </div>
                    <div> Varsta </div>
                    <div></div>
                </div>
                <div class="detalii">
                    <div></div>
                    <div> Adresa: </div>
                    <div> Adresa </div>
                    <div></div>
                </div>
            </div>

            <div>
                <img src={require('./styles/LogoH-02.png').default} id="imageProfile" />
            </div>

            <div id="descriere" class="epilepsy">

                <div>
                    <Bar
                        data={grafic}
                        options={{
                            title: {
                                display: true,
                                text: 'Chart',
                                fontSize: 20
                            },
                            legend: {
                                display: true,
                                position: 'right'
                            }
                        }}
                    />
                </div>

                <div id="despre">

                    <div id="aptitudini">
                        <p> Cum pot ajuta? </p>
                        <p> Specializari: Inginer, Reparator </p>
                        <p> Aptitudini: Bucatar </p>
                    </div>


                    <div id="disponibilitate">
                        <p> Cand pot ajuta? </p>
                        <div id="orar">
                            <ul id="lista">
                                <li>
                                    Luni:
                                <input type="time" />
                                -
                                <input type="time" />
                                    <input />
                                </li>
                                <li>
                                    Marti:
                                <input type="time" />
                                -
                                <input type="time" />
                                    <input />
                                </li>
                                <li>
                                    Miercuri:
                                <input type="time" />
                                -
                                <input type="time" />
                                    <input />
                                </li>
                                <li>
                                    Joi:
                                <input type="time" />
                                -
                                <input type="time" />
                                    <input />
                                </li>
                                <li>
                                    Vineri:
                                <input type="time" />
                                -
                                <input type="time" />
                                    <input />
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>

            </div>

        </div>

    )
}

export default Profile;
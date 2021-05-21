import React from "react";
import styles from "./styles/Profile.css"
import { Link } from "react-router-dom";

const Profile = () => {
    return (
        <div id="paginaProfile">

            <div id="date">
                <div class="detalii">
                    <div></div>
                    <div> Nume: </div>
                    <div> <input /> </div>
                    <div></div>
                </div>
                <div class="detalii">
                    <div></div>
                    <div> Prenume: </div>
                    <div> <input /> </div>
                    <div></div>
                </div>
                <div class="detalii">
                    <div></div>
                    <div> Distanta maxima: </div>
                    <div> <input /> </div>
                    <div></div>
                </div>
                <div class="detalii">
                    <div></div>
                    <div> Adresa: </div>
                    <div> <input /> </div>
                    <div></div>
                </div>
                <div class="detalii">
                    <div></div>
                    <div> Telefon: </div>
                    <div> <input /> </div>
                    <div></div>
                </div>

            </div>

            <div>
                <img src={require('./styles/LogoH-02.png').default} id="imageProfile" />
            </div>

            <div id="descriere" class="epilepsy">

                <div id="despre">

                    <div id="aptitudini">
                        <p> Cum pot ajuta? </p>
                        <p> Specializari: Inginer, Reparator </p>
                        <p> Aptitudini: Bucatar </p>
                    </div>


                    <div id="disponibilitate">
                        <p> Cand pot ajuta? </p>
                        <input type="time" /> - <input type="time" />
                    </div>

                </div>

                <div id="centerx2Profile">
                    <div class="butoaneProfile"> Salveaza Profil </div>
                    <Link to="/Statistics"> <div class="butoaneProfile"> Statistics </div> </Link>
                    <div class="butoaneProfile"> Sterge Contul </div>
                </div>

            </div>

        </div>

    )
}

export default Profile;
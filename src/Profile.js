import React from "react";
import styles from "./styles/Profile.css"

const Profile = () => {
    return (
        

    <div id="pagina">

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
        <img src={require('./styles/LogoH-02.png').default} id="imageProfile"/>
        </div>

        <div id="descriere" class="epilepsy">

            <div></div>

            <div>
                Acesta este descrierea pe care ceilalti utilizatori ai aplicatiei o vor vedea. <br/>
                Contine programul in care
                esti disponibil sa ajuti si eventual o casuta unde
                poti scrie flexibil. <br/> Specializarile sunt abilitati pe care le stapanesti bine, <br/> aptitudinile sunt cele la
                care te descurci binisor, cat sa reusesti sa faci o treaba decenta.
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
                                <input type="time"/>
                                -
                                <input type="time"/> 
                                <input/> 
                            </li>
                            <li>
                                Marti:
                                <input type="time"/>
                                -
                                <input type="time"/>
                                <input/>
                            </li>
                            <li>
                                Miercuri:
                                <input type="time"/> 
                                -
                                <input type="time"/> 
                                <input/>
                            </li>
                            <li>
                                Joi:
                                <input type="time"/> 
                                -
                                <input type="time"/>
                                <input/> 
                            </li>
                            <li>
                                Vineri:
                                <input type="time"/> 
                                -
                                <input type="time"/> 
                                <input/> 
                            </li>
                        </ul>
                    </div>
                </div>

            </div>

            <div></div>

        </div>

    </div>
        
    )
}

export default Profile;
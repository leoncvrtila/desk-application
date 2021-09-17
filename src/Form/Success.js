import React from 'react'
import correct from '../assets/image/correct.png'

const success = (props) => (

    <div className="Success">
        <img src={correct} alt="Check" />
        <h3>Zahtjev je uspješno poslan!</h3>
        <p>{props.name + ', '}kontaktirat ćemo te putem Email-a i SMS-a kako bi potvrdili točno vrijeme poziva. Čujemo se vrlo brzo.</p>
    </div>
);

export default success;
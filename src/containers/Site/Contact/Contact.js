/***************************************
 *  IMPORT DES DIFFÉRENTS COMPONENTS   *
 *  ***********************************/ 

import React, { useState } from "react";
import Titre from "../../../components/Titre/Titre";
import ContactForm from "./ContactForm/ContactForm";
import Bouton from "../../../components/Bouton/Bouton";

/***************************************
 *  FUNCTION CONTACT                   *
 *  ***********************************/ 

function Contact() {

    /* UTILISATION D'UN HOOK POUR GÉRER L'AFFICHAGE DU FORMULAIRE */
    const [afficheForm, setAfficheForm] = useState(false)

        return (
            <>
                <Titre>Contactez-nous !</Titre>
                <h2>Adresse</h2>
                <p>xxxxxxxxxxx</p>
                <h2>Téléphone</h2>
                <p>00 00 00 00 00</p>
                <h2>Vous préfèrez nous écrire ?</h2>
                <Bouton typeBtn="btn-primary" clic={setAfficheForm(afficheForm => !afficheForm)}>Formulaire de contact</Bouton>
                {
                    afficheForm ? <ContactForm /> : <></>
                }
            </>
        );
}

/***************************************
 *  EXPORT DU COMPONENT                *
 *  ***********************************/

export default Contact;
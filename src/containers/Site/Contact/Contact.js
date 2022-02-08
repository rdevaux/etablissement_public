/***************************************
 *  IMPORT DES DIFFÉRENTS COMPONENTS   *
 *  ***********************************/

import React, { useState } from "react";
import Titre from "../../../components/Titre/Titre";
import ContactForm from "./ContactForm/ContactForm";
import Bouton from "../../../components/Bouton/Bouton";
import { Icon } from '@iconify/react';
import classes from "../Contact/Contact.module.scss"
import Modal from "react-modal/lib/components/Modal";

/***************************************
 *  FUNCTION CONTACT                   *
 *  ***********************************/

function Contact() {

    /* UTILISATION D'UN HOOK POUR GÉRER L'AFFICHAGE DU FORMULAIRE */
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <>
            <Titre>Contactez-nous !</Titre>
            <div className="row g-0 justify-content-around">
                <div className="col-3 text-center mt-2">
                    <Icon icon="carbon:location-filled" width={50} height={50} className={classes.iconColor} />
                    <h3 className={classes.titre}>Adresse</h3>
                    <p className={classes.txt}>12 Rue Jean Sans Peur,<br />
                        59800 Lille
                    </p>
                </div>
                <div className="col-3 text-center mt-2">
                    <Icon icon="carbon:phone-filled" width={50} height={50} className={classes.iconColor} />
                    <h3 className={classes.titre}>Téléphone</h3>
                    <p className={classes.txt}>03 20 30 59 59</p>
                </div>
                <div className="col-3 text-center mt-2">
                    <Icon icon="bx:bx-mail-send" width={50} height={50} className={classes.iconColor} />
                    <h3 className={classes.titre}>E-Mail</h3>
                    <p className={classes.txt}>pref-courrier-webmestre@nord.gouv.fr</p>
                </div>
            </div>

            <div className="text-center mt-4">
                <h3 className={classes.titre}>Vous préfèrez nous écrire ?</h3>
                <Bouton typeBtn="btn-primary" clic={openModal}>Formulaire de contact</Bouton>
            </div>
            <Modal
                isOpen={modalIsOpen}
                ariaHideApp={false}
                onRequestClose={closeModal}>
                <ContactForm 
                    closeModal={closeModal}
                />
            </Modal>
        </>
    );
}

/***************************************
 *  EXPORT DU COMPONENT                *
 *  ***********************************/

export default Contact;
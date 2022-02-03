/***************************************
 *  IMPORT DES DIFFÉRENTS COMPONENTS   *
 *  ***********************************/ 

import React from "react";
import { withFormik } from "formik";
import * as Yup from "yup";
import Bouton from "../../../../components/Bouton/Bouton";

/***************************************
 *  FUNCTION CONTACTFORM               *
 *  ***********************************/ 

const contactForm = (props) => {
    return (
        <form>
            <div className="form-group">
                <label htmlFor="name" className="form-label mt-4">Nom</label><span className="badge rounded-pill bg-warning">min 5 caractères</span>
                <input
                    type="email"
                    className="form-control"
                    id="name"
                    placeholder="Votre nom"
                    name="nom"
                    value={props.values.nom}
                    onChange={props.handleChange}
                    onBlur={props.handleBlur} />
                {
                    props.touched.nom && props.errors.nom && <span className="text-danger">{props.errors.nom}</span>
                }
            </div>
            <div className="form-group">
                <label htmlFor="email" className="form-label mt-4">Adresse e-mail</label>
                <input
                    type="text"
                    className="form-control"
                    id="email"
                    placeholder="Votre adresse mail"
                    name="email"
                    value={props.values.email}
                    onChange={props.handleChange}
                    onBlur={props.handleBlur} />
                {
                    props.touched.email && props.errors.email && <span className="text-danger">{props.errors.email}</span>
                }
            </div>
            <div className="form-group">
                <label htmlFor="message" className="form-label mt-4">Message</label><span className="badge rounded-pill bg-warning">Entre 100 et 200 caractères</span>
                <textarea
                    className="form-control"
                    id="message"
                    rows="3"
                    name="message"
                    value={props.values.message}
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}></textarea>
                {
                    props.touched.message && props.errors.message && <span className="text-danger">{props.errors.message}</span>
                }
            </div>
            <Bouton typeBtn="btn-primary mt-2 mb-2" clic={props.handleSubmit}>Valider</Bouton>
        </form>
    )
};

/***************************************
 *  EXPORT DU COMPONENT                *
 *  GESTION DU FORMULAIRE AVEC FORMIK  *
 *  ET YUP                             *
 *  ***********************************/ 

export default withFormik({
    mapPropsToValues: () => ({
        nom: "",
        email: "",
        message: ""
    }),
    validationSchema: Yup.object().shape({
        nom: Yup.string()
            .min(5, 'Le nom doit avoir minimum 5 caractères !')
            .required('Le nom est obligatoire'),
        email: Yup.string()
            .email("Le format de l'email n'est pas valide !")
            .required("L'email est obligatoire"),
        message: Yup.string()
            .min(100, 'Le message doit faire minimum 100 caractères !')
            .max(200, 'Le message doit faire maximum 200 caractères !')
            .required('Le message est obligatoire')
    }),
    handleSubmit: () => {
        alert('Message envoyé')
    }
})(contactForm);
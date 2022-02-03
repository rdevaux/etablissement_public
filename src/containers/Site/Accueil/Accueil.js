/***************************************
 *  IMPORT DES DIFFÉRENTS COMPONENTS   *
 *  ***********************************/ 

import React from "react";
import imageBeffroi from "../../../assets/beffroi.jpg"
import Titre from "../../../components/Titre/Titre"

/***************************************
 *  FUNCTION ACCUEIL                   *
 *  ***********************************/ 

const accueil = (props) => {
    return (
        <>
            <Titre>Bienvenue sur le site du Nord</Titre>
            <p>Le site vous aidant à trouver les établissements publics du Nord</p>
            <img  src={imageBeffroi} alt="Château" className="img-fluid img-thumbnail" width="100%"/>
        </>
    )};

/***************************************
 *  EXPORT DU COMPONENT                *
 *  ***********************************/ 

export default accueil;
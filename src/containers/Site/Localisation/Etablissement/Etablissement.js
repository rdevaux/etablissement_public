/***************************************
 *  IMPORT DES DIFFÉRENTS COMPONENTS   *
 *  ***********************************/ 

import React from "react";

/***************************************
 *  FUNCTION ETABLISEEMENT             *
 *  ***********************************/ 

const etablissement = (props) => {
    return (
        <div key={props.id} className="card border-secondary mb-3">
            <div className="card-header">{props.nom}</div>
            <div className="card-body">
                <p className="card-text"><b>Telephone :</b> {props.telephone}</p>
                <p className="card-text"><b>Adresse :</b><br />
                    {props.adresses.map(adresse => {
                        return (
                            <span key={adresse.codePostal}>
                                {adresse.lignes}<br />
                                {adresse.commune} - {adresse.codePostal}
                            </span>
                        )
                    })}</p>
                <span className="card-text"><b>Horaires :</b><br />
                    {props.horaires && props.horaires.map((horaire, index) => {
                        return (
                            <ul key={index}>
                                <li>
                                    Du {horaire.du} au {horaire.au} de {horaire.heures[0].de} à {horaire.heures[0].a}
                                    {
                                        horaire.heures[1] && <>
                                            et de {horaire.heures[1].de} à {horaire.heures[1].a}
                                        </> 
                                    }
                                </li>
                            </ul>
                        )
                    })}
                </span>
                <a href={props.url} target="_blank" rel="noreferrer">
                    <button className="btn btn-primary">Visitez le site web</button>
                </a>
            </div>
        </div>
    )
};

/***************************************
 *  EXPORT DU COMPONENT                *
 *  ***********************************/ 

export default etablissement;
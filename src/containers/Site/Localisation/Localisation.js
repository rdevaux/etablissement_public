/***************************************
 *  IMPORT DES DIFFÉRENTS COMPONENTS   *
 *  ***********************************/

import React, { Component } from "react";
import Titre from "../../../components/Titre/Titre";
import Bouton from "../../../components/Bouton/Bouton";
import Etablissement from "./Etablissement/Etablissement";
import axios from "axios";

/***************************************
 *  FUNCTION LOCALISATION              *
 *  ***********************************/

class Localisation extends Component {

    state = {
        listeEtablissement: null,
        loading: false,
        numeroPageActuel: 1,
        recherche: "",
    }

    /* RÉCUPÉRATION DES DATAS VIA L'API DU GOUVERNEMENT
        PARAMÈTRES : TYPE(STRING) */

    rechercheEtablissement = (type) => {
        this.setState({ loading: true })
        axios.get(`https://etablissements-publics.api.gouv.fr/v3/departements/59/${type}`)
            .then(reponse => {
                console.log(reponse)
                this.setState({
                    listeEtablissement: reponse.data.features,
                    loading: false
                })
            })
            .catch(error => {
                console.log(error)
            })
    }



    render() {

        /* GESTION DE LA PAGINATION */
        /* AFFICHE UNIQUEMENT 10 ETABLISSEMENTS PAR PAGE */

        let pagination = [];
        let listeEtablissement = "";
        let listeEtablissementFiltrer = "";
        if (this.state.listeEtablissement) {
            let fin = this.state.listeEtablissement.length / 20;
            if (this.state.listeEtablissement.length % 20 !== 0) fin++;
            for (let i = 1; i <= fin; i++) {
                pagination.push(
                    <Bouton
                        key={i}
                        typeBtn="btn-info"
                        clic={() => this.setState({ numeroPageActuel: i })}
                    >{i}</Bouton>
                );
            }

            const debutListe = (this.state.numeroPageActuel - 1) * 20;
            const finListe = this.state.numeroPageActuel * 20;
            const listeReduite = this.state.listeEtablissement.slice(debutListe, finListe);
            listeEtablissement = listeReduite.map(etablissement => {
                return (
                    <div key={etablissement.properties.id}>
                        <Etablissement
                            id={etablissement.properties.id}
                            nom={etablissement.properties.nom}
                            telephone={etablissement.properties.telephone}
                            adresses={etablissement.properties.adresses}
                            horaires={etablissement.properties.horaires}
                            url={etablissement.properties.url}
                        />
                    </div>
                )
            })
            listeEtablissementFiltrer = this.state.listeEtablissement.filter(nom => nom.properties.nom.includes(this.state.recherche)).map(etablissement => {
                return (
                    <div key={etablissement.properties.id}>
                        <Etablissement
                            id={etablissement.properties.id}
                            nom={etablissement.properties.nom}
                            telephone={etablissement.properties.telephone}
                            adresses={etablissement.properties.adresses}
                            horaires={etablissement.properties.horaires}
                            url={etablissement.properties.url}
                        />
                    </div>
                )
            })
            // console.log(listeEtablissementFiltrer)
        }

        return (
            <>
                <Titre>Rechercher un établissement : </Titre>
                <div className="mb-2">
                    <Bouton typeBtn="btn-secondary" clic={() => this.rechercheEtablissement("mairie")}>Mairie</Bouton>
                    <Bouton typeBtn="btn-secondary" clic={() => this.rechercheEtablissement("commissariat_police")}>Commissariat de Police</Bouton>
                    <Bouton typeBtn="btn-secondary" clic={() => this.rechercheEtablissement("pole_emploi")}>Pôle Emploi</Bouton>
                    <Bouton typeBtn="btn-secondary" clic={() => this.rechercheEtablissement("prefecture")}>Préfecture</Bouton>
                    <form className="d-flex">
                        <input
                            className="form-control me-sm-2"
                            type="text"
                            placeholder="Recherche"
                            value={this.state.recherche}
                            onChange={(event) => this.setState({ recherche: event.target.value })} />
                    </form>
                </div>
                {
                    this.state.loading ?
                        <div className="alert alert-dismissible alert-danger">
                            <strong>Chargement en cours</strong>...
                        </div>
                        :
                        <>
                            {
                                this.state.recherche === "" ? listeEtablissement : listeEtablissementFiltrer
                            }
                        </>
                }
                <div className="mb-2">{pagination}</div>
            </>
        );
    }
}

/***************************************
 *  EXPORT DU COMPONENT                *
 *  ***********************************/

export default Localisation;
/***************************************
 *  IMPORT DES DIFFÉRENTS COMPONENTS   *
 *  ***********************************/ 

import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Accueil from "./Accueil/Accueil";
import Localisation from "./Localisation/Localisation";
import Contact from "./Contact/Contact";
import NavBar from "../../components/NavBar/NavBar";
import Erreur404 from "../../components/Erreur/Erreur404";
import Footer from "../../components/Footer/Footer";

/***************************************
 *  FUNCTION SITE                      *
 *  ***********************************/ 

class Site extends Component {

    render() {
        return (
            <>
                <div className="site">
                    <NavBar /> {/* AFFICHAGE DE LA NAVBAR */}
                    <div className="container">
                        <Routes>
                            <Route path="/etablissement_public/" element={<Accueil />} /> {/* ROUTE VERS LA PAGE D'ACCUEIL */}
                            <Route path="/etablissement_public/localisation" element={<Localisation />} /> {/* ROUTE VERS LA PAGE LOCALISATION */}
                            <Route path="/etablissement_public/contact" element={<Contact />} /> {/* ROUTE VERS LA PAGE CONTACT */}
                            <Route path="*" element={<Erreur404 />} /> {/* PAGE 404 EN CAS DE MAUVAIS URL */}
                        </Routes>
                        <div className="minSite"></div> {/* PERMET L'AFFICHAGE CORRECT DU FOOTER */}
                    </div>
                </div>
                <Footer /> {/* AFFICHAGE DU FOOTER */}
            </>
        );
    }
}

/***************************************
 *  EXPORT DU COMPONENT                *
 *  ***********************************/ 

export default Site;
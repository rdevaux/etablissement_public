/***************************************
 *  IMPORT DES DIFFÉRENTS COMPONENTS   *
 *  ***********************************/ 

import Site from "./containers/Site/Site";
import { BrowserRouter } from "react-router-dom";
import "./App.css"

/***************************************
 *  FUNCTION APP                       *
 *  ***********************************/ 

function App() {
    return (
        <BrowserRouter>
            <Site />
        </BrowserRouter>
    );
}

/***************************************
 *  EXPORT DU COMPONENT                *
 *  ***********************************/ 

export default App;
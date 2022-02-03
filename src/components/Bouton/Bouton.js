import React from "react";

const bouton = (props) => {
    const classCSS = `btn ${props.typeBtn}`;

    return (
        <button className={classCSS} onClick={props.clic}>{props.children}</button>
    )
};

export default bouton;
import React from "react";

const titre = (props) => {
    return (
        <h1 className="border border-dark p-2 mt-2 text-white text-center bg-primary rounded">{props.children}</h1>
    )};

export default titre;
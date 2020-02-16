import React, { Fragment } from "react"

const Who = () => (
    <div className="who">
        <label htmlFor="alias">Votre nom ou alias : </label>
        <input name="alias" type="text" placeholder="Ex: Adrien" />
    </div>
);

export default Who
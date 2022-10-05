import React from "react";
import PropTypes from "prop-types";
import { Contacto } from "../models/contacto.class";

const ComponentA = ({ contacto }) => {
  return (
    <div>
      <h2>Nombre: {contacto.name}</h2>
      <h3>Apellidos: {contacto.lastname}</h3>
      <h4>Email: {contacto.email}</h4>
      <h5>Estado: {contacto.online ? "En Línea" : "No Disponible"}</h5>
    </div>
  );
};

ComponentA.propTypes = {
  contacto: PropTypes.instanceOf(Contacto),
};

export default ComponentA;

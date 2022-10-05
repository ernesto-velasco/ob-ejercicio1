import React from "react";
import { Contacto } from "../models/contacto.class";
import ComponentB from "./component_b";

const ComponentA = () => {
  const defaultContacto = new Contacto(
    "Example",
    "default lastname",
    "defaul@email",
    false
  );

  const changeState = (id) => {
    {
      /** Todo: cambiar estado de la tarea */
    }
  };
  return (
    <div>
      <h1>Contactos</h1>
      <div>
        <ComponentB contacto={defaultContacto}></ComponentB>
      </div>
    </div>
  );
};

export default ComponentA;

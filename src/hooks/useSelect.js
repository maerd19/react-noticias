import React, { useState } from "react";

const useSelect = (stateInicial, opciones) => {
  // State del Custom Hook
  const [state, setState] = useState(stateInicial);

  const selectNoticias = () => (
    <select
      className="browser-default"
      value={state}
      onChange={(e) => setState(e.target.value)}
    >
      {opciones.map((opcion) => (
        <option key={opcion.value} value={opcion.value}>
          {opcion.label}
        </option>
      ))}
    </select>
  );

  return [state, selectNoticias];
};

export default useSelect;

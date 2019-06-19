import React from "react";

const App = () => {
  return (
    <div className="margen">
      <table className="tabla">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Enlace</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Ariel</td>
            <td>ariel@prueba.com</td>
            <td>prueba.com</td>
          </tr>
          <tr>
            <td>Platzi</td>
            <td>platzi@prueba.com</td>
            <td>Platzi.com</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default App;

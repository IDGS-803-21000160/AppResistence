import { useState } from "react";
import "./ResistenceComponent.css";

// Diccionario de colores y sus respectivos valores
const colorCodes = {
  negro: { valor: 0, multiplicador: 1 },
  marron: { valor: 1, multiplicador: 10, tolerancia: "±1%" },
  rojo: { valor: 2, multiplicador: 100, tolerancia: "±2%" },
  naranja: { valor: 3, multiplicador: 1000 },
  amarillo: { valor: 4, multiplicador: 10000 },
  verde: { valor: 5, multiplicador: 100000, tolerancia: "±0.5%" },
  azul: { valor: 6, multiplicador: 1000000, tolerancia: "±0.25%" },
  violeta: { valor: 7, multiplicador: 10000000, tolerancia: "±0.1%" },
  gris: { valor: 8, tolerancia: "±0.05%" },
  blanco: { valor: 9 },
  dorado: { multiplicador: 0.1, tolerancia: "±5%" },
  plateado: { multiplicador: 0.01, tolerancia: "±10%" },
};

const ResistenceComponents = () => {
  const [banda1, setBanda1] = useState("");
  const [banda2, setBanda2] = useState("");
  const [banda3, setBanda3] = useState("");
  const [banda4, setBanda4] = useState("");

  const calcularResistencia = () => {
    if (!banda1 || !banda2 || !banda3 || !banda4) {
      return "Selecciona los colores";
    }

    const valorBanda1 = colorCodes[banda1].valor;
    const valorBanda2 = colorCodes[banda2].valor;
    const multiplicador = colorCodes[banda3].multiplicador;
    const tolerancia = colorCodes[banda4].tolerancia;

    const resistencia = (valorBanda1 * 10 + valorBanda2) * multiplicador;
    return `Resistencia: ${resistencia}Ω ${tolerancia ? tolerancia : ""}`;
  };

  return (
    <div className="app-container">
      <h1>Calculadora de Resistencia</h1>
      <img src="resitencia.jpg" width="500px"></img>

      {/* Tabla de colores seleccionados */}
      <table className="color-table">
        <thead>
          <tr>
            <th>Banda</th>
            <th>Color Seleccionado</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Banda 1</td>
            <td>{banda1}</td>
            <td>{banda1 ? colorCodes[banda1].valor : "-"}</td>
          </tr>
          <tr>
            <td>Banda 2</td>
            <td>{banda2}</td>
            <td>{banda2 ? colorCodes[banda2].valor : "-"}</td>
          </tr>
          <tr>
            <td>Banda 3</td>
            <td>{banda3}</td>
            <td>{banda3 ? colorCodes[banda3].multiplicador : "-"}</td>
          </tr>
          <tr>
            <td>Banda 4 (Tolerancia)</td>
            <td>{banda4}</td>
            <td>{banda4 ? colorCodes[banda4].tolerancia : "-"}</td>
          </tr>
        </tbody>
      </table>

      {/* Contenedores de selección */}
      <div className="selector-container">
        <label>Banda 1:</label>
        <select
          value={banda1}
          onChange={(e) => setBanda1(e.target.value)}
          className={`option-${banda1}`}
        >
          <option value="">Selecciona</option>
          {Object.keys(colorCodes).map((color) => (
            <option key={color} value={color} className={`option-${color}`}>
              {color}
            </option>
          ))}
        </select>
      </div>

      <div className="selector-container">
        <label>Banda 2:</label>
        <select
          value={banda2}
          onChange={(e) => setBanda2(e.target.value)}
          className={`option-${banda2}`}
        >
          <option value="">Selecciona</option>
          {Object.keys(colorCodes).map((color) => (
            <option key={color} value={color} className={`option-${color}`}>
              {color}
            </option>
          ))}
        </select>
      </div>

      <div className="selector-container">
        <label>Banda 3:</label>
        <select
          value={banda3}
          onChange={(e) => setBanda3(e.target.value)}
          className={`option-${banda3}`}
        >
          <option value="">Selecciona</option>
          {Object.keys(colorCodes).map((color) => (
            <option key={color} value={color} className={`option-${color}`}>
              {color}
            </option>
          ))}
        </select>
      </div>

      <div className="selector-container">
        <label>Banda 4 (Tolerancia):</label>
        <select
          value={banda4}
          onChange={(e) => setBanda4(e.target.value)}
          className={`option-${banda4}`}
        >
          <option value="">Selecciona</option>
          {Object.keys(colorCodes)
            .filter((color) => colorCodes[color].tolerancia)
            .map((color) => (
              <option key={color} value={color} className={`option-${color}`}>
                {color}
              </option>
            ))}
        </select>
      </div>

      <div>
        <h2>{calcularResistencia()}</h2>
      </div>
    </div>
  );
};

export default ResistenceComponents;

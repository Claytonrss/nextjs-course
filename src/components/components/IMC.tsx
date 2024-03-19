"use client";

import { FormEvent, useState } from "react";

export default function IMC() {
  const [imc, setImc] = useState(0);
  const [result, setResult] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const imc = Number(weight) / (Number(height) * Number(height));

    if (isNaN(imc)) {
      alert("Peso e altura devem ser números");
      return;
    }

    setImc(imc);

    if (imc >= 18.5 && imc <= 24.9) {
      setResult("Peso normal");
    } else if (imc >= 25 && imc <= 29.9) {
      setResult("Sobrepeso");
    } else if (imc >= 30 && imc <= 34.9) {
      setResult("Obesidade grau I");
    } else if (imc >= 35 && imc <= 39.9) {
      setResult("Obesidade grau II");
    } else if (imc >= 40) {
      setResult("Obesidade grau III");
    }
  };

  return (
    <div>
      <p>Calcular IMC</p>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="weight">Peso (kg)</label>
        <input
          id="weight"
          name="weight"
          type="number"
          min="0.01"
          step="0.01"
          onChange={(e) => setWeight(e.target.value)}
        />
        <label htmlFor="height">Altura (m)</label>
        <input
          id="height"
          name="height"
          type="number"
          min="0.01"
          step="0.01"
          onChange={(e) => setHeight(parseFloat(e.target.value))}
        />
        <button type="submit">Calcular</button>
      </form>
      {imc > 0 && <p>Seu IMC: {imc.toFixed(2)}</p>}
      {result && <p>{result}</p>}
    </div>
  );
}

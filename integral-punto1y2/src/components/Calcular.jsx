import React from "react";
import { useState } from "react";

function Calcular() {
        const [num1, setNum1] = useState("");
        const [num2, setNum2] = useState("");
  return (
    
    <calcular style={Styles.calcular}>
      <input type="number" value={num1} onChange={(e) => setNum1(e.target.value)} placeholder="Número 1" />
      <h3 style={{ color: 'black', textAlign: 'center' }}> + </h3>
      <input type="number" value={num2} onChange={(e) => setNum2(e.target.value)} placeholder="Número 2" />
      <h3 style={{ color: 'black', textAlign: 'center' }}> = {Number(num1) + Number(num2)} </h3>
    </calcular>
  );
}

const Styles = {
    calcular: {
       position: 'absolute',
        top: '40%',
        left: '45%',
        height: 'px',
        padding: '0px',
        color: 'white',
        textAlign: 'left',
    }
}

export default Calcular;
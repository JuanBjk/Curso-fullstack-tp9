import { useState } from "react";

function Producto({ nombre, precio, imagen }) {
  const [cantidad, setCantidad] = useState(0);
  return (
    <div
      style={{
        border: "1px solid #c40a0a",
        padding: 10,
        marginBottom: 10,
        width: "200px",
        borderRadius: "20px",
      }}
    >
      <h4>{nombre}</h4>
      <p>Precio: ${precio}</p>
      <img
        src={imagen}
        alt="foto del producto"
        style={{ width: "150px", height: "100px" }}
      />
      <div className="contador"> 
        <button onClick={() => setCantidad(cantidad + 1)}>+</button>
        <span> {cantidad} </span>
        <button
          onClick={() => setCantidad(cantidad - 1)}
          disabled={cantidad === 0}
        >
          -
        </button>
      </div>
    </div>
  );
}

export default Producto;

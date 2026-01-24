import React from "react";
import carrito from '../images/Carrito.png';

function Header({ cambiarPagina }) {
  return (
    <header style={Styles.header}>
      <h2>Shopping Cart</h2>
      <nav>
        <button style={Styles.menu}>Añadir producto</button>
        <img src={carrito} alt="Ver mi carrito" style={Styles.carrito} />
      </nav>
    </header>
  );
}

const Styles = {
  header: {
    backgroundColor: "#44ca67",
    padding: "20px",
    color: "white",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

  },
  menu: {
    font: "bold 13px Arial",
    color: "white",
    height: "40px",
    backgroundColor: "blue",
    padding: '0 16px',
    cursor: 'pointer',
    border: 'none',
    marginRight: '50px',
  },
  carrito: {
    color: "white",
    height: "40px",
    backgroundColor: "white",
    border: "darkgray 1px solid",
    borderRadius: "5px",
    cursor: "pointer",
    padding: '4px',
    verticalAlign: 'middle',
  },
};

export default Header;

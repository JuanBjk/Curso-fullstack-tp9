import React from "react";

function Header({cambiarPagina}) {
  return (
    <header style={Styles.header}>
      <h1>Bienvenido a mi sitio web!</h1>
      <h3>Selecciona una página:</h3>
        <nav>
            <ul style={Styles.menu}>
                <li><button onClick={() => cambiarPagina("Calcular")}>Calculadora</button></li>
                <li><button onClick={() => cambiarPagina("Img1")}>Imagen 1</button></li>
                <li><button onClick={() => cambiarPagina("Img2")}>Imagen 2</button></li>
                <li><button onClick={() => cambiarPagina("Img3")}>Imagen 3</button></li>
            </ul>
        </nav>
    </header>
  );
}

const Styles = {
    header: {
        backgroundColor: '#282c34',
        padding: '20px',
        color: 'white',
    },
    menu: {
        listStyle: 'none',
        margin: 0,
        padding: 0,
        display: 'flex',
        gap: '20px',
    }
}

export default Header;


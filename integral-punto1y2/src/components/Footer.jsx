import React from "react";

function Footer() {
  return (
    <footer style={Styles.footer}>
      <p>&copy; 2026 Juan Sebastián Bajkovec. Todos los derechos reservados.</p>
    </footer>
  );
}

const Styles = {
    footer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#282c34',
        padding: '10px',
        color: 'white',
        textAlign: 'bottom',
    }
}

export default Footer;


import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import PageCalcular from './pages/PageCalcular';
import PageImg1 from './pages/PageImg1';
import PageImg2 from './pages/PageImg2';
import PageImg3 from './pages/PageImg3';  

function App() {
  const [pagina, setPagina] = useState("Calcular");

  return (
    <div className="App">
      <Header cambiarPagina={setPagina} />
      <main>
        {pagina === "Calcular" && <PageCalcular />}
        {pagina === "Img1" && <PageImg1 />}
        {pagina === "Img2" && <PageImg2 />}
        {pagina === "Img3" && <PageImg3 />}
      </main>
      <Footer />
    </div>
  );
}

export default App;

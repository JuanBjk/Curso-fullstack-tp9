
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ListaProductos from './components/ListaProductos';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <ListaProductos />
      </main>

      <Footer />

    </div>
  );
}

export default App;

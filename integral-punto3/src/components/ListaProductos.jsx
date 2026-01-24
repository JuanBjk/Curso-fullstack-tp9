import productos from "../data/productos";
import Producto from "./Producto";

function ListaProductos() {
  return (    
    <div className="grid-productos">  

      {productos.map((prod) => (
        <Producto
          key={prod.id}
          imagen={prod.imagen}
          nombre={prod.nombre}
          precio={prod.precio}
        />
      ))}
    </div>
  );
}

export default ListaProductos;

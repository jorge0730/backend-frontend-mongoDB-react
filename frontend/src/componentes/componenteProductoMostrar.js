import axios from 'axios';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const URL ='http://localhost:5000';


const ComponenteProductoMostrar = () => {

    const [productos, setProductos] = useState([])
    useEffect(()=>{
        getProductos();
    },[]);

    // función para mostrar clientes
    const getProductos = async () => {
        const datos = await axios.get(`${URL}/buscarProducto`)
        setProductos(datos.data);
    }

    // función eliminar cliente
    const eliminarProducto = async (id) => {
        await axios.delete(`${URL}/eliminarProducto/${id}`)
        getProductos();
        // eslint-disable-next-line
    }

    return(
        <div className='contenedor'>
            <div className='fila'>
                <div className='columna'>
                    <Link to='/agregarProducto' className='btn btn-primary mt-2 mb-2'><i className="fa-solid fa-user-plus"></i></Link>
                    <table className='table table-primary table-striped'>
                        <thead className="table-dark">
                            <tr>
                                <th>NOMBRE PRODUCTO</th>
                                <th>CODIGO</th>
                                <th>FABRICANTE</th>
                                <th>CANTIDAD</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {productos.map((producto, index) => (
                                <tr key = {index}>
                                    <td>{producto.nombreProducto}</td>
                                    <td>{producto.codigo}</td>
                                    <td>{producto.fabricante}</td>
                                    <td>{producto.cantidad}</td>
                                    <td>
                                        <Link to={`/editarProducto/${producto._id}`} className='btn btn-secondary mt-2 mb-2 boton'><i className="fa-solid fa-user-pen"></i></Link>
                                        <button onClick={() => eliminarProducto(producto._id)} className='btn btn-danger mt-2 mb-2 boton'><i className="fa-solid fa-user-xmark"></i></button>
                                    </td>
                                </tr>    
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    ) 
}


export default ComponenteProductoMostrar;
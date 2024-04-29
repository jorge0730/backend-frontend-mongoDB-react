import axios from 'axios';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import '../css/mostrar.css';

const URL ='http://localhost:5000';

const ComponenteClienteMostrar = () => {

    const [clientes, setClientes] = useState([])
    useEffect(()=>{
        getClientes();
    },[]);

    // función para mostrar clientes
    const getClientes = async () => {
        const datos = await axios.get(`${URL}/buscarCliente`)
        setClientes(datos.data);
    }

    // función eliminar cliente
    const eliminarCliente = async (id) => {
        await axios.delete(`${URL}/eliminarCliente/${id}`)
        getClientes();
        // eslint-disable-next-line
    }

    return(
        <div className='contenedor'>
            <div className='fila'>
                <div className='columna'>
                    <Link to='/agregarCliente' className='btn btn-primary mt-2 mb-2'><i className="fa-solid fa-user-plus"></i></Link>
                    <table className='table table-primary table-striped'>
                        <thead className="table-dark">
                            <tr>
                                <th>NOMBRES</th>
                                <th>APELLIDOS</th>
                                <th>DOCUMENTO</th>
                                <th>CORREO</th>
                                <th>CELULAR</th>
                                <th>DIRECCIÓN</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {clientes.map((cliente, index) => (
                                <tr key = {index}>
                                    <td>{cliente.nombres}</td>
                                    <td>{cliente.apellidos}</td>
                                    <td>{cliente.documento}</td>
                                    <td>{cliente.correo}</td>
                                    <td>{cliente.celular}</td>
                                    <td>{cliente.direccion}</td>
                                    <td>
                                        <Link to={`/editarCliente/${cliente._id}`} className='btn btn-secondary mt-2 mb-2 boton'><i className="fa-solid fa-user-pen"></i></Link>
                                        <button onClick={() => eliminarCliente(cliente._id)} className='btn btn-danger mt-2 mb-2 boton'><i className="fa-solid fa-user-xmark"></i></button>
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


export default ComponenteClienteMostrar;
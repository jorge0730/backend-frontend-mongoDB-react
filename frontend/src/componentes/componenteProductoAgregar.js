import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const URL ='http://localhost:5000/agregarProducto';

const ComponenteProductoAgregar = () => {

    const [nombreProducto, setNombreProducto] = useState('')
    const [codigo, setCodigo] = useState('')
    const [fabricante, setFabricante] = useState('')
    const [cantidad, setCantidad] = useState('')

    const navigate = useNavigate();

    const guardarProducto = async(evento) => {
        evento.preventDefault();
        await axios.post(URL,{
            nombreProducto:nombreProducto,
            codigo:codigo,
            fabricante:fabricante,
            cantidad:cantidad,
        })
        navigate('/buscarProducto')
    }

    return(
        <div>
            <h3>NUEVO PRODUCTO</h3>
            <form onSubmit={guardarProducto}>
                <div className="mb-3">
                    <label className="form-label">Nombre</label>
                    <input value={nombreProducto} onChange={(evento)=>setNombreProducto(evento.target.value)} type='text' className='from-control'/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Código</label>
                    <input value={codigo} onChange={(evento)=>setCodigo(evento.target.value)} type='text' className='from-control'/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Fabricante</label>
                    <input value={fabricante} onChange={(evento)=>setFabricante(evento.target.value)} type='text' className='from-control'/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Cantidad</label>
                    <input value={cantidad} onChange={(evento)=>setCantidad(evento.target.value)} type='number' className='from-control'/>
                </div>
                <button type='submit' className='btn btn-primary'>Guardar</button>
            </form>
        </div>
    )
}

export default ComponenteProductoAgregar;
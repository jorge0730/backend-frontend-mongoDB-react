import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const URL ='http://localhost:5000';

const ComponenteProductoModificar = () => {
    const [nombreProducto, setNombreProducto] = useState('')
    const [codigo, setCodigo] = useState('')
    const [fabricante, setFabricante] = useState('')
    const [cantidad, setCantidad] = useState('')
    const navigate = useNavigate();
    const {id}= useParams();


    const editarProducto = async(evento) => {
        evento.preventDefault();
        await axios.put(`${URL}/actualizarProducto/${id}`,{
            nombreProducto:nombreProducto,
            codigo:codigo,
            fabricante:fabricante,
            cantidad:cantidad,
        })
        navigate('/buscarProducto')
    }

    useEffect(()=>{
        getProductoId();
        // eslint-disable-next-line
    },[]);

    const getProductoId = async() => {
        const res = await axios.get(`${URL}/buscarProductoId/${id}`)
        setNombreProducto(res.data.nombreProducto)
        setCodigo(res.data.codigo)
        setFabricante(res.data.fabricante)
        setCantidad(res.data.cantidad)
    }
    return(
        <div>
            <h3>EDITAR PRODUCTO</h3>
            <form onSubmit={editarProducto}>
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
                <button type='submit' className='btn btn-primary'>Actualizar</button>
            </form>
        </div>
    )
}

export default ComponenteProductoModificar;
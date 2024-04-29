import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const URL ='http://localhost:5000';

const ComponenteClienteModificar = () => {
    const [nombres, setNombres] = useState('')
    const [apellidos, setApellidos] = useState('')
    const [documento, setDocumento] = useState('')
    const [correo, setCorreo] = useState('')
    const [celular, setCelular] = useState('')
    const [direccion, setDireccion] = useState('')
    const navigate = useNavigate();
    const {id}= useParams();

    const editarCliente = async(evento) => {
        evento.preventDefault();
        await axios.put(`${URL}/actualizarCliente/${id}`,{
            nombres:nombres,
            apellidos:apellidos,
            documento:documento,
            correo:correo,
            celular:celular,
            direccion:direccion
        })
        navigate('/')
    }

    useEffect(()=>{
        getClienteId();
        // eslint-disable-next-line
    },[]);

    const getClienteId = async() => {
        const res = await axios.get(`${URL}/buscarClienteId/${id}`)
        setNombres(res.data.nombres)
        setApellidos(res.data.apellidos)
        setDocumento(res.data.documento)
        setCorreo(res.data.correo)
        setCelular(res.data.celular)
        setDireccion(res.data.direccion)
    }
    return(
        <div>
            <h3>EDITAR CLIENTE</h3>
            <form onSubmit={editarCliente}>
                <div className="mb-3">
                    <label className="form-label">Nombres</label>
                    <input value={nombres} onChange={(evento)=>setNombres(evento.target.value)} type='text' className='from-control'/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Apellidoss</label>
                    <input value={apellidos} onChange={(evento)=>setApellidos(evento.target.value)} type='text' className='from-control'/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Documento</label>
                    <input value={documento} onChange={(evento)=>setDocumento(evento.target.value)} type='number' className='from-control'/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Correo</label>
                    <input value={correo} onChange={(evento)=>setCorreo(evento.target.value)} type='text' className='from-control'/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Celular</label>
                    <input value={celular} onChange={(evento)=>setCelular(evento.target.value)} type='number' className='from-control'/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Dirección</label>
                    <input value={direccion} onChange={(evento)=>setDireccion(evento.target.value)} type='text' className='from-control'/>
                </div>
                <button type='submit' className='btn btn-primary'>Actualizar</button>
            </form>
        </div>
    )
}

export default ComponenteClienteModificar;
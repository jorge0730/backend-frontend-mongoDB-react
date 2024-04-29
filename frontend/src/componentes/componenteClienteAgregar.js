import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const URL ='http://localhost:5000/agregarCliente';

const ComponenteClienteAgregar = () => {

    const [nombres, setNombres] = useState('')
    const [apellidos, setApellidos] = useState('')
    const [documento, setDocumento] = useState('')
    const [correo, setCorreo] = useState('')
    const [celular, setCelular] = useState('')
    const [direccion, setDireccion] = useState('')

    const navigate = useNavigate();

    const guardarCliente = async(evento) => {
        evento.preventDefault();
        await axios.post(URL,{
            nombres:nombres,
            apellidos:apellidos,
            documento:documento,
            correo:correo,
            celular:celular,
            direccion:direccion
        })
        navigate('/')
    }

    return(
        <div>
            <h3>NUEVO CLIENTE</h3>
            <form onSubmit={guardarCliente}>
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
                <button type='submit' className='btn btn-primary'>Guardar</button>
            </form>
        </div>
    )
}

export default ComponenteClienteAgregar;
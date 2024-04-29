import React from "react";
import whatsapp from '../imagenes/whatsapp.png' 
import facebook from '../imagenes/facebook.png'

const Footer = () => {
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-light"> 
                <div className="container">
                    <div className="row">
                        <div className="col-sm">
                            <div className="links">Siguenos en:</div>
                            < div className="links"><a href="https://es-la.facebook.com" target="_blank"><img src={facebook} width="50" height="50" alt=""></img></a></div>
                            <div className="links"><a href="https://api.whatsapp.com/send?phone=3214237797&text=Buen%20d%C3%ADa,%20Me%20ayuda%20con:" target="_blank"><img src={whatsapp} width="50" height="50" alt=""></img></a></div>
                        </div>
                        <div class="col-sm">
                            <h6>SERVICIO AL CLIENTE</h6>
                            <div>
                                <dl>
                                    <dt>Jorge Pardo Quiroga</dt>
                                    <dt>Administrador</dt>
                                    <dt>cel.: 3214237797</dt>
                                    <dt>email: jorgepardo0730@hotmail.com</dt>
                                    <dt>Bogotá D.C</dt>
                                </dl>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>    
        </div>
       
    )
}

export default Footer;
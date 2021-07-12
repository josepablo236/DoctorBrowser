import React, {useState, useEffect, Fragment} from 'react';
import {Link} from 'react-router-dom';
import logo from '../../img/logo.png';
import Error from '../Error';
import axios from 'axios';
import Doctor from './Doctor';
import Paciente from './Paciente';

const Login = () => {

    //State del login
    const [usuario, guardarUsuario] = useState({
        email: '',
        password: ''
    })
    //State del objeto
    const [objeto, guardarObjeto] = useState({
        correo: '',
        nombre: '',
        rol: ''
    })
    //State mensaje error
    const [mensaje, guardarMensaje] = useState("");
    //State para error
    const [error, guardarError] = useState(false);
    //State consulta
    const [consultar, guardarConsulta] = useState(false);
    //State satisfactorio
    const [exito, guardarExito] = useState(false);
    //State medico
    const [medico, guardarMedico] = useState(false);

    const {email, password} = usuario;

    const onChange = e =>{
        guardarUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        })
    }


    //Funcion llenar objeto
    const llenarObjeto = (datos) =>{
        guardarObjeto({
            correo: datos.email,
            nombre: datos.nombre,
            rol: datos.rol
        })
        if(datos.rol === "medico"){
            guardarMedico(true);
        }
    }

    useEffect(() => {
        const consultarAPI = async () =>{
            const url =`https://wp8zwjanmi.execute-api.us-east-2.amazonaws.com/dev/users?email=${email}`;
            let res = await axios.get(url);
            let data = res.data;
            console.log(data.body);
            if(data.body !=null)
            {
                //Convertir json a objeto
                let datos = JSON.parse(data.body);
                llenarObjeto(datos);
                let pass = String(datos.password);
                // Decrypt
                var CryptoJS = require("crypto-js");
                var bytes  = CryptoJS.AES.decrypt(pass, 'secret key 123');
                var originalText = bytes.toString(CryptoJS.enc.Utf8);
                if(password === originalText)
                {
                    guardarExito(true);
                }
                else{
                    guardarMensaje("Contraseña incorrecta");
                    guardarError(true);
                    guardarConsulta(false);
                }
            }
            else{
                guardarMensaje("Usuario no encontrado");
                guardarError(true);
                guardarConsulta(false);
            }
        }
        if(consultar){
            consultarAPI();
        }
    }, [consultar])

    const onSubmit= e =>{
        e.preventDefault();
        //Validar campos vacios
        if(email.trim() === '' || password.trim() === '')
        {
            guardarMensaje("Todos los campos son obligatorios");
            guardarError(true);
            return;
        }
        guardarError(false);
        guardarConsulta(true);
        
    }

    return ( 
        <Fragment>
            {
                !exito
                ?
                <div className="form-usuario">
                    <div className="contenedor-form sombra-dark">
                        <img src={logo} width="50px" className="logo" alt="Icon"/>
                        <h1>Doctor Browser</h1>
                        {error ? <Error mensaje={mensaje}/> : null}
                        <form
                            onSubmit={onSubmit}
                        >
                            <div className="campo-form">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Tu Email"
                                    onChange={onChange}
                                    value={email}
                                />
                            </div>
                            <div className="campo-form">
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    placeholder="Tu Password"
                                    onChange={onChange}
                                    value={password}
                                />
                            </div>
                            <div className="campo-form">
                                <input type="submit" className="btn btn-primario btn-block"
                                    value="Iniciar Sesión"/>
                            </div>
                        </form>
                        <Link to={'/nueva-cuenta'} className="enlace-cuenta">Obtener una cuenta</Link>
                    </div>
                </div>
                :
                <Fragment>
                {
                    !medico
                    ?
                    <Paciente
                    objeto = {objeto}
                    guardarUsuario = {guardarUsuario}
                    />
                    :
                    <Doctor
                    objeto = {objeto}
                    guardarUsuario = {guardarUsuario}
                />
                }
                </Fragment>
            }
        </Fragment>
     );
}
 
export default Login;
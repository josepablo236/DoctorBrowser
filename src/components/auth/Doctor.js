import React, {Fragment} from 'react';
import perfil from '../../img/user.png';
import estrellas from '../../img/estrellas.png';
const Doctor = ({objeto, guardarUsuario}) => {

    const cambiarExito = e =>{
        guardarUsuario({
            email: '',
            password: ''
        });
    }
    const noActualizar = e =>{
        e.preventDefault();
    }

    const {nombre, correo} = objeto;

    return ( 
        <Fragment>
            <header className="app-header">
            <img src={perfil} width="150px" className="user" alt="Icon"/>
            
            <p className="parrafo">{correo}</p>
            <img src={estrellas} width="100px"  className="estrellas" alt="Icon"/>
                <div className="encabezado">
                    <h3>Doctor {nombre}</h3>
                    <form
                        onSubmit={cambiarExito}
                    >
                        <input type="submit" className="btn btn-secundario"
                            value="Cerrar Sesión"/>
                    </form>
                </div>
            </header>
            <div className="conten">
                <div className="formulario-nuevo-proyecto">
                    <div className="contenedor-form sombra-dark">
                        <h1>Citas Pendientes</h1>
                        <form
                            onSubmit={noActualizar}
                        >
                            <div className="campo-formulario">
                                <label htmlFor="email">Administra las citas de pacientes</label>
                               
                            </div>
                            <div className="campo-form">
                                <input type="submit" className="btn btn-primario btn-block"
                                    value="Ver Citas"/>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="formulario-nuevo-proyecto">
                    <div className="contenedor-form sombra-dark">
                        <h1>Ver pacientes previos</h1>
                        <form
                            onSubmit={noActualizar}
                        >
                            <div className="campo-formulario">
                                <label htmlFor="email">Explora el perfil de tus pacientes</label>
                            </div>
                            <div className="campo-form">
                                <input type="submit" className="btn btn-primario btn-block"
                                    value="Ver pacientes"/>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="formulario-nuevo-proyecto">
                    <div className="contenedor-form sombra-dark">
                        <h1>Control de calendario</h1>
                        <form
                            onSubmit={noActualizar}
                        >
                            <div className="campo-formulario">
                                <label htmlFor="email">Administra tus horarios de citas</label>
                            </div>
                        
                            <div className="campo-form">
                                <input type="submit" className="btn btn-primario btn-block"
                                    value="Ver calendario"/>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="formulario-nuevo-proyecto">
                    <div className="contenedor-form sombra-dark">
                        <h1>Cambiar a ser Paciente</h1>
                        <form
                            onSubmit={noActualizar}
                        >
                            <div className="campo-formulario">
                                <label htmlFor="email">Cambia tu rol a paciente</label>
                                
                            </div>
                            <div className="campo-form">
                                <input type="submit" className="btn btn-primario btn-block"
                                    value="Cambiar rol"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Fragment>
     );
}
 
export default Doctor;
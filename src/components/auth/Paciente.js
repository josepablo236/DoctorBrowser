import React, {Fragment} from 'react';
import perfil from '../../img/user.png';
import buscador from '../../img/buscador.png';
const Paciente = ({objeto, guardarUsuario}) => {
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
                <div className="buscador">
                    <form
                        onSubmit={noActualizar}
                    >
                        <input type="search" className="barra" placeholder="---  Buscar a un médico"/>
                        <input type="submit"className="boton" value="Buscar"></input>
                    </form>
                </div>
                
                <div className="encabezado">
                    <h3>Paciente {nombre}</h3>
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
                        <h1>Citas agendadas</h1>
                        <form
                            onSubmit={noActualizar}
                        >
                            <div className="campo-formulario">
                                <label htmlFor="email">Consulta tus citas</label>
                               
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
                        <h1>Médicos consultados</h1>
                        <form
                            onSubmit={noActualizar}
                        >
                            <div className="campo-formulario">
                                <label htmlFor="email">Explora el perfil de tus médicos</label>
                            </div>
                            <div className="campo-form">
                                <input type="submit" className="btn btn-primario btn-block"
                                    value="Ver médicos"/>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="formulario-nuevo-proyecto">
                    <div className="contenedor-form sombra-dark">
                        <h1>Historial médico</h1>
                        <form
                            onSubmit={noActualizar}
                        >
                            <div className="campo-formulario">
                                <label htmlFor="email">Tus recetas y enfermedades</label>
                            </div>
                        
                            <div className="campo-form">
                                <input type="submit" className="btn btn-primario btn-block"
                                    value="Ver historial"/>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="formulario-nuevo-proyecto">
                    <div className="contenedor-form sombra-dark">
                        <h1>Cambiar a ser Doctor</h1>
                        <form
                            onSubmit={noActualizar}
                        >
                            <div className="campo-formulario">
                                <label htmlFor="email">Cambia tu rol a doctor</label>
                                
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
 
export default Paciente;
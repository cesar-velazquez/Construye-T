import "./Articulos.css"
import { Link } from "react-router-dom";

const Articulos = () =>{
    return ( 
    <section className="articulos">                                


        <div className="articulo">
        <img class="articulo__imagen" src="/img/articulos/enfoques.jpg" alt='articulo1' />
        <div className="articulo__contenido">
        <h4 class="articulo__titulo">ENFOQUES</h4>                
        <Link className="articulo__boton" to="/Enfoques">Ver Contenido...</Link>
        </div>        
        </div>

        <div className="articulo">
        <img class="articulo__imagen" src="/img/articulos/capacitismo.jpg" alt='articulo1' />
        <div className="articulo__contenido">
        <h4 class="articulo__titulo">CAPACITISMO</h4>        
        <Link className="articulo__boton" to="/Capacitismo">Ver Contenido...</Link>
        </div>
        </div>

        <div className="articulo">
        <img class="articulo__imagen" src="/img/articulos/lenguaje inclusivo.jpg" alt='articulo1' />
        <div className="articulo__contenido">
        <h4 class="articulo__titulo">LENGUAJE INCLUSIVO</h4>        
        <Link className="articulo__boton" to="/LenguajeInclusivo">Ver Contenido...</Link>
        </div>
        </div>   

         <div className="articulo">
        <img class="articulo__imagen" src="/img/articulos/conceptos.jpg" alt='articulo1' />
        <div className="articulo__contenido">
        <h4 class="articulo__titulo">CONCEPTOS BÁSICOS</h4>        
        <Link className="articulo__boton" to="/ConceptosBasicos">Ver Contenido...</Link>
        </div>
        </div>


        <div className="articulo">
        <img class="articulo__imagen" src="/img/articulos/tiposdedisc.jpg" alt='articulo1' />
        <div className="articulo__contenido">
        <h4 class="articulo__titulo">TIPOS DE DISCAPACIDAD</h4>        
        <Link className="articulo__boton" to="/TiposdeDiscapacidad">Ver Contenido...</Link>
        </div>
        </div> 

        <div className="articulo">
        <img class="articulo__imagen" src="/img/articulos/metodos.jpg" alt='articulo1' />
        <div className="articulo__contenido">
        <h4 class="articulo__titulo">METODOS DE COMUNICACIÓN PARA PERSONAS CON DISCAPACIDAD</h4>                
        <Link className="articulo__boton" to="/MetodosComun">Ver Contenido...</Link>
        </div>
        </div> 

        <div className="articulo">
        <img class="articulo__imagen" src="/img/articulos/internacionalizacion.jpg" alt='articulo1' />
        <div className="articulo__contenido">
        <h4 class="articulo__titulo">INTERNACIONALIZACIÓN</h4>        
        <Link className="articulo__boton" to="/Internacionalizacion">Ver Contenido...</Link>
        </div>        
        </div>                 
    </section>    
    );
}
export default Articulos;
import "./Quienes.css"
import "../Articulos/Capacitismo/Capacitismo.css"

const Quienes = () => {
    return (
    <section className="quienes">
        <h3 class="quienes__titulo">¿Quiénes Somos?</h3>    
        <p class="quienes__descripcion">Conozca a la comunidad detras de la iniciativa</p>    
        <div class="personas">
                <div class="persona">
                    <div class="persona__imagen persona__imagen--martin"></div>
                    <span class="persona__nombre">Martín</span>
                    <span class="persona__funcion">Estudiante de la Universidad Veracruzana</span>
                </div>
                <div class="persona">
                    <div class="persona__imagen persona__imagen--yesua"></div>
                    <span class="persona__nombre">Yesua</span>
                    <span class="persona__funcion">Estudiante de la Universidad Veracruzana</span>
                </div>
                <div class="persona">
                    <div class="persona__imagen persona__imagen--janet"></div>
                    <span class="persona__nombre">Ana Janet</span>
                    <span class="persona__funcion">Estudiante de la Universidad Veracruzana</span>
                </div>
                <div class="persona">
                    <div class="persona__imagen persona__imagen--fatima"></div>
                    <span class="persona__nombre">Fátima</span>
                    <span class="persona__funcion">Estudiante de la Universidad Veracruzana</span>
                </div>

                <div class="persona">
                    <div class="persona__imagen persona__imagen--axel"></div>
                    <span class="persona__nombre">Axel Rafael</span>
                    <span class="persona__funcion">Estudiante de la Universidad Veracruzana</span>
                </div>

            </div>
            <h3 className="parrafo__Quienes">Somos un grupo de estudiantes de la carrera de Desarrollo del Talento Humano en las Organizaciones, llevando a cabo una capacitación de atención a públicos específicos y ponemos está página para tu uso.</h3>    
            </section>
    )
}

export default Quienes;
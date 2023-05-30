import "./LenguajeInclusivo.css"
import "../Capacitismo/Capacitismo.css"

const LenguajeInclusivo = () => {
  return (
    <section className="principal">
      <div className="container">
        <article className="card">
          <h1 className="title-page"> <span className="resaltar">Lenguaje Inclusivo </span></h1>
          <p className="parrafo">El lenguaje inclusivo es una herramienta útil para luchar contra el capacitismo y sus arraigadas
manifestaciones. El capacitismo es una visión errónea y sesgada de la discapacidad de la que se desprende la idea
de que la vida de una persona con discapacidad no merece la pena ser vivida. El capacitismo puede adoptar
muchas formas, entre ellas la de un lenguaje hiriente.
 <br/> <br/>
Los términos consignados en una misma casilla del cuadro que viene a continuación no deben considerarse como
sinónimos, sino como pertenecientes a una misma categoría..</p>
                    
            <table class="styled-table">
              <thead>
                <tr>                
                  <th>Lenguaje Recomendado</th> 
                  <th>Lenguaje Inapropiado</th>
                </tr>
              </thead>
              <tbody>
                <tr> <td className="justificar">Persona(s) con discapacidad Persona con [tipo de discapacidad]</td>
                  <td className="justificar">Discapacitado, enfermo, anormal, incapacitado, deficiente, minusválido, diferente, disminuido, deforme,
                    limitado, menoscabado, persona(s) con necesidades especiales, persona(s) que vive(n) con una discapacidad, persona(s) con diversidad
                    funcional, persona(s) con capacidades diferentes.</td> </tr>

                <tr><td td className="justificar">Persona sin discapacidad, resto de la población</td> 
                <td td className="justificar">Persona normal, persona sana</td></tr>
                <tr> <td td className="justificar">Tener/presentar[una discapacidad/una deficiencia/otro]</td> <td td className="justificar">Padecer, sufrir aquejado, afligido, afectado, golpeado</td></tr>
                <tr> <td td className="justificar">Persona con discapacidad intelectual persona con deficiencia intelectual</td> <td td className="justificar">Retrasado, retrasado mental, subnormal, anormal, deficiente, trastornado</td></tr>
                <tr> <td td className="justificar">Persona con discapacidad psicosocial</td> <td td className="justificar">Loco, trastornado, enfermo mental, perturbado, demente</td></tr>
                <tr> <td td className="justificar">Persona sorda <br/> Persona con sordera <br/>Persona con discapacidad auditiva 
                <br/> Persona con deficiencia auditiva Persona hipoacúsica <br/> Persona sordomuda <br/>Persona sordociega</td> 
                <td td className="justificar">Sordo, mudo, sordomudo</td></tr>
                <tr> <td td className="justificar">Persona ciega <br/> Persona con ceguera <br/>Persona con discapacidad visual 
                <br/>Persona con deficiencia visual <br/>Persona con capacidad visual reducida <br/>Persona con baja visión
                <br/>Persona sordociega</td> 
                <td td className="justificar">Ciego, invidente, corto de vista, cegato</td></tr>
                <tr> <td td className="justificar">Persona con discapacidad física, Persona con deficiencia física</td> 
                <td td className="justificar">inválido, paralítico, tullido, cojo, lisiado, manco, impedido, deforme, persona con problemas físicos, persona limitada</td></tr>
                <tr> <td td className="justificar">persona en silla de ruedas persona con movilidad reducida</td> 
                <td td className="justificar">confinado en una silla de ruedas, postrado</td></tr>                
                {/* <tr> <td td className="justificar">3</td> <td td className="justificar">Nuria</td></tr> */}

              </tbody>
            </table>          
          
        </article>

      </div>
    </section>
  )
}

export default LenguajeInclusivo
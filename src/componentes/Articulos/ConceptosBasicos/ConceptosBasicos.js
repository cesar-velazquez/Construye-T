import "./ConceptosBasicos.css"
import "../Capacitismo/Capacitismo.css"

const ConceptosBasicos = () => {
  return (
    <section className="principal">
      <div className="container">
        <article className="card">
          <h1 className="title-page"> <span className="resaltar">Integración e Inclusión </span></h1>
          <p className="parrafo"> Los conceptos de “integración” e “inclusión” son muy diferentes. <br/>La integración es el proceso por el que una
            persona se adapta a la sociedad, mientras que inclusión se refiere al proceso de cambiar la sociedad para que
            incluya a todas las personas, independientemente de que presenten una deficiencia o no. Cuando hablamos de las
            personas con discapacidad, “inclusión” tiene una connotación positiva, mientras que “integración” tiene una
            connotación negativa. Por lo tanto, los términos no son intercambiables.</p>
          <div className="centrar__img">
            <img class="articulo__imagen" src="/img/articulos/ConceptosBasicos/conceptosBasicos.jpg" alt='Conceptos Básicos' />
          </div>
        </article>

      </div>
    </section>
  )
}

export default ConceptosBasicos
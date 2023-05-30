import "./MetodosComun.css"
import "../Capacitismo/Capacitismo.css"

const MetodosComun = () => {
  return (
    <section className="principal">
      <div className="container">
        <h1 className="title-page">Métodos de Comunicación Para Personas con Discapacidad</h1>
        <article className="card">
          <br />
          <h2 className="title-page">Lengua de Señas</h2>
          <p className="parrafo">Es un lenguaje gestual que utiliza las manos, los dedos y otros movimientos corporales para comunicar ideas
            y conceptos. Es utilizado por personas con discapacidad auditiva o sordas.</p>
            <div className="centrar__img">
          <img class="enfoque__imagen" src="/img/articulos/metodosComun/lenguaseñas.jpg" alt='Lenguaje de Señas' />
          </div>
        </article>

        <article className="card">
          <br />
          <h2 className="title-page">Sistemas Braile</h2>
          <p className="parrafo">Es un sistema de escritura táctil que permite a las personas ciegas leer y escribir utilizando sus dedos.
            El sistema Braille se compone de puntos en relieve que representan letras y números.</p>
            <div className="centrar__img">
          <img class="enfoque__imagen" src="/img/articulos/metodosComun/braile.jpg" alt='Lenguaje de Señas' />
          </div>
        </article>

        <article className="card">
          <br />
          <h2 className="title-page">Lectura Fácil</h2>
          <p className="parrafo">Es un tipo de comunicación escrita que utiliza un lenguaje sencillo y accesible, con frases cortas y un vocabulario limitado.
            Se utiliza para personas con discapacidad cognitiva o intelectual.</p>
            <div className="centrar__img">
          <img class="enfoque__imagen" src="/img/articulos/metodosComun/lecturafacil.jpg" alt='Lenguaje de Señas' />
          </div>
        </article>

        <article className="card">
          <br />
          <h2 className="title-page">Comunicación Aumentativa y Alternativa (CAA)</h2>
          <p className="parrafo">Es un conjunto de herramientas y estrategias que se utilizan para mejorar la comunicación de personas con discapacidad que tienen dificultades para hablar o comunicarse verbalmente.
            La CAA puede incluir pictogramas, tableros de comunicación, dispositivos de voz sintética y otros medios.</p>
            <div className="centrar__img">
          <img class="enfoque__imagen" src="/img/articulos/metodosComun/caa.jpg" alt='Lenguaje de Señas' />
          </div>
        </article>
      </div>
    </section>

  )
}

export default MetodosComun
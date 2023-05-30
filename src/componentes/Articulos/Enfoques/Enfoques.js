import "../Capacitismo/Capacitismo.css"

const Enfoques = () => {
  return (
    <section className="principal">

      <div className="container">

        <article className="card">
          <h2 className="title-page">Primer Enfoque: <br/> <span className="resaltar">Modelo Asistencialista. </span></h2>
          <p className="parrafo">Se pensaba que el origen era algún pecado mortal o alguna desobediencia grave a los dioses
            La persona era vista como objeto de lástima y caridad o como un verdadero lastre social.</p>
          <div className="centrar__img">
            <img class= "enfoque__imagen" src="/img/articulos/enfoques/primerenofoque.jpg" alt='articulo1' />
          </div>
        </article>

        <article className="card">
          <h2 className="title-page" >Segundo Enfoque: <br/> <span className="resaltar">Modelo Médico-Rehabilitador</span></h2>
          <p className="parrafo">Al institucionalizarse el “asistencialismo” por medio de la beneficencia se dio paso a
            este modelo, el cual ya no consideraba a la persona como minusválida sino como enferma y apta para ser rehabilitaba.</p>
          <div className="centrar__img">
            <img class="enfoque__imagen" src="/img/articulos/enfoques/segundoenfoque.jpg" alt='articulo1' />
          </div>
        </article>


        <article className="card">
          <h2 className="title-page" >Tercer Enfoque: <br/><span className="resaltar" >Modelo Social con Enfoque en Derechos Humanos</span></h2>
          <p className="parrafo">EL INDIVIDUO CON DISCAPACIDAD DEJA DE SER UN PACIENTE PARA SER UN CIUDADANO.
            <br />
            <br />
            Este modelo parte de la dignidad humana, porque reconoce que los elementos discapacitantes se derivan de la estructura social y no de la persona.
            Evita cualquier asistencialismo o reducción del valor de la persona.
            Todas las políticas públicas deben garantizar la inclusión social de las personas con discapacidad.</p>
          <div className="centrar__img">
            <img class="enfoque__imagen" src="/img/articulos/enfoques/tercerenfoque.jpg" alt='articulo1' />
          </div>
        </article>
      </div>
    </section>
  )
}

export default Enfoques
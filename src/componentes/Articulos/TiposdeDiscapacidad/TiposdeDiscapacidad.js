import "./TiposdeDiscapacidad.css"
import "../Capacitismo/Capacitismo.css"

const TiposdDisc = () => {
    return (
        <section className="principal">
            <div className="container">
                <h1 className="title-page">Tipos de Discapacidad</h1>
                <article className="card">
                    <h2 className="title-page">Motriz</h2>
                    <p className="parrafo__discapacidad"> Personas que no se pueden mover o les cuesta más trabajo. A veces usan una silla con ruedas, una andadera o un bastón. </p>
                        <div className="centrar__img">
                    <img class="enfoque__imagen" src="/img/articulos/tiposdDisc/motriz.jpg" alt='articulo1' />
                    </div>
                </article>

                <article className="card">
                    <h2 className="title-page">Auditiva</h2>
                    <p className="parrafo__discapacidad">Son personas que no escuchan o escuchan menos.
                        Algunas usan un aparato en su oído o que ponen dentro de su cabeza.</p>
                        <div className="centrar__img">
                    <img class="enfoque__imagen" src="/img/articulos/tiposdDisc/auditiva.jpg" alt='auditiva' />
                    </div>
                </article>

                <article className="card">
                    <h2 className="title-page" >psicosocial</h2>
                    <p className="parrafo__discapacidad"> Relacionada con las emociones.
                        Algunas van a ver a doctores que se llaman “psiquiatras”. O a “psicólogos” con los cuales hablan de cómo se sienten.</p>
                        <div className="centrar__img">
                    <img class="enfoque__imagen" src="/img/articulos/tiposdDisc/psicosocial.jpg" alt='articulo1' />
                    </div>
                </article>

                <article className="card">
                    <h2 className="title-page">Visual</h2>
                    <p className="parrafo__discapacidad">Son personas que no ven o ven menos aunque usen lentes.</p>
                    <div className="centrar__img">
                    <img class="enfoque__imagen" src="/img/articulos/tiposdDisc/visual.jpg" alt='articulo1' />
                    </div>
                </article>

                <article className="card">
                    <h2 className="title-page">Intelectual</h2>
                    <p className="parrafo__discapacidad">Son personas que les cuesta más trabajo entender y aprender. A veces les cuesta más trabajo comunicarse.</p>
                    <div className="centrar__img">
                    <img class="enfoque__imagen" src="/img/articulos/tiposdDisc/Intelectual.jpg" alt='articulo1' />
                    </div>
                </article>

                <article className="card">
                    <h2 className="title-page">Neurodiversa</h2>
                    <p className="parrafo__discapacidad">(como las personas con autismo)
                        A veces escuchan más fuerte y se tapan los oídos.
                        Les molesta que las cosas no estén ordenadas.
                        Les cuesta trabajo saber cómo se sienten las personas.</p>
                        <div className="centrar__img">
                    <img class="enfoque__imagen" src="/img/articulos/tiposdDisc/Neurodiversa.jpg" alt='articulo1' />
                    </div>
                </article>
            </div>
        </section>
    )
}

export default TiposdDisc
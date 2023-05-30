import './Menu.css';
import { Outlet, Link } from "react-router-dom";

const Menu = () => {
    return <div>

        <div className='barra'>
            <nav className='barra__navegacion'>
                <ul className='urderlist'>
                    <li className='barra__enlace'>
                        <Link to="/Articulos" className='enlace'>Taller de Atención a Grupos Especificos</Link>
                    </li>
                    <li className='barra__enlace'>
                        <Link to="/Quienes" className='enlace'>¿Quiénes Somos?</Link>
                    </li>
                    {/* <li className='head__enlace' >
                        <Link to="/Enfoques" className='enlace'>Contáctanos</Link>
                    </li> */}
                    {/* <li className='head__enlace' >
                        <Link to="/">Capacitismo</Link>
                    </li> */}
                </ul>
            </nav>            
            <Outlet />
        </div>

        <div className='header1'>
            {/* <header className="header"> */}
            <header className="section1">
                <img className="head__logo" src="/img/inclusion.jpg" alt='banner' />
                <h2 class="banner__titulo">Atención de Grupos Especificos</h2>
            </header>

            {/* <div className='div__footer'>
             <footer className='rodapie__footer'>
                <img className="rodapie" src="/img/footer/footeruv.jpg" alt='Logo UV' />                
            </footer> 
        </div> */}

        </div>

           
  

    </div>

}

export default Menu;


import './App.css';
import { Routes, Route } from 'react-router-dom';
import Articulos from './componentes/Pages/Articulos';
import Quienes from './componentes/Quienes/Quienes';
import Menu from '../src/componentes/Menu/Menu';
import Enfoques from './componentes/Articulos/Enfoques/Enfoques';
import Capacitismo from './componentes/Articulos/Capacitismo/Capacitismo';
import MetodosComun from './componentes/Articulos/MetodosComunicacion/MetodosComun';
import LenguajeInclusivo from './componentes/Articulos/LenguajeInclusivo/LenguajeInclusivo';
import ConceptosBasicos from './componentes/Articulos/ConceptosBasicos/ConceptosBasicos';
import TiposdeDiscapacidad from './componentes/Articulos/TiposdeDiscapacidad/TiposdeDiscapacidad';
import Internacionalizacion from './componentes/Articulos/Internacionalizacion/Internacionalizacion';



function App() {
  return (    
    <div>           
                                
      <Routes>          
     <Route path="/" element={< Menu/>}>                        
     <Route path="/Articulos" element={< Articulos/>}/>   
     <Route path="/Enfoques" element={<Enfoques/>}/>
     <Route path="/Capacitismo" element={<Capacitismo/>}/>
     <Route path="/LenguajeInclusivo" element={<LenguajeInclusivo/>}/>
     <Route path="/ConceptosBasicos" element={<ConceptosBasicos/>}/>
     <Route path='/TiposdeDiscapacidad' element={<TiposdeDiscapacidad/>}/>    
     <Route path="/MetodosComun" element={<MetodosComun/>}/>   
     <Route path="/Internacionalizacion" element={<Internacionalizacion/>}/>  
     <Route path="/Quienes" element={<Quienes/>}/>       
     <Route path="*" element={<Menu />} />               
     </Route>     
     </Routes>     
     
    </div>

  );
}

export default App;


  {/* <Header/> */}
     {/* <Formulario/>            */}
      {/* <Articulos/>   */}
      {/* <Quienes/>    */}
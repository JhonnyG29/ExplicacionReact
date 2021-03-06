import './styles/styles.css';
import logo from './media/logo.png';
import borderCollie from './media/borderCollie.jpg';
import rhodesian from './media/rhodesian.jpg';

function App() {

  return (
    <div className='App'>
      <header>
        
        <ul className='navbar'>
          <li>
            <img src={logo} alt='imagen' className='logo' />
          </li>
          <li>
            <button className='botonGenerico mainButton'>Nuevo post</button>
          </li>
          <li>
            <div className='buscar'>
              <input placeholder='Buscar una raza' />
              <i className='fas fa-search botonGenerico iconoBusqueda'></i>
            </div>
          </li>
          <li>
            <button className='botonGenerico secondaryButton'>Login</button>
          </li>
          <li>
            <button className='botonGenerico mainButton'>Registro</button>
          </li>
        </ul>
      </header>
      <main>
        <section>
          <h1>Razas de Perros</h1>
          <ul className='breedCardContainer'>
           <CardRazasPerros nombreRaza= "Border Collie" imagen ={borderCollie} />
           <CardRazasPerros nombreRaza= "Rhodesian" imagen ={rhodesian} />
           <CardRazasPerros nombreRaza= "Rhodesian" imagen ={rhodesian} />
           <CardRazasPerros nombreRaza= "Rhodesian" imagen ={rhodesian} />
           <CardRazasPerros nombreRaza= "Rhodesian" imagen ={rhodesian} />
           <CardRazasPerros nombreRaza= "Rhodesian" imagen ={rhodesian} />
          </ul>
        </section>
        <section></section>
      </main>
      <footer></footer>
    </div>
  );
}

function CardRazasPerros ({nombreRaza,imagen }){
  return(
    <li className='breedCard' >
      <div className='contenedorImagen'>
        <img src={imagen} alt={nombreRaza} />
      </div>
      <span className='breedTitle'>{nombreRaza} </span>
    </li>
  );
}
export default App;

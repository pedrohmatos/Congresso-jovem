import './App.css'
import blueTshirt from './assets/arte_01.png';
import ChangeShirts from './components/ChangeShirts';
import GoldenLink from './components/GoldenLink';
import Specification from './components/Specification';

function App() {

  return (
    <>
      <header className='header'>
        <p className='eyebrow'>Ministério de Jovens IBNG</p>
        <h1 className='header-title'>
          Manifeste
          <br />
          <span className='title-emphasis'>o Reino</span>
        </h1>
        <div className='year'>2026</div>

        <GoldenLink>Fazer pedido</GoldenLink>

        <div className='mouse-icon'></div>

      </header>
      <main className='main'>
        <section>
          <div className='first-section-titles'>
            <p className='eyebrow-2'>Coleção 2026</p>
            <h2 className='first-section-title'>Modelos oficiais</h2>
          </div>
          <div className='first-section'>
            <div>
              <figure className='tshirt-container'>
                <img src={blueTshirt} alt="blue-shirt" className='tshirt' />
                <figcaption className='tshirt-caption-container'>
                  <ChangeShirts>Azul marinho</ChangeShirts>
                  <ChangeShirts>Mostarda</ChangeShirts>
                </figcaption>
              </figure>
            </div>
            <aside className='specification-container'>
              <h3 className='printed-tshirt'>Estampa Exclusiva</h3>
              <Specification title='Modelos' description='Tradicional & Oversized' />
              <Specification title='Cores' description='Azul Marinho & Mostarda' />
              <Specification title='Tamanhos' description='P . M . G . GG . XG' />
              <div className='price-container'>
                <span>A partir de</span>
                <span className='price'> R$ 45</span>
              </div>
              <GoldenLink>Garantir a minha</GoldenLink>
            </aside>
          </div>

        </section>
      </main>
      <footer>
        <p className='church'>Igreja Batista Nova Geração</p>
        <small>© 2026 IBNG Itabuna. Todos os direitos reservados.</small>
      </footer>
    </>
  )
}

export default App

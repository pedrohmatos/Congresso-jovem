import './App.css'
import blueTshirt from './assets/azul-marinho.jpeg';

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

        <a href="#" className='order'>Fazer pedido</a>

        <div className='mouse-icon'></div>

      </header>
      <main className='main'>
        <section className='first-section'>
          <div>
            <div className='first-section-titles'>
              <p className='eyebrow-2'>Coleção 2026</p>
              <h2 className='first-section-title'>Modelos oficiais</h2>
            </div>
            <figure>
              <img src={blueTshirt} alt="blue-shirt" className='tshirt' />
              <figcaption className='tshirt-caption-container'>
                <button type='button' className='tshirt-caption'>
                  Azul marinho
                </button>
                <button type='button' className='tshirt-caption'>
                  Mostarda
                </button>
              </figcaption>
            </figure>
          </div>

          <h3 className='printed-tshirt'>Estampa Exclusiva</h3>

          <aside className='specification-container'>
            <div className='specification'>
              <span className='specification-title'>Modelos</span>
              <span className='specification-description'>Tradicional & Oversized</span>
            </div>
            <div className='specification'>
              <span className='specification-title'>Cores</span>
              <span className='specification-description'>Azul Marinho & Mostarda</span>
            </div>
            <div className='specification'>
              <span className='specification-title'>Tamanhos</span>
              <span className='specification-description'>P . M . G . GG . XG</span>
            </div>

            <div className='price-container'>
              <span>A partir de</span>
              <span className='price'> R$ 45</span>
            </div>
            <a href="#" className='buy'>Garantir a minha</a>
          </aside>

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

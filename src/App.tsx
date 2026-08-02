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
        </section>
      </main>
    </>
  )
}

export default App

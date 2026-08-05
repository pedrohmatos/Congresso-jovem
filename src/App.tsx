import { useState } from 'react';
import './App.css'
import blueTshirt from './assets/arte_01.png';
import mustardTshirt from './assets/arte_03.png'
import ChangeShirts from './components/ChangeShirts';
import GoldenLink from './components/GoldenLink';
import Specification from './components/Specification';
import SectionTitles from './components/SectionTitles';
import VolunteerTeam from './components/VolunteerTeam';
import Price from './components/Price';

type ShirtColor = 'blue' | 'mustard';

const shirtColor = {
  blue: blueTshirt,
  mustard: mustardTshirt,
};

function App() {

  const [currentShirt, setCurrentShirt] = useState<ShirtColor>('blue');

  function handleShirtChange(color: ShirtColor): void {
    setCurrentShirt(color);
  }

  return (
    <>
      <header className='header'>
        <p className='eyebrow'>Ministério de Jovens IBNG</p>
        <h1 className='header-h1 title'>
          O Derramar do
          <br />
          <span className='title-emphasis'>Espírito Santo</span>
        </h1>
        <div className='year'>2026</div>

        <GoldenLink hrefText='#shirt' outside={false}>Conferir camisas</GoldenLink>
        <div className='mouse-icon'></div>

      </header>
      <main className='main'>
        <section id='shirt'>
          <SectionTitles smallText='Coleção 2026' bigText='Modelos oficiais' />
          <div className='first-section'>
            <div>
              <figure className='tshirt-container'>
                <img src={shirtColor[currentShirt]} alt="t-shirt image" className='tshirt' />
                <figcaption className='tshirt-caption-container'>
                  <ChangeShirts
                    onChangeShirt={() => handleShirtChange('blue')}
                    active={currentShirt === 'blue'}
                  >
                    Azul marinho
                  </ChangeShirts>
                  <ChangeShirts
                    onChangeShirt={() => handleShirtChange('mustard')}
                    active={currentShirt === 'mustard'}
                  >
                    Mostarda
                  </ChangeShirts>
                </figcaption>
              </figure>
            </div>
            <aside className='specification-container'>
              <h3 className='printed-tshirt'>Estampa Exclusiva</h3>
              <Specification title='Modelos' description='Tradicional & Oversized' />
              <Specification title='Cores' description='Azul Marinho & Mostarda' />
              <Specification title='Tamanhos' description='P . M . G . GG . XG' />

              <div className='price-container'>
                <Price title='Tradicional' price={45} />

                <Price title='Oversized' price={60} />
              </div>
              
              <GoldenLink hrefText={import.meta.env.VITE_LINK_TO_FORMS} outside={true}>Garantir a minha</GoldenLink>
            </aside>
          </div>

        </section>
        <hr className='row' />
        <section id='volunteers' className='volunteers'>
          <SectionTitles smallText='Precisamos de você' bigText='Seja um voluntário' />
          <div className='second-section'>
            <VolunteerTeam
              title='Recepção'
              description='Equipe que será responsável por receber os irmãos com alegria e fornecer informações gerais.'
            />

            <VolunteerTeam
              title='Apoio'
              description='Equipe que garante que tudo funcione. Inclui manter a limpeza da igreja e ornamentação, repor a água e organizar as cadeiras antes e depois do evento.'
            />

            <VolunteerTeam
              title='Intercessão'
              description='Equipe que ficará dedicada a orar pelo evento, pregadores, louvor e todos os irmãos presentes.'
            />

            <VolunteerTeam
              title='Equipe do lanche'
              description='Equipe responsável por preparar, organizar e distribuir os lanches ou refeições para os irmãos e equipes de voluntários nos intervalos.'
            />

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

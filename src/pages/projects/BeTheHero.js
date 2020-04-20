import React from 'react';
import './project.css'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
{/* <img src="https://i.imgur.com/VlOfKcn.jpg" alt=""/>
<img src="https://i.imgur.com/fRTX4vw.jpg" alt=""/>
<img src="https://i.imgur.com/jFUgyaS.jpg" alt=""/>
<img src="https://i.imgur.com/QqcLMM8.png" alt=""/>
<img src="https://i.imgur.com/Z0svlVC.png" alt=""/> */}
export default function BeTheHero() {

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center">
      <div className="card">
        <div className="card-header">
          Be The Hero
        </div>
        <div className="card-body">
          Descrição:
          <p>Aplicação web e mobile utilizando ReactJS, React Native e NodeJS onde ONG's locais podem se cadastrar pelo site e adicionar casos que necessitem de ajuda financeira. </p>
        </div>
        <div className="card-footer">
          <a target="_blank" href="https://github.com/alvesrafa/be-the-hero">Ver no git</a>
        </div>
      </div>
    </div>
  )
}
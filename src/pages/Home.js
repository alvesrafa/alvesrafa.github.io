import React from 'react';

export default function Home() {
  return (

    <section id="home">
      <div className="content-home">

        <div className="foto-perfil">
          <img src="https://avatars0.githubusercontent.com/u/32360540?s=400&u=996cf0fbc6f57670dd8d76863adced6be6ba223e&v=4" alt="Foto Rafael Alves"/>
        </div>
          
        <div className="apresentacao">
            <h3>Olá, obrigado por me visitar!</h3>
            <hr/>
            <h1>Rafael Alves</h1>
            <h2>Desenvovledor Web</h2>
            <p>20 anos</p>
            <p>
              Formado em Análise e Desenvolvimento de Sistemas - IFSP, 2019.
            </p>
            <p>
              <i className="fas fa-map-marker-alt"></i> Ilhabela – São Paulo – Brasil
            </p>
            <div className="links">
              <a href="mailto:alvesrafael17@hotmail.com">
                <i className="fas fa-envelope"></i>
              </a>
              <a target="_blank" href="https://github.com/alvesrafa">
                <i className="fab fa-github"></i>
              </a>
              <a target="_blank" href="https://www.linkedin.com/in/alvRafael/">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
            
        </div>

      </div>
      <div className="content-ul">
        <ul>
          <li>
            <a href="#about">Sobre</a>
          </li>
          <li>
            <a href="#skills">Habilidades</a>
          </li>
          <li>
            <a href="#projects">Projetos</a>
          </li>
        </ul>
      </div>
    </section>
  )
}
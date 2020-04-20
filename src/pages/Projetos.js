import React from 'react';
import { Link } from 'react-router-dom';

export default function Projetos() {
  return (
    <section id="projects">
      <h1>Projetos desenvolvidos</h1>

      <div class="card">
        <div class="card-header">
          <h2>View Hub</h2>
          <h4>React Native, Styled Components</h4>
        </div>
        <div class="card-body">
          <div class="descricao">
            Aplicativo mobile para buscar e ver perfis/repositórios do GitHub de forma dinâmica. Utilizando React Native consumindo a API do GitHub V3 (https://developer.github.com/v3/)
          </div>
        </div>
        <div class="card-footer">
          <div class="links">
            <a target="_blank" href="https://github.com/alvesrafa/view-hub/blob/master/README.md">Ver Readme.md <i class="fab fa-github"></i></a>
          </div>
        </div>
      </div>
      
      <div class="card">
        <div class="card-header">
          <h2>WeatherNow</h2>
          <h4>ReactJS e React Native</h4>
        </div>
        <div class="card-body">
          <div class="descricao">
            Aplicação para verificação clímatica de qualquer cidade do mundo! Uma aplicação com informações confiáveis da empresa internacional AccuWeather
          </div>
        </div>
        <div class="card-footer">
          <div class="links">
            <a target="_blank" href="https://github.com/alvesrafa/weather-now/blob/master/README.md">Ver Readme.md <i class="fab fa-github"></i></a>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-header">
          <h2>RastreiAqui</h2>
          <h4>NodeJS, ReactJS e React Native</h4>
        </div>
        <div class="card-body">
          <div class="descricao">
            Aplicação para o rastreamento de encomendas online, contendo todos os dados da base de dados do Correios, porém muito mais rapido e facíl de acessar.
          </div>
        </div>
        <div class="card-footer">
          <div class="links">
            <a target="_blank" href="https://github.com/alvesrafa/app-rastreiaqui/blob/master/README.md">Ver Readme.md <i class="fab fa-github"></i></a>
          </div>
        </div>
      </div>
      
      <div class="card">
        <div class="card-header">
          <h2>Be The Hero</h2>
          <h4>NodeJS, SQL com Knex, Jest, ReactJS, Styled Components e React Native</h4>
        </div>
        <div class="card-body">
          <div class="descricao">
            Aplicação Be The Hero ❤️ onde ONG's locais podem se cadastrar pelo site e adicionar casos que necessitem de ajuda financeira. Os Heróis utilizam a aplicação mobile, selecionam o caso que desejam ajudar e entram em contato com a ONG por WhatsApp ou E-mail.💕
          </div>
        </div>
        <div class="card-footer">
          <div class="links">
            <a target="_blank" href="https://github.com/alvesrafa/be-the-hero/blob/master/README.md">Ver Readme.md <i class="fab fa-github"></i></a>
          </div>
        </div>
      </div>
      
      <div class="card">
        <div class="card-header">
          <h2>Making Card CSS</h2>
          <h4>ReactJS, Styled Components, HTML e CSS</h4>
        </div>
        <div class="card-body">
          <div class="descricao">
            Aplicativo mobile para buscar e ver perfis/repositórios do GitHub de forma dinâmica. Utilizando React Native consumindo a API do GitHub V3 (https://developer.github.com/v3/)
          </div>
        </div>
        <div class="card-footer">
          <div class="links">
            <a target="_blank" href="https://github.com/alvesrafa/making-card/blob/master/README.md">Ver Readme.md <i class="fab fa-github"></i></a>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-header">
          <h2>UCRM-Assistência Técnica</h2>
          <h4>PHP (Laravel), MySQL, HTML e JavaScript</h4>
        </div>
        <div class="card-body">
          <div class="descricao">
            UCRM para gerenciamento de uma Assistência Técnica, contendo controle de usuários, peças, serviços, técnicos e ordens de serviços. Projeto desenvolvido no TCC do curso Técnologo em Analise e Desenvolvimento de Sistemas do IFSP.
          </div>
        </div>
        <div class="card-footer">
          <div class="links">
            <a target="_blank" href="https://github.com/rodrigosborges/FreeERP/blob/assistencia_tecnica/README.md">Ver Readme.md <i class="fab fa-github"></i></a>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-header">
          <h2>DevRadar</h2>
          <h4>NodeJS, MongoDB, ReactJS e React Native</h4>
        </div>
        <div class="card-body">
          <div class="descricao">
            Projeto desenvolvido durante a Semana Omnistack 10. Uma aplicação que ajuda na localização de desenvolvedores baseando-se em sua localização e técnologias de estudo.
          </div>
        </div>
        <div class="card-footer">
          <div class="links">
            <a target="_blank" href="https://github.com/alvesrafa/dev-radar/blob/master/README.md">Ver Readme.md <i class="fab fa-github"></i></a>
          </div>
        </div>
      </div>
    </section>
  )
}
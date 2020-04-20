import React from 'react';
import './project.css'
export default function Weather() {
  return (
    <div className="container-fluid d-flex justify-content-center align-items-center">
      <div className="card">
        <div className="card-header">
          WeatherNow
        </div>
        <div className="card-body">
          Descrição:
          <p>Aplicação para verificação climática. Desenvolvido apenas o front-end consumindo a API pública da empresa AccuWeather.</p>
          <div className="galeria">
            <p>imagens serão adicionadas futuramente.</p>
            <p>Demais informações no Readme do GitHub. Acesse o link abaixo</p>
          </div>
        </div>
        <div className="card-footer">
          <a target="_blank" href="https://github.com/alvesrafa/weather-now">Ver no git</a>
        </div>
      </div>
    </div>
  )
}
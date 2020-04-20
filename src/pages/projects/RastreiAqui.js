import React from 'react';
import './project.css'
export default function RastreiAqui() {
  return (
    <div className="container-fluid d-flex justify-content-center align-items-center">
      <div className="card">
        <div className="card-header">
          RastreiAqui
        </div>
        <div className="card-body">
          Descrição:
          <p>Aplicação web para rastreio de encomendas que estão cadastrados nos Correios BR. Utilizando NodeJS e React JS.</p>
          <div className="imagens">
            
          </div>
        </div>
        <div className="card-footer">
          <a target="_blank" href="https://github.com/alvesrafa/app-rastreiaqui">Ver no git</a>
        </div>
      </div>
    </div>
  )
}
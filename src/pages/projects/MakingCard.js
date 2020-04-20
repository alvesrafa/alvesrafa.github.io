import React from 'react';
import './project.css'
export default function MakingCard() {
  return (
    <div className="container-fluid d-flex justify-content-center align-items-center">
      <div className="card">
        <div className="card-header">
          Making Card CSS
        </div>
        <div className="card-body">
          Descrição:
          <p>
            An application for you to create your css card. 
            Você pode montar seu 'card' utilizando as ferramentas da página e instantaneamente o código CSS estará disponível para utilizar.
          </p>
          <div className="galeria">
            <p>IMAGENS SERÃO ADICIONADAS FUTURAMENTE</p>
          </div>
        </div>
        <div className="card-footer">
          <a target="_blank" href="https://github.com/alvesrafa/making-card">Ver no git</a>
        </div>
      </div>
    </div>
  )
}
import React from 'react';
import './project.css'
export default function ViewHub() {
  return (
    <div className="container-fluid d-flex justify-content-center align-items-center">
      <div className="card">
        <div className="card-header">
          ViewHub
        </div>
        <div className="card-body">
          Descrição:
          <p>Aplicativo mobile para buscar e ver perfis/repositórios do GitHub de forma dinâmica.</p>
          <div className="imagens">

          </div>
        </div>
        <div className="card-footer">
          <a target="_blank" href="https://github.com/alvesrafa/view-hub">Ver no git</a>
        </div>
      </div>
    </div>
  )
}
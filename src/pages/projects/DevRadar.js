import React from 'react';
import './project.css'
export default function DevRadar() {
  return (
    <div className="container-fluid d-flex justify-content-center align-items-center">
      <div className="card">
        <div className="card-header">
          Dev Radar
        </div>
        <div className="card-body">
          Descrição:
          <p>Aplicação para encontro de desenvolvedores baseado-se em suas técnologias utilizadas. Desenvolvida durante a Semana OmniStack#10. Técnologias: Node.JS, reactJS e React Native</p>
          <div className="imagens">
            
          </div>
        </div>
        <div className="card-footer">
          <a target="_blank" href="https://github.com/alvesrafa/dev-radar">Ver no git</a>
        </div>
      </div>
    </div>
  )
}
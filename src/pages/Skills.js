import React from 'react';

export default function Skills() {
  return (
    <section id="skills">
        <h1>Conhecimentos</h1>
        <div class="card">
          <div class="card-header">
            <h2>Frontend</h2>
          </div>
          <div class="card-body">
            <div class="icon">
              <i class="fas fa-paint-brush"></i>
            </div>
            <ul>
              <li>ReactJS</li>
              <li>React Native</li>
              <li></li>
              <li>HTML5 e CSS3</li>
              <li>Bootstrap e Materialize</li>
              <li>JQuery</li>
            </ul>
          </div>
        </div>
        <div class="card">
          <div class="card-header">
            <h2>Backend</h2>
          </div>
          <div class="card-body">
            <div class="icon">
              <i class="fas fa-cogs"></i>
            </div>
            <ul>
              <li>NodeJS</li>
              <li>Desenvolvimento PHP com Laravel</li>
              <li>Banco de Dados SQL</li>
            </ul>
          </div>
        </div>
        <div class="card">
          <div class="card-header">
            <h2>Outros</h2>
          </div>
          <div class="card-body">
            <div class="icon">
              <i class="fab fa-sketch"></i>
            </div>
            <ul>
              <li>Git + Github</li>
              <li>Metodologia de desenvolvimento (Scrum, XP)</li>
              <li>Sistemas Windows</li>
            </ul>
          </div>
        </div>
    </section>
  )
}
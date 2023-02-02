import React from 'react'
import '../styles/components/projetos.sass'
import Project1 from '../img/Gallery.jpg'
import Project2 from '../img/Pokemom.gif'
import Project3 from '../img/Calculator.gif'
import Loading from '../img/loading.gif'



const ProjetosContainer = () => {
  return (
  <section className='projects-container'>   
        <div class="sessao-header">
          <h2>Projetos</h2>
        </div>
        <div class="projetos">
          <div class="card">
            <div class="card-img-wrapper">
              <a href="https://bespoke-croquembouche-f977f9.netlify.app/"><button className='btnProject'>Clique-me</button></a>
              <a href="https://bespoke-croquembouche-f977f9.netlify.app/"><img src={Project1} alt="Gallery" /></a>
              <p className='descricao'>Project Galery</p>
            </div>
          </div>
          <div class="card">
            <div class="card-img-wrapper">
              <a href="https://leafy-squirrel-c8d8ca.netlify.app/"><button className='btnProject'>Clique-me</button></a>
              <a href="https://leafy-squirrel-c8d8ca.netlify.app/"><img src={Project2} alt="Pokemon" /></a>
              <p className='descricao'>Project Pokemon</p>
            </div>
          </div>
          <div class="card">
            <div class="card-img-wrapper">
              <a href="https://inspiring-tarsier-9c688c.netlify.app/"><button className='btnProject'>Clique-me</button></a>
              <a href="https://inspiring-tarsier-9c688c.netlify.app/"><img src={Project3} alt="Calculadora" /></a>
              <p className='descricao'>Project Calculator</p>
            </div>
            </div>
            <div class="card">
            <div class="card-img-wrapper">
              <a href="#"><button className='btnProject' id='btnbreve'>BREVE</button><img src={Loading} id='breveimg' alt="Breve" /></a>
              <a href="#"></a>
              <p className='descricao' id='breveid'>New Project💡</p>                            
            </div>
            </div>
          </div>
  </section>
  ); 
};

export default ProjetosContainer
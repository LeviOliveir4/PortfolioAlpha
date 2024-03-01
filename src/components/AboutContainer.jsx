import Formacao from "./Formação";
import "../styles/components/about.sass";
import { useState } from 'react';

const AboutContainer = () => {
  const [activeSection, setActiveSection] = useState(null);

  const handleNavigation = (sectionId) => {
    setActiveSection(sectionId);
    document.querySelectorAll(".about-container").forEach((section) => {
      if (section.id === sectionId) {
        section.style.display = "block";
      } else {
        section.style.display = "none";
      }
    });
  };

  return (
    <div className="container-about">
        <nav>
          <ul>
            <li><a href="#jornada" onClick={() => handleNavigation("jornada")}>Jornada</a></li>
            <li><a href="#formacao" onClick={() => handleNavigation("formacao")}>Formação</a></li>
            <li><a href="#experiencia" onClick={() => handleNavigation("experiencia")}>Experiência</a></li>
          </ul>
        </nav>
      <section id="jornada" className={`about-container ${activeSection === "AboutContainer" ? "active" : ""}`}>
        <h2>Desenvolvedor FullStack</h2>
        <p>
          Graduado no Centro Universitário de João Pessoa - UNIPÊ, concluí o curso de Análise e Desenvolvimento de Sistemas. Com um forte desejo de crescimento profissional, meu foco é trilhar uma carreira como Desenvolvedor Web. Estou comprometido em aprimorar continuamente meus conhecimentos, explorando diversas abordagens para resolver desafios de forma eficiente. Ansioso para aplicar minha experiência acadêmica e prática em projetos desafiadores e contribuir para o avanço constante no campo do desenvolvimento de sistemas.
        </p>
        <p>No UNIPÊ, tive a oportunidade de integrar o projeto de extensão conhecido como "Fábrica de Software", onde dei início a um treinamento focado em aprimorar minhas habilidades no desenvolvimento front-end, com ênfase específica em HTML, CSS e JavaScript, incluindo técnicas avançadas de manipulação do DOM.</p>

        <p>Durante minha jornada na faculdade, tive a oportunidade de participar de um concurso para estágio no Tribunal Regional Eleitoral da Paraíba (TRE-PB), e felizmente conquistei a vaga! Durante meu tempo lá, adquiri conhecimentos valiosos, que me ajudaram a desenvolver o meu lado profissional.</p>
      </section>

      <section id="formacao" className={`about-container ${activeSection === "formacao" ? "active" : ""}`} style={{ display: activeSection === "formacao" ? "block" : "none" }}>
        <h2>Formação</h2>
        <ul>
          <li><i>FACULDADE: </i>Centro Universitário de João Pessoa-UNIPÊ</li>
          <li><i>CURSO:</i> Análise e Desenvolvimento de Sistemas</li>
          <li><i>INÍCIO:</i> 01/2022   <i>CONCLUSÃO: </i>12/2023</li>
        </ul>
      </section>

      <section id="experiencia" className={`about-container ${activeSection === "experiencia" ? "active" : ""}`} style={{ display: activeSection === "experiencia" ? "block" : "none" }}>
        <h2>Experiência</h2>
        <p>
        incluindo o manuseio do Sistema Eletrônico de Informações (SEI), demonstrando habilidade e proficiência ao utilizar essa plataforma para gerenciamento e tramitação eficiente de documentos eletrônicos. Além disso, fui responsável pelo atendimento do portal de ocorrências (OCOMON), muitas vezes realizando publicações e alterações nos portais internet e intranet.
        </p>
      </section>
    </div>
  );
};

export default AboutContainer;

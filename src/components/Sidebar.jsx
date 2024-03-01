import React, { useState, useEffect } from 'react';
import SocialNetworks from './SocialNetworks';
import InformationContainer from './InformationContainer';
import curriculo from '../pdf/Curriculo2023.pdf';
import Avatar from '../img/pcAndme.jpg';    
import Me from "../img/me.png"              
import '../styles/components/sidebar.sass';

const images = [Me, Avatar];

const Sidebar = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageOpacity, setImageOpacity] = useState(1); // Estado para controlar a opacidade da imagem

  const nextImage = () => {
    setImageOpacity(0); // Define a opacidade da imagem como 0 para iniciar a transição
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      setImageOpacity(1); // Define a opacidade da imagem como 1 após a troca
    }, 500); // Tempo de espera antes de trocar a imagem (em milissegundos)
  };

  const prevImage = () => {
    setImageOpacity(0); // Define a opacidade da imagem como 0 para iniciar a transição
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
      setImageOpacity(1); // Define a opacidade da imagem como 1 após a troca
    }, 500); // Tempo de espera antes de trocar a imagem (em milissegundos)
  };

  useEffect(() => {
    const interval = setInterval(nextImage, 5000); // Troca a imagem a cada 5 segundos
    return () => clearInterval(interval); // Limpa o intervalo ao desmontar o componente
  }, []);

  return (
    <aside id="sidebar">
      <img
        src={images[currentIndex]}
        alt="Levi Oliveira"
        style={{ opacity: imageOpacity, transition: 'opacity 0.5s ease-in-out' }} // Aplica a transição de opacidade
      />
      <p className="title">Desenvolvedor</p>
      <SocialNetworks/>
      <InformationContainer/>
      <a href={curriculo} target='_blank' className="btn" download>
        Download Currículo
      </a>
    </aside>
  );
};

export default Sidebar;

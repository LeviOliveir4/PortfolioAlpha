import "../styles/components/welcome.sass"
import hacker from '../img/Hacker-bro.svg'

const Welcome = () => {
  return (
    <div className="container-welcome">
        <h2>Bem Vindo!</h2>
        <p>Olá, seja bem-vindo ao meu portfólio! Aqui, você terá a oportunidade de conhecer mais sobre mim, minhas qualificações e habilidades. Este é um portfólio simples, no qual apliquei um padrão conhecido como Single Page Application (SPA). Nesse modelo, a página principal é carregada apenas uma vez, e as transições entre diferentes seções ou páginas são gerenciadas de forma assíncrona por meio de JavaScript, frequentemente utilizando técnicas como AJAX e manipulação do DOM.</p>
        <div className="image-container">
          <img src={hacker} alt="ilustrativa" />
        </div>
    </div>
  )
}

export default Welcome
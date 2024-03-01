import '../styles/components/projetos.sass'
import Project1 from '../img/Gallery.jpg'
import Project3 from '../img/Calculator.gif'
import Loading from '../img/loading.gif'



const ProjetosContainer = () => {
  return (
  <div className='projects-container'>
    <div className="card">
      <img src={Project1} alt="" />
      <p>projeto 1</p>
    </div>
    <div className="card"></div>
    <div className="card"></div>
    <div className="card"></div>
    <div className="card"></div>   

    </div>
      
  ); 
};

export default ProjetosContainer
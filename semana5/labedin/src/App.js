import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import fotoPerfil from './img/foto-perfil.jpg';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={fotoPerfil} 
          nome="Rafael Fontes" 
          descricao="Oi, eu sou o Rafael. Cras consequat dolor rhoncus lectus dapibus, ac imperdiet dui condimentum. Proin suscipit eleifend nulla id porttitor. Curabitur hendrerit tincidunt rhoncus. Sed auctor felis sed felis accumsan, ut euismod quam pellentesque. Sed quam tortor, euismod a blandit eu, dictum nec nisl."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <h2>Formações</h2>
        <CardGrande 
          imagem="https://media-exp1.licdn.com/dms/image/C560BAQGXX-pQE9ZghQ/company-logo_200_200/0?e=2159024400&v=beta&t=NRNnB4OsKbfz2i_OVjaIigRiKqCI-k80WqKAnOpbLRw" 
          nome="Labenu" 
          descricao="Desenvolvimento web" 
        />
        
        <CardGrande 
          imagem="https://www.poli.usp.br/wp-content/uploads/2020/06/estudo-logo-minerva-com-texto-REDONDO.jpg" 
          nome="Poli-USP" 
          descricao="Engenharia Metalúrgica" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;

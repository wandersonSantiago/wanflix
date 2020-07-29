import React from 'react';
import './Home.css';
import Menu from '../../components/Menu';
import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain';
import Carrocel from '../../components/Carousel';
import Footer from '../../components/Footer';

function Home() {
  return (
    <div style={{ background : "#141414"}}>
     <Menu />

    <BannerMain 
      videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
      url={dadosIniciais.categorias[0].videos[0].url}
      videoDescription={"O que é Front-end? Trabalhando na ares"}
      />

      <Carrocel 
       ignoreFirstVideo
       category={dadosIniciais.categorias[0]} />

      <Carrocel 
       ignoreFirstVideo
       category={dadosIniciais.categorias[1]} />

      <Carrocel 
       ignoreFirstVideo
       category={dadosIniciais.categorias[2]} />

      <Carrocel 
       ignoreFirstVideo
       category={dadosIniciais.categorias[3]} />


      <Carrocel 
       ignoreFirstVideo
       category={dadosIniciais.categorias[4]} />


      <Carrocel 
       ignoreFirstVideo
       category={dadosIniciais.categorias[5]} />

      <Footer />

    </div>

  );
}

export default Home;

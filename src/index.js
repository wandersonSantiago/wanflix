import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Switch , Route} from 'react-router-dom';
import CadastroVideo from './pages/cadastro/Video';
import Home from './pages/Home';
import CadastroCategoria from './pages/cadastro/Categoria';



ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/video" component={CadastroVideo} exact />
      <Route path="/cadastro/categoria" component={CadastroCategoria} exact />
      <Route  component={()=> (<div>Pagina não encontrada</div> )} />
    </Switch>  
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

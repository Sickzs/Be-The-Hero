import 'intl'
import 'intl/locale-data/jsonp/pt-BR'

import React from 'react';

import Routes from './src/routes'

//Não tem as mesmas tags do html, temos view e text
//Estilização funciona atraves da tag style contendo um objeto de estilização

export default function App() {
  return (
    <Routes></Routes>
  );
}

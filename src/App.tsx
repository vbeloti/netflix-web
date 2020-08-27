import React from 'react';
import Row from './components/Row';
import './App.css';

import requests from './services/request';
import Banner from './components/Banner';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row title="Originais Netflix" fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
      <Row title="Em Alta" fetchUrl={requests.fetchTrending} />
      <Row title="Mais votados" fetchUrl={requests.fetchTopRated} />
      <Row title="Ação" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedia" fetchUrl={requests.fetchComedynMovies} />
      <Row title="Terror" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Documentários" fetchUrl={requests.fetchDocumentariesMovies} />
    </div>
  );
}

export default App;

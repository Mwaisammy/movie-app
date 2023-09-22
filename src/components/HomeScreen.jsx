import React from 'react'
import Header from './Header';
import Banner from './Banner';
import Row from './Row';
import requests from './requests';


function HomeScreen() {
  return (
    <div>
      <Header/>
      <Banner/>
      <Row title="Trending Movies" fetchUrl={requests.fetchTrending}/>
      <Row title="The Originals" fetchUrl={requests.fetchNetflixOriginals}/>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
      <Row title="Action and Adventure Movies" fetchUrl={requests.fetchActionMovies}/>
      <Row title="Comedy" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="Romantic Movies" fetchUrl={requests.fetchRomanceMovies}/>
      <Row title="Horrors" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="Watch Documentaries" fetchUrl={requests.fetchDocumentaries}/>
    

     
    </div>
  )
}

export default HomeScreen;
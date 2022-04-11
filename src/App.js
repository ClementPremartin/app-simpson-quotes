import React from 'react';
import { useState } from 'react';
import QuoteCard from './Components/QuoteCard';
import axios from 'axios'

const initialQuote= {
  "quote": "By chilling my loins I increase the chances of impregnating my wife.",
  "character": "Apu Nahasapeemapetilon",
  "image": "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FApuNahasapeemapetilon.png?1497567511629",
  "characterDirection": "Left"
  }

function App() {
  
  const getQuote = () => {
    axios
    .get("https://simpsons-quotes-api.herokuapp.com/quotes")
    .then((response) => response.data)
    .then((data) => {
      console.log(data);
      setSimpsonQuote(data[0])
    })  
  }

  const [simpsonQuote, setSimpsonQuote]= useState(initialQuote);

  return (
    <div className="App">
     <QuoteCard props={simpsonQuote}/>
     <button type="button" onClick={getQuote}>get Quote</button>
    </div>
  );
}

export default App;

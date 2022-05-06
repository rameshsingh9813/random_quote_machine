import React,{useState} from 'react'
import './App.scss';
function App() {
 
  const quotes= [
    {
    quote: "Life isn’t about getting and having, it’s about giving and being.",
    author: "Kevin Kruse"
    },
    {
    quote: "Whatever the mind of man can conceive and believe, it can achieve.",
    author: "Napoleon Hill"
    }]
    
    const [Quote, setQuote] = useState(quotes[0].quote);
    const [Author, setAuthor] = useState(quotes[0].author );
    const genRanQuote=()=>{
      let k=Math.floor(Math.random()*quotes.length)
      setQuote(quotes[k].quote)
      setAuthor(quotes[k].author)
    }

  return (
    <div className="App">
      <header className="App-header">
        <p>{Quote}</p>
        <p>- {Author}</p>
        <button onClick={()=> genRanQuote()}>New quote</button>
      </header>     
    </div>
  );
}

export default App;

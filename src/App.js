import React,{useState,useEffect} from 'react'
//import axios from "axios"
import './App.scss';
function App() {  
  
  const [Quote, setQuote] = useState( "Whatever the mind of man can conceive and believe, it can achieve.");
  const [Author, setAuthor] = useState("Napoleon Hill" );
  const[Quotearr,setQuotearr]=useState(null)
  //const [randnum,setRandnum]=useState(0)
  let database='https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'
  
  const feachurl=async (url) => {
    const response =await fetch(url)
    const parsed=await response.json()
    setQuotearr(parsed.quotes)
    console.log(parsed)  
  }
  useEffect(() => {
    feachurl(database)
  }, [database])

    const genRanQuote=()=>{
      let k=Math.floor(Math.random()*Quotearr.length)
     // setRandnum(k)
      setQuote(Quotearr[k].quote)
      setAuthor(Quotearr[k].author)
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

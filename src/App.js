import dice from "./images/icon-dice.svg";
import './App.scss';
import { useState } from "react";
import { useEffect } from "react";

function App() {

  const [advice, setAdvice] = useState("");

  const fetchAPIData = () =>{
    fetch("https://api.adviceslip.com/advice")
    .then(response =>{
      return response.json();
    })
    .then(data => {
      setAdvice(data.slip.advice);
    })
    // console.log(advice);
    document.querySelector("h1").innerText = advice;
  };

  useEffect(()=>{
    fetchAPIData();
  },[]);

  return (
    <article className='advice-gen'>
      <p>Advice #<span>72</span></p> 
      <h1>"aking action."</h1>
      <section className="advice-divider">

      </section>
      <div onClick={fetchAPIData} className="dice">
        <img src={dice} alt=""/>
      </div>
    </article>
  );
}
export default App;

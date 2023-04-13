import dice from "./images/icon-dice.svg";
import './App.scss';
import { useState } from "react";
import { useEffect } from "react";

function App() {

  const [advice, setAdvice] = useState("Its easy to situp and take notice, What's difficult taking up and taking action");
  const [count ,setCount] = useState("117");

  const fetchAPIData = () =>{
    fetch("https://api.adviceslip.com/advice")
    .then(response =>{
      return response.json();
    })
    .then(data => {
      setAdvice(data.slip.advice);
      setCount(data.slip.id);
    })
    // console.log(advice);
    document.querySelector("h1").innerText = advice;
   
    document.querySelector("span").innerText = count;
  };

  useEffect(()=>{
    fetchAPIData();
  },[]);

  return (
    <article className='advice-gen'>
      <p>Advice #<span>117</span></p> 
      <h1> </h1>
      <section className="advice-divider">

      </section>
      <div onClick={fetchAPIData} className="dice">
        <img src={dice} alt=""/>
      </div>
    </article>
  );
}
export default App;

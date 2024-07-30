import React, { useEffect, useState } from 'react'

const Advice = () => {
    const [advice,setAdvice]=useState(" ");
    const[count,setCount]=useState(0);
    const[loading,setLoading]=useState(false);
    async function getAdvice(){
      setLoading(true);
      try{
        const advice=await fetch("https://api.adviceslip.com/advice");
        const data=await(advice.json());
        // console.log(data);
        setAdvice(data.slip.advice);
      }catch(err){
          console.log(err);
        }finally{
          setLoading(false);
        }
        setCount((c)=>c+1);
    }
    useEffect(function(){
        getAdvice();
    },[]);
  return (
    <div className="container">
      <div className='box'>
        {loading ? <p>Please wait...</p> :  <h1> {advice}</h1>}
        <button onClick={getAdvice}>Advice</button>
        <p>You get <b>{count}</b> advice</p>
      </div>
    </div>
    
  )
}

export default Advice
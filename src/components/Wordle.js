import './Wordle.css'
import React, { useEffect, useState } from 'react'


export default function Wordle() {

    const [data, setData] = useState([]);

    useEffect(()=>{
        fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1")
        .then(response => response.json())
        .then(data => setData(data))
        .catch(error => console.error(error))
    },[])

    if(!data){
        return <div>Loading...</div>
    }

    const handleChange = (obj)=>{
        console.log(obj)
    }

    return (
        <div>
            <h1 align="center">Crypto Currency Data</h1>
            {data.map((obj,idx)=>{
                return (<div key={idx} className="items"> 
                    <h3 style={{
                        position:'absolute',
                        top:'15px',
                        left:'15px'
                        
                    }}>Symbol : {obj.symbol}</h3>
                    <img  onClick={()=>handleChange(obj)} src={obj.image} alt='none'/>
                    <h2>{obj.name}</h2>
                    <p>Current Price : {obj.current_price}$</p>
                </div>)
            })}
        </div>
    )

}


import React, {useState, useEffect} from 'react';



const FirstUseEffect = ()=>{

    const [name, setName]= useState('');
    useEffect(()=>{
        if (name){
          const timeout = setTimeout (()=>{
            console.log("meow");
          }, 2000);
          return ()=>{
            clearTimeout(timeout);
          } 
        }
        
    }, [name])

    return (
      <>
        <label htmlFor="name" style={{ marginRight: "5px" }}>
          Name
        </label>
        <input
          type="text"
          onChange={(e) => {
            setName(e.target.value);
          }}
          id="name"
          value={name}
        />

        <p> Name: {name}</p>
      </>
    );


}

export default FirstUseEffect;

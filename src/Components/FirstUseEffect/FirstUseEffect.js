import React, {useState, useEffect, useRef} from 'react';


// useRef and UeseEffect to get the previous state
const FirstUseEffect = ()=>{

    const [name, setName]= useState('');
    let prevName = useRef();
    useEffect(()=>{

            prevName.current = name;
            console.log("the current name", name);

        
    }, [name]);

    const thePreviouse = prevName.current; 
    console.log("the prev name", thePreviouse);

    return (
      <>

      <h1>The First useEffect test</h1>
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

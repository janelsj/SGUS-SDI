import {useState, useEffect} from 'react';

function StateDemo(){

    // Part 1 - Initialize state
    const [name, setName] = useState("Edison");


    // Part 3 - Watch a state
    useEffect(()=>{
        console.log("effect"); // Called once onmount. Subsequently on keyUp.
    },[name]);

    // Part 1 - Update state
    const updateName = (e) => {
        setName(e.target.value);
    }

    return (
        <>
            <input type='text' onKeyUp={updateName}/>
            <div>My name is {name}</div>
        </>
    )
}

export default StateDemo;
import {useState} from 'react';

function Form({sum}) {

    const [input, setInput] = useState({
        number1: 0,
        number2: 0,
    })

    const handleChange = (e) => {
        let userInput = input;
        userInput[e.target.name] = e.target.value;
        return setInput(userInput);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let addition = parseInt(input.number1) + parseInt(input.number2);
        sum(addition);
        e.target.reset();
    }

    return(
    <div id="form">
        <form onSubmit={handleSubmit}>
            <input type="number" name="number1" onChange={handleChange} required autoFocus/> + <input type="number" name="number2" onChange={handleChange} required/>
            <input type="submit" value="Show Answer"/>
        </form>
    </div>
    )
}

export default Form;
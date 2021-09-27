import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

function FormFunctionalComponent() {
    const [input, setInput] = useState({
        product: "",
        price: "",
    });

    const [list, setList] = useState({
        items: [],
    });

    const inputEvent = (event) => {
        const inputData = {...input};
        switch(event.target.name){
            case "product":
                inputData.product = event.target.value;
                break;
            case "price":
                inputData.price = event.target.value;                
        }
            return setInput(inputData);
    }

    const submitEvent = (event) => {
        event.preventDefault();       
        const listData = {...list};
        if (input.product!=="" && input.price!=="") {
            listData.items.push({product: input.product, price: parseFloat(input.price).toFixed(2)});
            return setList(listData);
        } else {
            alert ("Please check input values.");
            setTimeout(()=>{
                if (!input.product) {
                    document.querySelector("input[name='product']").focus();
                } else if (!input.price) {
                    document.querySelector("input[name='price']").focus();
                }
            }, 1);
        }
    }

    const showList = () => {
        const shownList = list.items.map(item => {
            return(<li key={nanoid()}>{item.product}, {item.price}</li>)
        });
        return(<div className="children">
            <ul key={nanoid()}>{shownList}</ul>
        </div>)
    }

    useEffect(()=>{
        if (!list.items[0]) {
            document.querySelectorAll(".children")[3].style.display = "none";
        }
        return () => {
            document.querySelectorAll(".children")[3].style.display = "inline";
        };
    }, [list])

    return(<>
        <h4>Using Functional Component</h4>
        <div className="children">
            <form onSubmit={submitEvent}>
                <label htmlFor="product"> Product </label>
                <input type="text" name="product" value={input.product} onChange={inputEvent} /> <br />
                <label htmlFor="price"> Price </label>
                <input type="number" step="0.01" min="0" inputMode="decimal" name="price" value={input.price} onChange={inputEvent} />
                <input type="submit" value="Add"/>
            </form>
        </div>
            {showList()}
    </>)
}

export default FormFunctionalComponent;
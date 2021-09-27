import React from 'react';
import { nanoid } from 'nanoid';

class FormClassComponent extends React.Component {
    
    constructor(){
        super();
        this.state = {
            inputField: {product:"", price: ""},
            items: [],
        }
        this.inputHandler = this.inputHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    }

    inputHandler(event) {
        const inputData = {...this.state.inputField};
        switch(event.target.name){
            case "product":
                inputData.product = event.target.value;
                break;
            case "price":
                inputData.price = event.target.value;                
        }
            return this.setState({inputField: inputData});
    }

    submitHandler(event) {
        event.preventDefault();       
        const listData = [...this.state.items];
        if (this.state.inputField.product!=="" && this.state.inputField.price!=="") {
            listData.push({product: this.state.inputField.product, price: parseFloat(this.state.inputField.price).toFixed(2)});
            return this.setState({items: listData});
        } else {
            alert ("Please check input values.");
            setTimeout(()=>{
                if (!this.state.inputField.product) {
                    document.querySelector("input[name='product']").focus();
                } else if (!this.state.inputField.price) {
                    document.querySelector("input[name='price']").focus();
                }
            }, 1);
        }
    }

    componentDidMount(){
        document.querySelectorAll(".children")[1].style.display = "none";
    }

    componentDidUpdate (prevProps, prevState) {
        if (prevState.items.length !== this.state.items.length) {
            document.querySelectorAll(".children")[1].style.display = "inline";
        }
    }

    render(){
        const shownList = this.state.items.map(item => {
            return(<li key={nanoid()}>{item.product}, {item.price}</li>)
        });

        return(<>
            <h4>Using Class Component</h4>  
            <div className="children">
                <form onSubmit={this.submitHandler}>
                    <label htmlFor="product"> Product </label>
                    <input type="text" name="product" value={this.state.inputField.product} onChange={this.inputHandler} autoFocus/> <br />
                    <label htmlFor="price"> Price </label>
                    <input type="number" step="0.01" min="0" inputMode="decimal" name="price" value={this.state.inputField.price} onChange={this.inputHandler} />
                    <input type="submit" value="Add"/>
                </form>
            </div>
            <div className="children">
                <ul key={nanoid()}>{shownList}</ul>
            </div>
        </>)
    }
}

export default FormClassComponent;
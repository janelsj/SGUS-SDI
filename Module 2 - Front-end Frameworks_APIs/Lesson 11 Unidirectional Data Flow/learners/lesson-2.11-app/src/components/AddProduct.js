import {useState} from 'react';

function AddProduct(props) {
    const defaultState = {
        id: 1,
        name: "",
        price: 0,
    }

    const [newProduct, setNewProduct] = useState(defaultState);

    const [counter, setCounter] = useState(1);

    const handleChange = (e) => {
        let update = newProduct;
        update[e.target.name] = e.target.value;
        return setNewProduct(update);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newProduct.name && newProduct.price) {
            props.add({...newProduct, id: counter});
            setCounter(counter+1);
        }
        setNewProduct(defaultState);
        e.target.reset();
        document.querySelector("input[type='text']").focus();
    }

    return(<div id="form">
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Product</label>
            <input type="text" name="name" onChange={handleChange} autoFocus/> <br />
            <label htmlFor="price">Price</label>
            <input type="number" min="0" name="price" onChange={handleChange}/>
            <input type="submit" value="Add"/>
        </form>
    </div>)
}

export default AddProduct;
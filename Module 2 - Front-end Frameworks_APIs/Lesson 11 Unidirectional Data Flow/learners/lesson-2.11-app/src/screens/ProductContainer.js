import React from 'react';
import AddProduct from '../components/AddProduct';
import ListProduct from '../components/ListProduct';
import './style.css';

class ProductContainer extends React.Component {
    constructor(){
        super();
        this.state = {
            products: [],
        }
        this.eventHandler = this.eventHandler.bind(this);
    }

    eventHandler(item) {
        const productsList = this.state.products;
        productsList.push(item);
        console.log("new item:", item);
        console.log("total item list:", productsList);
        return this.setState({products: productsList})
    }

    componentDidMount() {
        document.getElementById('list').style.display = "none";
    }

    componentDidUpdate(){
        if (this.state.products.length>0){
            document.getElementById('list').style.display = "block";
        }
    }

    render(){
        return (<div id= "parent">
            <h3>Product Container</h3>
            <AddProduct add={this.eventHandler}/>
            <ListProduct product={this.state.products}/>
        </div>)
    }
}

export default ProductContainer;
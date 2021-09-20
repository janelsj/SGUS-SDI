import React from 'react';
import Blue from './Blue.js';
import Image from './Orange.js';

class Green extends React.Component {

    constructor() {
        super();
        this.state = {
            product1: <Blue title="Product 1" details="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam quam officia ut nulla soluta eveniet optio, omnis tempora nostrum est tempore eum ratione eos debitis obcaecati dolor illo repellendus laborum?" />,
            product2: <Blue title="Product 2" details="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam quam officia ut nulla soluta eveniet optio, omnis tempora nostrum est tempore eum ratione eos debitis obcaecati dolor illo repellendus laborum?" />,
        };
    }

    render(){
        return(<div className="parent">
            <Image url="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg" alt = "Eiffel Tower" />
            {this.state.product1}
            <Image url="https://www.planetware.com/wpimages/2019/10/switzerland-in-pictures-most-beautiful-places-matterhorn.jpg" alt = "Matterhorn" />
            {this.state.product2}
        </div>)
    }
}

export default Green;
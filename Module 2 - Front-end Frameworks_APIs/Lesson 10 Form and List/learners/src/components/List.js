import React from 'react';
import { nanoid } from 'nanoid';

class List extends React.Component {
    constructor() {
        super();
        this.state = {
            fruits: [
                {
                    id: 1,
                    name: "apple",
                }, {
                    id: 2,
                    name: "pear",
                }, {
                    id: 3,
                    name: "orange",
                }
            ]
        }
    }
    render() {
        const fruits = this.state.fruits;
        const list = fruits.map(item => {
            return(<li key={item.id}>{item.name}</li>)
        })

        return(
            <div id="list">
                <ul key={nanoid()}>{list}</ul>
            </div>
        )
    }
}

export default List;
import {useEffect, useState} from 'react';

function Order() {
    const [orderStatus, updateOrderStatus] = useState('Pending');
    return (<>
        <h1>Order Status: {orderStatus}</h1> 
        <button onClick={ () => updateOrderStatus('Shipped')}>Shipped</button> <br/>
        <button onClick={ () => updateOrderStatus('Delivered')}>Delivered</button>
    </>)
}

function Count() {
    const [count, setCount] = useState(0);
    const [countOdd, setCountOdd] = useState(1);
    const [countEven, setCountEven] = useState(0);

    useEffect(() => {
        console.log("initialize");
        document.title = `You clicked ${count} times`;
        
        return () => console.log("exit"); //Important to include 'return a function' as Cleanup runs after every render.
    }, [count])

    return (
        <div className="count">
            <button onClick = {() => setCount(count-1)}>-</button>
            {count}
            <button onClick = {() => setCount(count+1)}>+</button> <br />
            <button onClick = {() => setCountOdd(countOdd-2)}>-2</button>
            {countOdd}
            <button onClick = {() => setCountOdd(countOdd+2)}>+2</button> <br />
            <button onClick = {() => setCountEven(countEven-2)}>-2</button>
            {countEven}
            <button onClick = {() => setCountEven(countEven+2)}>+2</button>
            
        </div>
    )
}

export {Order, Count};
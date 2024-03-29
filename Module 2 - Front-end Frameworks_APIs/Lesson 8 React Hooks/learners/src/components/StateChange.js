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
    const [onLoad, setLoad] = useState(false);

    useEffect(() => {
        console.log("initialize");
        document.getElementById('text').innerText = `You clicked ${count} times`;
        if(onLoad) {
            document.getElementById('text').innerText = `onLoad is now true`;
        }
        return () => console.log("exit"); //Important to include 'return a function' as Cleanup runs after every render.
    }, [count, onLoad])

    return (<>
        <div id = "text"></div>
        <div className="count">
            <button onClick = {() => setCount(count-1)}>-</button>
            {count}
            <button onClick = {() => setCount(count+1)}>+</button> <br />
            <button onClick = {() => setCountOdd(countOdd-2)}>-2</button>
            {countOdd}
            <button onClick = {() => setCountOdd(countOdd+2)}>+2</button> <br />
            <button onClick = {() => setCountEven(countEven-2)}>-2</button>
            {countEven}
            <button onClick = {() => setCountEven(countEven+2)}>+2</button> <br/>
            <button onClick = {() => {setLoad(!onLoad)}}>Toggle Load / Reload</button>
        </div>
    </>)
}

export {Order, Count};
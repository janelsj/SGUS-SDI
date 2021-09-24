import { useState } from "react";

function ConditionalRender() {
    const [list, setList] = useState("none");

    let userChoice;
    if (list === "Beginner") {
        userChoice = BeginnerList();
    } else if (list === "Intermediate") {
        userChoice = IntermediateList();
    } else if (list === "Advanced") {
        userChoice = AdvancedList();
    } else {
        userChoice = <ul><li>No list selected</li></ul>;
    }

    return (<div className = "child">
        <h3><u>Conditional Rendering</u></h3>
        <button onClick = {() => {setList("Beginner")}}>Beginner List</button>
        <button onClick = {() => {setList("Intermediate")}}>Intermediate List</button>
        <button onClick = {() => {setList("Advanced")}}>Advanced List</button>
        <div>{userChoice}</div>
    </div>)
}

function BeginnerList() {
    return (<ul>
        <li>Concerto Op.11</li>
        <li>Mini Concerto Op.1</li>
        <li>Concerto in B Minor</li>
        <li>Concerto No.5</li>
    </ul>)
}

function IntermediateList() {
    return (<ul>
        <li>Seitz – Violin Concerto in G minor, Op.</li>
        <li>Accolay – Violin Concerto in A Minor</li>
        <li>Bach – Violin Concerto in A Minor</li>
    </ul>)
}

function AdvancedList() {
    return (<ul>
        <li>“Sonata II” in G Minor – G.F. Händel</li>
        <li>“The Swan” (From The Carnival of the Animals) by C. Saint-Saëns</li>
        <li>“The Lark Ascending” by Ralph Vaughan Williams</li>
    </ul>)
}

export default ConditionalRender;
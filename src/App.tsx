import React from 'react';
import {Routes, Route, Link,Navigate} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <h1>Welcome to React Router!</h1>
            <nav>
                <ul>
                    <li><Link to="/statistics">Statistics</Link></li>
                    <li><Link to="/money">Money</Link></li>
                    <li><Link to="/tags">Tags</Link></li>
                </ul>
            </nav>
            <Routes>
                <Route path="tags" element={<Tags/>}/>
                <Route path="money" element={<Money/>}/>
                <Route path="statistics" element={<Statistics/>}/>
                <Route path="/" element={<Navigate to="/money" />} />
                <Route path='*' element={<Nomatch/>} />
            </Routes>
        </div>
    );
}

function Tags() {
    return (
        <>
            <main>
                <h2>Who are we?</h2>
                <p>
                    That feels like an existential question, don't you
                    think?
                </p>
            </main>
        </>
    );
}

function Money() {
    return (
        <div>money</div>
    )
}

function Statistics() {
    return (
        <div>统计</div>
    )
}
function Nomatch(){
    return(
        <div>404</div>
    )
}
export default App;

import React from 'react';
import {Routes, Route, Link} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <h1>Welcome to React Router!</h1>
            <nav>
                <ul>
                    <li><Link to="/statistics">Statistics</Link></li>
                    <li><Link to="/money">Money</Link></li>
                    <li><Link to="/tags">Tags</Link></li>
                    <li><Link to="/">Home</Link></li>
                </ul>

            </nav>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="tags" element={<Tags/>}/>
                <Route path="money" element={<Money/>}/>
                <Route path="statistics" element={<Statistics/>}/>
            </Routes>
        </div>
    );
}

function Home() {
    return (
        <>
            <main>
                <h2>Welcome to the homepage!</h2>
                <p>You can do this, I believe in you.</p>
            </main>
        </>
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

export default App;

import React from 'react';
import {Routes, Route, Navigate} from "react-router-dom";
import Money from "views/money";
import Tags from "views/tag";
import Statistics from "views/statistics";
import Nomatch from "views/nomatch";

function App() {
    return (
        <>
            <Routes>
                <Route path="tags" element={<Tags/>}/>
                <Route path="money" element={<Money/>}/>
                <Route path="statistics" element={<Statistics/>}/>
                <Route path="/" element={<Navigate to="/money"/>}/>
                <Route path='*' element={<Nomatch/>}/>
            </Routes>
        </>

    );
}

export default App;

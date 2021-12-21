import React from 'react';
import {Routes, Route, Navigate} from "react-router-dom";
import Money from "views/money";
import Tags from "views/tag";
import Statistics from "views/statistics";
import Nomatch from "views/nomatch";
import {TagsInside} from 'views/TagsInside'
import styled from "styled-components";

const AppWrapper = styled.div ` 
    color: #333;
`

function App() {
    return (
        <AppWrapper>
            <Routes>
                <Route path="tags" element={<Tags/>}/>
                <Route path="tags/:id" element={<TagsInside/>}/>
                <Route path="money" element={<Money/>}/>
                <Route path="statistics" element={<Statistics/>}/>
                <Route path="/" element={<Navigate to="/money"/>}/>
                <Route path='*' element={<Nomatch/>}/>
            </Routes>
        </AppWrapper>

    );
}

export default App;

import React from 'react';
import {Routes, Route,  Navigate} from "react-router-dom";
import styled from "styled-components";
import Nav from 'Components/nav'


const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`
const Main = styled.div`
  flex-grow: 1;
  overflow: auto;
`
function App() {
    return (
        <Wrapper>
            <h1>Welcome to React Router!</h1>
            <Main>
                <Routes>
                    <Route path="tags" element={<Tags/>}/>
                    <Route path="money" element={<Money/>}/>
                    <Route path="statistics" element={<Statistics/>}/>
                    <Route path="/" element={<Navigate to="/money"/>}/>
                    <Route path='*' element={<Nomatch/>}/>
                </Routes>
            </Main>
             <Nav/>
        </Wrapper>
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

function Nomatch() {
    return (
        <div>404</div>
    )
}

export default App;

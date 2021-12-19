import Layout from "../Components/layout";
import React from "react";
import styled from "styled-components";
import {CategorySection} from "./money/CategorySection";
import {NotesSection} from "./money/NotesSection";
import {NumberPadSection} from "./money/NumberPadSection";
import {TagsSection} from "./money/TagsSection";

const MyLayout = styled(Layout)`  
    display: flex;
    flex-direction: column;
`
function Money() {
    return (
        <MyLayout>
            <TagsSection />
            <NotesSection />
            <CategorySection/>
            <NumberPadSection>
                <div className="output">
                    100
                </div>
                <div className="pad clearfix">
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                    <button>删除</button>
                    <button>4</button>
                    <button>5</button>
                    <button>6</button>
                    <button>清空</button>
                    <button>7</button>
                    <button>8</button>
                    <button>9</button>
                    <button className="ok">ok</button>
                    <button  className='dot'>0</button>
                    <button>.</button>
                </div>
            </NumberPadSection>
        </MyLayout>
    )
}

export default Money;
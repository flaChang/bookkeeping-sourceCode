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
            <NumberPadSection/>
        </MyLayout>
    )
}

export default Money;
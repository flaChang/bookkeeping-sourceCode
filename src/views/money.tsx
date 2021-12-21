import Layout from "../Components/layout";
import React, {useState} from "react";
import styled from "styled-components";
import {CategorySection} from "./money/CategorySection";
import {NotesSection} from "./money/NotesSection";
import {NumberPadSection} from "./money/NumberPadSection";
import {TagsSection} from "./money/TagsSection";

const MyLayout = styled(Layout)`  
    display: flex;
    flex-direction: column;
`
type Category = "-"|"+"
function Money() {
    const[selected,setSelected]=useState({
        tagIds:[] as number[],
        note:"",
        category:'-'as Category,
        amount:0
    });
    const onChange = (obj: Partial<typeof selected>) => {
        setSelected({
            ...selected,
            ...obj
        })
    }
    return (
        <MyLayout>
            {selected.note}
            <hr/>
            <TagsSection value={selected.tagIds}
                         onChange={(tagIds) => onChange({tagIds})}/>
            <NotesSection value={selected.note}
                          onChange={(note) => onChange({note})}/>
            <CategorySection value={selected.category}
                             onChange={(category) => onChange({category})}/>
            <NumberPadSection value={selected.amount}
                              onChange={(amount) => onChange({amount})}
                              onOk={()=>{}}
            />
        </MyLayout>
    )
}

export default Money;
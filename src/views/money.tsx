import Layout from "../Components/layout";
import React, {useState} from "react";
import styled from "styled-components";
import {CategorySection} from "./money/CategorySection";
import {NotesSection} from "./money/NotesSection";
import {NumberPadSection} from "./money/NumberPadSection";
import {TagsSection} from "./money/TagsSection";
import {useRecord} from "hooks/useRecord";

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`
const CategoryWrapper= styled.div`  
    background: #c4c4c4;
`

type Category = "-" | "+"
const defaultFormData = {
    tagIds: [] as number[],
    note: "",
    category: '-' as Category,
    amount: 0
}

function Money() {
    const [selected, setSelected] = useState(defaultFormData);
    const {addRecord} = useRecord()
    const onChange = (obj: Partial<typeof selected>) => {
        setSelected({
            ...selected,
            ...obj
        })
    }
    const submit = () => {
        if(addRecord(selected)!==1){
            alert('保存成功')
            setSelected(defaultFormData)
        }
    }
    return (
        <MyLayout scrollTop={999}>
            <TagsSection value={selected.tagIds}
                         onChange={(tagIds) => onChange({tagIds})}/>
            <NotesSection value={selected.note}
                          onChange={(note) => onChange({note})}/>
            <CategoryWrapper>
                <CategorySection value={selected.category}
                                 onChange={(category) => onChange({category})}/>
            </CategoryWrapper>
            <NumberPadSection value={selected.amount}
                              onChange={(amount) => onChange({amount})}
                              onOk={submit}
            />
        </MyLayout>
    )
}

export default Money;
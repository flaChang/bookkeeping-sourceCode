import Layout from "../Components/layout";
import React, {useState} from "react";
import {CategorySection} from "./money/CategorySection";
import styled from "styled-components";
import {useRecord} from "../hooks/useRecord";
import {useTags} from "../hooks/useTags";
import dayjs from "dayjs";

const CategoryWrapper = styled.div`
  background: #fff;
`
const Item = styled.div`
  display: flex;
  justify-content: space-between;
  background: #fff;
  font-size: 18px;
  line-height: 20px;
  padding: 10px 16px;
  > .note {
    margin-right: auto;
    margin-left: 16px;
    color: #666;
  }
`

function Statistics() {
    const [category, setCategory] = useState<'-' | '+'>("-")
    const {records} = useRecord()
    const {getName} = useTags()
    return (
        <Layout>
            <CategoryWrapper>
                <CategorySection value={category}
                                 onChange={value => setCategory(value)}/>
            </CategoryWrapper>
            <div>
                {records.map(r => {
                    return <Item>
                        <div className="tags">
                            {r.tagIds.map(tagId => <span>{getName(tagId)}</span>)}
                        </div>
                        {r.note && <div className="note">
                            {r.note}
                        </div>}
                        <div className="amount">
                            {r.amount}元
                        </div>
                        {/*{dayjs(r.createdAt).format('YYYY年MM月DD日')}*/}
                    </Item>
                })}
            </div>
        </Layout>

    )
}

export default Statistics;
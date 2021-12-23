import Layout from "../Components/layout";
import React, {ReactNode, useState} from "react";
import {CategorySection} from "./money/CategorySection";
import styled from "styled-components";
import {RecordItem, useRecord} from "../hooks/useRecord";
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
const Header=styled.h3`  
  font-size: 18px;
  line-height: 20px;
  padding: 10px 16px;
    
`

function Statistics() {
    const [category, setCategory] = useState<'-' | '+'>("-")
    const {records} = useRecord()
    const {getName} = useTags()
    const hash:{[K:string]:RecordItem[]}={}
    const selectedRecords=()=>{
        return records.filter(r=>r.category===category)
    }

    selectedRecords().map(r=>{
        const key = dayjs(r.createdAt).format('YYYY-MM-DD')
        if(!(key in hash)){
            hash[key]=[]
        }
        hash[key].push(r)
    })

    const array = Object.entries(hash).sort((a,b)=>{
        if(a[0]===b[0]) return 0
        if(a[0]>b[0])return -1
        if(a[0]<b[0])return 1
        return 0
    })

    return (
        <Layout>
            <CategoryWrapper>
                <CategorySection value={category}
                                 onChange={value => setCategory(value)}/>
            </CategoryWrapper>
            {array.map(([date,record])=><div key={date}>
                <Header>
                    {date}
                </Header>
                <div>
                    {record.map(r => {
                        return <Item key={r.createdAt}>
                            <div className="tags">
                                {r.tagIds
                                    .map(tagId => <span key={tagId}>{getName(tagId)}</span>)
                                    .reduce((result, span, index, array) =>
                                        result.concat(index < array.length - 1 ? [span, '，'] : [span]), [] as ReactNode[])
                                }
                            </div>
                            {r.note && <div className="note">
                                {r.note}
                            </div>}
                            <div className="amount">
                                {r.amount}元
                        </div>
                    </Item>
                })}
            </div>
            </div>)}
        </Layout>

    )
}

export default Statistics;
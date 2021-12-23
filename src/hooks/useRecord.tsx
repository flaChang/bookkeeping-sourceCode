import {useEffect, useState} from "react";
import {useUpdate} from "./useUpdate";

export type RecordItem = {
    tagIds: number[]
    note: string
    category: "+" | "-"
    amount: number
    createdAt: string
}
type newRecordItem = Omit<RecordItem, 'createdAt'>   //除了createdAt之外，属性均继承

export const useRecord = () => {
    const [records, setRecords] = useState<RecordItem[]>([])
    useEffect(() => {
        setRecords(JSON.parse(window.localStorage.getItem('records') || '[]'))
    }, [])
    useUpdate(() => {
        window.localStorage.setItem('records', JSON.stringify(records))
    }, [records])

    const addRecord = (newRecord: newRecordItem) => {
        if(newRecord.amount<=0 ){ alert('好像这笔账不是有必要记'); return false}
        if(newRecord.tagIds.length===0 ){ alert('写上这笔钱得到/花掉的原因更有利于理财哦~'); return false}
        const record = {...newRecord, createdAt: (new Date()).toISOString()}
        setRecords([...records, record])
    }
    return {records, addRecord}
}
import Layout from "../Components/layout";
import React, {ReactNode, useEffect, useRef, useState} from "react";
import {CategorySection} from "./money/CategorySection";
import styled from "styled-components";
import {RecordItem, useRecord} from "hooks/useRecord";
import {useTags} from "hooks/useTags";
import dayjs from "dayjs";
import {MoneyChart} from "Components/DisplayCharts";
import _ from 'lodash'


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
const Header = styled.h3`
  font-size: 18px;
  line-height: 20px;
  padding: 10px 16px;
`
const ChartWrapper = styled.div`
  height: 400px;
  width: 430%;

`
const ChartingWrapper = styled.div`
  overflow: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`

function Statistics() {
    const [category, setCategory] = useState<'-' | '+'>("-")
    const chartWrapper = useRef<HTMLDivElement>(null)
    const {records} = useRecord()
    const {getName} = useTags()
    const hash: { [K: string]: RecordItem[] } = {}
    const selectedRecords = () => {
        return records.filter(r => r.category === category)
    }
    const [option, setOption] = useState({
        grid: {
            left: 0,
            right: 0,
        },
        xAxis: {
            axisTick: {alignWithLabel: false},
            data: ['1', '2', '3']
        },
        yAxis: {
            type: 'value',
            show: false
        },
        series: [
            {
                symbolSize: 10,
                data: ['1', '2', '3'],
                type: 'line',
            }
        ],
        tooltip: {show: true}
    })
    const today = new Date()
    const newArray = []
    const newHash: any = []
    const finalHash: any = []
    const resultHash: any = []

    selectedRecords().map(r => {
        const key = dayjs(r.createdAt).format('YYYY-MM-DD')
        const value = r.amount
        newHash.push({key: key, value: value})
    })

    newHash.forEach((r: { key: any; value: number; }, i: any) => {
        const key = r.key
        if (!(key in finalHash)) {
            finalHash[key] = []
        }
        finalHash[key].push(r.value)
    })

    const arrayA = Object.entries(finalHash).sort((a, b) => {
        if (a[0] === b[0]) return 0
        if (a[0] > b[0]) return -1
        if (a[0] < b[0]) return 1
        return 0
    })
    arrayA.map(([date, value]) => {
        // @ts-ignore
        const i = _.sum(value)
        const j = date
        resultHash.push({key: j, value: i})
    })


    for (let i = 0; i <= 29; i++) {
        const dateString = dayjs(today)
            .subtract(i, 'day').format('YYYY-MM-DD');
        const found = _.find(resultHash, {
            key: dateString
        })
        newArray.push({
            date: dateString, value: found ? found.value : 0
        })
    }
    console.log(newArray);
    newArray.sort((a, b) => {
        if (a.date > b.date) {
            return 1
        } else if (a.date === b.date) {
            return 0
        } else {
            return -1
        }
    })

    const keys = newArray.map(item => item.date)
    const values = newArray.map(item => item.value)

    const x = () => setOption({
        grid: {
            left: 0,
            right: 0,
        },
        xAxis: {
            axisTick: {alignWithLabel: true},
            data: keys
        },
        yAxis: {
            type: 'value',
            show: false
        },
        series: [
            {
                symbolSize: 10,
                data: values,
                type: 'line',
            }
        ],
        tooltip: {show: true}
    })

    useEffect(() => {
        x()
    }, [records,category])

    useEffect(() => {
        if (!chartWrapper.current) {
            return
        }
        chartWrapper.current.scrollLeft = document.getElementById('dora')!.clientWidth
    }, [records])

    selectedRecords().map(r => {
        const key = dayjs(r.createdAt).format('YYYY-MM-DD')

        if (!(key in hash)) {
            hash[key] = []
        }
        hash[key].push(r)
    })

    const array = Object.entries(hash).sort((a, b) => {
        if (a[0] === b[0]) return 0
        if (a[0] > b[0]) return -1
        if (a[0] < b[0]) return 1
        return 0
    })

    return (
        <Layout>
            <CategoryWrapper>
                <CategorySection value={category}
                                 onChange={value => setCategory(value)}/>
            </CategoryWrapper>
            <ChartingWrapper ref={chartWrapper}>
                <ChartWrapper id='dora'>
                    <MoneyChart option={option}/>
                </ChartWrapper>
            </ChartingWrapper>
            {array.map(([date, record]) => <div key={date}>
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
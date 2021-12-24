import * as echarts from 'echarts'

import React, {useEffect, useRef} from "react";

type Chart = {
    title?: string,
    xData?: string[],
    seriesData?: number[],
    option:any
}

const MoneyChart:React.FC<Chart> = (props) => {
    const {option} = props
    const chartWrapper = useRef<HTMLDivElement>(null)
    const chart = useRef<any>(null)
    useEffect(()=>{
        const width = document.documentElement.clientWidth
        if(!chartWrapper.current){return}
        console.log(width);
        chartWrapper.current.style.width= `${(width-20)}px`
        chartWrapper.current.style.height=`${(width-20)*1.2}px`
        chart.current=echarts.init(chartWrapper.current,'dark')
    },[])
    useEffect(()=>{
        chart.current.setOption(option)
    },[option])
    return (
        <div ref={chartWrapper}/>
    )
}

export {MoneyChart}
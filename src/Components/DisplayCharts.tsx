import * as echarts from 'echarts'
import React, {useEffect, useRef} from "react";
require('echarts/lib/component/grid');

type Chart = {
    title?: string,
    xData?: string[],
    seriesData?: number[],
    option:any
    className?:string
}

const MoneyChart:React.FC<Chart> = (props) => {
    const {option} = props
    const chartWrapper = useRef<HTMLDivElement>(null)
    const chart = useRef<any>(null)
    useEffect(()=>{
            const height = document.getElementById('dora')?.clientHeight
            if(!chartWrapper.current){return}
            chartWrapper.current.style.height=`${height}px`
            chart.current=echarts.init(chartWrapper.current,'vintage')
    },[])
    useEffect(()=>{
        chart.current.setOption(option)
    },[option])
    return (
            <div ref={chartWrapper}/>
    )
}

export {MoneyChart}
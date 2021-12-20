import React, {useState} from "react";
import {Wrapper} from "./NumberPadSection/Wrapper";
import {getIntext} from "./NumberPadSection/getIntext";

const NumberPadSection:React.FC=()=>{
    const [output,_setOutput] =useState<string>('0')
    const setOutput = (output:string)=>{
        if(output.length>16){
            output=output.slice(0,16)
        }else if(output.length===0){
            output="0"
        }
        _setOutput(output)
    }
    const onClickFather = (e:React.MouseEvent)=>{
        const inText=(e.target as HTMLButtonElement).textContent;
        if(inText===null){return}
        if(inText==="OK"){
            //todo
            return;
        }
        if('0123456789.'.split('').concat(['删除','清空']).indexOf(inText)>=0){
            setOutput( getIntext(inText,output))
        }

    }
    return(
        <Wrapper>
            <div className="output">
                {output}
            </div>
            <div className="pad clearfix" onClick={onClickFather}>
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
                <button className="ok">OK</button>
                <button  className='dot'>0</button>
                <button>.</button>
            </div>
        </Wrapper>
    )
}
export {NumberPadSection};
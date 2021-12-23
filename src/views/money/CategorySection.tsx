import styled from "styled-components";
import React, {useState} from "react";

const Wrapper = styled.section`
  font-size: 24px;
  > ul { display: flex;
    > li {
      width: 50%;text-align: center;padding: 16px 0;position: relative;
      &.selected::after{
        content: '';display: block;width: 100%;left: 0;bottom: 0;
        height: 3px;background: #333;position: absolute;
      }
    }
  }
`

type Props={
    value:'-'|"+";
    onChange:(value:'-'|"+")=>void;
}

const CategorySection:React.FC<Props> =(props)=>{
    const stateMap = {
        '+':"收入",
        '-':'支出'
    }
    type X = keyof typeof stateMap
    const [stateList] = useState<X[]>(['-','+'])
    const category = props.value
    return(
        <Wrapper>
            <ul>
                {stateList.map(c=>
                    <li key={c}
                        className={category=== c ?'selected':''}
                        onClick={()=>{props.onChange(c)}}>{stateMap[c]}</li>
                )}
            </ul>
        </Wrapper>
    )
}
export {CategorySection};
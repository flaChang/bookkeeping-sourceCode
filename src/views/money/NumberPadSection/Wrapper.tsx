import styled from "styled-components";

const Wrapper = styled.section`
   display: flex;flex-direction: column;
   > .output{
     background: white;font-size: 36px;
     line-height: 72px;text-align: right;padding: 0 16px;
     box-shadow: inset 0 -5px 5px -5px rgba(0,0,0,0.25),
                 inset 0 5px 5px -5px rgba(0,0,0,0.25);
   }
   > .pad{
     > button {font-size: 25px;float: left;width: 25%;height: 64px;border:3px solid #d9d9d9;border-radius: 1px;
       &.ok{height: 128px;float: right;}
       &.dot{width: 50%;}
       &:nth-child(n){background: #fff;}
       &:nth-child(4){font-size:20px;}
       &:nth-child(8){font-size:20px;}
       &:nth-child(12){font-size:20px; color:white; background: #1677ff;}
     }
   }
`

export {Wrapper}
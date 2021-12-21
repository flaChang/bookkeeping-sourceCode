import React from "react"
import {useTags} from "useTags";
import {useParams} from "react-router-dom";
import Layout from "Components/layout";
import Icon from "Components/icon";
import {Button} from "Components/Button";
import styled from "styled-components";
import {Input} from "../Components/Input";
import {Space} from "../Components/Space";
import {Center} from "../Components/Center";

const Top = styled.header`
  display: flex;
  justify-content: space-between;
  line-height: 20px;
  padding: 14px;
  background: #fff;

`
const InputWrapper = styled.div`
  background: #fff;
  padding: 0 16px;
  margin-top: 8px;
`
type Params = {
    id: string
}

function TagsInside() {
    const {findTag,updateTag} = useTags()
    let {id:idString} = useParams<Params>();
    const tag = findTag(idString ? parseInt(idString) : 1)
    return (
        <Layout>
            <Top>
                <Icon name='leftArrow'/>
                <span>编辑标签</span>
                <Icon/>
            </Top>
            <div>
                <InputWrapper>
                    <Input label='标签名'
                           type='text'
                           placeholder="请输入标签名"
                           value={tag.name}
                           onChange={(e)=>{
                               updateTag(tag.id,{name:e.target.value})
                           }}
                    />
                </InputWrapper>
            </div>
            <Center>
                <Space/>
                <Space/>
                <Button>删除标签</Button>
            </Center>

        </Layout>

    );
}

export {TagsInside}
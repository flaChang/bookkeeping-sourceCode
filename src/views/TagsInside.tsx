import React from "react"
import {useTags} from "useTags";
import {useParams} from "react-router-dom";
import Layout from "Components/layout";
import Icon from "Components/icon";
import {Button} from "Components/Button";
import styled from "styled-components";

const Top = styled.header`
  display: flex;
  justify-content: space-between;
  line-height: 20px;
  padding: 14px;
  background: #fff;

`
type Params = {
    id: string
}

function TagsInside() {
    const {findTag} = useTags()
    let {id} = useParams<Params>();
    const tag = findTag(id ? parseInt(id) : 1)
    return (
        <Layout>
            <Top>
                <Icon name='leftArrow'/>
                <span>编辑标签</span>
                <Icon/>
            </Top>
            <div>
                <label>
                    <span>标签名</span>
                    <input type="text" placeholder="请输入标签名"/>
                </label>
            </div>
            <Button>删除标签</Button>
        </Layout>

    );
}

export {TagsInside}
import Layout from "../Components/layout";
import React from "react";
import {useTags} from "hooks/useTags";
import styled from "styled-components";
import Icon from "../Components/icon";
import {NavLink} from "react-router-dom";
import {Button} from "Components/Button";
import {Center} from "Components/Center";
import {Space} from "Components/Space";
import {Top} from "../Components/Top";

const TagList = styled.ol`
  font-size: 16px;
  background: #fff;
  margin-top: 8px;
  > li {
    border-bottom: 1px solid #d5d5d9;
    line-height: 20px;
    margin-left: 16px;
    .icon {
      fill: #1677ff;
    }
    >a {
      padding: 12px 16px 12px 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
`

function Tags() {
    const {tags, addTag} = useTags()
    return (
        <Layout>
            <Top>
                <div>标签总览</div>
            </Top>
            <TagList>
                {tags.map(tag =>
                    <li key={tag.id}>
                        <NavLink to={'/tags/'+ tag.id}>
                            <span className="onLine">{tag.name}</span>
                            <Icon name="rightArrow"/>
                        </NavLink>
                    </li>
                )}
            </TagList>
            <Center>
                <Space/>
                <Space/>
                <Button onClick={addTag}>新增标签</Button>
            </Center>
        </Layout>
    );
}

export default Tags;